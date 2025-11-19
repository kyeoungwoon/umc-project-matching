import { Injectable } from '@nestjs/common';

import {
  CreateMatchingRoundDtoV2,
  MatchingRoundEntityResponseDto,
  UpdateMatchingRoundDtoV2,
} from '@upms/shared';

import { PostgreSQLPrismaService } from '@modules/prisma/services/postgresql.prisma.service';

@Injectable()
export class MatchingRoundV2Service {
  constructor(private readonly postgre: PostgreSQLPrismaService) {}

  async createMatchingRound(data: CreateMatchingRoundDtoV2) {
    const matchingRound = await this.postgre.matchingRound.create({
      data,
    });

    return MatchingRoundEntityResponseDto.fromEntity(matchingRound);
  }

  async getMatchingRoundById(matchingRoundId: bigint) {
    const matchingRound = await this.postgre.matchingRound.findUnique({
      where: { id: matchingRoundId },
    });

    return MatchingRoundEntityResponseDto.fromEntity(matchingRound);
  }

  async updateMatchingRound(matchingRoundId: bigint, data: UpdateMatchingRoundDtoV2) {
    const matchingRound = await this.postgre.matchingRound.update({
      where: { id: matchingRoundId },
      data,
    });

    return MatchingRoundEntityResponseDto.fromEntity(matchingRound);
  }

  async deleteMatchingRound(matchingRoundId: bigint) {
    const deletedMatchingRound = await this.postgre.matchingRound.delete({
      where: { id: matchingRoundId },
    });

    return MatchingRoundEntityResponseDto.fromEntity(deletedMatchingRound);
  }

  async getCurrentMatchingRounds(chapterId: bigint) {
    const currentDate = new Date();

    const matchingRounds = await this.postgre.matchingRound.findMany({
      where: {
        chapterId: chapterId,
        startAt: { lte: currentDate },
        endAt: { gte: currentDate },
      },
    });

    return matchingRounds.map(MatchingRoundEntityResponseDto.fromEntity);
  }

  async getClosestMatchingRound(chapterId: bigint) {
    const currentDate = new Date();

    const matchingRounds = await this.postgre.matchingRound.findFirst({
      where: {
        chapterId: chapterId,
        endAt: { gte: currentDate },
      },
      orderBy: {
        startAt: 'asc',
      },
    });

    return MatchingRoundEntityResponseDto.fromEntity(matchingRounds);
  }
}
