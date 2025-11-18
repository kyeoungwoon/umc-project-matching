import { Module } from '@nestjs/common';

import { UsersV1Controller } from '@modules/users/controllers/v1/users.v1.controller';
import { UsersService } from '@modules/users/services/v1/users.service';

@Module({
  imports: [],
  controllers: [UsersV1Controller],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
