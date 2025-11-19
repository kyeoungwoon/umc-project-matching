import { Module } from '@nestjs/common';

import { AuthTestController } from '@modules/admin/controllers/v1/auth.test.controller';
import { BasicTestController } from '@modules/admin/controllers/v1/basic.test.controller';
import { DBTestController } from '@modules/admin/controllers/v1/db.test.controller';
import { ErrorTestController } from '@modules/admin/controllers/v1/error.test.controller';
import { ProjectTestController } from '@modules/admin/controllers/v1/project.test.controller';
import { AuthModule } from '@modules/auth/auth.module';
import { ProjectsModule } from '@modules/projects/projects.module';
import { UsersModule } from '@modules/users/users.module';

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
export class AdminModule {}
