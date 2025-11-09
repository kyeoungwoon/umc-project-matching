import {
  Controller,
  Get,
  Post,
  UseGuards,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { Public } from '@modules/auth/decorators/public.decorator';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import { EnvGuard } from '@common/guards/env.guard';

@Controller({
  version: VERSION_NEUTRAL,
  path: 'test/db',
})
@Public()
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
@UseGuards(EnvGuard)
export class DBTestController {
  constructor(private readonly mongo: MongoDBPrismaService) {}

  @ApiOperation({
    summary: '[TEST] mongoDB test, 현재 비어있음',
    deprecated: true,
  })
  @Post('mongo/create-test')
  async mongoCreateTest() {
    return;
  }
}
