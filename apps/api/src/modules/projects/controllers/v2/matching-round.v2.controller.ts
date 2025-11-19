import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  LoggerService,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CreateMatchingRoundDtoV2, UpdateMatchingRoundDtoV2 } from '@upms/shared';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { ParseBigIntPipe } from '@common/pipes/parse-bigint.pipe';

import { MatchingRoundV2Service } from '@modules/projects/services/v2/matching-round.v2.service';

@Controller({
  path: 'matching-rounds',
  version: '2',
})
@ApiTags(API_TAGS.MATCHING_ROUND)
@ApiBearerAuth()
export class MatchingRoundV2Controller {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly matching: MatchingRoundV2Service,
  ) {}

  @Get('')
  async getCurrentMatchingRound(
    @Query('type') type: 'closest' | 'current',
    @Query('chapterId', ParseBigIntPipe) chapterId: bigint,
  ) {
    if (type === 'closest') {
      return this.matching.getClosestMatchingRound(chapterId);
    } else if (type === 'current') {
      return this.matching.getCurrentMatchingRounds(chapterId);
    } else {
      // Handle invalid type
      throw new BadRequestException('잘못된 Query 파라미터 입니다.');
    }
  }

  @Get(':matchingRoundId')
  async getMatchingRound(@Param('matchingRoundId', ParseBigIntPipe) matchingRoundId: bigint) {
    return this.matching.getMatchingRoundById(matchingRoundId);
  }

  @Post()
  async createMatchingRound(@Body() body: CreateMatchingRoundDtoV2) {
    return this.matching.createMatchingRound(body);
  }

  @Patch(':matchingRoundId')
  async updateMatchingRound(
    @Param('matchingRoundId', ParseBigIntPipe) matchingRoundId: bigint,
    @Body() body: UpdateMatchingRoundDtoV2,
  ) {
    return this.matching.updateMatchingRound(matchingRoundId, body);
  }

  @Delete(':matchingRoundId')
  async deleteMatchingRound(@Param('matchingRoundId', ParseBigIntPipe) matchingRoundId: bigint) {
    return this.matching.deleteMatchingRound(matchingRoundId);
  }
}
