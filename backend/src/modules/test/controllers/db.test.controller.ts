import { Controller, Get, Post, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { Public } from '@modules/auth/decorators/public.decorator';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';

@Controller({
  version: VERSION_NEUTRAL,
  path: 'test/db',
})
@Public()
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
export class DBTestController {
  constructor(private readonly mongo: MongoDBPrismaService) {}

  @Post('mongo/create-test')
  async mongoCreateTest() {
    return;
  }
}
