import { Module } from '@nestjs/common';
import { ProjectsController } from '@modules/projects/controllers/projects.controller';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [],
})
export class ProjectsModule {}
