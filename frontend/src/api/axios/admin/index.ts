import { ApiResponse, api } from '@api/axios';
import {
  AdminGetAllApplicationsResponseDto,
  AdminProjectApplicationSummaryResponseDto,
  ApplicationStatsByChallengerResponse,
  ChallengerApplicationInfo,
} from '@api/axios/admin/types';
import { Part } from '@api/axios/auth/types';

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

export const adminGetApplicationStatisticsByChallenger = async (
  part?: Part,
  school?: string,
  challengerId?: string,
) => {
  const res = await api.get<ApiResponse<ApplicationStatsByChallengerResponse>>(
    '/v1/projects/admin/applications/statistics/challenger',
    {
      params: {
        part,
        school,
        challengerId,
      },
    },
  );

  return res.data.result;
};
