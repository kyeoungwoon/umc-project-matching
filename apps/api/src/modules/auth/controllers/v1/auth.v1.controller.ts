import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  LoggerService,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { ChangePasswordRequestDto, CreateSchoolRequestDto, LoginRequestDto } from '@upms/shared';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { CHALLENGER_ROLE, CheckChallengerRole } from '@common/decorators/challenger-role.decorator';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { Public } from '@modules/auth/decorators/public.decorator';
import { ChallengerRoleGuard } from '@modules/auth/guards/challenger-guard';
import { AuthService } from '@modules/auth/services/auth.service';
import { TokenAuthService } from '@modules/auth/services/token.auth.service';
import { CreateUserRequestDto } from '@modules/users/dto/user.dto';

@Controller({
  version: '1',
  path: 'auth',
})
@ApiTags(API_TAGS.AUTH)
@ApiBearerAuth()
@UseGuards(ChallengerRoleGuard)
export class AuthV1Controller {
  constructor(
    private readonly auth: AuthService,
    private readonly token: TokenAuthService,
    private readonly reqContext: RequestContextService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Post('register')
  @ApiOperation({
    summary: '[ADMIN] 회원가입',
    description: '관리자 전용입니다. 사용자 정보를 입력해서 새로운 사용자를 생성합니다.',
  })
  @CheckChallengerRole(CHALLENGER_ROLE.ADMIN)
  register(@Body() body: CreateUserRequestDto) {
    return this.auth.register(body);
  }

  @Delete('deactivate/:userId')
  @ApiOperation({
    summary: '[ADMIN] 회원 탈퇴',
    description: '특정 챌린저를 삭제합니다. 관리자만 가능합니다.',
  })
  @CheckChallengerRole(CHALLENGER_ROLE.ADMIN)
  async deleteAccount(@Param('userId') userId: string) {
    return await this.auth.deleteUserByUserId(userId);
  }

  @ApiOperation({
    summary: '[ADMIN] 학교 생성',
    description: '새로운 학교를 생성합니다.',
  })
  @CheckChallengerRole(CHALLENGER_ROLE.ADMIN)
  @Post('school')
  createSchool(@Body() body: CreateSchoolRequestDto) {
    return this.auth.createSchool(body.name, body.handle);
  }

  @Post('login')
  @ApiOperation({
    summary: '로그인',
    description:
      '학교, 학번, 비밀번호로 로그인 합니다.' + 'AccessToken만 제공되며, 유효기간은 24시간 입니다.',
  })
  @Public()
  async login(@Body() body: LoginRequestDto) {
    const { school, studentId, password } = body;
    const loggedInUser = await this.auth.loginWithPassword(school, studentId, password);

    this.logger.log(`USER_ID ${loggedInUser.id} LOGIN_SUCCESS`);

    return this.token.generateTokens(loggedInUser.id);
  }

  @Post('change-password')
  @ApiOperation({
    summary: '비밀번호 변경',
    description:
      '로그인 되어 있는 사용자가, 현재 비밀번호를 올바르게 제공했을 때 새 비밀번호로 변경이 가능합니다.',
  })
  changePassword(@Body() body: ChangePasswordRequestDto) {
    const userId = this.reqContext.getOrThrowUserId();

    this.logger.log(`USER_ID ${userId} PASSWORD_CHANGE_ATTEMPT`);

    return this.auth.changePasswordWithUserId(userId, body.currentPassword, body.newPassword);
  }

  @ApiOperation({
    summary: '학교 목록 조회',
    description: '등록된 학교들의 목록을 조회합니다.',
  })
  @Get('schools')
  @Public()
  getSchoolList() {
    return this.auth.getSchoolList();
  }
}
