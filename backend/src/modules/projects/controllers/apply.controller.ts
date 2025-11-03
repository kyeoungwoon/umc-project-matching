import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { FormService } from '@modules/projects/services/form.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { ApplyService } from '@modules/projects/services/apply.service';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersService } from '@modules/users/services/users.service';
import {
  ApplyToProjectRequestDto,
  ChangeApplicationStatus,
} from '@modules/projects/dto/apply.dto';
import { ApplicationResponseDto } from '@modules/projects/dto/ok-responses/apply.ok-response.dto';
import { ApiOkResponseCommon } from '@common/decorators/response/api-ok-response-common.decorator';

@Controller({
  path: 'projects',
  version: '1',
})
@ApiTags(API_TAGS.PROJECT)
@ApiBearerAuth()
export class ApplyController {
  constructor(
    private readonly projectService: ProjectsService,
    private readonly formService: FormService,
    private readonly matchingRoundService: MatchingRoundService,
    private readonly applyService: ApplyService,
    private readonly reqContext: RequestContextService,
    private readonly userService: UsersService,
  ) {}

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
  @ApiOkResponseCommon(ApplicationResponseDto)
  @Post(':projectId/form/:formId/apply')
  async applyToProject(
    @Param('projectId') projectId: string,
    @Param('formId') formId: string,
    @Body() body: ApplyToProjectRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    return this.applyService.applyToProjectByFormId(
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
  @ApiOkResponseCommon(ApplicationResponseDto)
  @Get(':projectId/apply/:applicationId')
  async getApplication(@Param('applicationId') applicationId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.applyService.throwIfUserNotApplicationOwner(
      userId,
      applicationId,
    );

    return this.applyService.getApplicationByApplicationId(applicationId);
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
  @ApiOkResponseCommon(ApplicationResponseDto)
  @Delete(':projectId/apply/:applicationId')
  async deleteApplicationForm(@Param('applicationId') applicationId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.applyService.throwIfUserNotApplicationOwner(
      userId,
      applicationId,
    );

    return this.applyService.deleteApplicationByApplicationId(applicationId);
  }

  // Plan 전용, 지원서 상태 변경
  @ApiOkResponseCommon(ApplicationResponseDto)
  @Post(':projectId/apply/:applicationId/status')
  async changeApplicationStatus(
    @Param('projectId') projectId: string,
    @Param('applicationId') applicationId: string,
    @Body() body: ChangeApplicationStatus,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(userId, projectId);

    // 지원서가 제출 상태인 경우에만 변경 가능, 이미 합격/불합격된 지원서는 변경 불가
    await this.applyService.throwIfApplicationStatusNotSubmitted(applicationId);

    return this.applyService.changeApplicationStatus(
      applicationId,
      body.status,
    );
  }
}
