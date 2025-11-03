import { api } from '@api/axios';
import {
  ApplyToProjectRequestDto,
  ChangeApplicationStatusDto,
  CreateFormRequestDto,
  CreateMatchingRoundRequestDto,
  CreateProjectRequestDto,
  CreateQuestionRequestDto,
  UpdateFormRequestDto,
  UpdateProjectRequestDto,
  UpdateQuestionRequestDto,
} from '@api/axios/project/types';

export const getProjectList = async () => {
  return api.get('/v1/projects');
};

export const createProject = async (data: CreateProjectRequestDto) => {
  return api.post('/v1/projects', data);
};

export const getProjectDetails = async (projectId: string) => {
  return api.get(`/v1/projects/${projectId}`);
};

export const updateProject = async (projectId: string, data: UpdateProjectRequestDto) => {
  return api.patch(`/v1/projects/${projectId}`, data);
};

export const deleteProject = async (projectId: string) => {
  return api.delete(`/v1/projects/${projectId}`);
};

export const createProjectApplicationForm = async (
  projectId: string,
  data: CreateFormRequestDto,
) => {
  return api.post(`/v1/projects/${projectId}/form`, data);
};

export const getProjectApplicationForm = async (projectId: string, formId: string) => {
  return api.get(`/v1/projects/${projectId}/form/${formId}`);
};

export const deleteProjectApplicationForm = async (projectId: string, formId: string) => {
  return api.delete(`/v1/projects/${projectId}/form/${formId}`);
};

export const editProjectApplicationForm = async (
  projectId: string,
  formId: string,
  data: UpdateFormRequestDto,
) => {
  return api.patch(`/v1/projects/${projectId}/form/${formId}`, data);
};

export const addQuestionsToForm = async (
  projectId: string,
  formId: string,
  data: CreateQuestionRequestDto,
) => {
  return api.post(`/v1/projects/${projectId}/forms/${formId}/questions`, data);
};

export const editQuestionsFromForm = async (
  projectId: string,
  formId: string,
  data: UpdateQuestionRequestDto,
) => {
  return api.patch(`/v1/projects/${projectId}/forms/${formId}/questions`, data);
};

export const applyToProject = async (
  projectId: string,
  formId: string,
  data: ApplyToProjectRequestDto,
) => {
  return api.post(`/v1/projects/${projectId}/form/${formId}/apply`, data);
};

export const getApplication = async (projectId: string, applicationId: string) => {
  return api.get(`/v1/projects/${projectId}/apply/${applicationId}`);
};

export const deleteApplication = async (projectId: string, applicationId: string) => {
  return api.delete(`/v1/projects/${projectId}/apply/${applicationId}`);
};

export const changeApplicationStatus = async (
  projectId: string,
  applicationId: string,
  data: ChangeApplicationStatusDto,
) => {
  return api.post(`/v1/projects/${projectId}/apply/${applicationId}/status`, data);
};

export const getCurrentMatchingRound = async () => {
  return api.get('/v1/projects/matching-round/current');
};

export const createMatchingRound = async (data: CreateMatchingRoundRequestDto) => {
  return api.post('/v1/projects/matching-round', data);
};

export const testCreateMatchingRound = async () => {
  return api.post('/v1/projects/test/matching-round');
};
