import { ApiResponse, api } from '@api/axios';
import {
  CreateMatchingRoundRequestDto,
  MatchingRoundResponseDto,
  TestCreateMatchingRoundResponseDto,
} from '@api/axios/matching-round/types';

export const getCurrentMatchingRound = async () => {
  const res = await api.get<ApiResponse<MatchingRoundResponseDto>>(
    '/v1/projects/matching-round/current',
  );
  return res.data.result;
};

export const createMatchingRound = async (data: CreateMatchingRoundRequestDto) => {
  const res = await api.post<ApiResponse<MatchingRoundResponseDto>>(
    '/v1/projects/matching-round',
    data,
  );
  return res.data.result;
};

export const getMatchingRoundsByStartEndDatetime = async (startDate: Date, endDate: Date) => {
  const res = await api.get<ApiResponse<MatchingRoundResponseDto[]>>(
    '/v1/projects/matching-round/query',
    {
      params: { start: startDate.toISOString(), end: endDate.toISOString() },
    },
  );
  return res.data.result;
};
