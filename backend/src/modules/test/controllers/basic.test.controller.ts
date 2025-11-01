import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { Public } from '@modules/auth/decorators/public.decorator';
import { ChallengerImportService } from '@modules/test/service/seed.service';

@Controller({
  version: VERSION_NEUTRAL,
  path: 'test/basic',
})
@Public()
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
export class BasicTestController {
  constructor(private readonly seeder: ChallengerImportService) {}

  @Get('mirror')
  mirror(@Body() body: any, @Query() query: any) {
    return {
      body,
      query,
    };
  }

  @Post('seed-challenger')
  async seedChallenger() {
    const EXCEL_FILE_PATH =
      '/Users/haneul/GitHub/umc/umc-project-matching/nestjs/src/assets/umc-list.xlsx';
    await this.seeder.importFromExcel(EXCEL_FILE_PATH);

    return '완료되었습니다';
  }
}
