import { Injectable } from '@nestjs/common';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly mongo: MongoDBPrismaService) {}

  async createProject() {
    
  }

  async updateProjectByProjectId() {}

  async deleteProjectByProjectId() {}

  async upsertProjectApplicationForm() {}

  async getProjectApplicationFormByProjectId() {}

  async changeApplicationStatus() {}
}
