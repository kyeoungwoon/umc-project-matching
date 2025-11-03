import { useQuery } from '@tanstack/react-query';
import * as user from '@api/axios/user';

export const useGetMyInfoQuery = () => {
  return useQuery({ queryKey: ['me'], queryFn: user.getMyInfo });
};
