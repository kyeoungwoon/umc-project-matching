import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import { $Enums } from '@generated/prisma/mongodb';
import UserPartEnum = $Enums.UserPartEnum;

@Injectable()
export class UsersService {
  constructor(private readonly mongo: MongoDBPrismaService) {}

  // userId를 받아서 해당하는 사용자 정보를 DB에서 가져옵니다.
  async getUserByUserId(userId: string) {
    const user = await this.mongo.challenger.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new NotFoundException('사용자가 존재하지 않습니다.');

    return user;
  }

  async isPlanChallenger(userId: string): Promise<boolean> {
    const user = await this.getUserByUserId(userId);
    return user.part === UserPartEnum.PLAN;
  }

  async throwIfNotPlanChallenger(userId: string) {
    const isPlanChallenger = await this.isPlanChallenger(userId);
    if (!isPlanChallenger)
      throw new ForbiddenException(
        'Plan 챌린저만 프로젝트를 생성할 수 있습니다.',
      );
  }

  async isAdminChallenger(userId: string): Promise<boolean> {
    const user = await this.getUserByUserId(userId);
    return user.part === UserPartEnum.ADMIN;
  }

  async throwIfNotAdminChallenger(userId: string) {
    const isAdminChallenger = await this.isAdminChallenger(userId);
    if (!isAdminChallenger)
      throw new ForbiddenException('관리자 챌린저만 접근할 수 있습니다.');
  }

  // 학교와 학번으로 사용자 정보를 가져옵니다.
  async getUserBySchoolAndStudentId(school: string, studentId: string) {
    const user = await this.mongo.challenger.findUnique({
      where: {
        school_studentId: {
          school,
          studentId,
        },
      },
    });

    if (!user)
      throw new NotFoundException(
        '해당 학교와 학번을 가진 챌린저가 존재하지 않습니다.',
      );

    return user;
  }
}
