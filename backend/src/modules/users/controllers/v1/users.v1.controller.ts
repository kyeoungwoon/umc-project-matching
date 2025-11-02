import { Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { RequestContextService } from '@modules/als/services/request-context.service';
// 임시 유저 식별 (JWT 붙기 전까지 mock 헤더 사용)

import { UsersService } from '@modules/users/services/users.service';

@ApiTags(API_TAGS.USERS)
@ApiBearerAuth()
@Controller({
  path: 'users',
  version: '1',
})
export class UsersV1Controller {
  constructor(
    private readonly usersService: UsersService,
    private readonly requestContextService: RequestContextService,
  ) {}

  @Get('me')
  async getLoggedInUserInfo() {
    const userId = this.requestContextService.getOrThrowUserId();

    const userData = await this.usersService.getUserByUserId(userId);

    return { ...userData, password: '비밀번호는 비밀이지롱' };
  }
}
