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

import { CreateSchoolBulkDtoV2, CreateSchoolDtoV2 } from '@upms/shared';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { Public } from '@modules/auth/decorators/public.decorator';
import { AuthService } from '@modules/auth/services/auth.service';
import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@Controller({
  path: 'admin',
  version: '2',
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
    summary: '[중앙운영진 이상] 새로운 학교를 생성합니다.',
  })
  @Post('school')
  async createSchool(@Body() body: CreateSchoolDtoV2) {
    return this.user.createSchool(body);
  }

  @ApiOperation({
    summary: '[중앙운영진 이상] 새로운 학교를 단체로 생성합니다.',
  })
  @Post('school/bulk')
  async createSchoolBulk(@Body() body: CreateSchoolBulkDtoV2) {
    return this.user.createSchoolBulk(body.schools);
  }

  @ApiOperation({
    summary:
      '[각 학교 회장단 이상] 지원서 조회 (지부, 파트, 매칭 차수, 학교, 챌린저 별로 필터링 가능)',
  })
  @Get('applications')
  async getApplications(@Query() query: any) {}

  @ApiOperation({
    summary: '[지부 운영진 이상] 랜덤 매칭 차수에 특정 챌린저를 프로젝트에 매칭합니다.',
  })
  @Post('projects/:projectId/ramdom-match')
  async randomMatchToProject() {}

  @ApiOperation({
    summary: '[지부 운영진 이상] 지원서 상태를 변경합니다.',
  })
  @Patch('applications/:applicationId')
  async updateApplication() {}

  @ApiOperation({
    summary: '[지부 운영진 이상] 지원서를 삭제합니다.',
  })
  @Delete('applications/:applicationId')
  async deleteApplication() {}
}
