import { Inject, Injectable, LoggerService, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

import { Prisma, PrismaClient } from '@generated/prisma/postgresql';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class PostgreSQLPrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {
    super({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'event', level: 'error' },
        { emit: 'event', level: 'info' },
        { emit: 'event', level: 'warn' },
      ],
    });
  }

  async onModuleInit() {
    await this.$connect();
    (this.$on as any)('error', (event: any) => {
      this.logger.error(`[Prisma Error]: ${event.message}`, 'POSTGRESQL_PRISMA_ERROR');
    });
    (this.$on as any)('info', (event: any) => {
      this.logger.debug?.(`[Prisma Info]: ${event.message}`, 'POSTGRESQL_PRISMA_INFO');
    });
    (this.$on as any)('warn', (event: Prisma.LogEvent) => {
      this.logger.warn(`[Prisma Warn]: ${event.message}`, 'POSTGRESQL_PRISMA_WARN');
    });

    const IS_PROD = process.env.NODE_ENV === 'production';

    (this.$on as any)('query', (event: Prisma.QueryEvent) => {
      // const prismaTraceId = randomUUID();
      // TODO: 이거 왜 안되는지 해결
      // const prismaTraceId = this.requestContextService.getTraceId();
      this.logger.log(
        // ` [TARGET] ${event.target} [DURATION] ${event.duration} ms, [QUERY] ${IS_PROD ? event.query : '...'}`,
        ` [TARGET] ${event.target} [DURATION] ${event.duration} ms, [QUERY] ${event.query}`,
        'POSTGRESQL_PRISMA_QUERY',
      );
      // this.logger.log(
      //   `[Query]: ${event.query}, PRISMA_TRACE_ID : ${prismaTraceId}`,
      //   'PRISMA_QUERY',
      // );
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
