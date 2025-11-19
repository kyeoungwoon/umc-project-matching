import { Injectable } from '@nestjs/common';

import { ApplicationFormEntityResponseDto, CreateApplicationDtoV2 } from '@upms/shared';
import {
  ApplicationEntityResponseDto,
  CreateApplicationWithResponsesDtoV2,
  UpdateApplicationDtoV2,
} from '@upms/shared/dist/common';
import { ApplicationWithApplicantAndMatchingRoundAndResponsesDto } from '@upms/shared/dist/common/dto';

import { PostgreSQLPrismaService } from '@modules/prisma/services/postgresql.prisma.service';

@Injectable()
export class ApplicationV2Service {
  constructor(private readonly postgre: PostgreSQLPrismaService) {}

  async createApplication(data: CreateApplicationDtoV2) {
    const application = await this.postgre.application.create({
      data,
    });

    return ApplicationEntityResponseDto.fromEntity(application);
  }

  async createApplicationWithResponses(data: CreateApplicationWithResponsesDtoV2) {
    return this.postgre.$transaction(async (tx) => {
      const application = await tx.application.create({
        data: {
          formId: data.formId,
          applicantId: data.applicantId,
          matchingRoundId: data.matchingRoundId,
          status: data.status,
          responses: {
            create: data.responses,
          },
        },
      });

      return ApplicationEntityResponseDto.fromEntity(application);
    });
  }

  async getApplicationsByApplicantId(applicantId: bigint) {
    const applications = await this.postgre.application.findMany({
      where: { applicantId },
      include: {
        applicant: true,
        matchingRound: true,
        responses: true,
      },
    });

    return applications.map(ApplicationWithApplicantAndMatchingRoundAndResponsesDto.fromEntity);
  }

  async getApplicationById(applicationId: bigint) {
    const application = await this.postgre.application.findUnique({
      where: { id: applicationId },
      include: {
        applicant: true,
        matchingRound: true,
        responses: true,
      },
    });

    return ApplicationWithApplicantAndMatchingRoundAndResponsesDto.fromEntity(application);
  }

  async updateApplication(applicationId: bigint, data: UpdateApplicationDtoV2) {
    const application = await this.postgre.application.update({
      where: { id: applicationId },
      data,
    });

    return ApplicationEntityResponseDto.fromEntity(application);
  }

  async deleteApplication(applicationId: bigint) {
    const deletedApplication = await this.postgre.application.delete({
      where: { id: applicationId },
    });

    return ApplicationEntityResponseDto.fromEntity(deletedApplication);
  }
}
