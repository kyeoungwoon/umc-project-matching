import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  // 👈 접근 거부 Exception
  Inject,
  Injectable,
  LoggerService,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import {
  CHALLENGER_ROLE,
  CHALLENGER_ROLE_KEY,
  ChallengerRole,
} from '@common/decorators/challenger-role.decorator';

// 👈 Reflector 임포트
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@Injectable()
export class ChallengerRoleGuardV2 implements CanActivate {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly reflector: Reflector,
    private readonly requestContextService: RequestContextService,
    private readonly user: UsersServiceV2,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 2. 데코레이터(@CheckChallengerRole)에 설정된 '역할'을 읽어옵니다.
    const requiredRole = this.reflector.get<ChallengerRole>(
      CHALLENGER_ROLE_KEY,
      context.getHandler(),
    );

    // 3. 데코레이터가 없으면, 누구나 통과시킵니다.
    if (!requiredRole) {
      return true;
    }

    // 4. 공통 로직: 사용자 ID를 가져옵니다.
    const userId = this.requestContextService.getOrThrowUserIdAsBigInt();

    // 5. 동적 로직: 필요한 역할(role)에 따라 다른 서비스 메서드를 호출합니다.
    let hasPermission = false;
    if (requiredRole === CHALLENGER_ROLE.ADMIN) {
      hasPermission = await this.user.isAdminChallenger(userId);
    } // TODO: Plan 챌린저 검증은 추후 추가, 프로젝트별로 ?

    // 6. 권한이 없으면 접근 거부(403) 에러를 발생시킵니다.
    if (!hasPermission) {
      this.logger.error('권한이 없는 사용자의 요청입니다.', context.switchToHttp().getRequest());
      throw new ForbiddenException('이 작업을 수행할 권한이 없습니다.');
    }

    return true; // 👈 권한이 있으면 통과
  }
}
