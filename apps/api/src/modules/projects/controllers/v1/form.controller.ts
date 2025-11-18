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
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import {
  CreateFormRequestDto,
  CreateQuestionRequestDto,
  FormQuestionDto,
  UpdateFormRequestDto,
  UpdateQuestionRequestDto,
} from '@upms/shared';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { CHALLENGER_ROLE, CheckChallengerRole } from '@common/decorators/challenger-role.decorator';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { ChallengerRoleGuard } from '@modules/auth/guards/challenger-guard';
import { ApplyService } from '@modules/projects/services/v1/apply.service';
import { FormService } from '@modules/projects/services/v1/form.service';
import { MatchingRoundService } from '@modules/projects/services/v1/matching-round.service';
import { ProjectsService } from '@modules/projects/services/v1/projects.service';
import { UsersService } from '@modules/users/services/v1/users.service';

@Controller({
  path: 'projects/form',
  version: '1',
})
@ApiTags(API_TAGS.FORM)
@ApiBearerAuth()
@UseGuards(ChallengerRoleGuard)
export class FormController {
  constructor(
    private readonly projectService: ProjectsService,
    private readonly formService: FormService,
    private readonly matchingRoundService: MatchingRoundService,
    private readonly applyService: ApplyService,
    private readonly reqContext: RequestContextService,
    private readonly userService: UsersService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
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
  @CheckChallengerRole(CHALLENGER_ROLE.PLAN)
  @Post('project/:projectId/form')
  async createProjectApplicationForm(
    @Param('projectId') projectId: string,
    @Body() body: CreateFormRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(userId, projectId);

    this.logger.log(`USER_ID_${userId}_CREATE_FORM_FOR_PROJECT_ID_${projectId}`);

    return this.formService.createForm(projectId, body);
  }

  @ApiOperation({
    summary: '폼 정보를 가져옵니다.',
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
  @Get('project/:projectId/form/:formId')
  async getProjectApplicationForm(
    @Param('projectId') projectId: string,
    @Param('formId') formId: string,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    const isPlanChallenger = await this.projectService.isUserProjectPlanByProjectId(
      userId,
      projectId,
    );
    const isAdminChallenger = await this.userService.isAdminChallenger(userId);

    const GET_APPLICATIONS = isPlanChallenger || isAdminChallenger;

    return this.formService.getFormWithAvailableMatchingRounds(formId, GET_APPLICATIONS);
  }

  @ApiOperation({
    summary: '[ADMIN] 폼을 삭제합니다.',
    description: 'Soft Delete로 개선하기 전까지 ADMIN 전용입니다..',
  })
  @ApiParam({
    name: 'projectId',
    required: true,
  })
  @ApiParam({
    name: 'formId',
    required: true,
  })
  @Delete('project/:projectId/form/:formId')
  @CheckChallengerRole(CHALLENGER_ROLE.ADMIN)
  async deleteProjectApplicationForm(
    @Param('formId') formId: string,
    @Param('projectId') projectId: string,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.formService.throwIfUserNotPlanByFormId(userId, formId);

    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    this.logger.warn(`USER_ID_${userId}_DELETE_FORM_ID_${formId}_FROM_PROJECT_ID_${projectId}`);

    return this.formService.deleteForm(formId);
  }

  @ApiOperation({
    summary: 'Form에 질문을 생성합니다. 기존 질문들은 Soft Delete 처리됩니다.',
    description: '기존 질문들은 이제 어떡하지? 난 몰?루',
  })
  @ApiParam({
    name: 'projectId',
    required: true,
  })
  @ApiParam({
    name: 'formId',
    required: true,
  })
  @Post('project/:projectId/forms/:formId/questions')
  async addQuestionsToForm(
    @Param('formId') formId: string,
    @Param('projectId') projectId: string,
    @Body() body: CreateQuestionRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.formService.throwIfUserNotPlanByFormId(userId, formId);

    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    await this.formService.softDeleteAllQuestionsInForm(formId);

    this.logger.log(
      `USER_ID_${userId}_ADD_QUESTIONS_TO_FORM_ID_${formId}_IN_PROJECT_ID_${projectId}`,
    );

    return this.formService.addFormQuestions(formId, body.questions);
  }

  @ApiOperation({
    summary: '폼 정보 (제목/설명) 수정',
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
  @Patch('project/:projectId/form/:formId')
  async editProjectApplicationForm(
    @Param('formId') formId: string,
    @Param('projectId') projectId: string,
    @Body() body: UpdateFormRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.formService.throwIfUserNotPlanByFormId(userId, formId);
    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    this.logger.log(
      `USER_ID_${userId}_UPDATE_FORM_ID_${formId}_IN_PROJECT_ID_${projectId}`,
      body.title,
      body.description,
    );

    return this.formService.updateForm(formId, body);
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
}
