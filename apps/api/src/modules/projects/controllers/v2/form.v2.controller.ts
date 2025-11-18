import { Body, Controller, Inject, LoggerService, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateFormRequestV2Dto } from '@upms/shared';
import { plainToInstance } from 'class-transformer';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { ApplyService } from '@modules/projects/services/v1/apply.service';
import { MatchingRoundService } from '@modules/projects/services/v1/matching-round.service';
import { ProjectsService } from '@modules/projects/services/v1/projects.service';
import { FormServiceV2 } from '@modules/projects/services/v2/form.v2.service';
import { UsersService } from '@modules/users/services/v1/users.service';

@Controller({
  path: 'projects',
  version: '2',
})
@ApiTags(API_TAGS.FORM)
@ApiBearerAuth()
export class FormControllerV2 {
  constructor(
    private readonly projectService: ProjectsService,
    private readonly formV2: FormServiceV2,
    private readonly matchingRoundService: MatchingRoundService,
    private readonly applyService: ApplyService,
    private readonly reqContext: RequestContextService,
    private readonly userService: UsersService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @ApiOperation({
    summary: '지원서(폼) 생성하기',
  })
  @Post(':projectId/form')
  async createForm(@Param('projectId') projectId: string, @Body() body: CreateFormRequestV2Dto) {
    // 본인의 프로젝트인지 확인해야 함
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(userId, projectId);

    // 매칭 차수로 주장되는 ID가 유효한지 확인
    await this.matchingRoundService.throwIfNotValidMatchingRoundIds(body.availableMatchingRounds);

    const newForm = await this.formV2.createForm(projectId, body);

    this.logger.log(`USER_ID_${userId}_V2_CREATE_FORM_ID_${newForm.id}_PROJECT_ID_${projectId}`);

    return;
  }
}
