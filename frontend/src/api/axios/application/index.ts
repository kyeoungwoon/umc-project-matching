import { ApiResponse, api } from '@api/axios';
import {
  ApplicationResponseDto,
  ApplyToProjectRequestDto,
  ChangeApplicationStatusDto,
} from '@api/axios/application/types';

export const applyToProject = async (
  projectId: string,
  formId: string,
  data: ApplyToProjectRequestDto,
) => {
  const res = await api.post<ApiResponse<ApplicationResponseDto>>(
    `/v1/projects/applications/${projectId}/form/${formId}/apply`,
    data,
  );
  return res.data.result;
};

export const getApplication = async (projectId: string, applicationId: string) => {
  const res = await api.get<ApiResponse<ApplicationResponseDto>>(
    `/v1/projects/applications/${projectId}/apply/${applicationId}`,
  );
  return res.data.result;
};

export const deleteApplication = async (projectId: string, applicationId: string) => {
  const res = await api.delete<ApiResponse<ApplicationResponseDto>>(
    `/v1/projects/applications/${projectId}/apply/${applicationId}`,
  );
  return res.data.result;
};

export const changeApplicationStatus = async (
  projectId: string,
  applicationId: string,
  data: ChangeApplicationStatusDto,
) => {
  const res = await api.post<ApiResponse<ApplicationResponseDto>>(
    `/v1/projects/applications/project/${projectId}/apply/${applicationId}/status`,
    data,
  );

  return res.data.result;
};

export const getMyApplications = async () => {
  const res = await api.get<ApiResponse<ApplicationResponseDto[]>>('/v1/projects/applications/me');

  return res.data.result;
};
