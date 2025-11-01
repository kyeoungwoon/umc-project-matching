import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '@modules/users/services/users.service';
import { AccessTokenJwtPayload } from '@modules/auth/types/jwt.types';
import { REFRESH_JWT_CONFIG } from '@modules/auth/config/refresh-jwt.config';

@Injectable()
export class TokenAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
  ) {}

  async generateTokens(userId: bigint): Promise<AccessTokenJwtPayload> {
    const payload = {
      userId: userId.toString(),
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(
        payload,
        this.configService.getOrThrow(REFRESH_JWT_CONFIG),
      ),
    ]);

    return {
      userId: userId.toString(),
      accessToken,
      refreshToken,
    };
  }
  /**
   * JWT Guard에서 사용합니다. JWT payload 내의 userId를 받아서 사용자 정보를 반환합니다.
   * @param userId
   */
  async validateJwtUser(userId: bigint) {
    const user = await this.userService.getUserInfo(userId);

    // if (!user) throw new CustomException(UserErrorCode.NO_USER);

    return {
      userId: user.id,
      name: user.name,
      nickname: user.nickname,
    };
  }
}
