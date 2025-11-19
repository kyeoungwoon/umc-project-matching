import { Injectable } from '@nestjs/common';

import {
  CreateProjectDtoV2,
  CreateProjectToDtoV2,
  CreateProjectWithToRequestDtoV2,
  ProjectEntityResponseDto,
  ProjectToEntityResponseDto,
  ProjectWithToAndMemberAndFormResponseDto,
  ProjectWithToAndMemberResponseDto,
} from '@upms/shared';
import { ProjectWithToResponseDto } from '@upms/shared/dist/common';
import {
  CreateProjectMemberDtoV2,
  ProjectMemberEntityResponseDto,
  UpdateProjectDtoV2,
} from '@upms/shared/dist/common/dto';

import { PostgreSQLPrismaService } from '@modules/prisma/services/postgresql.prisma.service';

@Injectable()
export class ProjectV2Service {
  constructor(private readonly postgre: PostgreSQLPrismaService) {}

  async getSingleProject(projectId: bigint) {
    const project = await this.postgre.project.findUnique({
      where: { id: projectId },
    });

    return ProjectEntityResponseDto.fromEntity(project);
  }

  async getProjectsWithToAndMemberByChapterId(chapterId: bigint) {
    const projects = await this.postgre.project.findMany({
      where: { chapterId },
      include: {
        to: true,
        members: true,
      },
    });

    return projects.map((project) => ProjectWithToAndMemberResponseDto.fromEntity(project));
  }

  async getSingleProjectWithToAndMemberAndFormResponseDto(projectId: bigint) {
    const project = await this.postgre.project.findUnique({
      where: { id: projectId },
      include: {
        to: true,
        members: true,
        applicationForms: true,
      },
    });

    return ProjectWithToAndMemberAndFormResponseDto.fromEntity(project);
  }

  async updateProject(projectId: bigint, data: UpdateProjectDtoV2) {
    const updatedProject = await this.postgre.project.update({
      where: { id: projectId },
      data,
    });

    return ProjectEntityResponseDto.fromEntity(updatedProject);
  }

  async updateProjectTo(data: CreateProjectToDtoV2) {
    const updatedProject = await this.postgre.project.update({
      where: { id: data.projectId },
      data: {
        to: {
          upsert: {
            where: {
              uniq_project_part: {
                projectId: data.projectId,
                part: data.part,
              },
            },
            create: {
              part: data.part,
              to: data.to,
            },
            update: {
              to: data.to,
            },
          },
        },
      },
      include: {
        to: true,
        members: true,
        applicationForms: true,
      },
    });

    return ProjectWithToAndMemberAndFormResponseDto.fromEntity(updatedProject);
  }

  async createProject(data: CreateProjectDtoV2) {
    const project = await this.postgre.project.create({
      data: {
        ...data,
      },
    });

    return ProjectEntityResponseDto.fromEntity(project);
  }

  async createProjectTo(data: CreateProjectToDtoV2) {
    const projectTo = await this.postgre.projectTo.create({
      data: {
        ...data,
      },
    });

    return ProjectToEntityResponseDto.fromEntity(projectTo);
  }

  async createProjectWithTo(data: CreateProjectWithToRequestDtoV2) {
    return this.postgre.$transaction(async (tx) => {
      const project = await tx.project.create({
        data: {
          name: data.name,
          description: data.description,
          chapterId: data.chapterId,
          logoImageUrl: data.logoImageUrl,
          bannerImageUrl: data.bannerImageUrl,
        },
      });

      await Promise.all(
        data.partTos.map(async (to) => {
          await tx.projectTo.create({
            data: {
              projectId: project.id,
              part: to.part,
              to: to.to,
            },
          });
        }),
      );

      return ProjectEntityResponseDto.fromEntity(project);
    });
  }

  async deleteProject(projectId: bigint) {
    const deletedProject = await this.postgre.project.delete({
      where: { id: projectId },
    });

    return ProjectEntityResponseDto.fromEntity(deletedProject);
  }

  async createProjectMember(data: CreateProjectMemberDtoV2) {
    const projectMember = await this.postgre.projectMember.create({
      data: {
        ...data,
      },
    });

    return ProjectMemberEntityResponseDto.fromEntity(projectMember);
  }
}
