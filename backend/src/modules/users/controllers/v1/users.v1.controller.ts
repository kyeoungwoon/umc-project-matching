import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

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

  @Post('me')
  me() {
    const userId = this.requestContextService.getOrThrowUserId();

    return this.usersService.getUserInfo(userId);
  }

  @Post('projects')
  createProject() {
    return true;
  }

  @Patch('projects/:projectId')
  updateProject() {
    return true;
  }

  @Post('projects/:projectId/forms')
  createProjectApplicationForm() {
    return true;
  }

  @Delete('projects/:projectId/forms')
  deleteProjectApplicationForm() {
    return true;
  }

  @Get('projects/:projectId/forms')
  getProjectApplicationForm() {
    return true;
  }

  @Post('projects/:projectId/forms/:formId')
  changeApplicationStatus() {
    return true;
  }
}
