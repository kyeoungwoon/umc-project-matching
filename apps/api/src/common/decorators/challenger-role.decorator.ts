import { SetMetadata } from '@nestjs/common';

// 'admin', 'plan' 등 확인하고 싶은 역할을 문자열로 받습니다.
export const CHALLENGER_ROLE_KEY = Symbol('CHALLENGER_ROLE');

export const CHALLENGER_ROLE = {
  ADMIN: 'admin',
  PLAN: 'plan',
} as const;

export type ChallengerRole =
  (typeof CHALLENGER_ROLE)[keyof typeof CHALLENGER_ROLE];

export const CheckChallengerRole = (role: ChallengerRole) =>
  SetMetadata(CHALLENGER_ROLE_KEY, role);
