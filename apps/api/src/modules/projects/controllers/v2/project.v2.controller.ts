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
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

import {
  CreateFormRequestV2Dto,
  CreateProjectToDtoV2,
  CreateProjectWithToRequestDtoV2,
  ProjectEntityResponseDto,
  ProjectWithToAndMemberResponseDto,
} from '@upms/shared';
import { UpdateProjectDtoV2 } from '@upms/shared/dist/common/dto';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { ParseBigIntPipe } from '@common/pipes/parse-bigint.pipe';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { ProjectV2Service } from '@modules/projects/services/v2/project.v2.service';

@Controller({
  path: 'projects',
  version: '2',
})
@ApiTags(API_TAGS.FORM)
@ApiBearerAuth()
export class ProjectV2Controller {
  constructor(
    private readonly project: ProjectV2Service,
    private readonly requestContext: RequestContextService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  // ================= ADMIN ONLY ==================

  @Patch('to')
  async updateProjectTo(@Body() body: CreateProjectToDtoV2) {
    return this.project.updateProjectTo(body);
  }

  // ================= CHALLENGER ==================

  @ApiOperation({
    summary: '지부 별로 프로젝트 목록을 조회합니다.',
  })
  @ApiOkResponse({
    description: '프로젝트 목록을 반환합니다.',
    type: [ProjectWithToAndMemberResponseDto],
  })
  @ApiQuery({
    name: 'chapterId',
    description: '지부 ID',
    required: true,
  })
  @Get()
  async getProjects(@Query('chapterId', ParseBigIntPipe) chapterId: bigint) {
    return this.project.getProjectsWithToAndMemberByChapterId(chapterId);
  }

  @ApiOperation({
    summary: '프로젝트와 파트별 TO를 설정합니다.',
  })
  @ApiOkResponse({
    description: '생성된 프로젝트의 정보를 반환합니다.',
    type: ProjectEntityResponseDto,
  })
  @Post()
  async createProject(@Body() body: CreateProjectWithToRequestDtoV2) {
    return this.project.createProjectWithTo(body);
  }

  @ApiOperation({
    summary: '단일 프로젝트에 대한 정보 (TO, 프로젝트 멤버, 생성된 폼) 를 가져옵니다.',
  })
  @Get(':projectId')
  async getProject(@Param('projectId', ParseBigIntPipe) projectId: bigint) {
    return this.project.getSingleProjectWithToAndMemberAndFormResponseDto(projectId);
  }

  @ApiOperation({
    summary: '프로젝트 정보를 수정합니다.',
  })
  @Patch(':projectId')
  async updateProject(
    @Param('projectId', ParseBigIntPipe) projectId: bigint,
    @Body() body: UpdateProjectDtoV2,
  ) {
    return this.project.updateProject(projectId, body);
  }

  // ================ ADMIN ONLY ==================

  @ApiOperation({
    summary: '프로젝트를 삭제합니다.',
  })
  @Delete(':projectId')
  async deleteProject(@Param('projectId', ParseBigIntPipe) projectId: bigint) {
    return this.project.deleteProject(projectId);
  }
}
