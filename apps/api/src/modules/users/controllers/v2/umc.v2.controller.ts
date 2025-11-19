import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateGisuDtoV2 } from '@upms/shared/dist/common';
import { CreateGisuChapterDtoV2 } from '@upms/shared/dist/common/dto';
import { CreateChapterSchoolDtoV2 } from '@upms/shared/dist/common/dto/create-update-entity.dto';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { ParseBigIntPipe } from '@common/pipes/parse-bigint.pipe';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { UmcV2Service } from '@modules/users/services/v2/umc.v2.service';
import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@Controller({
  version: '2',
  path: 'umc',
})
@ApiTags(API_TAGS.UMC)
@ApiBearerAuth()
export class UmcV2Controller {
  constructor(
    private readonly user: UsersServiceV2,
    private readonly umc: UmcV2Service,
    private readonly requestContext: RequestContextService,
  ) {}

  @ApiOperation({
    summary: '학교 목록 조회',
  })
  @Get('school')
  async getSchoolList() {
    return this.user.getSchoolList();
  }

  @ApiOperation({
    summary: '기수 목록을 각 기수의 지부와 함께 가져옵니다.',
  })
  @Get('gisu')
  async getGisu() {
    return this.umc.getGisuListWithChapters();
  }

  @ApiOperation({
    summary: '새로운 기수를 생성합니다.',
  })
  @Post('gisu')
  async createGisu(@Body() body: CreateGisuDtoV2) {
    return this.umc.createGisu(body);
  }

  @ApiOperation({
    summary: '기수에 소속된 지부를 생성합니다.',
  })
  @Post('chapter')
  async createChapter(@Body() body: CreateGisuChapterDtoV2) {
    return this.umc.createGisuChapter(body);
  }

  @ApiOperation({
    summary: '지부에 학교를 소속시킵니다.',
  })
  @Post('chapter/school')
  async assignSchoolsToChapter(@Body() body: CreateChapterSchoolDtoV2) {
    return this.umc.createChapterSchool(body);
  }

  @ApiOperation({
    summary: '기수 정보 및 소속 지부 조회',
  })
  @Get('gisu/:gisuId/chapters')
  async getChapters(@Param('gisuId', ParseBigIntPipe) gisuId: bigint) {
    return this.umc.getGisuWithChaptersById(gisuId);
  }

  @ApiOperation({
    summary: '지부 정보 및 소속 프로젝트 조회',
  })
  @Get('chapter/:chapterId/projects')
  async getChapter(@Param('chapterId', ParseBigIntPipe) chapterId: bigint) {
    return this.umc.getChapterWithProjectsById(chapterId);
  }
}
