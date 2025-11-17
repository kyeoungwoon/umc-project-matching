import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Inject,
  LoggerService,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from '@common/constants/api-tags.constants';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { FormService } from '@modules/projects/services/form.service';
import { MatchingRoundService } from '@modules/projects/services/matching-round.service';
import { ApplyService } from '@modules/projects/services/apply.service';
import { RequestContextService } from '@modules/als/services/request-context.service';
import { UsersService } from '@modules/users/services/users.service';
import { TestCreateMatchingRoundResponseDto } from '@modules/projects/dto/ok-responses/test.ok-response.dto';
import { ApiOkResponseCommon } from '@common/decorators/response/api-ok-response-common.decorator';
import { leoProjects } from '@modules/projects/mock/leo-projects';
import { AuthService } from '@modules/auth/services/auth.service';
import { BulkCreateLeoProjectFormsRequestDto } from '@modules/projects/dto/project.dto';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Public } from '@modules/auth/decorators/public.decorator';
import { EnvGuard } from '@common/guards/env.guard';
import { ChallengerRoleGuard } from '@modules/auth/guards/challenger-guard';
import {
  CHALLENGER_ROLE,
  CheckChallengerRole,
} from '@common/decorators/challenger-role.decorator';
import { CreateBulkMatchingRoundsDto } from '@modules/projects/dto/apply.dto';
import { UserPartEnum } from '@generated/prisma/mongodb';

@Controller({
  path: 'test/projects',
  version: '1',
})
@ApiTags(API_TAGS.TEST)
@ApiBearerAuth()
@UseGuards(ChallengerRoleGuard, EnvGuard)
@CheckChallengerRole(CHALLENGER_ROLE.ADMIN)
export class ProjectTestController {
  constructor(
    private readonly projectService: ProjectsService,
    private readonly formService: FormService,
    private readonly matchingRoundService: MatchingRoundService,
    private readonly applyService: ApplyService,
    private readonly reqContext: RequestContextService,
    private readonly userService: UsersService,
    private readonly authService: AuthService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Get('project/:projectId/to')
  async getProjectPartTo(
    @Param('projectId') projectId: string,
    @Query('part') part: UserPartEnum,
  ) {
    return this.projectService.checkIfToLeftInProject(projectId, part);
  }

  @ApiOperation({
    summary: '[테스트용] Leo 지부 프로젝트, 폼, 질문 일괄 생성',
    description:
      '여러 Leo 지부 프로젝트와 각 프로젝트에 해당하는 폼 및 질문들을 일괄 생성합니다.',
  })
  @Post('init/bulk')
  async bulkCreateSampleProjects(
    @Body() body: BulkCreateLeoProjectFormsRequestDto,
  ) {
    const { projects, forms, questions } = body;
    console.log(projects.length, forms.length, questions.length);

    if (
      projects.length !== forms.length ||
      projects.length !== questions.length
    ) {
      throw new BadRequestException(
        '프로젝트, 폼, 질문 배열의 길이는 모두 동일해야 합니다.',
      );
    }

    const createdProjects =
      await this.projectService.createBulkProjectWithCreatedEntity(projects);
    this.logger.log(`Created ${createdProjects.length} projects.`);

    await Promise.all(
      createdProjects.map(async (prj, idx) => {
        this.logger.log(
          `Creating form and questions for project ID: ${prj.id}`,
        );

        this.logger.log(`Created project ID: ${prj.id}`);

        const formForPrj = await this.formService.createForm(
          prj.id,
          forms[idx],
        );
        this.logger.log(
          `Created form ID: ${formForPrj.id} for project ID: ${prj.id}`,
        );

        await this.formService.addFormQuestions(
          formForPrj.id,
          questions[idx].questions,
        );
        this.logger.log(
          `Added questions to form ID: ${formForPrj.id} for project ID: ${prj.id}`,
        );
      }),
    );

    return 'Bulk creation of projects, forms, and questions completed.';
  }

  @Post('init/leo')
  @ApiOperation({
    summary: '[테스트용] Leo 지부 내 프로젝트 INIT',
  })
  @Public()
  async createLeoProjects() {
    await this.authService.dropAllProjects();
    return this.projectService.createMultipleProject(leoProjects);
  }

  @Post('matching-round/sample')
  @ApiOperation({
    summary: '[테스트용] 매칭 라운드 생성',
    description:
      '현재 시간 기준 1시간 전부터 1시간 후까지의 매칭 라운드를 생성합니다.',
  })
  @ApiOkResponseCommon(TestCreateMatchingRoundResponseDto)
  async testCreateMatchingRound() {
    const startDatetime = new Date(Date.now() - 60 * 60 * 1000);
    const endDatetime = new Date(Date.now() + 60 * 60 * 1000);

    return this.matchingRoundService.createMatchingRound({
      name: '테스트용 매칭 라운드',
      startDatetime,
      endDatetime,
    });
  }

  @ApiOperation({
    summary: '[테스트용] 매칭 라운드 일괄 생성',
  })
  @Post('matching-rounds/bulk')
  async createBulkMatchingRounds(@Body() body: CreateBulkMatchingRoundsDto) {
    for (const round of body.matchingRounds) {
      const createdRound =
        await this.matchingRoundService.createMatchingRound(round);
      this.logger.log(`MATCHING_ROUND_BULK_CREATE_${createdRound.id}`);
    }
  }
}
