import {
  Controller,
  Get,
  Inject,
  LoggerService,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
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
  @Get('/application/all')
  async getAllApplications() {
    return this.applyService.adminGetAllApplications();
  }

  // 남는 자리 랜덤매칭 기능
  @Get('/projects/random-match')
  async randomMatchForRemainingSeats() {}

  // 팀 매칭 마스터시트와 동일한 양식으로 제공할 수 있도록 함
}
