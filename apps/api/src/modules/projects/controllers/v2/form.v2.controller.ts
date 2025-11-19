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
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateFormRequestV2Dto } from '@upms/shared';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { FormV2Service } from '@modules/projects/services/v2/form.v2.service';

@Controller({
  path: 'forms',
  version: '2',
})
@ApiTags(API_TAGS.FORM)
@ApiBearerAuth()
export class FormControllerV2 {
  constructor(
    private readonly formV2: FormV2Service,
    private readonly reqContext: RequestContextService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Get(':formId')
  async getForm(@Param('formId') formId: string) {}

  // ================== PLAN ONLY ==================

  @Post()
  async createForm() {}

  @Post(':formId/questions')
  async addQuestionsToForm(@Param('formId') formId: string, @Body() body: CreateFormRequestV2Dto) {}

  @Delete(':formId')
  async deleteForm(@Param('formId') formId: string) {}

  @Patch(':formId')
  async updateForm(@Param('formId') formId: string, @Body() body: CreateFormRequestV2Dto) {}
}
