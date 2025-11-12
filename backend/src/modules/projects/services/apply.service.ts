import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  LoggerService,
  NotFoundException,
} from '@nestjs/common';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import { ApplicationStatusEnum, UserPartEnum } from '@generated/prisma/mongodb';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { AnswerDto } from '@modules/projects/dto/apply.dto';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class ApplyService {
  constructor(
    private readonly mongo: MongoDBPrismaService,
    private readonly matching: MatchingRoundService,
    private readonly projectsService: ProjectsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  /**
   * 프로젝트에 생성된 지원 form에 맞는 형식의 지원서를 제출합니다.
   */
  async applyToProjectByFormId(
    formId: string,
    userId: string,
    answers: AnswerDto[],
  ) {
    // 지원한 시간에 따라서 자동으로 현재 매칭 차수를 기입합니다.
    const currentRoundId =
      await this.matching.getCurrentProjectMatchingRoundId();

    // 필수 질문이 모두 응답되었는지 확인하기 위해 formQuestions 조회
    const questions = await this.mongo.formQuestion.findMany({
      where: {
        id: { in: answers.map((ans) => ans.questionId) },
      },
    });

    for (const question of questions) {
      // 필수질문인 경우
      if (question.isRequired) {
        // ans.value 배열에 빈 문자열이 아닌 값이 하나라도 있는 경우
        // 즉, 응답을 한 경우
        const answered = answers.find(
          (ans) =>
            ans.questionId === question.id &&
            ans.value.filter((v) => v !== '').length > 0,
        );
        // 그러한 객체가 존재하지 않을 경우
        if (!answered) {
          throw new BadRequestException(
            `필수 질문 "${question.title}"에 대한 응답이 누락되었습니다.`,
          );
        }
      }
    }

    try {
      // transaction으로 application, formAnswer를 생성함
      await this.mongo.$transaction(async (tx) => {
        const createdApplication = await tx.application.create({
          data: {
            formId,
            applicantId: userId,
            matchingRoundId: currentRoundId,
            status: ApplicationStatusEnum.SUBMITTED,
          },
        });

        return tx.formAnswer.createMany({
          data: answers.map((ans) => ({
            applicationId: createdApplication.id,
            questionId: ans.questionId,
            value: ans.value,
          })),
        });
      });
    } catch (err: any) {
      this.logger.error(err);
      if (err.code === 'P2002') {
        // 중복 지원 에러
        throw new ConflictException(
          '동일 차수 내 중복 지원은 허용되지 않습니다.',
        );
      }

      throw new BadRequestException(
        '지원서 제출 과정에서 오류가 발생하였습니다. 관리자에게 문의하세요.',
      );
    }

    return;
  }

  /**
   * 지원서를 삭제합니다. 현재 차수에 작성한 지원서만 삭제가 가능합니다.
   */
  async deleteApplication(applicationId: string) {
    const currentRoundId =
      await this.matching.getCurrentProjectMatchingRoundId();

    const application = await this.mongo.application.findUnique({
      where: { id: applicationId },
    });

    if (!application) {
      throw new NotFoundException('해당하는 지원서가 존재하지 않습니다.');
    }

    if (application.matchingRoundId !== currentRoundId) {
      throw new NotFoundException('현재 차수의 지원서만 삭제할 수 있습니다.');
    }

    return this.mongo.application.delete({ where: { id: applicationId } });
  }

  /**
   * 지원서를 조회합니다.
   */
  async getApplication(applicationId: string) {
    const application = await this.mongo.application.findUnique({
      where: { id: applicationId },
      include: {
        applicant: true,
        form: {
          include: {
            project: true,
          },
        },
        formAnswers: true,
      },
    });

    if (!application) {
      throw new NotFoundException('해당하는 지원서가 존재하지 않습니다.');
    }

    return application;
  }

  /**
   * 지원서를 조회하고, 해당 지원서의 소유자가 제공된 userId와 일치하는지 확인합니다.
   */
  async isUserApplicationOwner(
    userId: string,
    applicationId: string,
  ): Promise<boolean> {
    const application = await this.getApplication(applicationId);
    return application.applicantId === userId;
  }

  async throwIfUserNotApplicationOwner(userId: string, applicationId: string) {
    const isOwner = await this.isUserApplicationOwner(userId, applicationId);
    if (!isOwner) {
      throw new ForbiddenException('해당 지원서에 대한 권한이 없습니다.');
    }
  }

  /**
   * [내부용] 지원서 상태를 변경합니다. Validation이 존재하지 않습니다.
   */
  async changeApplicationStatus(
    applicationId: string,
    status: ApplicationStatusEnum,
  ) {
    // 승인하는 경우 팀원에 추가하기
    if (status === ApplicationStatusEnum.CONFIRMED) {
      // 팀원에도 추가해야함
      const { projectId, userId } =
        await this.getProjectAndUserIdByApplicationId(applicationId);
      await this.projectsService.addTeamMember(projectId, userId);
    }

    return this.mongo.application.update({
      where: { id: applicationId },
      data: { status },
    });
  }

  // applicationId에 해당하는 project와 userId를 반환합니다.
  async getProjectAndUserIdByApplicationId(applicationId: string) {
    const application = await this.getApplication(applicationId);
    return {
      projectId: application.form.projectId,
      userId: application.applicantId,
    };
  }

  /**
   * 지원서 상태가 SUBMITTED가 아니면 에러를 발생합니다.
   *
   * Plan 챌린저가 지원서 상태를 변경함에 있어, 다른 상태로 바꿀 수 없도록 제한하는 역할입니다.
   */
  async throwIfApplicationStatusNotSubmitted(applicationId: string) {
    const application = await this.getApplication(applicationId);
    if (application.status !== ApplicationStatusEnum.SUBMITTED) {
      throw new ForbiddenException('지원서 상태를 변경할 수 없습니다.');
    }
  }

  /**
   * 사용자가 제출한 모든 지원서 목록을 반환합니다.
   */
  async getMyApplications(userId: string) {
    return this.mongo.application.findMany({
      where: { applicantId: userId },
      include: {
        form: {
          include: {
            project: true,
          },
        }, // TODO: 이건 왜 필요한걸까?
        formAnswers: {
          include: {
            question: true,
          },
        },
        matchingRound: true,
      },
    });
  }

  async getApplicationByUserAndMatchingRound(
    userId: string,
    matchingRoundId: string,
  ) {
    return this.mongo.application.findMany({
      where: {
        applicantId: userId,
        matchingRoundId,
      },
      select: { id: true },
    });
  }

  async adminGetAllApplications() {
    return this.mongo.application.findMany({
      include: {
        applicant: {
          select: {
            umsbChallengerId: true,
            name: true,
            nickname: true,
            school: true,
            challengerSchool: true,
          },
        },
        form: {
          select: {
            title: true,
            project: {
              select: {
                title: true,
                projectPlan: {
                  select: {
                    umsbChallengerId: true,
                    name: true,
                    nickname: true,
                    school: true,
                    challengerSchool: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async checkApplicationMatchingRoundExpired(
    applicationId: string,
    datetime: Date = new Date(),
  ) {
    // 지원서의 매칭 차수가 종료되었는지 확인합니다.
    const application = await this.getApplication(applicationId);
    const applicationMatchingRound =
      await this.matching.getOrThrowMatchingRound(application.matchingRoundId);

    if (applicationMatchingRound.endDatetime > datetime) {
      throw new ForbiddenException(
        '매칭 차수가 종료되기 전까지는 지원서의 상태를 변경할 수 없습니다.',
      );
    }
  }

  async isApplicationStatusChangeValid(
    applicationId: string,
    newStatus: ApplicationStatusEnum,
  ) {
    if (newStatus === ApplicationStatusEnum.CONFIRMED) {
      await this.isApplicationAcceptable(applicationId);
    } else if (newStatus === ApplicationStatusEnum.REJECTED) {
      await this.isApplicationRejectable(applicationId);
    }
  }

  /**
   * 지원서가 수락 가능한지 확인합니다.
   */
  async isApplicationAcceptable(applicationId: string) {
    const application = await this.getApplication(applicationId);

    const applicantPart = application.applicant.part;
    const appliedProjectId = application.form.projectId;

    // 현재는 TO가 남아있는지만 확인합니다.
    await this.projectsService.checkIfToLeftInProject(
      appliedProjectId,
      applicantPart,
    );

    return;
  }

  /**
    ### **1. PM ↔ 디자이너 매칭 관련**
  
    - **디자이너 지원자가 2명 이상**이라면 PM은 반드시 **한 명 이상을 선택**해야 합니다.
    - **디자이너 지원자가 1명**이라면 PM은 해당 지원자를 **선택할 수도 있고, 선택하지 않을 수도 있습니다**.
    
    
    ### 2. 팀 ↔ 개발자 매칭 관련
  
    - **지원자 ≥ TO(모집 인원)**일 경우,
    - PM은 반드시 **TO 대비 50% 이상을 선택**해야 합니다.
    
    
    - **지원자가 TO(모집 인원) 대비 50% 초과일 경우**,
    - PM은 반드시 **TO 대비 25% 이상을 선택**해야 합니다.
    
    
    - **지원자가 TO(모집 인원) 대비 50% 이하일 경우**,
    - PM은 지원자를 **선택할 수도 있고, 선택하지 않을 수도 있습니다**.
 */
  async isApplicationRejectable(applicationId: string) {
    const application = await this.getApplication(applicationId);

    const appliedProjectId = application.form.projectId;
    const applicantPart = application.applicant.part;

    const projectParts =
      await this.projectsService.getProjectPartToStatus(appliedProjectId);

    const partInfo = projectParts.find((p) => p.part === applicantPart);
    if (!partInfo) {
      throw new NotFoundException(
        `프로젝트에 ${applicantPart} 파트가 존재하지 않습니다.`,
      );
    }

    const { maxTo, currentTo } = partInfo;

    // TODO: 미래의 치원 차수에서 온 사람인 것 아니면 상관 없음 ..

    // "현재 차수가 아닌 차수" 에서 파트가 동일한 팀 멤버의 수
    // 기존 팀 멤버 수를 뜻함 (이번 차수의 TO를 결정하는데에 사용됨)
    const originalTeamMemberCount = await this.mongo.application.count({
      where: {
        form: {
          projectId: appliedProjectId,
        },
        matchingRoundId: {
          not: application.matchingRoundId,
        },
        status: ApplicationStatusEnum.CONFIRMED,
        applicant: {
          part: applicantPart,
        },
      },
    });

    // 현재 차수에 대해, 지원서와 차수가 일치하는 지원자 수 조회
    // 지원서 상태 = 제출됨 + 매칭 차수가 동일한 것만
    const totalApplicants = await this.mongo.application.count({
      where: {
        form: {
          projectId: appliedProjectId,
        },
        matchingRoundId: application.matchingRoundId,
        status: ApplicationStatusEnum.SUBMITTED,
        applicant: {
          part: applicantPart,
        },
      },
    });

    const currentMatchingConfirmedCount = currentTo - originalTeamMemberCount;

    // --- 1. 디자이너 매칭 로직 ---
    if (applicantPart === UserPartEnum.DESIGN) {
      // 최대 TO가 1명인 경우 무조건 거절 가능
      if (maxTo === 1) return;

      this.logger.log(
        `지원서 ${applicationId} | 프로젝트 내 현재 인원 ${currentTo}명, 이전 인원 ${originalTeamMemberCount}명, 최대 TO ${maxTo}명`,
      );

      this.logger.log(
        `Design 파트 지원 거절 가능 검증 | 현재 매칭 차수에 대해 지원자 수 ${totalApplicants}명, 합격한 인원 ${currentMatchingConfirmedCount}명, 기존 팀 멤버 수 ${originalTeamMemberCount}명, 최대 TO ${maxTo}명`,
      );

      // 요구사항: 지원자 2명 이상이면 1명 이상 선택
      if (totalApplicants >= 2 && currentMatchingConfirmedCount < 1) {
        throw new ForbiddenException(
          `현재 ${applicantPart} 파트의 지원자는 ${totalApplicants}명이며, 1명 이상을 선택해야 거절할 수 있습니다.`,
        );
      }
      // (참고: 지원자가 1명이거나 0명이면 이 if문을 통과하고, 아무 제한 없이 return 됨)
    }
    // --- 2. 개발자 (및 그 외 파트) 매칭 로직 ---
    else {
      // 현재 매칭 세션에 할당된 TO
      const currentMatchingRoundTo = maxTo - originalTeamMemberCount;
      const halfTo = Math.ceil(currentMatchingRoundTo * 0.5);
      const quarterTo = Math.ceil(currentMatchingRoundTo * 0.25);

      // 이번 차수에 선발된 사람을 구하는 방법 = currentTo는 현재 선발된 팀원을 뜻함
      // 거기서 이번 차수 전에 멤버였던 사람을 구하면 됨
      // 그럼 currentTo - originalTeamMemberCount = 이번 차수에 선발된 사람

      if (totalApplicants >= currentMatchingRoundTo) {
        // 지원자가 TO 이상인 경우, TO의 50% 이상을 선택해야 함
        if (currentMatchingConfirmedCount < halfTo) {
          throw new ForbiddenException(
            `[50% 제한] 현재 ${applicantPart} 파트의 지원자는 ${totalApplicants}명이며, ${halfTo}명 이상을 선택해야 거절할 수 있습니다.`,
          );
        }
      } else if (totalApplicants > halfTo) {
        // 지원자가 TO의 50% 초과인 경우, TO의 25% 이상을 선택해야 함
        if (currentMatchingConfirmedCount < quarterTo) {
          throw new ForbiddenException(
            `[25% 제한] 현재 ${applicantPart} 파트의 지원자는 ${totalApplicants}명이며, ${quarterTo}명 이상을 선택해야 거절할 수 있습니다.`,
          );
        }
      }

      // 지원자가 TO의 50% 이하인 경우는 제한 없음
    }

    return;
  }
}
