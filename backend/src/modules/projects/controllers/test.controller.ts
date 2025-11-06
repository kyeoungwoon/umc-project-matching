import { Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { FormService } from '@modules/projects/services/form.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { ApplyService } from '@modules/projects/services/apply.service';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersService } from '@modules/users/services/users.service';
import { TestCreateMatchingRoundResponseDto } from '@modules/projects/dto/ok-responses/test.ok-response.dto';
import { ApiOkResponseCommon } from '@common/decorators/response/api-ok-response-common.decorator';

@Controller({
  path: 'projects/test',
  version: '1',
})
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
export class TestController {
  constructor(
    private readonly projectService: ProjectsService,
    private readonly formService: FormService,
    private readonly matchingRoundService: MatchingRoundService,
    private readonly applyService: ApplyService,
    private readonly reqContext: RequestContextService,
    private readonly userService: UsersService,
  ) {}

  @Post('matching-round')
  @ApiOperation({
    summary: '[테스트용] 매칭 라운드 생성',
    description:
      '현재 시간 기준 1시간 전부터 1시간 후까지의 매칭 라운드를 생성합니다.',
  })
  @ApiOkResponseCommon(TestCreateMatchingRoundResponseDto)
  async testCreateMatchingRound() {
    const startDatetime = new Date(Date.now() - 60 * 60 * 1000);
    const endDatetime = new Date(Date.now() + 60 * 60 * 1000);

    return this.matchingRoundService.createMatchingRound({
      name: '테스트용 매칭 라운드',
      startDatetime,
      endDatetime,
    });
  }
}
