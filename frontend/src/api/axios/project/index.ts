import { ApiResponse, api } from '@api/axios';
import { CreateProjectRequestDto, ProjectResponseDto, UpdateProjectRequestDto } from '@api/axios/project/types';

export const getProjectList = async () => {
  const res = await api.get<ApiResponse<ProjectResponseDto[]>>('/v1/projects');
  return res.data.result;
};

export const createProject = async (data: CreateProjectRequestDto) => {
  const res = await api.post<ApiResponse<ProjectResponseDto>>('/v1/projects', data);
  return res.data.result;
};

export const getProjectDetails = async (projectId: string) => {
  const res = await api.get<ApiResponse<ProjectResponseDto>>(`/v1/projects/${projectId}`);
  return res.data.result;
};

export const updateProject = async (projectId: string, data: UpdateProjectRequestDto) => {
  const res = await api.patch<ApiResponse<ProjectResponseDto>>(`/v1/projects/${projectId}`, data);
  return res.data.result;
};

export const deleteProject = async (projectId: string) => {
  const res = await api.delete<ApiResponse<ProjectResponseDto>>(`/v1/projects/${projectId}`);
  return res.data.result;
};