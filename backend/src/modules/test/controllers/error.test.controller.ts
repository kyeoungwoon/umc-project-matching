import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  LoggerService,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CustomException } from '@common/codes/custom.exception';
import { CommonErrorCode } from '@common/codes/error/common.error.code';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { Public } from '@modules/auth/decorators/public.decorator';
import { ErrorType, ErrorTypeDto } from '@modules/test/dto/error.dto';
import { EnvGuard } from '@common/guards/env.guard';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Controller({
  version: '1',
  path: 'test/error',
})
@Public()
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
@UseGuards(EnvGuard)
export class ErrorTestController {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

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

  @Get('logger-test')
  @ApiOperation({
    summary: 'Logger 테스트 API',
  })
  loggerTest() {
    this.logger.log('This is a log message', 'LogContext');
    this.logger.warn('This is a warning message', 'WarnContext');
    this.logger.error(
      '에러가 발생했습니다',
      new Error('This is an error message'),
      'ErrorContext',
    );

    return;
  }
}
