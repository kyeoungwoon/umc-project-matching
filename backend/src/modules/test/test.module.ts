import { Module } from '@nestjs/common';

import { BasicTestController } from '@modules/test/controllers/basic.test.controller';
import { DBTestController } from '@modules/test/controllers/db.test.controller';
import { ErrorTestController } from '@modules/test/controllers/error.test.controller';
import { UsersModule } from '@modules/users/users.module';
import { AuthModule } from '@modules/auth/auth.module';
import { ProjectTestController } from '@modules/test/controllers/project.test.controller';
import { ProjectsModule } from '@modules/projects/projects.module';
import { AuthTestController } from '@modules/test/controllers/auth.test.controller';

@Module({
  imports: [UsersModule, AuthModule, ProjectsModule],
  controllers: [
    ErrorTestController,
    DBTestController,
    BasicTestController,
    ProjectTestController,
    AuthTestController,
  ],
  providers: [],
  exports: [],
})
export class TestModule {}
