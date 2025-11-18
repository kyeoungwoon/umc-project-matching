import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  LoggerService,
  NotFoundException,
} from '@nestjs/common';

import {
  CreateProjectRequestDto,
  LinkPreviewResponseDto,
  UpdateProjectRequestDto,
} from '@upms/shared';
import * as cheerio from 'cheerio';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { firstValueFrom } from 'rxjs';

import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import { UsersService } from '@modules/users/services/v1/users.service';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly user: UsersService,
    private readonly mongo: MongoDBPrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly httpService: HttpService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  // 프로젝트 생성
  async createProject(data: CreateProjectRequestDto) {
    const { title, description, link, planId, partTo } = data;

    return this.mongo.project.create({
      data: {
        title,
        description,
        link,
        planId,
        partTo,
      },
    });
  }

  async createMultipleProject(data: CreateProjectRequestDto[]) {
    // data 안의 planId는 challenger table에서 umsbChallengerId 확인 후에 그거로 바꿔치기 해야 함.
    const updatedData = await Promise.all(
      data.map(async (project) => {
        const { planId } = project;
        const challenger = await this.mongo.challenger.findFirst({
          where: {
            umsbChallengerId: planId,
          },
        });

        if (!challenger) {
          throw new NotFoundException(
            `챌린저 아이디 ${planId}에 해당하는 챌린저가 존재하지 않습니다.`,
          );
        }

        return {
          ...project,
          planId: challenger.id,
        };
      }),
    );

    return this.mongo.project.createMany({
      data: updatedData,
    });
  }

  async createBulkProjectWithCreatedEntity(data: CreateProjectRequestDto[]) {
    // data 안의 planId는 challenger table에서 umsbChallengerId 확인 후에 그거로 바꿔치기 해야 함.
    const updatedData = await Promise.all(
      data.map(async (project) => {
        const { planId } = project;
        const challenger = await this.mongo.challenger.findFirst({
          where: {
            umsbChallengerId: planId,
          },
        });

        if (!challenger) {
          throw new NotFoundException(
            `챌린저 아이디 ${planId}에 해당하는 챌린저가 존재하지 않습니다.`,
          );
        }

        return {
          ...project,
          planId: challenger.id,
        };
      }),
    );

    const ret: any[] = [];

    for (const proj of updatedData) {
      const createdProject = await this.mongo.project.create({
        data: proj,
      });

      ret.push(createdProject);
    }

    return ret;

    // return this.mongo.project.createMany({
    //   data: updatedData,
    // });
  }

  // 프로젝트 수정
  async updateProjectByProjectId(projectId: string, data: UpdateProjectRequestDto) {
    const { title, description, link } = data;

    return this.mongo.project.update({
      where: {
        id: projectId,
      },
      data: {
        title,
        description,
        link,
        // 추가 필드가 있다면 여기에 작성
      },
    });
  }

  async getProjectList() {
    return this.mongo.project.findMany({
      include: {
        projectForms: true,
        projectMember: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                nickname: true,
                introduction: true,
                part: true,
                challengerSchool: true,
              },
            },
          },
        },
        projectPlan: {
          select: {
            id: true,
            name: true,
            nickname: true,
            introduction: true,
            part: true,
            challengerSchool: true,
          },
        },
      },
    });
  }

  // 프로젝트 삭제, 관리자만 접근 가능해야 함.
  async deleteProjectByProjectId(projectId: string) {
    await this.mongo.project.delete({
      where: {
        id: projectId,
      },
    });
  }

  async getProjectById(projectId: string) {
    const project = await this.mongo.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        projectForms: true,
        projectMember: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                nickname: true,
                introduction: true,
                part: true,
                challengerSchool: true,
              },
            },
          },
        },
      },
    });

    if (!project) {
      throw new NotFoundException('프로젝트가 존재하지 않습니다.');
    }

    return project;
  }

  /**
   * 프로젝트의 파트별 배정된 TO와 현재 멤버 수를 반환합니다.
   */
  async getProjectPartToStatus(projectId: string) {
    const project = await this.getProjectById(projectId);

    return project.partTo.map((partInfo) => {
      const currentTo = project.projectMember.filter((pm) => pm.user.part === partInfo.part).length;

      return {
        part: partInfo.part,
        currentTo,
        maxTo: partInfo.to,
      };
    });
  }

  /**
   * 프로젝트에 TO가 남아있는지 확인합니다.
   */
  async checkIfToLeftInProject(projectId: string, part: string) {
    // 프로젝트 TO 현황을 가져와서, 매개변수로 받은 파트의 것만 추출합니다.
    const projectPartToStatus = await this.getProjectPartToStatus(projectId);
    const partStatus = projectPartToStatus.find((p) => p.part === part);

    // 일치하는 정보가 없으면 에러
    if (!partStatus) {
      throw new NotFoundException(`프로젝트에 ${part} 파트가 존재하지 않습니다.`);
    }

    // 현재 멤버 수가 최대 TO에 도달했으면 에러
    if (partStatus.currentTo >= partStatus.maxTo) {
      throw new BadRequestException(`해당 프로젝트의 ${part} 파트의 TO가 모두 찼습니다.`);
    }

    // 다 아니면 반환 ~
    return;
  }

  async isFormBelongsToProject(formId: string, projectId: string): Promise<boolean> {
    const form = await this.mongo.form.findUnique({
      where: {
        id: formId,
      },
    });

    if (!form) {
      throw new NotFoundException('폼이 존재하지 않습니다.');
    }

    return form.projectId === projectId;
  }

  async throwIfFormNotBelongsToProject(formId: string, projectId: string) {
    const isBelongs = await this.isFormBelongsToProject(formId, projectId);
    if (!isBelongs) {
      throw new ForbiddenException('프로젝트에 속하지 않은 폼 입니다.');
    }
  }

  async isUserProjectPlanByProjectId(userId: string, projectId: string): Promise<boolean> {
    const project = await this.getProjectById(projectId);

    return project.planId === userId;
  }

  async throwIfUserNotPlanByProjectId(userId: string, projectId: string) {
    const isPlan = await this.isUserProjectPlanByProjectId(userId, projectId);
    if (!isPlan) {
      const isAdmin = await this.user.isAdminChallenger(userId);
      if (isAdmin) return;
      throw new ForbiddenException('해당 프로젝트에 대한 권한이 없습니다.');
    }
  }

  async addTeamMember(projectId: string, userId: string) {
    return this.mongo.projectMember.create({
      data: {
        projectId,
        userId,
      },
    });
  }

  async getLinkPreview(targetUrl: string): Promise<LinkPreviewResponseDto> {
    const cachedData = await this.cacheManager.get<LinkPreviewResponseDto>(targetUrl);
    // if (cachedData) {
    //   this.logger.log(`Cache hit for URL: ${targetUrl}`);
    //   return cachedData;
    // }

    this.logger.log(`Cache miss for URL: ${targetUrl}. Fetching...`);
    const { data: html } = await firstValueFrom(this.httpService.get(targetUrl));

    console.log('html:', html.slice(0, 5000)); // 첫 500자만 출력

    const $ = cheerio.load(html);

    const getMetaTagContent = (property: string) => {
      return $(`meta[name="${property}"]`).attr('content');
    };

    const title =
      // getMetaTagContent('og:title') ||
      // $('title').text() ||
      getMetaTagContent('twitter:title');
    const description =
      getMetaTagContent('og:description') ||
      $(`meta[name="description"]`).attr('content') ||
      getMetaTagContent('twitter:description');
    let imageUrl =
      // getMetaTagContent('og:image') ||
      getMetaTagContent('twitter:image');
    console.log('imageUrl:', title, imageUrl);

    // Notion 썸네일이 og:image에 없으면, 첫 번째 img 태그 src를 fallback으로 쓴다
    if (!imageUrl) {
      const firstImage = $('img').first().attr('src');
      if (firstImage) {
        imageUrl = firstImage.startsWith('http') ? firstImage : new URL(firstImage, targetUrl).href;
      }
    } else {
      // 기존 이메일
      // imageUrl = new URL()
    }

    const url = getMetaTagContent('og:url') || targetUrl;

    const result: LinkPreviewResponseDto = {
      url,
      title,
      description,
      imageUrl,
    };

    // 24시간 캐시 저장
    await this.cacheManager.set(targetUrl, result, 1000 * 60 * 60 * 24);

    return result;
  }
}
