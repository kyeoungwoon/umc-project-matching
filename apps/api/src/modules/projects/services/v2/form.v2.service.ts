import { Injectable } from '@nestjs/common';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import { CreateFormRequestV2Dto } from '@modules/projects/dto/form.dto';

@Injectable()
export class FormServiceV2 {
  constructor(private readonly mongo: MongoDBPrismaService) {}

  /**
   * project에 종속적인 form을 생성합니다.
   */
  async createForm(projectId: string, data: CreateFormRequestV2Dto) {
    const { title, description, availableMatchingRounds } = data;

    return this.mongo.form.create({
      data: {
        projectId,
        title,
        description,
        availableMatchingRounds,
      },
    });
  }
}
