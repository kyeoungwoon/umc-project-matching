import { ApiResponse, api } from '@api/axios';
import { UserResponseDto } from '@api/axios/user/types';

export const getMyInfo = async () => {
  const res = await api.get<ApiResponse<UserResponseDto>>('/v1/users/me');
  return res.data.result;
};
