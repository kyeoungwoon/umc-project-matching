import { ApiResponse, api } from '@api/axios';
import {
  AdminGetAllApplicationsResponseDto,
  AdminProjectApplicationSummaryResponseDto,
} from '@api/axios/admin/types';

export const adminGetAllApplications = async () => {
  const res = await api.get<ApiResponse<AdminGetAllApplicationsResponseDto[]>>(
    '/v1/projects/admin/application/all',
  );

  return res.data.result;
};

export const adminGetProjectApplicationStats = async (projectId: string) => {
  const res = await api.get<ApiResponse<AdminProjectApplicationSummaryResponseDto>>(
    `/v1/projects/admin/applications`,
    {
      params: {
        projectId,
      },
    },
  );

  return res.data.result;
};
