import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { ApplyService } from '@modules/projects/services/apply.service';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersService } from '@modules/users/services/users.service';
import { CreateFormRequestV2Dto } from '@modules/projects/dto/form.dto';
import { FormServiceV2 } from '@modules/projects/services/v2/form.v2.service';
import { plainToInstance } from 'class-transformer';
import { FormCreateResponseDto } from '@modules/projects/dto/v2/form-create-response.dto';

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
  ) {}

  @ApiOperation({
    summary: '지원서(폼) 생성하기',
  })
  @Post(':projectId/form')
  async createForm(
    @Param('projectId') projectId: string,
    @Body() body: CreateFormRequestV2Dto,
  ) {
    // 본인의 프로젝트인지 확인해야 함
    const userId = this.reqContext.getOrThrowUserId();
    await this.projectService.throwIfUserNotPlanByProjectId(userId, projectId);

    // 매칭 차수로 주장되는 ID가 유효한지 확인
    await this.matchingRoundService.throwIfNotValidMatchingRoundIds(
      body.availableMatchingRounds,
    );

    const newForm = await this.formV2.createForm(projectId, body);
    return plainToInstance(FormCreateResponseDto, newForm, {
      excludeExtraneousValues: true,
    });
  }
}
