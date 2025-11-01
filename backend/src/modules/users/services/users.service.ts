import { Injectable } from '@nestjs/common';

import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: MongoDBPrismaService) {}

  //
}
