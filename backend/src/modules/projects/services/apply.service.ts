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
import { ApplicationStatusEnum } from '@generated/prisma/mongodb';
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
        form: true,
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

  async adminGetAllApplications() {
    return this.mongo.application.findMany({
      include: {
        applicant: {
          select: {
            umsbChallengerId: true,
            name: true,
            nickname: true,
            school: true,
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
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
