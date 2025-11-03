import {
  BadRequestException,
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
import { ProjectsService } from '@modules/projects/services/projects.service';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersService } from '@modules/users/services/users.service';
import {
  ApplyToProjectRequestDto,
  ApplyToQuestionRequestDto,
  ChangeApplicationStatus,
  CreateFormRequestDto,
  CreateProjectRequestDto,
  CreateQuestionRequestDto,
  UpdateFormRequestDto,
  UpdateProjectRequestDto,
  UpdateQuestionRequestDto,
} from '@modules/projects/dto/project.dto';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ApplicationStatusEnum } from '@generated/prisma/mongodb';

@Controller({
  path: 'projects',
  version: '1',
})
@ApiTags(API_TAGS.PROJECT)
@ApiBearerAuth()
export class ProjectsController {
  constructor(
    private readonly projectService: ProjectsService,
    private readonly reqContext: RequestContextService,
    private readonly userService: UsersService,
  ) {}

  @Get('')
  @ApiOperation({
    summary: '프로젝트 목록 조회',
    description: '',
  })
  async getProjectList() {
    return this.projectService.getProjectList();
  }

  @Post('')
  @ApiOperation({
    summary: '새로운 프로젝트 생성',
    description: 'Plan 챌린저만 가능합니다.',
  })
  async createProject(@Body() body: CreateProjectRequestDto) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.userService.throwIfNotPlanChallenger(userId);

    return this.projectService.createProject(body);
  }

  @Get(':projectId')
  @ApiOperation({
    summary: '프로젝트 상세 보기',
    description: '',
  })
  async getProjectDetails(@Param('projectId') projectId: string) {
    return this.projectService.getProjectById(projectId);
  }

  @Patch(':projectId')
  @ApiOperation({
    summary: '프로젝트 내용 수정',
    description: '프로젝트 내용을 수정합니다.',
  })
  async updateProject(
    @Param('projectId') projectId: string,
    @Body() body: UpdateProjectRequestDto,
  ) {
    if (projectId !== body.projectId) {
      throw new BadRequestException(
        'path의 projectId와 body의 projectId가 일치하지 않습니다.',
      );
    }
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(userId, projectId);

    return this.projectService.updateProjectByProjectId(body);
  }

  @Delete(':projectId')
  @ApiParam({
    name: 'projectId',
    description: '폼을 생성할 프로젝트의 ID',
    required: true,
  })
  @ApiOperation({
    summary: '프로젝트 삭제',
    description: '[ADMIN] 프로젝트를 삭제합니다.',
  })
  async deleteProject(@Param('projectId') projectId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.userService.throwIfNotAdminChallenger(userId);

    return this.projectService.deleteProjectByProjectId(projectId);
  }

  // @ApiOperation({
  //   summary: '프로젝트에 속한 폼 조회',
  //   description: '프로젝트 내에 생성되어 있는 폼들을 조회합니다.',
  // })
  // @Get(':projectId/form')
  // getProjectFormList(@Param('projectId') projectId: string) {
  //   return this.projectService.getProjectById(projectId);
  // }

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
  @Post(':projectId/form')
  async createProjectApplicationForm(
    @Param('projectId') projectId: string,
    @Body() body: CreateFormRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(userId, projectId);

    return this.projectService.createForm(projectId, body);
  }

  @ApiOperation({
    summary: 'formId에 해당하는 form의 정보를 조회',
    description: '',
  })
  @ApiParam({
    name: 'projectId',
    required: true,
  })
  @Get(':projectId/form/:formId')
  async getProjectApplicationForm(
    @Param('projectId') projectId: string,
    @Param('formId') formId: string,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByFormId(userId, formId);
    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    const isPlanChallenger =
      await this.projectService.isUserProjectPlanByProjectId(userId, projectId);

    return this.projectService.getFormByFormId(formId, isPlanChallenger);
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
  @Delete(':projectId/form/:formId')
  async deleteProjectApplicationForm(
    @Param('formId') formId: string,
    @Param('projectId') projectId: string,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByFormId(userId, formId);

    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    return this.projectService.deleteForm(formId);
  }

  @ApiOperation({
    summary: 'formId로 폼 수정',
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
  @Patch(':projectId/form/:formId')
  async editProjectApplicationForm(
    @Param('formId') formId: string,
    @Param('projectId') projectId: string,
    @Body() body: UpdateFormRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByFormId(userId, formId);
    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    return this.projectService.updateForm(formId, body);
  }

  @ApiOperation({
    summary: 'form에 질문 추가',
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
  @Post(':projectId/forms/:formId/questions')
  async addQuestionsToForm(
    @Param('formId') formId: string,
    @Param('projectId') projectId: string,
    @Body() body: CreateQuestionRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByFormId(userId, formId);

    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    return this.projectService.addFormQuestions(formId, body.questions);
  }

  // form 질문 수정
  @ApiOperation({
    summary: 'form에 질문 수정',
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
  @Patch(':projectId/forms/:formId/questions')
  async editQuestionsFromForm(
    @Param('projectId') projectId: string,
    @Param('formId') formId: string,
    @Body() body: UpdateQuestionRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByFormId(userId, formId);

    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);
    // TODO: 현재 검증은 폼이 프로젝트에 속하는지만 함, 질문이 폼에 속하는지는 나중에!

    return this.projectService.updateFormQuestions(body.questions);
  }

  @ApiOperation({
    summary: '프로젝트 지원하기',
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
  @Post(':projectId/form/:formId/apply')
  async applyToProject(
    @Param('projectId') projectId: string,
    @Param('formId') formId: string,
    @Body() body: ApplyToProjectRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    return this.projectService.applyToProjectByFormId(
      formId,
      userId,
      body.answers,
    );
  }

  @ApiOperation({
    summary: 'applicationId로 지원서 조회하기',
    description: '',
  })
  @ApiParam({
    name: 'projectId',
    required: true,
  })
  @ApiParam({
    name: 'applicationId',
    required: true,
  })
  @Get(':projectId/apply/:applicationId')
  async getApplication(@Param('applicationId') applicationId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotApplicationOwner(
      userId,
      applicationId,
    );

    return this.projectService.getApplicationByApplicationId(applicationId);
  }

  @ApiOperation({
    summary: 'applicationId로 지원서 삭제하기',
    description: '',
  })
  @ApiParam({
    name: 'projectId',
    required: true,
  })
  @ApiParam({
    name: 'applicationId',
    required: true,
  })
  @Delete(':projectId/apply/:applicationId')
  async deleteApplicationForm(@Param('applicationId') applicationId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotApplicationOwner(
      userId,
      applicationId,
    );

    return this.projectService.deleteApplicationByApplicationId(applicationId);
  }

  // Plan 전용, 지원서 상태 변경
  @Post(':projectId/apply/:applicationId/status')
  async changeApplicationStatus(
    @Param('projectId') projectId: string,
    @Param('applicationId') applicationId: string,
    @Body() body: ChangeApplicationStatus,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(userId, projectId);

    // 지원서가 제출 상태인 경우에만 변경 가능, 이미 합격/불합격된 지원서는 변경 불가
    await this.projectService.throwIfApplicationStatusNotSubmitted(
      applicationId,
    );

    return this.projectService.changeApplicationStatus(
      applicationId,
      body.status,
    );
  }

  @ApiOperation({
    summary: '현재 매칭 세션 가져오기',
    description:
      '현재 시간을 기준으로 매칭 세션을 가져옵니다. 여러 개의 매칭 세션이 있을 경우, 그 중 시작시간이 가장 늦은 것을 기준으로 가져옵니다.',
  })
  @Get('matching-round/current')
  async getCurrentMatchingRound() {
    return this.projectService.getOrThrowCurrentProjectMatchingRound();
  }

  @ApiOperation({
    summary: '매칭 라운드 생성',
    description:
      '이름, 시작 시간, 종료 시간을 기준으로 매칭 라운드를 생성합니다.',
  })
  @Post('matching-round')
  createMatchingRound(@Body() body: ApplyToQuestionRequestDto) {
    return this.projectService.createMatchingRound(body);
  }

  @Post('test/matching-round')
  @ApiTags(API_TAGS.TEST)
  @ApiOperation({
    summary: '[테스트용] 매칭 라운드 생성',
    description:
      '현재 시간 기준 1시간 전부터 1시간 후까지의 매칭 라운드를 생성합니다.',
  })
  async testCreateMatchingRound() {
    const startDatetime = new Date(Date.now() - 60 * 60 * 1000);
    const endDatetime = new Date(Date.now() + 60 * 60 * 1000);

    return this.projectService.createMatchingRound({
      name: '테스트용 매칭 라운드',
      startDatetime,
      endDatetime,
    });
  }
}
