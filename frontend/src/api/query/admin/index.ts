import { useQuery } from '@tanstack/react-query';

import {
  adminGetAllApplications,
  adminGetApplicationStatisticsByChallenger,
  adminGetProjectApplicationStats,
} from '@api/axios/admin';
import { Part } from '@api/axios/auth/types';

export const useAdminGetAllApplications = () => {
  return useQuery({ queryKey: ['admin', 'applications', 'all'], queryFn: adminGetAllApplications });
};

export const useAdminGetProjectApplicationStats = (projectId: string) => {
  return useQuery({
    queryKey: ['admin', 'applications', 'stats', projectId],
    queryFn: () => adminGetProjectApplicationStats(projectId),
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
