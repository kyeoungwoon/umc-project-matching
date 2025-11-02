import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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

  // userId와 password를 검증합니다.
  async verifyPasswordWithUserId(
    userId: string,
    password: string,
  ): Promise<boolean> {
    const user = await this.user.getUserByUserId(userId);

    // 사용자가 존재하지 않으면 false 반환
    if (!user) {
      return false;
    }

    return await argon2.verify(user.password, password);
  }

  async changePasswordWithUserId(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ) {
    const isValidCurrentPassword = await this.verifyPasswordWithUserId(
      userId,
      currentPassword,
    );

    if (!isValidCurrentPassword) {
      throw new UnauthorizedException('현재 비밀번호가 올바르지 않습니다.');
    }

    const hashedPassword = await argon2.hash(newPassword);

    return this.mongo.challenger.update({
      where: {
        id: userId,
      },
      data: {
        password: hashedPassword,
      },
    });
  }

  async getSchoolList() {
    return this.mongo.school.findMany({
      select: {
        name: true,
        handle: true,
      },
    });
  }

  async createSchool(name: string, handle: string) {
    return this.mongo.school.create({
      data: {
        name,
        handle,
      },
    });
  }

  async dropAllSchool() {
    return this.mongo.school.deleteMany({});
  }

  async dropAllChallengers() {
    return this.mongo.challenger.deleteMany({});
  }

  async dropAll(type: string) {
    if (type === 'school') {
      return this.dropAllSchool();
    } else if (type === 'challenger') {
      return this.dropAllChallengers();
    } else {
      throw new BadRequestException('올바르지 않은 타입 입니다.');
    }
  }
}
