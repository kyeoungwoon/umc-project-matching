import { Global, Module } from '@nestjs/common';

import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import { PostgreSQLPrismaService } from '@modules/prisma/services/postgresql.prisma.service';

@Global()
@Module({
  providers: [MongoDBPrismaService, PostgreSQLPrismaService],
  exports: [MongoDBPrismaService, PostgreSQLPrismaService],
})
export class PrismaModule {}
