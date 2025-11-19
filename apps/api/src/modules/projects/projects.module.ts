import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { AuthModule } from '@modules/auth/auth.module';
import { ApplyV2Controller } from '@modules/projects/controllers/v2/apply.v2.controller';
import { FormV2Controller } from '@modules/projects/controllers/v2/form.v2.controller';
import { MatchingRoundV2Controller } from '@modules/projects/controllers/v2/matching-round.v2.controller';
import { ProjectV2Controller } from '@modules/projects/controllers/v2/project.v2.controller';
import { ApplicationV2Service } from '@modules/projects/services/v2/application.v2.service';
import { FormV2Service } from '@modules/projects/services/v2/form.v2.service';
import { MatchingRoundV2Service } from '@modules/projects/services/v2/matching-round.v2.service';
import { ProjectV2Service } from '@modules/projects/services/v2/project.v2.service';
import { UsersModule } from '@modules/users/users.module';

@Module({
  // TODO: AuthModule 나중에 지우기
  imports: [UsersModule, HttpModule, AuthModule],
  controllers: [
    FormV2Controller,
    ProjectV2Controller,
    ApplyV2Controller,
    MatchingRoundV2Controller,
  ],
  providers: [FormV2Service, ProjectV2Service, ApplicationV2Service, MatchingRoundV2Service],
  exports: [FormV2Service, ProjectV2Service, ApplicationV2Service, MatchingRoundV2Service],
})
export class ProjectsModule {}
