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
  CreateProjectRequestDto,
  UpdateProjectRequestDto,
} from '@modules/projects/dto/project.dto';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ProjectResponseDto } from '@modules/projects/dto/ok-responses/project.ok-response.dto';
import {
  ApiOkResponseCommon,
  ApiOkResponseCommonArray,
} from '@common/decorators/response/api-ok-response-common.decorator';

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
  @ApiOkResponseCommonArray(ProjectResponseDto)
  async getProjectList() {
    return this.projectService.getProjectList();
  }

  @Post('')
  @ApiOperation({
    summary: '새로운 프로젝트 생성',
    description: 'Plan 챌린저만 가능합니다.',
  })
  @ApiOkResponseCommon(ProjectResponseDto)
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
  @ApiOkResponseCommon(ProjectResponseDto)
  async getProjectDetails(@Param('projectId') projectId: string) {
    return this.projectService.getProjectById(projectId);
  }

  @Patch(':projectId')
  @ApiOperation({
    summary: '프로젝트 내용 수정',
    description: '프로젝트 내용을 수정합니다.',
  })
  @ApiOkResponseCommon(ProjectResponseDto)
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
  @ApiOkResponseCommon(ProjectResponseDto)
  async deleteProject(@Param('projectId') projectId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.userService.throwIfNotAdminChallenger(userId);

    return this.projectService.deleteProjectByProjectId(projectId);
  }
}
