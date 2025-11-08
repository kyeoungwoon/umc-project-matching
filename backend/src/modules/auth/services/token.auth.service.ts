import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@modules/users/services/users.service';
import { AccessTokenJwtPayload } from '@modules/auth/types/jwt.types';

@Injectable()
export class TokenAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  // 토큰 생성
  async generateTokens(userId: string): Promise<AccessTokenJwtPayload> {
    const payload = {
      userId: userId,
    };

    const [accessToken] = await Promise.all([
      this.jwtService.signAsync(payload),
    ]);

    return {
      userId: userId,
      accessToken,
    };
  }

  // 토큰 생성
  async generateTestToken(userId: string): Promise<AccessTokenJwtPayload> {
    const payload = {
      userId: userId,
    };

    const [accessToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        expiresIn: '1y',
      }),
    ]);

    return {
      userId: userId,
      accessToken,
    };
  }

  /**
   * JWT Guard에서 사용합니다. JWT payload 내의 userId를 받아서 사용자 정보를 반환합니다.
   * @param userId
   */
  async validateJwtUser(userId: string) {
    const user = await this.userService.getUserByUserId(userId);

    return {
      userId: user.id,
      name: user.name,
      nickname: user.nickname,
    };
  }
}
