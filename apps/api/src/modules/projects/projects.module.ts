import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { AuthModule } from '@modules/auth/auth.module';
import { AdminController } from '@modules/projects/controllers/v1/admin.controller';
import { ApplyController } from '@modules/projects/controllers/v1/apply.controller';
import { FormController } from '@modules/projects/controllers/v1/form.controller';
import { MatchingRoundController } from '@modules/projects/controllers/v1/matching-round.controller';
import { ProjectsController } from '@modules/projects/controllers/v1/projects.controller';
import { FormControllerV2 } from '@modules/projects/controllers/v2/form.v2.controller';
import { ApplyService } from '@modules/projects/services/v1/apply.service';
import { FormService } from '@modules/projects/services/v1/form.service';
import { MatchingRoundService } from '@modules/projects/services/v1/matching-round.service';
import { ProjectsService } from '@modules/projects/services/v1/projects.service';
import { FormServiceV2 } from '@modules/projects/services/v2/form.v2.service';
import { UsersModule } from '@modules/users/users.module';

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
  providers: [ProjectsService, FormService, MatchingRoundService, ApplyService, FormServiceV2],
  exports: [ProjectsService, FormService, MatchingRoundService, ApplyService, FormServiceV2],
})
export class ProjectsModule {}
