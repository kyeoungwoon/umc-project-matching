import { Body, Controller, Get, Query, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { Public } from '@modules/auth/decorators/public.decorator';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { CustomResponse } from '@common/decorators/response/custom-response.decorator';
import { CommonSuccessCode } from '@common/codes/success/common.success.code';

@Controller({
  version: VERSION_NEUTRAL,
  path: 'test/basic',
})
@Public()
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
export class BasicTestController {
  constructor(private readonly requestContextService: RequestContextService) {}

  @Get('mirror')
  mirror(@Body() body: any, @Query() query: any) {
    return {
      body,
      query,
    };
  }

  @Get('hello')
  @CustomResponse(CommonSuccessCode.COMMON_SUCCESS)
  @ApiOperation({
    summary: 'Health-Check API',
    description: `서버 상태 확인 및 ApiBaseResponse를 확인하기 위한 API 입니다.
    \nHello World!를 return 합니다.`,
  })
  getHello(): string {
    return 'Hello World!';
  }

  @Get('als')
  getRequestContext() {
    return this.requestContextService.getContext();
  }
}
