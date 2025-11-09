import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ApiBearerAuth,
  ApiCookieAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { Request } from 'express';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { ResponseMessage } from '@common/decorators/response/response-message.decorator';

import { Public } from '@modules/auth/decorators/public.decorator';
import { TokenAuthService } from '@modules/auth/services/token.auth.service';
import { BypassResponseInterceptor } from '@common/decorators/bypass-response-interceptor.decorator';
import { AuthService } from '@modules/auth/services/auth.service';
import {
  CreateBulkUserRequestDto,
  CreateUserRequestDto,
} from '@modules/users/dto/user.dto';
import { EnvGuard } from '@common/guards/env.guard';

@Controller({
  version: '1',
  path: 'test/auth',
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
  @Post('test/school/init')
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
  @Post('test/user/init')
  @ApiOperation({
    summary: '[TEST] 유령 박경운 생성',
  })
  @Public()
  async createSampleUser() {
    return await this.authService.register({
      name: '박경운',
      nickname: '하늘',
      school: 'cau',
      studentId: crypto.randomUUID().slice(0, 8),
      password: 'password123',
      part: 'ADMIN',
    });
  }

  @ApiOperation({
    summary: '[TEST] Leo user bulk create',
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
