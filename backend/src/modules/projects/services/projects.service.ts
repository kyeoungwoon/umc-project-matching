import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';
import {
  CreateProjectRequestDto,
  UpdateProjectRequestDto,
} from '@modules/projects/dto/project.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly mongo: MongoDBPrismaService) {}

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

  // 프로젝트 수정
  async updateProjectByProjectId(
    projectId: string,
    data: UpdateProjectRequestDto,
  ) {
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
        projectMember: true,
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
        projectMember: true,
      },
    });

    if (!project) {
      throw new NotFoundException('프로젝트가 존재하지 않습니다.');
    }

    return project;
  }

  async isFormBelongsToProject(
    formId: string,
    projectId: string,
  ): Promise<boolean> {
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

  async isUserProjectPlanByProjectId(
    userId: string,
    projectId: string,
  ): Promise<boolean> {
    const project = await this.getProjectById(projectId);

    return project.planId === userId;
  }

  async throwIfUserNotPlanByProjectId(userId: string, projectId: string) {
    const isPlan = await this.isUserProjectPlanByProjectId(userId, projectId);
    if (!isPlan) {
      throw new ForbiddenException('해당 프로젝트에 대한 권한이 없습니다.');
    }
  }
}
