import { useMutation, useQuery } from '@tanstack/react-query';

import {
  adminChangeApplicationStatus,
  adminDeleteApplication,
  adminGetAllApplications,
  adminGetApplicationStatisticsByChallenger,
  adminGetProjectApplicationStats,
} from '@api/axios/admin';
import { Part } from '@api/axios/auth/types';

import { queryKeyStore } from '@common/constants/query-key.constants';

export const useAdminGetAllApplications = () => {
  return useQuery({
    queryKey: queryKeyStore.admin.applications.queryKey,
    queryFn: adminGetAllApplications,
  });
};

export const useAdminGetProjectApplicationStats = (projectId: string, part?: Part[]) => {
  return useQuery({
    queryKey: queryKeyStore.admin.applicationStatByProjectAndPart(projectId, part).queryKey,
    queryFn: () => adminGetProjectApplicationStats(projectId, part),
  });
};

export const useAdminGetApplicationStatusByChallenger = (
  part?: Part,
  school?: string,
  challengerId?: string,
) => {
  return useQuery({
    queryKey: queryKeyStore.admin.applicationStatByChallenger(part, school, challengerId).queryKey,
    queryFn: () => adminGetApplicationStatisticsByChallenger(part, school, challengerId),
  });
};

export const useAdminChangeApplicationStatus = () => {
  return useMutation({ mutationFn: adminChangeApplicationStatus });
};

export const useAdminDeleteApplicationMutation = () => {
  return useMutation({ mutationFn: adminDeleteApplication });
};
