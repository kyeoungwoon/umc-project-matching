import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { API_TAGS } from '@common/constants/api-tags.constants';
import {
  ChangePasswordRequestDto,
  CreateSchoolRequestDto,
  LoginRequestDto,
} from '@modules/auth/dto/auth.dto';
import { AuthService } from '@modules/auth/services/auth.service';
import { Public } from '@modules/auth/decorators/public.decorator';
import { CreateUserRequestDto } from '@modules/users/dto/user.dto';
import { RequestContextService } from '@modules/als/services/request-context.service';

@Controller({
  version: '1',
  path: 'auth',
})
@ApiTags(API_TAGS.AUTH)
@ApiBearerAuth()
export class AuthV1Controller {
  constructor(
    private readonly auth: AuthService,
    private readonly reqContext: RequestContextService,
  ) {}

  @Post('register')
  @ApiOperation({
    summary: '[ADMIN] 회원가입',
    description:
      '관리자 전용입니다. 사용자 정보를 입력해서 새로운 사용자를 생성합니다.',
  })
  @Public()
  register(@Body() body: CreateUserRequestDto) {
    return this.auth.register(body);
  }

  @Post('login')
  @ApiOperation({
    summary: '로그인',
    description:
      '학교, 학번, 비밀번호로 로그인 합니다.' +
      'AccessToken만 제공되며, 유효기간은 24시간 입니다.',
  })
  @Public()
  login(@Body() body: LoginRequestDto) {
    const { school, studentId, password } = body;
    return this.auth.loginWithPassword(school, studentId, password);
  }

  @Post('change-password')
  @ApiOperation({
    summary: '비밀번호 변경',
    description:
      '로그인 되어 있는 사용자가, 현재 비밀번호를 올바르게 제공했을 때 새 비밀번호로 변경이 가능합니다.',
  })
  changePassword(@Body() body: ChangePasswordRequestDto) {
    const userId = this.reqContext.getOrThrowUserId();

    return this.auth.changePasswordWithUserId(
      userId,
      body.currentPassword,
      body.newPassword,
    );
  }

  @ApiOperation({
    summary: '학교 목록 조회',
    description: '등록된 학교들의 목록을 조회합니다.',
  })
  @Get('schools')
  getSchoolList() {
    return this.auth.getSchoolList();
  }

  @ApiOperation({
    summary: '학교 생성',
    description: '새로운 학교를 생성합니다.',
  })
  @Post('school')
  createSchool(@Body() body: CreateSchoolRequestDto) {
    return this.auth.createSchool(body.name, body.handle);
  }

  @Post('school/init')
  @ApiOperation({
    summary: '[TEST] 모든 데이터 삭제',
  })
  async initSchool() {
    await this.auth.dropAll('school');

    const res = Promise.all([
      this.auth.createSchool('중앙대학교', 'cau'),
      this.auth.createSchool('동덕여자대학교', 'dongduk'),
      this.auth.createSchool('한국외국어대학교', 'hufs'),
      this.auth.createSchool('이화여자대학교', 'ewha'),
      this.auth.createSchool('단국대학교', 'danguk'),
    ]);

    return res;
  }

  @Post('drop-all/:type')
  @ApiParam({
    name: 'type',
    description: '삭제할 데이터 타입',
    enum: ['school', 'challenger'],
  })
  @ApiOperation({
    summary: '[TEST] 모든 데이터 삭제',
  })
  dropAll(@Param() params: { type: string }) {
    return this.auth.dropAll(params.type);
  }
}
