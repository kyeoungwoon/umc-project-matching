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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { RequestContextService } from '@modules/als/services/request-context.service';

@Controller({
  path: 'applications',
  version: '2',
})
@ApiTags(API_TAGS.APPLY)
@ApiBearerAuth()
export class ApplyControllerV2 {
  constructor(
    private readonly reqContext: RequestContextService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Get('me')
  async getMyApplications() {}

  @Delete(':applicationId')
  async deleteApplication(@Param('applicationId') applicationId: string) {}

  @Post()
  async createApplication(@Body() body: any) {}

  // ================= PLAN ONLY =================

  @Get(':applicationId')
  async getApplicationDetails(@Param('applicationId') applicationId: string) {}

  @Patch(':applicationId')
  async updateApplication(@Param('applicationId') applicationId: string, @Body() body: any) {}
}
