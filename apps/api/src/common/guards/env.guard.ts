import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
  Inject,
  LoggerService,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class EnvGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const currentEnv = this.configService.get<string>('NODE_ENV');
    if (currentEnv === 'development') {
      // 예: 프로덕션 환경에서만 접근 허용
      this.logger.error(
        `EnvGuard: 허용된 환경(${currentEnv})에서의 접근입니다.`,
        context.switchToHttp().getRequest(),
      );
      return true;
    }

    throw new ForbiddenException(
      'Development 환경에서만 접근이 허용되는 API 입니다.',
    );
  }
}
