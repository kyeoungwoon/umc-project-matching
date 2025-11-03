import { useMutation, useQuery } from '@tanstack/react-query';

import {
  applyToProject,
  changeApplicationStatus,
  deleteApplication,
  getApplication,
} from '@api/axios/application';
import { ApplyToProjectRequestDto, ChangeApplicationStatusDto } from '@api/axios/application/types';

export const useApplyToProjectMutation = (projectId: string, formId: string) => {
  return useMutation({
    mutationFn: (data: ApplyToProjectRequestDto) => applyToProject(projectId, formId, data),
  });
};

export const useGetApplicationQuery = (projectId: string, applicationId: string) => {
  return useQuery({
    queryKey: ['application', projectId, applicationId],
    queryFn: () => getApplication(projectId, applicationId),
    enabled: !!projectId && !!applicationId,
  });
};

export const useDeleteApplicationMutation = (projectId: string, applicationId: string) => {
  return useMutation({ mutationFn: () => deleteApplication(projectId, applicationId) });
};

export const useChangeApplicationStatusMutation = (projectId: string, applicationId: string) => {
  return useMutation({
    mutationFn: (data: ChangeApplicationStatusDto) =>
      changeApplicationStatus(projectId, applicationId, data),
  });
};
