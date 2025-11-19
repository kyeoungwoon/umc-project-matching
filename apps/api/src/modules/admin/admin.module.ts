import { Module } from '@nestjs/common';

import { AdminController } from '@modules/admin/controllers/admin.controller';
import { AdminTestController } from '@modules/admin/controllers/test.controller';
import { AuthModule } from '@modules/auth/auth.module';
import { ProjectsModule } from '@modules/projects/projects.module';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [UsersModule, AuthModule, ProjectsModule],
  controllers: [AdminController, AdminTestController],
  providers: [],
  exports: [],
})
export class AdminModule {}
