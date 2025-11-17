import { Module } from '@nestjs/common';
import { ProjectsController } from '@modules/projects/controllers/projects.controller';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { UsersModule } from '@modules/users/users.module';
import { FormService } from '@modules/projects/services/form.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { ApplyService } from '@modules/projects/services/apply.service';
import { FormController } from '@modules/projects/controllers/form.controller';
import { ApplyController } from '@modules/projects/controllers/apply.controller';
import { MatchingRoundController } from '@modules/projects/controllers/matching-round.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from '@modules/auth/auth.module';
import { FormServiceV2 } from '@modules/projects/services/v2/form.v2.service';
import { FormControllerV2 } from '@modules/projects/controllers/v2/form.v2.controller';
import { AdminController } from '@modules/projects/controllers/admin.controller';

@Module({
  // TODO: AuthModule 나중에 지우기
  imports: [UsersModule, HttpModule, AuthModule],
  controllers: [
    ProjectsController,
    FormController,
    ApplyController,
    MatchingRoundController,
    FormControllerV2,
    AdminController,
  ],
  providers: [
    ProjectsService,
    FormService,
    MatchingRoundService,
    ApplyService,
    FormServiceV2,
  ],
  exports: [
    ProjectsService,
    FormService,
    MatchingRoundService,
    ApplyService,
    FormServiceV2,
  ],
})
export class ProjectsModule {}
