import { Injectable } from '@nestjs/common';

import { GisuResponseDto } from '@upms/shared/dist/users';

import { PostgreSQLPrismaService } from '@modules/prisma/services/postgresql.prisma.service';

@Injectable()
export class GisuV2Service {
  constructor(private readonly postgre: PostgreSQLPrismaService) {}

  async getCurrentGisu(): Promise<GisuResponseDto> {
    const currentGisu = await this.postgre.gisu.findFirst({
      where: {
        isCurrent: true,
      },
      orderBy: { id: 'desc' },
    });

    return GisuResponseDto.from(currentGisu);
  }
}
