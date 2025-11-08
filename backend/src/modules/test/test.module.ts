import { Module } from '@nestjs/common';

import { BasicTestController } from '@modules/test/controllers/basic.test.controller';
import { DBTestController } from '@modules/test/controllers/db.test.controller';
import { ErrorTestController } from '@modules/test/controllers/error.test.controller';
import { UsersModule } from '@modules/users/users.module';
import { AuthModule } from '@modules/auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [ErrorTestController, DBTestController, BasicTestController],
  providers: [],
  exports: [],
})
export class TestModule {}
