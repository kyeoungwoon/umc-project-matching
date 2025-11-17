import {Global, Module} from '@nestjs/common';

import {MongoDBPrismaService} from '@modules/prisma/services/mongodb.prisma.service';


@Global()
@Module({
  providers: [MongoDBPrismaService],
  exports: [MongoDBPrismaService],
})
export class PrismaModule {
}
