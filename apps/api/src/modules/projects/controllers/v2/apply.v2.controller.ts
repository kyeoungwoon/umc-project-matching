import { Body, Controller, Get, Inject, LoggerService, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ApplyToProjectRequestDto } from '@upms/shared';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { ApplyService } from '@modules/projects/services/apply.service';
import { FormService } from '@modules/projects/services/form.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { UsersService } from '@modules/users/services/users.service';

@Controller({
  path: 'projects',
  version: '2',
})
@ApiTags(API_TAGS.APPLY)
@ApiBearerAuth()
export class ApplyControllerV2 {
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

  @Get('applications/my')
  async getApplicationsV2(@Query('userId') userId: string) {
    return;
  }

  @Get('application/:applicationId')
  async getApplicationV2() {
    // Implementation goes here
    return;
  }

  @Post(':projectId/form/:formId/apply')
  async applyToProjectV2(
    @Param('projectId') projectId: string,
    @Param('formId') formId: string,
    @Body() body: ApplyToProjectRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);

    this.logger.log(
      `USER_ID_${userId}_V2_PROJECT_APPLY_PROJECT_ID_${projectId}_FORM_ID_${formId}`,
      body.answers,
    );

    return;
  }
}
