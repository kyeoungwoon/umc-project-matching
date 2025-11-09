import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  Query,
  UseGuards,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CustomException } from '@common/codes/custom.exception';
import { CommonErrorCode } from '@common/codes/error/common.error.code';
import { CommonSuccessCode } from '@common/codes/success/common.success.code';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { CustomResponse } from '@common/decorators/response/custom-response.decorator';

import { ALS, AlsInstance } from '@modules/als/constants/als.constants';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { Public } from '@modules/auth/decorators/public.decorator';
import { ErrorType, ErrorTypeDto } from '@modules/test/dto/error.dto';
import { EnvGuard } from '@common/guards/env.guard';

@Controller({
  version: '1',
  path: 'test/error',
})
@Public()
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
@UseGuards(EnvGuard)
export class ErrorTestController {
  constructor() {}

  @Get('exception')
  @ApiOperation({
    summary: 'Normal Error 발생 테스트 API',
    description: `Query String에 Error type을 명시하면 됩니다.`,
  })
  raiseError(@Query() query: ErrorTypeDto) {
    const { type } = query;

    if (type == ErrorType.NORMAL) {
      throw new Error('[NORMAL ERROR] 테스트 에러입니다.');
    } else if (type == ErrorType.HTTP) {
      throw new BadRequestException('[HTTP ERROR] 테스트 에러입니다.');
    } else if (type == ErrorType.CUSTOM) {
      throw new CustomException(CommonErrorCode.TEST_CUSTOM_ERROR);
    } else {
      return 'type 쿼리를 normal, custom, http 중 하나로 설정해주세요.';
    }
  }
}
