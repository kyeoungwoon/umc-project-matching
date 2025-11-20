import {
  Body,
  Controller,
  Get,
  Inject,
  LoggerService,
  Patch,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { LoginRequestDto, UpdateChallengerDtoV2 } from '@upms/shared';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { API_TAGS } from '@common/constants/api-tags.constants';

import { RequestContextService } from '@modules/als/services/request-context.service';
import { AuthService } from '@modules/auth/services/auth.service';
import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@Controller({
  version: '2',
  path: 'auth',
})
@ApiTags(API_TAGS.AUTH)
@ApiBearerAuth()
export class AuthV2Controller {
  constructor(
    private readonly user: UsersServiceV2,
    private readonly auth: AuthService,
    private readonly requestContext: RequestContextService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @ApiOperation({
    summary: '학교 목록 조회',
  })
  @Get('school')
  async getSchoolList() {
    return this.user.getSchoolList();
  }

  @ApiOperation({
    summary: '로그인',
  })
  @Post('login')
  async login(@Body() body: LoginRequestDto) {
    const challenger = await this.user.getChallengerBySchoolAndStudentId(
      body.schoolId,
      body.studentId,
    );

    const challengerId = BigInt(challenger.id);

    const isPasswordValid = await this.user.verifyPassword(challengerId, body.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('비밀번호가 올바르지 않습니다.');
    }

    return this.auth.generateTokens(challengerId);
  }

  @ApiOperation({
    summary: '비밀번호 변경',
  })
  @Patch('password')
  async changePassword(@Body() body: UpdateChallengerDtoV2) {
    const userId = this.requestContext.getOrThrowUserIdAsBigInt();

    return this.user.updateChallenger(userId, body);
  }
}
