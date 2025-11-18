import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Inject,
  LoggerService,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { ApplyToProjectRequestDto, ChangeApplicationStatus } from '@upms/shared';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { CHALLENGER_ROLE, CheckChallengerRole } from '@common/decorators/challenger-role.decorator';
import { ApiOkResponseCommon } from '@common/decorators/response/api-ok-response-common.decorator';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { ChallengerRoleGuard } from '@modules/auth/guards/challenger-guard';
import { ApplicationResponseDto } from '@modules/projects/dto/ok-responses/apply.ok-response.dto';
import { ApplyService } from '@modules/projects/services/apply.service';
import { FormService } from '@modules/projects/services/form.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { UsersService } from '@modules/users/services/users.service';

@Controller({
  path: 'projects/applications',
  version: '1',
})
@ApiTags(API_TAGS.APPLY)
@ApiBearerAuth()
@UseGuards(ChallengerRoleGuard)
export class ApplyController {
  private LOG_CONTEXT = 'ApplyController';

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
    summary: '로그인한 사용자가 작성한 모든 지원서를 조회합니다.',
    description: '',
  })
  @Get('/me')
  async getMyApplications() {
    const userId = this.reqContext.getOrThrowUserId();

    this.logger.log(`본인이 작성한 지원서를 조회하였습니다. 챌린저 ${userId}`, this.LOG_CONTEXT);
    return this.applyService.getMyApplications(userId);
  }

  @ApiOperation({
    summary: '폼을 제출합니다. (프로젝트에 지원합니다)',
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

    // TODO: 현재 차수가 지원서의 지원 가능 차수에 해당하는지 확인
    const currentRound = await this.matchingRoundService.getCurrentMatchingRound();

    const currentRoundApplications = await this.applyService.getApplicationByUserAndMatchingRound(
      userId,
      currentRound.id,
    );

    if (currentRoundApplications.length > 0) {
      this.logger.warn(
        `중복 지원 시도, 챌린저 ${userId} 프로젝트 ${projectId} 폼 ${formId} 현재 매칭 차수 ${currentRound.id}`,
        this.LOG_CONTEXT,
      );

      throw new ConflictException('동일 차수 내 중복 지원은 허용되지 않습니다.');
    }

    // 폼 정보를 가져옵니다, 없으면 throw error!
    // const form = await this.formService.getOrThrowFormByFormId(formId);

    // TODO: 폼에 지원 가능한 차수가, 현재 차수와 일치하는지 확인합니다.
    // if (!form.availableMatchingRounds.includes(currentRound.id)) {
    //   this.logger.warn(
    //     `USER_ID_${userId}_FORBIDDEN_APPLY_INVALID_MATCHING_ROUND_TO_PROJECT_ID_${projectId}_FORM_ID_${formId}_CURRENT_ROUND_ID_${currentRound.id}`,
    //   );
    //   throw new ForbiddenException(
    //     '현재 매칭 차수에서는 해당 지원서로 지원할 수 없습니다.',
    //   );
    // }

    // 지원하고자 하는 프로젝트에 본인의 TO가 남아있는지 확인합니다.
    const { part } = await this.userService.getUserByUserId(userId);
    await this.projectService.checkIfToLeftInProject(projectId, part);

    // DB 상에도 Unique Constraint를 적용하여 이중으로 확인합니다.
    await this.applyService.applyToProjectByFormId(formId, userId, body.answers);

    this.logger.log(
      `프로젝트 지원 성공, 챌린저 ${userId} 프로젝트 ${projectId} 폼 ${formId} 폼 응답 ${JSON.stringify(body.answers)}`,
      this.LOG_CONTEXT,
    );

    // 사용자가 동일 차수에 지원했는지 여부는 DB에서 unique 제약으로 확인합니다.
    return;
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
    await this.applyService.throwIfUserNotApplicationOwner(userId, applicationId);

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
    await this.applyService.throwIfUserNotApplicationOwner(userId, applicationId);

    this.logger.warn(`지원서를 삭제하였습니다. 챌린저 ${userId} 삭제된 지원서 ${applicationId}`);

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

    // 지원서의 매칭 차수가 종료되었는지 확인합니다.
    await this.applyService.checkApplicationMatchingRoundExpired(applicationId);

    // 지원서가 제출 상태인 경우에만 변경 가능, 이미 합격/불합격된 지원서는 변경 불가
    await this.applyService.throwIfApplicationStatusNotSubmitted(applicationId);

    // 프로젝트에, 상태를 변경하고자 하는 지원자의 파트에 대한 TO가 있는지 확인합니다.
    // 지원 시점에도 확인하지만, 지원서 상태 변경 시에도 중복 확인 처리합니다.
    // 합격 처리할 때만 고려하면 됩니다.

    // 지원서를 합격시켜도 되는지 확인합니다.

    await this.applyService.isApplicationStatusChangeValid(applicationId, body.status);

    // 지원서를 불합격시킬 수 있는지 확인합니다.

    this.logger.warn(
      `지원서의 상태를 ${body.status} 로 변경합니다. 챌린저 ${userId} 지원서 ${applicationId}`,
    );

    return this.applyService.changeApplicationStatus(applicationId, body.status);
  }
}
