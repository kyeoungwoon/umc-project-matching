import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { API_TAGS } from '@common/constants/api-tags.constants';
import { LoginDto } from '@modules/auth/dto/auth.dto';
import { AuthService } from '@modules/auth/services/auth.service';
import { Public } from '@modules/auth/decorators/public.decorator';
import { CreateUserRequestDto } from '@modules/users/dto/user.dto';

@Controller({
  version: '1',
  path: 'auth',
})
@ApiTags(API_TAGS.AUTH)
@ApiBearerAuth()
export class AuthV1Controller {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  @Public()
  register(@Body() body: CreateUserRequestDto) {
    return this.auth.register(body);
  }

  @Post('login')
  @Public()
  login(@Body() body: LoginDto) {
    const { school, studentId, password } = body;
    return this.auth.loginWithPassword(school, studentId, password);
  }
}
