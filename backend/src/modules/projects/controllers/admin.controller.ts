import { Controller, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { FormService } from '@modules/projects/services/form.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { ApplyService } from '@modules/projects/services/apply.service';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersService } from '@modules/users/services/users.service';

@Controller({
  path: 'projects/admin',
  version: '1',
})
@ApiTags(API_TAGS.ADMIN)
@ApiBearerAuth()
export class AdminController {
  constructor(
    private readonly projectService: ProjectsService,
    private readonly formService: FormService,
    private readonly matchingRoundService: MatchingRoundService,
    private readonly applyService: ApplyService,
    private readonly reqContext: RequestContextService,
    private readonly userService: UsersService,
  ) {}

  // 지원 현황 - 시간 순, 프로젝트별, 인원 별, 최종합격 인원
  async getApplicationStatus(@Query() query: any) {}

  // 남는 자리 랜덤매칭 기능
  async randomMatchForRemainingSeats() {}

  // 팀 매칭 마스터시트와 동일한 양식으로 제공할 수 있도록 함
}
