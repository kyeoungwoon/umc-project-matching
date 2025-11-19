import { Injectable } from '@nestjs/common';

import {
  ChallengerEntityResponseDto,
  ChallengerWithSchoolDto,
  ChapterSchoolEntityResponseDto,
  CreateChallengerDtoV2,
  CreateChallengerGisuDtoV2,
  CreateChapterSchoolDtoV2,
  CreateGisuChapterDtoV2,
  CreateGisuDtoV2,
  CreateSchoolDtoV2,
  GisuChapterEntityResponseDto,
  GisuEntityResponseDto,
  SchoolEntityResponseDto,
  UpdateChallengerDtoV2,
} from '@upms/shared';
import * as argon2 from 'argon2';

import { PostgreSQLPrismaService } from '@modules/prisma/services/postgresql.prisma.service';
import { UmcV2Service } from '@modules/users/services/v2/umc.v2.service';

@Injectable()
export class UsersServiceV2 {
  constructor(
    private readonly postgre: PostgreSQLPrismaService,
    private readonly gisu: UmcV2Service,
  ) {}

  async createChallenger(data: CreateChallengerDtoV2) {
    const passwordHash = await argon2.hash(data.passwordHash);

    const challenger = await this.postgre.challenger.create({
      data: {
        ...data,
        passwordHash,
      },
    });

    return ChallengerEntityResponseDto.fromEntity(challenger);
  }

  async getChallenger(challengerId: bigint) {
    const challenger = await this.postgre.challenger.findUnique({
      where: { id: challengerId },
    });

    return ChallengerEntityResponseDto.fromEntity(challenger);
  }

  async verifyPassword(challengerId: bigint, password: string) {
    const challenger = await this.postgre.challenger.findUnique({
      where: { id: challengerId },
    });

    if (!challenger) {
      return false;
    }

    return argon2.verify(challenger.passwordHash, password);
  }

  async updateChallenger(challengerId: bigint, data: UpdateChallengerDtoV2) {
    const challenger = await this.postgre.challenger.update({
      where: { id: challengerId },
      data: {
        ...data,
      },
    });

    return ChallengerEntityResponseDto.fromEntity(challenger);
  }
  async getChallengerBySchoolAndStudentId(schoolId: bigint, studentId: string) {
    const challenger = await this.postgre.challenger.findFirst({
      where: {
        schoolId,
        studentId,
      },
    });

    return ChallengerEntityResponseDto.fromEntity(challenger);
  }

  // 챌린저 정보 학교와 함께 가져오기
  async getChallengerWithSchool(challengerId: bigint) {
    const challenger = await this.postgre.challenger.findUnique({
      where: { id: challengerId },
      include: {
        school: true,
      },
    });

    return ChallengerWithSchoolDto.fromEntity(challenger);
  }

  // 학교 목록 가져오기
  async getSchoolList() {
    const schools = await this.postgre.school.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    console.log('Fetched schools:', SchoolEntityResponseDto.fromEntity(schools[0]));

    return schools.map((school) => SchoolEntityResponseDto.fromEntity(school));
  }

  // 학교 생성
  async createSchool(data: CreateSchoolDtoV2) {
    const school = await this.postgre.school.create({
      data,
    });

    return SchoolEntityResponseDto.fromEntity(school);
  }

  async createSchoolBulk(data: CreateSchoolDtoV2[]) {
    const schools = await this.postgre.school.createMany({
      data,
      skipDuplicates: true,
    });

    return;
  }

  // 기수 생성
  async createGisu(data: CreateGisuDtoV2) {
    const gisu = await this.postgre.gisu.create({ data });

    return GisuEntityResponseDto.fromEntity(gisu);
  }

  async createGisuChapter(data: CreateGisuChapterDtoV2) {
    const chapter = await this.postgre.gisuChapter.create({ data });

    return GisuChapterEntityResponseDto.fromEntity(chapter);
  }

  async createChapterSchool(data: CreateChapterSchoolDtoV2) {
    const chapterSchool = await this.postgre.chapterSchool.create({ data });

    return ChapterSchoolEntityResponseDto.fromEntity(chapterSchool);
  }

  async createChallengerGisu(data: CreateChallengerGisuDtoV2) {
    const challengerGisu = await this.postgre.challengerGisu.create({ data });

    return ChallengerEntityResponseDto.fromEntity(challengerGisu);
  }
}
