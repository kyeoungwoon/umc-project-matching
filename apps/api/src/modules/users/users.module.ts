import { Module } from '@nestjs/common';

import { UsersV1Controller } from '@modules/users/controllers/v1/users.v1.controller';
import { UsersService } from '@modules/users/services/v1/users.service';
import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@Module({
  imports: [],
  controllers: [UsersV1Controller],
  providers: [UsersService, UsersServiceV2],
  exports: [UsersService, UsersServiceV2],
})
export class UsersModule {}
