import {
  Body,
  Controller,
  Get,
  Inject,
  LoggerService,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateChallengerDtoV2 } from '@upms/shared/dist/common/dto';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { EnvGuard } from '@common/guards/env.guard';

import { Public } from '@modules/auth/decorators/public.decorator';
import { AuthService } from '@modules/auth/services/auth.service';
import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@Controller({
  path: 'admin/test',
  version: '1',
})
@ApiTags(API_TAGS.ADMIN)
@UseGuards(EnvGuard)
@Public()
export class AdminTestController {
  constructor(
    private readonly auth: AuthService,
    private readonly user: UsersServiceV2,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @ApiOperation({
    summary: '테스트 토큰 발급',
  })
  @Get('test-token/:userId')
  async getTestToken(@Param('userId') userId: string) {
    return this.auth.generateTestToken(BigInt(userId));
  }

  @ApiOperation({
    summary: '테스트 사용자 생성',
  })
  @Post('challenger')
  async createTestUser(@Body() body: CreateChallengerDtoV2) {
    return this.user.createChallenger(body);
  }
}
