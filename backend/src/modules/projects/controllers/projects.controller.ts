import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller({
  path: 'projects',
  version: '1',
})
export class ProjectsController {
  constructor() {}

  @Post('')
  createProject() {
    return true;
  }

  @Patch(':projectId')
  updateProject() {
    return true;
  }

  @Post(':projectId/forms')
  createProjectApplicationForm() {
    return true;
  }

  @Delete(':projectId/forms')
  deleteProjectApplicationForm() {
    return true;
  }

  @Get(':projectId/forms')
  getProjectApplicationForm() {
    return true;
  }

  @Post(':projectId/forms/:formId')
  changeApplicationStatus() {
    return true;
  }
}
