import { api } from '@api/axios';

export const getMyInfo = async () => {
  return api.get<any>('/v1/users/me');
};
