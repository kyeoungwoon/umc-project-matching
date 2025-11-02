import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import {
  AnswerDto,
  CreateFormRequestDto,
  CreateProjectRequestDto,
  FormQuestionDto,
  UpdateFormQuestionDto,
  UpdateFormRequestDto,
  UpdateProjectRequestDto,
} from '@modules/projects/dto/project.dto';

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
    return this.mongo.project.findMany();
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

  // formId로 form 정보와 질문들 가져오기
  async getFormByFormId(formId: string) {
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
      },
    });
  }

  // form 생성하기
  async createForm(data: CreateFormRequestDto) {
    const { projectId, title, description } = data;

    return this.mongo.form.create({
      data: {
        projectId,
        title,
        description,
      },
    });
  }

  // form 수정
  async updateForm(data: UpdateFormRequestDto) {
    const { formId, title, description } = data;

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

  // form 삭제
  async deleteForm(formId: string) {
    return this.mongo.form.delete({
      where: {
        id: formId,
      },
    });
  }

  // 질문 생성 서비스
  async addFormQuestions(questions: FormQuestionDto[]) {
    // 질문들 생성
    return this.mongo.$transaction(
      questions.map((question, idx) =>
        this.mongo.formQuestion.create({
          data: {
            formId: question.formId,
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

  // 질문 수정
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

  // 시간에 따라서 roundId를 가져옴
  async getCurrentProjectRoundId() {
    const now = new Date();

    const currentRound = await this.mongo.round.findFirst({
      where: {
        startDatetime: {
          lte: now,
        },
        endDatetime: {
          gte: now,
        },
      },
      orderBy: {
        startDatetime: 'desc',
      },
    });

    if (!currentRound) {
      throw new NotFoundException(
        '현재 시간에 해당하는 매칭 차수가 존재하지 않습니다.',
      );
    }

    return currentRound.id;
  }

  async applyToProjectByProjectId(
    projectId: string,
    userId: string,
    answers: AnswerDto[],
  ) {
    const currentRoundId = await this.getCurrentProjectRoundId();

    return this.mongo.application.create({
      data: {
        projectId,
        applicantId: userId,
        roundId: currentRoundId,
        answers,
      },
    });
  }

  // 지원서 삭제 - 현재 차수의 지원서만 삭제 가능
  async deleteApplicationByApplicationId(applicationId: string) {
    const currentRoundId = await this.getCurrentProjectRoundId();

    const application = await this.mongo.application.findUnique({
      where: { id: applicationId },
    });

    if (!application) {
      throw new NotFoundException('해당하는 지원서가 존재하지 않습니다.');
    }

    if (application.roundId !== currentRoundId) {
      throw new NotFoundException('현재 차수의 지원서만 삭제할 수 있습니다.');
    }

    return this.mongo.application.delete({ where: { id: applicationId } });
  }

  async getApplicationByApplicationId(applicationId: string) {
    const application = await this.mongo.application.findUnique({
      where: { id: applicationId },
    });

    if (!application) {
      throw new NotFoundException('해당하는 지원서가 존재하지 않습니다.');
    }

    return application;
  }

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

  async getProjectApplicationsByProjectId(projectId: string) {
    return this.mongo.application.findMany({
      where: {
        projectId,
      },
    });
  }

  async changeApplicationStatus() {}
}
