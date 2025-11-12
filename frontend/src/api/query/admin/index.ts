import { useQuery } from '@tanstack/react-query';

import { adminGetAllApplications, adminGetProjectApplicationStats } from '@api/axios/admin';

export const useAdminGetAllApplications = () => {
  return useQuery({ queryKey: ['admin', 'applications', 'all'], queryFn: adminGetAllApplications });
};

export const useAdminGetProjectApplicationStats = (projectId: string) => {
  return useQuery({
    queryKey: ['admin', 'applications', 'stats', projectId],
    queryFn: () => adminGetProjectApplicationStats(projectId),
  });
};
