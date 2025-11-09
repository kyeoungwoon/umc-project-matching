import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
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
import {
  CHALLENGER_ROLE,
  CheckChallengerRole,
} from '@common/decorators/challenger-role.decorator';
import { ChallengerRoleGuard } from '@modules/auth/guards/challenger-guard';

@Controller({
  path: 'projects/applications',
  version: '1',
})
@ApiTags(API_TAGS.APPLY)
@ApiBearerAuth()
@UseGuards(ChallengerRoleGuard)
export class ApplyController {
  constructor(
    private readonly projectService: ProjectsService,
    private readonly formService: FormService,
    private readonly matchingRoundService: MatchingRoundService,
    private readonly applyService: ApplyService,
    private readonly reqContext: RequestContextService,
    private readonly userService: UsersService,
  ) {}

  // 내가 작성한 지원서 모두 보기
  @ApiOperation({
    summary: '내가 작성한 지원서 모두 보기',
    description: '',
  })
  @Get('/me')
  async getMyApplications() {
    const userId = this.reqContext.getOrThrowUserId();

    return this.applyService.getMyApplications(userId);
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
  @ApiOkResponseCommon(ApplicationResponseDto)
  @Post('project/:projectId/form/:formId/apply')
  async applyToProject(
    @Param('projectId') projectId: string,
    @Param('formId') formId: string,
    @Body() body: ApplyToProjectRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    // 현재 차수가 지원서의 지원 가능 차수에 해당하는지 확인
    const currentRound =
      await this.matchingRoundService.getOrThrowCurrentProjectMatchingRound();

    // 폼 정보를 가져옵니다, 없으면 throw error!
    const form = await this.formService.getOrThrowFormByFormId(formId);

    // 현재 매칭 차수가 폼의 지원 가능 차수에 포함되어 있는지 확인
    if (form.availableMatchingRounds.includes(currentRound.id)) {
      throw new ForbiddenException(
        '현재 매칭 차수에서는 해당 지원서로 지원할 수 없습니다.',
      );
    }

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
  @Get('project/:projectId/apply/:applicationId')
  async getApplication(@Param('applicationId') applicationId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.applyService.throwIfUserNotApplicationOwner(
      userId,
      applicationId,
    );

    return this.applyService.getApplication(applicationId);
  }

  @ApiOperation({
    summary: '지원서 삭제',
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
  @Delete('project/:projectId/apply/:applicationId')
  async deleteApplicationForm(@Param('applicationId') applicationId: string) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.applyService.throwIfUserNotApplicationOwner(
      userId,
      applicationId,
    );

    return this.applyService.deleteApplication(applicationId);
  }

  // ========== Plan Only ==========

  @ApiOkResponseCommon(ApplicationResponseDto)
  @Post('project/:projectId/apply/:applicationId/status')
  @CheckChallengerRole(CHALLENGER_ROLE.PLAN)
  @ApiOperation({
    summary: '[Plan Only] 지원서 상태 변경',
    description:
      '지원서 상태를 변경합니다. (합격 / 불합격) 이미 합격/불합격된 지원서는 변경할 수 없습니다.',
  })
  async changeApplicationStatus(
    @Param('projectId') projectId: string,
    @Param('applicationId') applicationId: string,
    @Body() body: ChangeApplicationStatus,
  ) {
    // 해당 프로젝트의 Plan이 아닌 경우 거부합니다.
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
