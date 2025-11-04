import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersService } from '@modules/users/services/users.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { FormService } from '@modules/projects/services/form.service';
import { ApplyService } from '@modules/projects/services/apply.service';
import {
  CreateFormRequestDto,
  UpdateFormRequestDto,
} from '@modules/projects/dto/form.dto';
import {
  CreateQuestionRequestDto,
  FormQuestionDto,
  UpdateQuestionRequestDto,
} from '@modules/projects/dto/form-question.dto';
import {
  FormResponseDto,
  FormWithDetailsResponseDto,
} from '@modules/projects/dto/ok-responses/form.ok-response.dto';
import {
  ApiOkResponseCommon,
  ApiOkResponseCommonArray,
} from '@common/decorators/response/api-ok-response-common.decorator';

@Controller({
  path: 'projects',
  version: '1',
})
@ApiTags(API_TAGS.FORM)
@ApiBearerAuth()
export class FormController {
  constructor(
    private readonly projectService: ProjectsService,
    private readonly formService: FormService,
    private readonly matchingRoundService: MatchingRoundService,
    private readonly applyService: ApplyService,
    private readonly reqContext: RequestContextService,
    private readonly userService: UsersService,
  ) {}

  @ApiOperation({
    summary: '프로젝트 지원용 폼 생성 (틀 생성, 질문은 따로)',
    description:
      '폼을 먼저 생성하고, 질문은 formId를 제공해서 추가해야 합니다.' +
      '즉 FE에는, 폼 추가하기 버튼을 클릭하면 현재 API를 통해 생성한 후, 별도 페이지에서 formId를 받아서 추가해야 합니다.' +
      '폼을 생성할 떄, 가능한 차수를 기입하여야 합니다.',
  })
  @ApiParam({
    name: 'projectId',
    description: '폼을 생성할 프로젝트의 ID',
    required: true,
  })
  @ApiOkResponseCommon(FormResponseDto)
  @Post(':projectId/form')
  async createProjectApplicationForm(
    @Param('projectId') projectId: string,
    @Body() body: CreateFormRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(userId, projectId);

    return this.formService.createForm(projectId, body);
  }

  @ApiOperation({
    summary: 'formId에 해당하는 form의 정보를 조회',
    description: '',
  })
  @ApiParam({
    name: 'projectId',
    required: true,
  })
  @ApiParam({
    name: 'formId',
    required: true,
  })
  @ApiOkResponseCommon(FormWithDetailsResponseDto)
  @Get(':projectId/form/:formId')
  async getProjectApplicationForm(
    @Param('projectId') projectId: string,
    @Param('formId') formId: string,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.formService.throwIfUserNotPlanByFormId(userId, formId);
    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    const isPlanChallenger =
      await this.projectService.isUserProjectPlanByProjectId(userId, projectId);

    return this.formService.getFormByFormId(formId, isPlanChallenger);
  }

  @ApiOperation({
    summary: 'formId로 폼을 삭제',
    description: '',
  })
  @ApiParam({
    name: 'projectId',
    required: true,
  })
  @ApiParam({
    name: 'formId',
    required: true,
  })
  @ApiOkResponseCommon(FormResponseDto)
  @Delete(':projectId/form/:formId')
  async deleteProjectApplicationForm(
    @Param('formId') formId: string,
    @Param('projectId') projectId: string,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.formService.throwIfUserNotPlanByFormId(userId, formId);

    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    return this.formService.deleteForm(formId);
  }

  @ApiOperation({
    summary: 'Form에 질문을 생성합니다. 기존 질문들은 모두 삭제 처리됩니다.',
    description:
      '기존 질문들에 대한 응답은 어떻게 될지 고민을 해봐야 해요. 난 몰?루',
  })
  @ApiParam({
    name: 'projectId',
    required: true,
  })
  @ApiParam({
    name: 'formId',
    required: true,
  })
  @ApiOkResponseCommonArray(FormQuestionDto)
  @Post(':projectId/forms/:formId/questions')
  async addQuestionsToForm(
    @Param('formId') formId: string,
    @Param('projectId') projectId: string,
    @Body() body: CreateQuestionRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.formService.throwIfUserNotPlanByFormId(userId, formId);

    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    await this.formService.deleteAllQuestionsInForm(formId);
    return this.formService.addFormQuestions(formId, body.questions);
  }

  // // form 질문 수정
  // @ApiOperation({
  //   summary: 'form에 질문 수정',
  //   description: '',
  // })
  // @ApiOkResponseCommonArray(FormQuestionDto)
  // @Patch(':projectId/forms/:formId/questions')
  // async editQuestionsFromForm(
  //   @Param('projectId') projectId: string,
  //   @Param('formId') formId: string,
  //   @Body() body: UpdateQuestionRequestDto,
  // ) {
  //   const userId = this.reqContext.getOrThrowUserId();
  //   await this.formService.throwIfUserNotPlanByFormId(userId, formId);
  //
  //   await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);
  //   // TODO: 현재 검증은 폼이 프로젝트에 속하는지만 함, 질문이 폼에 속하는지는 나중에!
  //
  //   return this.formService.updateFormQuestions(body.questions);
  // }

  // @ApiOperation({
  //   summary: 'formId로 폼 수정',
  //   description: '',
  // })
  // @ApiParam({
  //   name: 'projectId',
  //   required: true,
  // })
  // @ApiParam({
  //   name: 'formId',
  //   required: true,
  // })
  // @ApiOkResponseCommon(FormResponseDto)
  // @Patch(':projectId/form/:formId')
  // async editProjectApplicationForm(
  //   @Param('formId') formId: string,
  //   @Param('projectId') projectId: string,
  //   @Body() body: UpdateFormRequestDto,
  // ) {
  //   const userId = this.reqContext.getOrThrowUserId();
  //   await this.formService.throwIfUserNotPlanByFormId(userId, formId);
  //   await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);
  //
  //   return this.formService.updateForm(formId, body);
  // }
}
