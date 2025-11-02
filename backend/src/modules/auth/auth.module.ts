import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { JwtConfig } from '@modules/auth/config/jwt.config';
import { AuthV1Controller } from '@modules/auth/controllers/v1/auth.v1.controller';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';
import { TokenAuthService } from '@modules/auth/services/token.auth.service';
import { JwtStrategy } from '@modules/auth/strategies/jwt.strategy';
import { UsersModule } from '@modules/users/users.module';
import { AuthService } from '@modules/auth/services/auth.service';

@Module({
  imports: [UsersModule, JwtModule.registerAsync(JwtConfig.asProvider())],
  controllers: [AuthV1Controller],
  providers: [
    // Services
    TokenAuthService,
    AuthService,
    // Strategies
    JwtStrategy,
    // Guards
    JwtAuthGuard,
  ],
  exports: [TokenAuthService, AuthService],
})
export class AuthModule {}
