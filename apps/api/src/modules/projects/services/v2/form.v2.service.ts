import { Injectable } from '@nestjs/common';

import {
  ApplicationFormEntityResponseDto,
  ApplicationFormWithQuestionsEntityResponseDto,
  CreateApplicationFormDtoV2,
  CreateFormQuestionDtoV2,
  FormQuestionEntityResponseDto,
  UpdateFormQuestionDtoV2,
} from '@upms/shared';
import { CreateApplicationFormWithQuestionsDtoV2 } from '@upms/shared/dist/common';
import { UpdateApplicationFormDtoV2 } from '@upms/shared/dist/common/dto';

import { PostgreSQLPrismaService } from '@modules/prisma/services/postgresql.prisma.service';

@Injectable()
export class FormV2Service {
  constructor(private readonly postgre: PostgreSQLPrismaService) {}

  async createForm(data: CreateApplicationFormDtoV2) {
    const form = await this.postgre.applicationForm.create({
      data,
    });

    return ApplicationFormEntityResponseDto.fromEntity(form);
  }

  async createFormWithQuestions(data: CreateApplicationFormWithQuestionsDtoV2) {
    return this.postgre.$transaction(async (tx) => {
      const form = await tx.applicationForm.create({
        data: {
          projectId: data.projectId,
          title: data.title,
          description: data.description,
          questions: {
            create: data.questions,
          },
        },
        include: {
          questions: true,
        },
      });

      return ApplicationFormWithQuestionsEntityResponseDto.fromEntity(form);
    });
  }

  async getFormWithQuestionsById(formId: bigint) {
    const form = await this.postgre.applicationForm.findUnique({
      where: { id: formId },
      include: {
        questions: true,
      },
    });

    return ApplicationFormWithQuestionsEntityResponseDto.fromEntity(form);
  }

  async updateForm(formId: bigint, data: UpdateApplicationFormDtoV2) {
    const form = await this.postgre.applicationForm.update({
      where: { id: formId },
      data,
    });

    return ApplicationFormEntityResponseDto.fromEntity(form);
  }

  async deleteForm(formId: bigint) {
    const deletedForm = await this.postgre.applicationForm.delete({
      where: { id: formId },
    });

    return ApplicationFormEntityResponseDto.fromEntity(deletedForm);
  }

  async createFormQuestion(data: CreateFormQuestionDtoV2) {
    const question = await this.postgre.formQuestion.create({
      data,
    });

    return FormQuestionEntityResponseDto.fromEntity(question);
  }

  async updateFormQuestion(questionId: bigint, data: UpdateFormQuestionDtoV2) {
    const question = await this.postgre.formQuestion.update({
      where: { id: questionId },
      data,
    });

    return FormQuestionEntityResponseDto.fromEntity(question);
  }

  async deleteFormQuestion(questionId: bigint) {
    const deletedQuestion = await this.postgre.formQuestion.delete({
      where: { id: questionId },
    });

    return FormQuestionEntityResponseDto.fromEntity(deletedQuestion);
  }
}
