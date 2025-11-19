import { Controller, Inject, LoggerService } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';

@Controller({
  path: 'projects',
  version: '1',
})
@ApiTags(API_TAGS.MATCHING_ROUND)
@ApiBearerAuth()
export class MatchingRoundV2Controller {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  async getAllMatchingRounds() {
    // Implementation goes here
  }
}
