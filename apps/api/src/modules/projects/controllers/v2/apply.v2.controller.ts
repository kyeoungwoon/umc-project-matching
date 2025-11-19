import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  LoggerService,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateApplicationWithResponsesDtoV2 } from '@upms/shared/dist/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { ParseBigIntPipe } from '@common/pipes/parse-bigint.pipe';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { ApplicationV2Service } from '@modules/projects/services/v2/application.v2.service';

@Controller({
  path: 'applications',
  version: '2',
})
@ApiTags(API_TAGS.APPLY)
@ApiBearerAuth()
export class ApplyV2Controller {
  constructor(
    private readonly reqContext: RequestContextService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly application: ApplicationV2Service,
  ) {}

  @ApiOperation({
    summary: '내가 제출한 지원서를 모두 조회합니다.',
  })
  @Get('me')
  async getMyApplications() {
    const userId = this.reqContext.getOrThrowUserIdAsBigInt();
    return this.application.getApplicationsByApplicantId(userId);
  }

  @Delete(':applicationId')
  async deleteApplication(@Param('applicationId', ParseBigIntPipe) applicationId: bigint) {
    return this.application.deleteApplication(applicationId);
  }

  @Post()
  async createApplicationWithResponses(@Body() body: CreateApplicationWithResponsesDtoV2) {
    return this.application.createApplicationWithResponses(body);
  }

  // ================= PLAN ONLY =================

  @Get(':applicationId')
  async getApplicationDetails(@Param('applicationId', ParseBigIntPipe) applicationId: bigint) {
    return this.application.getApplicationById(applicationId);
  }

  @Patch(':applicationId')
  async updateApplication(
    @Param('applicationId', ParseBigIntPipe) applicationId: bigint,
    @Body() body: any,
  ) {
    return this.application.updateApplication(applicationId, body);
  }
}
