import { useQuery } from '@tanstack/react-query';

import { getMyInfo } from '@api/axios/user';

export const useGetMyInfoQuery = () => {
  return useQuery({ queryKey: ['me'], queryFn: getMyInfo });
};
