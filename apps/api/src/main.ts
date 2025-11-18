import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as Sentry from '@sentry/nestjs';

import { corsOptions } from '@common/configs/cors-options.config';
import { API_TAGS } from '@common/constants/api-tags.constants';

import { AppModule } from '@modules/app/app.module';

BigInt.prototype['toJSON'] = function () {
  return this.toString();
};

async function bootstrap() {
  Sentry.init({
    dsn: process.env.SENTRY_DSN ?? '',
    tracesSampleRate: 1.0,
    // enableLogs: true,
  });

  const app = await NestFactory.create(AppModule, {
    cors: corsOptions,
    // logger: WinstonModule.createLogger(winstonLoggerOptions),
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  if (process.env.NODE_ENV !== 'production') {
    // DocumentBuilder를 이용해 Swagger 문서 기본 정보 구성
    const configBuilder = new DocumentBuilder()
      .setTitle('UPMS API Docs')
      .setDescription(
        '## UMC Project Matching System, UPMS\n\n' +
          '#### Made By : 중앙대학교 하늘/박경운, 보니/정보운\n\n' +
          '##### Suppoted By : 중앙대학교 벨라/황지원',
      )
      .setVersion('0.1.0')
      .addBearerAuth()
      .addServer('http://localhost:9999', 'Local')
      .addServer('https://api.upms.kyeoungwoon.kr', 'Production')
      .setLicense('MIT', 'https://opensource.org/license/mit/');

    Object.values(API_TAGS).forEach((tag) => {
      configBuilder.addTag(tag, `APIs`); // 각 태그에 설명 추가
    });

    const config = configBuilder.build();

    // 설정을 바탕으로 문서 생성
    const document = SwaggerModule.createDocument(app, config);

    // Swagger UI 경로 지정, 예: /api-docs
    SwaggerModule.setup('docs', app, document, {
      customSiteTitle: 'UMC Team Matching System API Docs',
      swaggerOptions: {
        persistAuthorization: true,
      },
    });
  }

  // PIPE, INTERCEPTOR, FILTER 모두 app.module.ts 로 이동되었습니다. Nest.js에서 권장되는 구조를 따라 봅시다!

  await app.listen(process.env.PORT ?? 7777);
}

bootstrap().then(() => {
  console.log(
    `🚀 NEST.JS SERVER RUNNING!\n` +
      `──────────────────────────────\n` +
      `📦 PORT      : ${process.env.PORT ?? '[ENV에 PORT 미설정]'}\n` +
      `🌱 NODE_ENV  : ${process.env.NODE_ENV ?? '[ENV에 NODE_ENV 미설정]'}\n` +
      `──────────────────────────────`,
  );
});
