import { registerAs } from '@nestjs/config';

export const JWT_CONFIG = Symbol('JWT_CONFIG');

export const JwtConfig = registerAs(JWT_CONFIG, () => {
  const expiresIn = 60 * 60 * 24; // 24 hours, 하드코딩 아 짜증나

  return {
    secret: process.env.JWT_SECRET as string,
    // TODO: 왜 오류나는지 확인해야함
    signOptions: {
      expiresIn: expiresIn,
    },
  };
});
