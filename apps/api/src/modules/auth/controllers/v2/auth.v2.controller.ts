import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateSchoolDtoV2 } from '@upms/shared';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@Controller({
  version: '2',
  path: 'auth',
})
@ApiTags(API_TAGS.AUTH)
@ApiBearerAuth()
export class AuthV2Controller {
  constructor(private readonly user: UsersServiceV2) {}

  @Get('school')
  async getSchoolList() {
    return this.user.getSchoolList();
  }

  @ApiOperation({
    summary: '새로운 학교 생성',
  })
  @Post('school')
  async createSchool(@Body() body: CreateSchoolDtoV2) {
    return this.user.createSchool(body);
  }

  @Post('login')
  async login() {}

  @Patch('password')
  async changePassword() {}
}
