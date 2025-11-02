import {
  Body,
  Controller,
  Get,
  Inject,
  LoggerService,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
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
  CreateMatchingRoundDto,
  QueryMatchingRoundsDto,
} from '@modules/projects/dto/apply.dto';
import { MatchingRoundResponseDto } from '@modules/projects/dto/ok-responses/matching-round.ok-response.dto';
import { ApiOkResponseCommon } from '@common/decorators/response/api-ok-response-common.decorator';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Controller({
  path: 'projects/matching-round',
  version: '1',
})
@ApiTags(API_TAGS.MATCHING_ROUND)
@ApiBearerAuth()
export class MatchingRoundController {
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
    summary: '현재 매칭 세션 가져오기',
    description:
      '현재 시간을 기준으로 매칭 세션을 가져옵니다. 여러 개의 매칭 세션이 있을 경우, 그 중 시작시간이 가장 늦은 것을 기준으로 가져옵니다.',
  })
  @ApiOkResponseCommon(MatchingRoundResponseDto)
  @Get('current')
  async getCurrentMatchingRound() {
    return this.matchingRoundService.getOrThrowCurrentProjectMatchingRound();
  }

  @ApiOperation({
    summary: '매칭 라운드 생성',
    description:
      '이름, 시작 시간, 종료 시간을 기준으로 매칭 라운드를 생성합니다.',
  })
  @ApiOkResponseCommon(MatchingRoundResponseDto)
  @Post('')
  createMatchingRound(@Body() body: CreateMatchingRoundDto) {
    this.logger.log(`CREATE_MATCHING_ROUND_REQUEST`, body);
    return this.matchingRoundService.createMatchingRound(body);
  }

  // Body로 제공된 start ~ end 사이의 matching round를 반환합니다.
  @ApiOperation({
    summary: '매칭 라운드 조회',
    description:
      'Body로 제공된 start ~ end 사이의 matching round를 반환합니다.',
  })
  @ApiOkResponseCommon(MatchingRoundResponseDto)
  @ApiQuery({
    name: 'start',
    description: '조회할 매칭 라운드의 시작 날짜 (ISO 8601 형식)',
    required: true,
  })
  @ApiQuery({
    name: 'end',
    description: '조회할 매칭 라운드의 종료 날짜 (ISO 8601 형식)',
    required: true,
  })
  @Get('query')
  getMatchingRoundByStartEndDatetime(@Query() query: QueryMatchingRoundsDto) {
    const startDate = new Date(query.start);
    const endDate = new Date(query.end);

    console.log('startDate', startDate);
    console.log('endDate', endDate);

    return this.matchingRoundService.getAllProjectMatchingRoundByStartEndDatetime(
      startDate,
      endDate,
    );
  }

  // get all matching rounds
  @ApiOperation({
    summary: '모든 매칭 라운드 조회',
    description: '모든 매칭 라운드를 조회합니다.',
  })
  @ApiOkResponseCommon(MatchingRoundResponseDto)
  @Get('all')
  getAllMatchingRounds() {
    return this.matchingRoundService.getAllMatchingRounds();
  }

  // TODO: 여러개 가져올 수 있도록 변경, 그리고 그 전에 Join으로 가져올 수 있도록 테이블 변경
  @Get(':matchingRoundId')
  @ApiOperation({
    summary: '매칭 라운드 ID로 매칭 라운드 조회',
    description: '매칭 라운드 ID로 매칭 라운드를 조회합니다.',
  })
  @ApiOkResponseCommon(MatchingRoundResponseDto)
  async getMatchingRoundById(
    @Param('matchingRoundId') matchingRoundId: string,
  ) {
    return this.matchingRoundService.getOrThrowMatchingRound(matchingRoundId);
  }
}
