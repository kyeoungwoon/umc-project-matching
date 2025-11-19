import { Controller, Get, Post, UseGuards, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { EnvGuard } from '@common/guards/env.guard';

import { Public } from '@modules/auth/decorators/public.decorator';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';

@Controller({
  version: '1',
  path: 'admin/db',
})
@Public()
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
@UseGuards(EnvGuard)
export class DBTestController {
  constructor(private readonly mongo: MongoDBPrismaService) {}

  @ApiOperation({
    summary: '[TEST] mongoDB admin, 현재 비어있음',
    deprecated: true,
  })
  @Post('mongo/create-admin')
  async mongoCreateTest() {
    return;
  }
}
