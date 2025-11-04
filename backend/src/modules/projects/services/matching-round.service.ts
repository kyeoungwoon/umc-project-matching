import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';

import { CreateMatchingRoundDto } from '@modules/projects/dto/apply.dto';

@Injectable()
export class MatchingRoundService {
  constructor(private readonly mongo: MongoDBPrismaService) {}

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
  async createMatchingRound(data: CreateMatchingRoundDto) {
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
}
