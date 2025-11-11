import { ApiResponse, api } from '@api/axios';
import { AdminGetAllApplicationsResponseDto } from '@api/axios/admin/types';

export const adminGetAllApplications = async () => {
  const res = await api.get<ApiResponse<AdminGetAllApplicationsResponseDto[]>>(
    '/v1/projects/admin/application/all',
  );

  return res.data.result;
};
