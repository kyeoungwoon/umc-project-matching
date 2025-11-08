import { Module } from '@nestjs/common';

import { BasicTestController } from '@modules/test/controllers/basic.test.controller';
import { DBTestController } from '@modules/test/controllers/db.test.controller';
import { ErrorTestController } from '@modules/test/controllers/error.test.controller';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [ErrorTestController, DBTestController, BasicTestController],
  providers: [],
  exports: [],
})
export class TestModule {}
