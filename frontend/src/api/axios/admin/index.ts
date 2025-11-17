import qs from 'qs';

import { ApiResponse, api } from '@api/axios';
import {
  AdminGetAllApplicationsResponseDto,
  AdminProjectApplicationSummaryResponseDto,
  ApplicationStatsByChallengerResponse,
} from '@api/axios/admin/types';
import { ApplicationStatus } from '@api/axios/application/types';
import { Part } from '@api/axios/auth/types';

export const adminGetAllApplications = async () => {
  const res = await api.get<ApiResponse<AdminGetAllApplicationsResponseDto[]>>(
    '/v1/projects/admin/application/all',
  );

  return res.data.result;
};

export const adminGetProjectApplicationStats = async (projectId: string, part?: Part[]) => {
  const res = await api.get<ApiResponse<AdminProjectApplicationSummaryResponseDto>>(
    `/v1/projects/admin/applications`,
    {
      params: {
        projectId,
        part,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
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

export const adminChangeApplicationStatus = async (data: {
  applicationId: string;
  newStatus: ApplicationStatus;
}) => {
  const res = await api.patch<ApiResponse<any>>('/v1/projects/admin/application/status', {
    applicationId: data.applicationId,
    newStatus: data.newStatus,
  });

  return res.data.result;
};

export const adminDeleteApplication = async (applicationId: string) => {
  const res = await api.delete<ApiResponse<any>>(`/v1/projects/admin/application/${applicationId}`);

  return res.data.result;
};
