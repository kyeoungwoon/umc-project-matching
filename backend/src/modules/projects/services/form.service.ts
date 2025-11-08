import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import { ApplicationStatusEnum } from '@generated/prisma/mongodb';
import {
  CreateFormRequestDto,
  UpdateFormRequestDto,
} from '@modules/projects/dto/form.dto';
import {
  CreateFormQuestionDto,
  UpdateFormQuestionDto,
} from '@modules/projects/dto/form-question.dto';
import string from 'zod/src/v3/benchmarks/string';

@Injectable()
export class FormService {
  constructor(private readonly mongo: MongoDBPrismaService) {}

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

  async deleteAllQuestionsInForm(formId: string) {
    return this.mongo.formQuestion.deleteMany({
      where: {
        formId,
      },
    });
  }

  async softDeleteAllQuestionsInForm(formId: string) {
    return this.mongo.formQuestion.updateMany({
      where: {
        formId,
      },
      data: {
        isDeleted: true,
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
              include: {
                form: true,
                matchingRound: true,
                applicant: {
                  select: {
                    id: true,
                    name: true,
                    nickname: true,
                    introduction: true,
                    part: true,
                    role: true,
                    challengerSchool: true,
                  },
                },
                formAnswers: {
                  include: {
                    question: true,
                  },
                },
              },
            }
          : false,
      },
    });
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

  async throwIfUserNotPlanByFormId(userId: string, formId: string) {
    const project = await this.getProjectByFormId(formId);
    if (project.planId !== userId) {
      throw new ForbiddenException('해당 폼에 대한 권한이 없습니다.');
    }
  }
}
