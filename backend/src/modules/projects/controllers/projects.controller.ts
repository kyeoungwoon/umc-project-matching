import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersService } from '@modules/users/services/users.service';
import {
  ApplyToProjectRequestDto,
  CreateFormRequestDto,
  CreateProjectRequestDto,
  CreateQuestionRequestDto,
  UpdateFormRequestDto,
  UpdateProjectRequestDto,
  UpdateQuestionRequestDto,
} from '@modules/projects/dto/project.dto';

@Controller({
  path: 'projects',
  version: '1',
})
export class ProjectsController {
  constructor(
    private readonly projectService: ProjectsService,
    private readonly reqContext: RequestContextService,
    private readonly userService: UsersService,
  ) {}

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

  @Patch(':projectId')
  @ApiOperation({
    summary: '프로젝트 내용 수정',
    description: '프로젝트 내용을 수정합니다.',
  })
  async updateProject(@Body() body: UpdateProjectRequestDto) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(
      userId,
      body.projectId,
    );

    return this.projectService.updateProjectByProjectId(body);
  }

  @ApiOperation({
    summary: '프로젝트에 속한 폼 조회',
    description: '프로젝트 내에 생성되어 있는 폼들을 조회합니다.',
  })
  @Get(':projectId/form')
  getProjectFormList(@Param('projectId') projectId: string) {
    return this.projectService.getProjectById(projectId);
  }

  @ApiOperation({
    summary: '프로젝트 지원용 폼 생성 (틀 생성, 질문은 따로)',
    description:
      '폼을 먼저 생성하고, 질문은 formId를 제공해서 추가해야 합니다.' +
      '즉 FE에는, 폼 추가하기 버튼을 클릭하면 현재 API를 통해 생성한 후, 별도 페이지에서 formId를 받아서 추가해야 합니다.' +
      '폼을 생성할 떄, 가능한 차수를 기입하여야 합니다.',
  })
  @Post(':projectId/form')
  async createProjectApplicationForm(@Body() body: CreateFormRequestDto) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(
      userId,
      body.projectId,
    );

    return this.projectService.createForm(body);
  }

  @ApiOperation({
    summary: 'formId에 해당하는 form의 정보를 조회',
    description: '',
  })
  @Get(':projectId/form/:formId')
  getProjectApplicationForm(@Param('formId') formId: string) {
    return this.projectService.getFormByFormId(formId);
  }

  @ApiOperation({
    summary: 'formId로 폼을 삭제',
    description: '',
  })
  @Delete(':projectId/form/:formId')
  async deleteProjectApplicationForm(@Param('formId') formId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByFormId(userId, formId);

    return this.projectService.deleteForm(formId);
  }

  @ApiOperation({
    summary: 'formId로 폼 수정',
    description: '',
  })
  @Patch(':projectId/form/:formId')
  async editProjectApplicationForm(
    @Param('formId') formId: string,
    @Body() body: UpdateFormRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByFormId(userId, formId);

    return this.projectService.updateForm(body);
  }

  @ApiOperation({
    summary: 'form에 질문 추가',
    description: '',
  })
  @Post(':projectId/forms/:formId/questions')
  async addQuestionsToForm(
    @Param('formId') formId: string,
    @Body() body: CreateQuestionRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByFormId(userId, formId);

    return this.projectService.addFormQuestions(body.questions);
  }

  // form 질문 수정
  @ApiOperation({
    summary: 'form에 질문 수정',
    description: '',
  })
  @Patch(':projectId/forms/:formId/questions')
  async editQuestionsFromForm(
    @Param('formId') formId: string,
    @Body() body: UpdateQuestionRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByFormId(userId, formId);

    return this.projectService.updateFormQuestions(body.questions);
  }

  @ApiOperation({
    summary: 'projectId로 프로젝트 지원하기',
    description: '',
  })
  @Patch(':projectId/apply')
  async applyToProject(
    @Param('projectId') projectId: string,
    @Body() body: ApplyToProjectRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();

    return this.projectService.applyToProjectByProjectId(
      projectId,
      userId,
      body.answers,
    );
  }

  @ApiOperation({
    summary: 'applicationId로 지원서 조회하기',
    description: '',
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
  @Delete(':projectId/apply/:applicationId')
  async deleteApplicationForm(@Param('applicationId') applicationId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotApplicationOwner(
      userId,
      applicationId,
    );

    return this.projectService.deleteApplicationByApplicationId(applicationId);
  }
}
