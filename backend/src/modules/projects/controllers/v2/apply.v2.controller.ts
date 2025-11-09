import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { FormService } from '@modules/projects/services/form.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { ApplyService } from '@modules/projects/services/apply.service';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersService } from '@modules/users/services/users.service';
import { ApplyToProjectRequestDto } from '@modules/projects/dto/apply.dto';

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
  ) {}

  @Get('applications/my')
  async getApplicationsV2(@Query('userId') userId: string) {}

  @Get('application/:applicationId')
  async getApplicationV2() {
    // Implementation goes here
  }

  @Post(':projectId/form/:formId/apply')
  async applyToProjectV2(
    @Param('projectId') projectId: string,
    @Param('formId') formId: string,
    @Body() body: ApplyToProjectRequestDto,
  ) {
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfFormNotBelongsToProject(formId, projectId);
  }
}
