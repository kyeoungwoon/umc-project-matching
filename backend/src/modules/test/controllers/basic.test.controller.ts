import {
  Body,
  Controller,
  Get,
  Query,
  UseGuards,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { Public } from '@modules/auth/decorators/public.decorator';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { CustomResponse } from '@common/decorators/response/custom-response.decorator';
import { CommonSuccessCode } from '@common/codes/success/common.success.code';
import { ChallengerRoleGuard } from '@modules/auth/guards/challenger-guard';
import {
  CHALLENGER_ROLE,
  CheckChallengerRole,
} from '@common/decorators/challenger-role.decorator';
import { EnvGuard } from '@common/guards/env.guard';

@Controller({
  version: VERSION_NEUTRAL,
  path: 'test/basic',
})
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
@UseGuards(ChallengerRoleGuard, EnvGuard)
export class BasicTestController {
  constructor(private readonly requestContextService: RequestContextService) {}

  @ApiOperation({
    summary: '[TEST] 요청의 Body & Query 그대로 반환',
  })
  @Get('mirror')
  @Public()
  mirror(@Body() body: any, @Query() query: any) {
    return {
      body,
      query,
    };
  }

  @Get('hello')
  @CustomResponse(CommonSuccessCode.COMMON_SUCCESS)
  @Public()
  @ApiOperation({
    summary: '[TEST] Health-Check API',
    description: `서버 상태 확인 및 ApiBaseResponse를 확인하기 위한 API 입니다.
    \nHello World!를 return 합니다.`,
  })
  getHello(): string {
    return 'Hello World!';
  }

  @ApiOperation({
    summary: '[TEST] Async Local Storage Context 반환',
  })
  @Get('als')
  getRequestContext() {
    return this.requestContextService.getContext();
  }

  @ApiOperation({
    summary: '[TEST] Plan 챌린저일 경우 에러를 반환히지 않음',
  })
  @Get('is-plan')
  @CheckChallengerRole(CHALLENGER_ROLE.PLAN)
  isPlan() {
    return true;
  }

  @ApiOperation({
    summary: '[TEST] Admin 챌린저일 경우 에러를 반환히지 않음',
  })
  @Get('is-admin')
  @CheckChallengerRole(CHALLENGER_ROLE.ADMIN)
  isAdmin() {
    return true;
  }
}
