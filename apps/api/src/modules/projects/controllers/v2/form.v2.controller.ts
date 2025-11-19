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

import {
  CreateApplicationFormWithQuestionsDtoV2,
  CreateFormQuestionDtoV2,
} from '@upms/shared/dist/common';
import {
  CreateApplicationFormDtoV2,
  UpdateApplicationFormDtoV2,
} from '@upms/shared/dist/common/dto';
import { UpdateFormQuestionDtoV2 } from '@upms/shared/dist/common/dto/create-update-entity.dto';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { ParseBigIntPipe } from '@common/pipes/parse-bigint.pipe';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { FormV2Service } from '@modules/projects/services/v2/form.v2.service';

@Controller({
  path: 'forms',
  version: '2',
})
@ApiTags(API_TAGS.FORM)
@ApiBearerAuth()
export class FormV2Controller {
  constructor(
    private readonly formV2: FormV2Service,
    private readonly reqContext: RequestContextService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @ApiOperation({
    summary: '폼과 해당 폼에 생성되어 있는 질문들을 가져옵니다.',
  })
  @Get(':formId')
  async getForm(@Param('formId', ParseBigIntPipe) formId: bigint) {
    return this.formV2.getFormWithQuestionsById(formId);
  }

  // ================== PLAN ONLY ==================

  @ApiOperation({
    summary: '새로운 폼을 생성합니다.',
  })
  @Post()
  async createForm(@Body() body: CreateApplicationFormDtoV2) {
    return this.formV2.createForm(body);
  }

  @ApiOperation({
    summary: '새로운 폼을 질문과 함께 생성합니다.',
  })
  @Post('/with-questions')
  async createFormWithQuestions(@Body() data: CreateApplicationFormWithQuestionsDtoV2) {
    return this.formV2.createFormWithQuestions(data);
  }

  @ApiOperation({
    summary: '폼에 질문을 추가합니다.',
  })
  @Post('questions')
  async addQuestionsToForm(@Body() body: CreateFormQuestionDtoV2) {
    return this.formV2.createFormQuestion(body);
  }

  @ApiOperation({
    summary: '질문을 수정합니다.',
  })
  @Patch('questions/:questionId')
  async updateFormQuestion(
    @Param('questionId', ParseBigIntPipe) questionId: bigint,
    @Body() body: UpdateFormQuestionDtoV2,
  ) {
    return this.formV2.updateFormQuestion(questionId, body);
  }

  @ApiOperation({
    summary: '폼을 삭제합니다.',
  })
  @Delete(':formId')
  async deleteForm(@Param('formId', ParseBigIntPipe) formId: bigint) {
    return this.formV2.deleteForm(formId);
  }

  @ApiOperation({
    summary: '폼 정보를 수정합니다.',
  })
  @Patch(':formId')
  async updateForm(
    @Param('formId', ParseBigIntPipe) formId: bigint,
    @Body() body: UpdateApplicationFormDtoV2,
  ) {
    return this.formV2.updateForm(formId, body);
  }
}
