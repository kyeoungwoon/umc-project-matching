import { useQuery } from '@tanstack/react-query';

import { getMyInfo } from '@api/axios/user';

import { queryKeyStore } from '@common/constants/query-key.constants';

export const useGetMyInfoQuery = () => {
  return useQuery({ queryKey: queryKeyStore.me.info.queryKey, queryFn: getMyInfo });
};
