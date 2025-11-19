import { Injectable } from '@nestjs/common';

import {
  ChallengerResponseDto,
  CreateChallengerDtoV2,
  CreateSchoolDtoV2,
  SchoolResponseDto,
  USER_PART,
} from '@upms/shared';
import { ChallengerGisuResponseDto } from '@upms/shared/dist/users';

import { PostgreSQLPrismaService } from '@modules/prisma/services/postgresql.prisma.service';
import { GisuV2Service } from '@modules/users/services/v2/gisu.v2.service';

@Injectable()
export class UsersServiceV2 {
  constructor(
    private readonly postgre: PostgreSQLPrismaService,
    private readonly gisu: GisuV2Service,
  ) {}

  async getChallengerInfo(challengerId: bigint): Promise<ChallengerResponseDto> {
    const challenger = await this.postgre.challenger.findUnique({
      where: {
        id: challengerId,
      },
    });

    return ChallengerResponseDto.from(challenger);
  }

  async isAdminChallenger(challengerId: bigint): Promise<boolean> {
    const challenger = await this.getChallengerInfo(challengerId);

    return !!challenger?.gisuRoles?.some((role) => role.isCentralAdmin);
  }

  async createChallenger(data: CreateChallengerDtoV2): Promise<ChallengerResponseDto> {
    const newUser = await this.postgre.challenger.create({
      data,
    });

    return ChallengerResponseDto.from(newUser);
  }

  async createSchool(data: CreateSchoolDtoV2) {
    const newSchool = await this.postgre.school.create({
      data,
    });

    return SchoolResponseDto.from(newSchool);
  }

  async getSchoolList() {
    const schools = await this.postgre.school.findMany({});

    return SchoolResponseDto.from(schools);
  }
}
