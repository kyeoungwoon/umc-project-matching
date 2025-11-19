import { Injectable } from '@nestjs/common';

import {
  CreateGisuChapterDtoV2,
  CreateGisuDtoV2,
  GisuChapterEntityResponseDto,
  GisuChapterWithProjectsResponseDto,
  GisuEntityResponseDto,
  GisuWithChaptersResponseDto,
} from '@upms/shared';
import { CreateChapterSchoolDtoV2 } from '@upms/shared/dist/common/dto/create-update-entity.dto';
import { ChapterSchoolEntityResponseDto } from '@upms/shared/dist/common/dto/entity-response.dto';

import { PostgreSQLPrismaService } from '@modules/prisma/services/postgresql.prisma.service';

@Injectable()
export class UmcV2Service {
  constructor(private readonly postgre: PostgreSQLPrismaService) {}

  async getGisuList() {
    const gisuList = await this.postgre.gisu.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return gisuList.map((gisu) => GisuEntityResponseDto.fromEntity(gisu));
  }

  async getGisuListWithChapters() {
    const gisuList = await this.postgre.gisu.findMany({
      include: {
        chapters: {
          orderBy: {
            id: 'desc',
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });

    return gisuList.map((gisu) => GisuWithChaptersResponseDto.fromEntity(gisu));
  }

  async getGisuWithChaptersById(gisuId: bigint) {
    const gisu = await this.postgre.gisu.findUnique({
      where: {
        id: gisuId,
      },
      include: {
        chapters: {
          orderBy: {
            id: 'desc',
          },
        },
      },
    });

    return GisuWithChaptersResponseDto.fromEntity(gisu);
  }

  async createGisu(data: CreateGisuDtoV2) {
    const gisu = await this.postgre.gisu.create({
      data: {
        ...data,
      },
    });

    return GisuEntityResponseDto.fromEntity(gisu);
  }

  async getCurrentGisu() {
    const gisu = await this.postgre.gisu.findFirst({
      where: {
        isCurrent: true,
      },
      orderBy: {
        id: 'desc',
      },
    });

    return GisuEntityResponseDto.fromEntity(gisu);
  }

  async createGisuChapter(data: CreateGisuChapterDtoV2) {
    const gisuChapter = await this.postgre.gisuChapter.create({
      data: {
        ...data,
      },
    });

    return GisuChapterEntityResponseDto.fromEntity(gisuChapter);
  }

  async getGisuChapters(gisuId: bigint) {
    const gisuChapters = await this.postgre.gisuChapter.findMany({
      where: {
        gisuId,
      },
      orderBy: {
        id: 'desc',
      },
    });

    return GisuChapterEntityResponseDto.fromEntity(gisuChapters);
  }

  async getChapterWithProjectsById(chapterId: bigint) {
    const chapter = await this.postgre.gisuChapter.findUnique({
      where: {
        id: chapterId,
      },
    });

    return GisuChapterWithProjectsResponseDto.fromEntity(chapter);
  }

  async createChapterSchool(data: CreateChapterSchoolDtoV2) {
    const chapterSchool = await this.postgre.chapterSchool.create({
      data,
    });

    return ChapterSchoolEntityResponseDto.fromEntity(chapterSchool);
  }
}
