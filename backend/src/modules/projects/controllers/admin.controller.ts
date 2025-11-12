import {
  Controller,
  Get,
  Inject,
  LoggerService,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { FormService } from '@modules/projects/services/form.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { ApplyService } from '@modules/projects/services/apply.service';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersService } from '@modules/users/services/users.service';
import { ChallengerRoleGuard } from '@modules/auth/guards/challenger-guard';
import {
  CHALLENGER_ROLE,
  CheckChallengerRole,
} from '@common/decorators/challenger-role.decorator';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import {
  ApplicationStatusByProjectRequestQuery,
  ApplicationStatsByChallengerRequestQuery,
} from '@modules/projects/dto/admin.dto';

@Controller({
  path: 'projects/admin',
  version: '1',
})
@ApiTags(API_TAGS.ADMIN)
@ApiBearerAuth()
@UseGuards(ChallengerRoleGuard)
@CheckChallengerRole(CHALLENGER_ROLE.ADMIN)
export class AdminController {
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

  // 지원 현황 - 시간 순, 프로젝트별, 인원 별, 최종합격 인원
  // TODO: 임시로 확인을 위해 모든 지원서를 가져옵니다.
  @Get('application/all')
  async getAllApplications() {
    return this.applyService.adminGetAllApplications();
  }

  @ApiOperation({
    summary:
      '프로젝트에 대해서 파트별로 TO 및 차수 별 지원 현황을 요약해서 보내줍니다.',
  })
  @Get('applications')
  async getApplicationsSummary(
    @Query() query: ApplicationStatusByProjectRequestQuery,
  ) {
    // 프로젝트 마다 차수별로 지원 현황을 요약해서 제공
    const projectInfo = await this.projectService.getProjectById(
      query.projectId,
    );
    const projectApplicationStats =
      await this.applyService.getProjectPartToStatusStats(query.projectId);

    return {
      project: projectInfo,
      applicationStats: projectApplicationStats,
    };
  }

  // 챌린저 전부 조회 -> applications -> matchingRound, form->project
  @Get('applications/statistics/challenger')
  async getApplicationStatisticsByChallenger(
    @Query() query: ApplicationStatsByChallengerRequestQuery,
  ) {
    return this.applyService.getApplicationStatisticsByChallenger(
      query.part,
      query.school,
      query.challengerId,
    );
  }

  // 남는 자리 랜덤매칭 기능
  @Get('projects/random-match')
  async randomMatchForRemainingSeats() {}

  // 팀 매칭 마스터시트와 동일한 양식으로 제공할 수 있도록 함
}
