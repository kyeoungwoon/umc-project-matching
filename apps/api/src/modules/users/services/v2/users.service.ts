import { Injectable } from '@nestjs/common';

import { PostgreSQLPrismaService } from '@modules/prisma/services/postgresql.prisma.service';

@Injectable()
export class UsersServiceV2 {
  constructor(private readonly postgre: PostgreSQLPrismaService) {}

  async getChallengerInfo(challengerId: bigint) {
    const challenger = await this.postgre.challenger.findUnique({
      where: {
        id: challengerId,
      },
    });

    return;
  }
}
