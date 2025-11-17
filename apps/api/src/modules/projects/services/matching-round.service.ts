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

  async getOrThrowMatchingRound(roundId: string) {
    const round = await this.mongo.matchingRound.findUnique({
      where: {
        id: roundId,
      },
    });

    if (!round) {
      throw new NotFoundException('해당하는 매칭 차수를 찾을 수 없습니다.');
    }

    return round;
  }

  /**
   * start ~ end 사이에 있는 프로젝트 매칭 차수를 하나만 반환합니다.
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
   * start ~ end 사이에 있는 프로젝트 매칭 차수를 모두 반환합니다.
   */
  async getAllProjectMatchingRoundByStartEndDatetime(
    startDatetime: Date,
    endDatetime: Date,
  ) {
    return this.mongo.matchingRound.findMany({
      where: {
        startDatetime: { lt: endDatetime }, // 매칭라운드 시작시간이 조회 종료시간보다 이전
        endDatetime: { gt: startDatetime }, // 매칭라운드 종료시간이 조회 시작시간보다 이후
      },
      orderBy: {
        startDatetime: 'desc',
      },
    });
  }

  /**
   * 현재 시간 이후로 가장 가까운 프로젝트 매칭 차수를 반환합니다.
   *
   * 미래에 매칭 차수가 아예 존재하지 않을 경우 에러를 반환합니다.
   */
  async getOrThrowClosestMatchingRound() {
    const now = new Date();

    const closestMatchingRound = await this.mongo.matchingRound.findFirst({
      where: {
        endDatetime: { gte: now },
      },
      orderBy: {
        startDatetime: 'asc',
      },
    });

    if (!closestMatchingRound) {
      throw new NotFoundException('미래에 매칭 차수가 존재하지 않습니다.');
    }

    return closestMatchingRound;
  }

  async getCurrentMatchingRound() {
    const now = new Date();
    const current = await this.getProjectMatchingRoundByStartEndDatetime(
      now,
      now,
    );

    if (!current) {
      console.log(
        `현재 시간 ${now.toISOString()}에 해당하는 매칭 차수가 없습니다.`,
      );
      throw new NotFoundException('현재 진행 중인 매칭 차수가 없습니다.');
    }

    return current;
  }

  /**
   * 현재 시간에 해당하는 프로젝트 매칭 차수의 ID를 반환합니다.
   */
  async getCurrentProjectMatchingRoundId() {
    const currentMatching = await this.getCurrentMatchingRound();

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
      console.log(existing);

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

  // TODO: 성능 개선
  /**
   * 모든 매칭 차수의 기본 정보(id, name, startDatetime, endDatetime)를 반환합니다.
   */
  async getAllMatchingRounds() {
    return this.mongo.matchingRound.findMany({
      orderBy: {
        startDatetime: 'desc',
      },
      select: {
        id: true,
        name: true,
        startDatetime: true,
        endDatetime: true,
      },
    });
  }

  async isValidMatchingRoundIds(roundIds: string[]): Promise<boolean> {
    const matchingRounds = await this.getAllMatchingRounds();
    const matchingRoundIds = matchingRounds.map((round) => round.id);

    for (const id of roundIds) {
      if (!matchingRoundIds.includes(id)) {
        return false;
      }
    }

    return true;
  }

  async throwIfNotValidMatchingRoundIds(roundIds: string[]) {
    const isIn = await this.isValidMatchingRoundIds(roundIds);
    if (!isIn) {
      throw new ForbiddenException('유효하지 않은 매칭 차수 ID 입니다.');
    }
  }
}
