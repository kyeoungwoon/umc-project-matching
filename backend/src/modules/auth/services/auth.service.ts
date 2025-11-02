import { Injectable } from '@nestjs/common';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import * as argon2 from 'argon2';
import { UsersService } from '@modules/users/services/users.service';
import { CreateUserRequestDto } from '@modules/users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly mongo: MongoDBPrismaService,
    private readonly user: UsersService,
  ) {}

  // 학교, 학번, 비밀번호로 로그인을 시도합니다.
  async loginWithPassword(school: string, studentId: string, password: string) {
    const user = await this.user.getUserBySchoolAndStudentId(school, studentId);

    return await argon2.verify(user.password, password);
  }

  async register(data: CreateUserRequestDto) {
    const { name, nickname, introduction, school, studentId, password, part } =
      data;

    const hashedPassword = await argon2.hash(password);

    const newUserData: any = {
      name,
      nickname,
      school,
      studentId,
      password: hashedPassword,
      part,
    };

    if (introduction) {
      newUserData.introduction = introduction;
    }

    return this.mongo.challenger.create({
      data: newUserData,
    });
  }
}
