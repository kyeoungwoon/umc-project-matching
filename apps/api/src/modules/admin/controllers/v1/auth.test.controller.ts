import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

import { UserPartEnum } from '@generated/prisma/mongodb';
import { CreateBulkUserRequestDto } from '@upms/shared';
import { Request } from 'express';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { BypassResponseInterceptor } from '@common/decorators/bypass-response-interceptor.decorator';
import { ResponseMessage } from '@common/decorators/response/response-message.decorator';
import { EnvGuard } from '@common/guards/env.guard';

import { Public } from '@modules/auth/decorators/public.decorator';
import { AuthService } from '@modules/auth/services/v1/auth.service';
import { TokenAuthService } from '@modules/auth/services/v1/token.auth.service';

@Controller({
  version: '1',
  path: 'admin/auth',
})
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
@UseGuards(EnvGuard)
export class AuthTestController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenAuthService: TokenAuthService,
    private readonly configService: ConfigService,
  ) {}

  @ApiTags(API_TAGS.TEST)
  @Post('drop/:type')
  @ApiParam({
    name: 'type',
    description: '삭제할 데이터 타입',
    enum: ['school', 'challenger', 'all'],
  })
  @ApiOperation({
    summary: '[TEST] 모든 데이터 삭제',
  })
  @Public()
  dropAll(@Param() params: { type: string }) {
    return this.authService.dropTableByType(params.type);
  }

  @ApiOperation({
    summary: '[TEST] 토큰 검증 API',
    description: 'GET 요청을 보냈을 때 JwtGuard를 통과했는지 확인합니다.',
  })
  @Get('protected')
  @ResponseMessage('JWT Guard를 Pass 했습니다.')
  async tokenCheck(@Req() req: any) {
    const { userId, name, nickname } = req.user;

    return {
      userId: userId.toString(),
      name,
      nickname,
    };
  }

  @ApiTags(API_TAGS.TEST)
  @Post('admin/school/init')
  @ApiOperation({
    summary: '[TEST] 9th Leo 지부 학교 추가',
    description: '기존 학교는 모두 drop 처리합니다.',
  })
  @Public()
  async initSchool() {
    await this.authService.dropTableByType('school');

    const res = Promise.all([
      this.authService.createSchool('중앙대학교', 'cau'),
      this.authService.createSchool('동덕여자대학교', 'dongduk'),
      this.authService.createSchool('한국외국어대학교', 'hufs'),
      this.authService.createSchool('이화여자대학교', 'ewha'),
      this.authService.createSchool('단국대학교', 'danguk'),
    ]);

    return res;
  }

  @ApiTags(API_TAGS.TEST)
  @Post('admin/user/init')
  @ApiOperation({
    summary: '[TEST] 각 파트 사용자 임의 생성',
    description: '학교는 중앙대로 고정됩니다. 학번은 파트명으로 정해집니다.',
  })
  @Public()
  async createSampleUser() {
    const parts = ['ADMIN', 'PLAN', 'DESIGN', 'WEB', 'IOS', 'ANDROID', 'SPRINGBOOT', 'NODEJS'];

    return Promise.all(
      parts.map((part) =>
        this.authService.register({
          name: `${part.slice(0, 1)}NAME`,
          nickname: `${part.slice(0, 1)}NICK`,
          school: 'cau',
          studentId: part.toLowerCase(),
          password: part.toLowerCase(),
          part: part as UserPartEnum,
          role: part === 'ADMIN' ? 'ADMIN' : 'USER',
        }),
      ),
    );
  }

  @ApiOperation({
    summary: '[TEST] 대량 사용자 회원가입 API 입니다.',
    description: '명단은 제공해야 합니다.',
  })
  @Public()
  @Post('register/bulk')
  async createBulkUser(@Body() body: CreateBulkUserRequestDto) {
    return this.authService.registerBulk(body.users);
  }

  @ApiOperation({
    summary: '[TEST] 테스트 토큰 생성 API',
    description: 'Query String으로 userId를 첨부하세요.',
  })
  @ApiQuery({
    name: 'userId',
    required: true,
    description: '토큰을 생성할 사용자 ID',
    example: '1',
  })
  @Public()
  @BypassResponseInterceptor()
  @Get('token')
  async getTestToken(@Query('userId') userId: string) {
    const ret = await this.tokenAuthService.generateTestToken(userId);
    return ret.accessToken;
  }

  @ApiOperation({
    summary: '[TEST] 요청에 포함된 쿠키 반환',
  })
  @Get('cookie')
  @Public()
  checkCookie(@Req() req: Request) {
    return req.cookies;
  }
}
