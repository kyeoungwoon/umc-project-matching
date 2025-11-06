import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import { ApplicationStatusEnum } from '@generated/prisma/mongodb';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { AnswerDto } from '@modules/projects/dto/apply.dto';
import { ProjectsService } from '@modules/projects/services/projects.service';

@Injectable()
export class ApplyService {
  constructor(
    private readonly mongo: MongoDBPrismaService,
    private readonly matching: MatchingRoundService,
    private readonly projectsService: ProjectsService,
  ) {}

  /**
   * 프로젝트에 생성된 지원 form에 맞는 형식의 지원서를 제출합니다.
   *
   * TODO: form과 형식이 일치하는지 확인 및 isRequired 질문에 대한 필수 제출 반영
   */
  async applyToProjectByFormId(
    formId: string,
    userId: string,
    answers: AnswerDto[],
  ) {
    // 지원한 시간에 따라서 자동으로 현재 매칭 차수를 기입합니다.
    const currentRoundId =
      await this.matching.getCurrentProjectMatchingRoundId();

    return this.mongo.application.create({
      data: {
        formId,
        applicantId: userId,
        matchingRoundId: currentRoundId,
        status: ApplicationStatusEnum.SUBMITTED,
        answers,
      },
    });
  }

  /**
   * 지원서를 삭제합니다. 현재 차수에 작성한 지원서만 삭제가 가능합니다.
   */
  async deleteApplicationByApplicationId(applicationId: string) {
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
   * applicationId로 지원서를 조회합니다.
   */
  async getApplication(applicationId: string) {
    const application = await this.mongo.application.findUnique({
      where: { id: applicationId },
      include: {
        applicant: true,
        form: true,
      },
    });

    if (!application) {
      throw new NotFoundException('해당하는 지원서가 존재하지 않습니다.');
    }

    return application;
  }

  /**
   * applicationId로 지원서를 조회하고, 해당 지원서의 소유자가 userId와 일치하는지 확인.
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
   * 내부용, applicationId를 받아서 상태를 변경합니다.
   */
  async changeApplicationStatus(
    applicationId: string,
    status: ApplicationStatusEnum,
  ) {
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
   * 의도치 않은 지원서 상태 변경을 막아줍니다.
   */
  async throwIfApplicationStatusNotSubmitted(applicationId: string) {
    const application = await this.getApplication(applicationId);
    if (application.status !== ApplicationStatusEnum.SUBMITTED) {
      throw new ForbiddenException('지원서 상태를 변경할 수 없습니다.');
    }
  }

  async getMyApplications(userId: string) {
    const applications = await this.mongo.application.findMany({
      where: { applicantId: userId },
      include: {
        form: true,
        matchingRound: true,
      },
    });

    // 각 answer에 question의 title만 추가
    return await Promise.all(
      applications.map(async (app) => {
        // map으로 생성된 Promise 배열 모두 처리
        const answersWithTitle = await Promise.all(
          // 지원서마다, answer를 돌고, 그 answer의 questionId를 mongo에 때려서 가져옴.
          app.answers.map(async (ans) => {
            const question = await this.mongo.formQuestion.findUnique({
              where: { id: ans.questionId },
              select: { title: true },
            });
            return { ...ans, questionTitle: question?.title };
          }),
        );
        // 큰 map return
        return { ...app, answers: answersWithTitle };
      }),
    );
  }
}
