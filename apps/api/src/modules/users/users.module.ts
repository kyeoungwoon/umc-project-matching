import { Module } from '@nestjs/common';

import { UmcV2Controller } from '@modules/users/controllers/v2/umc.v2.controller';
import { UsersV2Controller } from '@modules/users/controllers/v2/users.v2.controller';
import { UmcV2Service } from '@modules/users/services/v2/umc.v2.service';
import { UsersServiceV2 } from '@modules/users/services/v2/users.v2.service';

@Module({
  imports: [],
  controllers: [UmcV2Controller, UsersV2Controller],
  providers: [UsersServiceV2, UmcV2Service],
  exports: [UsersServiceV2, UmcV2Service],
})
export class UsersModule {}
