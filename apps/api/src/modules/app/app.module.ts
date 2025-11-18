import {
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';

import cookieParser from 'cookie-parser';
import { WinstonModule } from 'nest-winston';

import { winstonLoggerOptions } from '@common/configs/winston.config';
import { AllExceptionsFilter } from '@common/filters/all-exception.filter';
import { HttpExceptionFilter } from '@common/filters/http-exception.filter';
import { PrismaExceptionFilter } from '@common/filters/prisma-exception.filter';
import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import { LoggerMiddleware } from '@common/middleware/logger.middleware';
import { RequestContextMiddleware } from '@common/middleware/request-context.middleware';

import { AlsModule } from '@modules/als/als.module';
import { AuthModule } from '@modules/auth/auth.module';
import { JwtConfig } from '@modules/auth/config/jwt.config';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { TestModule } from '@modules/test/test.module';
import { UsersModule } from '@modules/users/users.module';
import { ProjectsModule } from '@modules/projects/projects.module';
import { ChallengerRoleGuard } from '@modules/auth/guards/challenger-guard';
import { CacheModule } from '@nestjs/cache-manager';
import { EnvGuard } from '@common/guards/env.guard';

@Module({
  imports: [
    // Global
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', `.env.${process.env.NODE_ENV}`, '.env'],
      load: [
        JwtConfig,
      ],
      // validate,
    }),
    WinstonModule.forRoot(winstonLoggerOptions),
    CacheModule.register({ isGlobal: true }),
    // SentryModule.forRoot(),
    AlsModule,
    PassportModule,
    // Non-Global
    AuthModule,
    UsersModule,
    PrismaModule,
    TestModule,
    ProjectsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    // ===== FILTER =====
    // FILTER 간에는, 순서가 중요합니다.
    // 더 구체적인 ExceptionFilter가 뒤에 와야 합니다.
    // -> FILTER는 provider에 등록된거 기준으로 뒤에서부터 적용되기 때문!
    // e.g. HttpExceptionFilter가 AllExceptionsFilter보다 뒤에 와야 함
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: PrismaExceptionFilter,
    },
    // ===== PIPE =====
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        // DTO에 정의되지 않은 속성은 자동으로 제거합니다.
        whitelist: true,
        // DTO에 정의되지 않은 속성이 들어오면 에러를 발생시킵니다.
        // 개발 과정에서 일단 제거 ..
        // forbidNonWhitelisted: true,
      }),
    },
    ChallengerRoleGuard,
    EnvGuard,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cookieParser(), RequestContextMiddleware, LoggerMiddleware)
      .forRoutes('*');
  }
}
