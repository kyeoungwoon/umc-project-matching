import { useMutation, useQuery } from '@tanstack/react-query';

import {
  applyToProject,
  changeApplicationStatus,
  deleteApplication,
  getApplication,
  getMyApplications,
} from '@api/axios/application';
import { ApplyToProjectRequestDto, ChangeApplicationStatusDto } from '@api/axios/application/types';

import { queryKeyStore } from '@common/constants/query-key.constants';

export const useApplyToProjectMutation = (projectId: string, formId: string) => {
  return useMutation({
    mutationFn: (data: ApplyToProjectRequestDto) => applyToProject(projectId, formId, data),
  });
};

export const useGetApplicationQuery = (projectId: string, applicationId: string) => {
  return useQuery({
    queryKey: queryKeyStore.application.singleApplication(projectId, applicationId).queryKey,
    queryFn: () => getApplication(projectId, applicationId),
    enabled: !!projectId && !!applicationId,
  });
};

export const useDeleteApplicationMutation = () => {
  return useMutation({
    mutationFn: (data: { projectId: string; applicationId: string }) =>
      deleteApplication(data.projectId, data.applicationId),
  });
};

export const useChangeApplicationStatusMutation = (projectId: string, applicationId: string) => {
  return useMutation({
    mutationFn: (data: ChangeApplicationStatusDto) =>
      changeApplicationStatus(projectId, applicationId, data),
  });
};

export const useGetMyApplicationsQuery = () => {
  return useQuery({
    queryKey: queryKeyStore.application.myApplications.queryKey,
    queryFn: getMyApplications,
  });
};
