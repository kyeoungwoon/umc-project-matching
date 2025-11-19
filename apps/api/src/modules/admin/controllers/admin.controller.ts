import {
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
import { ApiBearerAuth, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

import { CreateSchoolDtoV2 } from '@upms/shared';
import { CreateSchoolBulkDtoV2 } from '@upms/shared/dist/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { Public } from '@modules/auth/decorators/public.decorator';
import { AuthService } from '@modules/auth/services/auth.service';
import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@Controller({
  path: 'admin',
  version: '1',
})
@ApiTags(API_TAGS.ADMIN)
@Public()
@ApiBearerAuth()
export class AdminController {
  constructor(
    private readonly auth: AuthService,
    private readonly user: UsersServiceV2,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @ApiOperation({
    summary: '새로운 학교 생성',
  })
  @Post('school')
  async createSchool(@Body() body: CreateSchoolDtoV2) {
    return this.user.createSchool(body);
  }

  @ApiOperation({
    summary: '새로운 학교 생성',
  })
  @Post('school/bulk')
  async createSchoolBulk(@Body() body: CreateSchoolBulkDtoV2) {
    return this.user.createSchoolBulk(body.schools);
  }

  @ApiOperation({
    summary: '지원서 조회 (지부, 파트, 매칭 차수, 학교, 챌린저 별로 필터링 가능)',
  })
  @Get('applications')
  async getApplications(@Query() query: any) {}

  @Post('projects/:projectId/ramdom-match')
  async randomMatchToProject() {}

  @Patch('applications/:applicationId')
  async updateApplication() {}

  @Delete('applications/:applicationId')
  async deleteApplication() {}
}
