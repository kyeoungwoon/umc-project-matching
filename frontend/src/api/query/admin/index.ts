import { useQuery } from '@tanstack/react-query';

import { adminGetAllApplications } from '@api/axios/admin';

export const useAdminGetAllApplications = () => {
  return useQuery({ queryKey: ['admin', 'applications', 'all'], queryFn: adminGetAllApplications });
};
