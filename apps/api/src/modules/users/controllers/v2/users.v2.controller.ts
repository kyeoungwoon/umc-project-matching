import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ChallengerWithSchoolDto } from '@upms/shared/dist/users/dto/user.v2.dto';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@ApiTags(API_TAGS.USERS)
@ApiBearerAuth()
@Controller({
  path: 'users',
  version: '2',
})
export class UsersV2Controller {
  constructor(
    private readonly user: UsersServiceV2,
    private readonly requestContext: RequestContextService,
  ) {}

  @Get('me')
  async getMyProfile(): Promise<ChallengerWithSchoolDto> {
    const userId = this.requestContext.getOrThrowUserIdAsBigInt();

    return this.user.getChallengerWithSchool(userId);
  }
}
