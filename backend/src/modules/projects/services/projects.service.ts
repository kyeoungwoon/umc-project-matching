import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import {
  AnswerDto,
  ApplyToQuestionRequestDto,
  CreateFormQuestionDto,
  CreateFormRequestDto,
  CreateProjectRequestDto,
  UpdateFormQuestionDto,
  UpdateFormRequestDto,
  UpdateProjectRequestDto,
} from '@modules/projects/dto/project.dto';
import { ApplicationStatusEnum } from '@generated/prisma/mongodb';

@Injectable()
export class ProjectsService {
  constructor(private readonly mongo: MongoDBPrismaService) {}

  // 프로젝트 생성
  async createProject(data: CreateProjectRequestDto) {
    const { title, description, link, planId } = data;

    return this.mongo.project.create({
      data: {
        title,
        description,
        link,
        planId,
        // 추가 필드가 있다면 여기에 작성
      },
    });
  }

  // 프로젝트 수정
  async updateProjectByProjectId(data: UpdateProjectRequestDto) {
    const { projectId, title, description, link } = data;

    return this.mongo.project.update({
      where: {
        id: projectId,
      },
      data: {
        title,
        description,
        link,
        // 추가 필드가 있다면 여기에 작성
      },
    });
  }

  async getProjectList() {
    return this.mongo.project.findMany({
      include: {
        projectForms: true,
        projectMember: true,
      },
    });
  }

  // 프로젝트 삭제, 관리자만 접근 가능해야 함.
  async deleteProjectByProjectId(projectId: string) {
    await this.mongo.project.delete({
      where: {
        id: projectId,
      },
    });
  }

  async getProjectById(projectId: string) {
    const project = await this.mongo.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        projectForms: true,
        projectMember: true,
      },
    });

    if (!project) {
      throw new NotFoundException('프로젝트가 존재하지 않습니다.');
    }

    return project;
  }

  async getProjectByFormId(formId: string) {
    const form = await this.mongo.form.findUnique({
      where: {
        id: formId,
      },
      include: {
        project: true,
      },
    });

    if (!form) {
      throw new NotFoundException('폼이 존재하지 않습니다.');
    }

    return form.project;
  }

  async isFormBelongsToProject(
    formId: string,
    projectId: string,
  ): Promise<boolean> {
    const form = await this.mongo.form.findUnique({
      where: {
        id: formId,
      },
    });

    if (!form) {
      throw new NotFoundException('폼이 존재하지 않습니다.');
    }

    return form.projectId === projectId;
  }

  async throwIfFormNotBelongsToProject(formId: string, projectId: string) {
    const isBelongs = await this.isFormBelongsToProject(formId, projectId);
    if (!isBelongs) {
      throw new ForbiddenException('프로젝트에 속하지 않은 폼 입니다.');
    }
  }

  async isQuestionBelongsToForm(
    questionId: string,
    formId: string,
  ): Promise<boolean> {
    const question = await this.mongo.formQuestion.findUnique({
      where: {
        id: questionId,
      },
    });

    if (!question) {
      throw new NotFoundException('질문이 존재하지 않습니다.');
    }

    return question.formId === formId;
  }

  async throwIfQuestionNotBelongsToForm(questionId: string, formId: string) {
    const isBelongs = await this.isQuestionBelongsToForm(questionId, formId);
    if (!isBelongs) {
      throw new ForbiddenException('폼에 속하지 않은 질문 입니다.');
    }
  }

  async isUserProjectPlanByProjectId(
    userId: string,
    projectId: string,
  ): Promise<boolean> {
    const project = await this.getProjectById(projectId);

    return project.planId === userId;
  }

  async throwIfUserNotPlanByProjectId(userId: string, projectId: string) {
    const isPlan = await this.isUserProjectPlanByProjectId(userId, projectId);
    if (!isPlan) {
      throw new ForbiddenException('해당 프로젝트에 대한 권한이 없습니다.');
    }
  }

  async throwIfUserNotPlanByFormId(userId: string, formId: string) {
    const project = await this.getProjectByFormId(formId);
    if (project.planId !== userId) {
      throw new ForbiddenException('해당 폼에 대한 권한이 없습니다.');
    }
  }

  /**
   * formId로 form 정보와 질문들을 가져옵니다.
   *
   * 지원자의 경우, Plan 챌린저만 받아올 수 있으며 임시 저장 상태인 지원서는 제외됩니다.
   */
  async getFormByFormId(formId: string, includeApplications: boolean = false) {
    return this.mongo.form.findUnique({
      where: {
        id: formId,
      },
      include: {
        project: true,
        questions: {
          orderBy: {
            questionNo: 'asc',
          },
        },
        applications: includeApplications
          ? // 임시 저장 상태인 지원서를 제외하고 가져올 수 있도록 함.
            {
              where: {
                NOT: { status: ApplicationStatusEnum.DRAFT },
              },
            }
          : false,
      },
    });
  }

  /**
   * project에 종속적인 form을 생성합니다.
   */
  async createForm(projectId: string, data: CreateFormRequestDto) {
    const { title, description } = data;

    return this.mongo.form.create({
      data: {
        projectId,
        title,
        description,
      },
    });
  }

  /**
   * form 정보를 수정합니다.
   */
  async updateForm(formId: string, data: UpdateFormRequestDto) {
    const { title, description } = data;

    return this.mongo.form.update({
      where: {
        id: formId,
      },
      data: {
        title,
        description,
      },
    });
  }

  /**
   * form을 삭제합니다.
   */
  async deleteForm(formId: string) {
    return this.mongo.form.delete({
      where: {
        id: formId,
      },
    });
  }

  /**
   * formId에 질문을 추가합니다.
   */
  async addFormQuestions(formId: string, questions: CreateFormQuestionDto[]) {
    // 질문들 생성
    return this.mongo.$transaction(
      questions.map((question, idx) =>
        this.mongo.formQuestion.create({
          data: {
            formId,
            questionNo: question.questionNo,
            title: question.title,
            description: question.description,
            type: question.type,
            options: question.options,
            isRequired: question.isRequired,
          },
        }),
      ),
    );
  }

  /**
   * questionId를 기준으로, 질문을 수정합니다.
   *
   * 현재는 질문 type은 변경 불가능합니다.
   * @param questions
   */
  async updateFormQuestions(questions: UpdateFormQuestionDto[]) {
    return this.mongo.$transaction(
      questions.map((question) => {
        const { id, title, description, questionNo, options, isRequired } =
          question;
        return this.mongo.formQuestion.update({
          where: {
            id,
          },
          data: {
            questionNo,
            title,
            description,
            options,
            isRequired,
          },
        });
      }),
    );
  }

  /**
   * start ~ end 사이에 있는 프로젝트 매칭 차수를 반환합니다.
   */
  async getProjectMatchingRoundByStartEndDatetime(
    startDatetime: Date,
    endDatetime: Date,
  ) {
    return this.mongo.matchingRound.findFirst({
      where: {
        startDatetime: {
          lte: startDatetime,
        },
        endDatetime: {
          gte: endDatetime,
        },
      },
      orderBy: {
        startDatetime: 'desc',
      },
    });
  }

  /**
   * 현재 시간에 해당하는 프로젝트 매칭 차수를 반환합니다. 존재하지 않으면 에러를 발생시킵니다.
   */
  async getOrThrowCurrentProjectMatchingRound() {
    const now = new Date();

    const currentRound = await this.getProjectMatchingRoundByStartEndDatetime(
      now,
      now,
    );

    if (!currentRound) {
      throw new NotFoundException(
        '현재 시간에 해당하는 매칭 차수가 존재하지 않습니다.',
      );
    }

    return currentRound;
  }

  /**
   * 현재 시간에 해당하는 프로젝트 매칭 차수의 ID를 반환합니다.
   */
  async getCurrentProjectMatchingRoundId() {
    const currentMatching = await this.getOrThrowCurrentProjectMatchingRound();

    return currentMatching.id;
  }

  /**
   * 새로운 매칭 차수를 생성합니다.
   *
   * 동일 기간에 겹치는 매칭 차수가 존재하면 에러를 발생시킵니다.
   */
  async createMatchingRound(data: ApplyToQuestionRequestDto) {
    const { name, startDatetime, endDatetime } = data;

    // 일치하는 매칭 차수가 존재하는지 확인
    const existing = await this.mongo.matchingRound.findFirst({
      where: {
        AND: [
          { startDatetime: { lte: endDatetime } },
          { endDatetime: { gte: startDatetime } },
        ],
      },
      orderBy: { startDatetime: 'desc' },
    });
    if (existing) {
      throw new ForbiddenException(
        '해당 기간에 이미 존재하는 매칭 차수가 있습니다.',
      );
    }

    return this.mongo.matchingRound.create({
      data: {
        name,
        startDatetime,
        endDatetime,
      },
    });
  }

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
    const currentRoundId = await this.getCurrentProjectMatchingRoundId();

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
    const currentRoundId = await this.getCurrentProjectMatchingRoundId();

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
  async getApplicationByApplicationId(applicationId: string) {
    const application = await this.mongo.application.findUnique({
      where: { id: applicationId },
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
    const application = await this.getApplicationByApplicationId(applicationId);
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
    return this.mongo.application.update({
      where: { id: applicationId },
      data: { status },
    });
  }

  /**
   * 지원서 상태가 SUBMITTED가 아니면 에러를 발생합니다.
   *
   * 의도치 않은 지원서 상태 변경을 막아줍니다.
   */
  async throwIfApplicationStatusNotSubmitted(applicationId: string) {
    const application = await this.getApplicationByApplicationId(applicationId);
    if (application.status !== ApplicationStatusEnum.SUBMITTED) {
      throw new ForbiddenException('지원서 상태를 변경할 수 없습니다.');
    }
  }
}
