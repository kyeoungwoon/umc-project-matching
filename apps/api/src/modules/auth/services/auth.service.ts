import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AccessTokenJwtPayload } from '@modules/auth/types/jwt.types';
import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly user: UsersServiceV2,
  ) {}

  async login(userId: bigint, password: string): Promise<AccessTokenJwtPayload> {
    const user = await this.user.getChallenger(userId);

    if (!user) {
      throw new NotFoundException('사용자가 존재하지 않습니다.');
    }

    const isPasswordValid = await this.user.verifyPassword(userId, password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    return this.generateTokens(userId);
  }

  // 토큰 생성
  async generateTokens(userId: bigint): Promise<AccessTokenJwtPayload> {
    const payload = {
      userId: userId,
    };

    const [accessToken] = await Promise.all([this.jwtService.signAsync(payload)]);

    return {
      userId: userId.toString(),
      accessToken,
    };
  }

  // 토큰 생성
  async generateTestToken(userId: bigint): Promise<AccessTokenJwtPayload> {
    const userIdInString = userId.toString();

    const payload = {
      userId: userIdInString,
    };

    const [accessToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        expiresIn: '1y',
      }),
    ]);

    return {
      userId: userIdInString,
      accessToken,
    };
  }
}
