import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { ApplyService } from '@modules/projects/services/v1/apply.service';
import { FormService } from '@modules/projects/services/v1/form.service';
import { MatchingRoundService } from '@modules/projects/services/v1/matching-round.service';
import { ProjectsService } from '@modules/projects/services/v1/projects.service';
import { UsersService } from '@modules/users/services/v1/users.service';

@Controller({
  path: 'projects',
  version: '1',
})
@ApiTags(API_TAGS.MATCHING_ROUND)
@ApiBearerAuth()
export class MatchingRoundControllerV2 {
  constructor() {}

  async getAllMatchingRounds() {
    // Implementation goes here
  }
}
