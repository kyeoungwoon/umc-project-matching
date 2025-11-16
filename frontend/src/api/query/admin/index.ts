import { useMutation, useQuery } from '@tanstack/react-query';

import {
  adminChangeApplicationStatus,
  adminDeleteApplication,
  adminGetAllApplications,
  adminGetApplicationStatisticsByChallenger,
  adminGetProjectApplicationStats,
} from '@api/axios/admin';
import { ApplicationStatus } from '@api/axios/application/types';
import { Part } from '@api/axios/auth/types';

export const useAdminGetAllApplications = () => {
  return useQuery({ queryKey: ['admin', 'applications', 'all'], queryFn: adminGetAllApplications });
};

export const useAdminGetProjectApplicationStats = (projectId: string, part?: Part[]) => {
  return useQuery({
    queryKey: ['admin', 'applications', 'stats', projectId, part],
    queryFn: () => adminGetProjectApplicationStats(projectId, part),
  });
};

export const useAdminGetApplicationStatusByChallenger = (
  part?: Part,
  school?: string,
  challengerId?: string,
) => {
  return useQuery({
    queryKey: ['admin', 'applications', 'status', part, school, challengerId],
    queryFn: () => adminGetApplicationStatisticsByChallenger(part, school, challengerId),
  });
};

export const useAdminChangeApplicationStatus = () => {
  return useMutation({ mutationFn: adminChangeApplicationStatus });
};

export const useAdminDeleteApplicationMutation = () => {
  return useMutation({ mutationFn: adminDeleteApplication });
};
