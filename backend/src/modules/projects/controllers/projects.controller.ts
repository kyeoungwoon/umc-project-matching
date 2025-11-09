import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
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
  CreateMultipleProjectRequestDto,
  CreateProjectRequestDto,
  UpdateProjectRequestDto,
} from '@modules/projects/dto/project.dto';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ProjectResponseDto } from '@modules/projects/dto/ok-responses/project.ok-response.dto';
import {
  ApiOkResponseCommon,
  ApiOkResponseCommonArray,
} from '@common/decorators/response/api-ok-response-common.decorator';
import { ChallengerRoleGuard } from '@modules/auth/guards/challenger-guard';
import {
  CHALLENGER_ROLE,
  CheckChallengerRole,
} from '@common/decorators/challenger-role.decorator';

@Controller({
  path: 'projects',
  version: '1',
})
@ApiTags(API_TAGS.PROJECT)
@ApiBearerAuth()
@UseGuards(ChallengerRoleGuard)
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
    description: '관리자만 가능합니다.',
  })
  @CheckChallengerRole(CHALLENGER_ROLE.ADMIN)
  @ApiOkResponseCommon(ProjectResponseDto)
  async createProject(@Body() body: CreateProjectRequestDto) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.userService.throwIfNotPlanChallenger(userId);

    return this.projectService.createProject(body);
  }

  @Post('')
  @ApiOperation({
    summary: '다수의 새로운 프로젝트 생성',
    description: '관리자만 가능합니다.',
  })
  @CheckChallengerRole(CHALLENGER_ROLE.PLAN)
  async createMultipleProject(@Body() body: CreateMultipleProjectRequestDto) {
    return this.projectService.createMultipleProject(body.projects);
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
  @ApiParam({
    name: 'projectId',
    required: true,
  })
  @ApiOperation({
    summary: '[Plan Only] 프로젝트 내용 수정',
    description: '프로젝트 내용을 수정합니다.',
  })
  @CheckChallengerRole(CHALLENGER_ROLE.PLAN)
  @ApiOkResponseCommon(ProjectResponseDto)
  async updateProject(
    @Param('projectId') projectId: string,
    @Body() body: UpdateProjectRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(userId, projectId);

    return this.projectService.updateProjectByProjectId(projectId, body);
  }

  @Delete(':projectId')
  @ApiParam({
    name: 'projectId',
    required: true,
  })
  @ApiOperation({
    summary: '프로젝트 삭제',
    description: '[ADMIN] 프로젝트를 삭제합니다.',
  })
  @CheckChallengerRole(CHALLENGER_ROLE.ADMIN)
  @ApiOkResponseCommon(ProjectResponseDto)
  async deleteProject(@Param('projectId') projectId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.userService.throwIfNotAdminChallenger(userId);

    return this.projectService.deleteProjectByProjectId(projectId);
  }
}
