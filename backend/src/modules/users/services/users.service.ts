import { Injectable, NotFoundException } from '@nestjs/common';

import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: MongoDBPrismaService) {}

  // userId를 받아서 해당하는 사용자 정보를 DB에서 가져옵니다.
  async getUserByUserId(userId: string) {
    const user = await this.prisma.challenger.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new NotFoundException('사용자가 존재하지 않습니다.');

    return user;
  }

  // 학교와 학번으로 사용자 정보를 가져옵니다.
  async getUserBySchoolAndStudentId(school: string, studentId: string) {
    const user = await this.prisma.challenger.findUnique({
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
