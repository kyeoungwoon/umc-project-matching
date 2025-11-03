import { ApiResponse, api } from '@api/axios';
import { CreateMatchingRoundRequestDto, MatchingRoundResponseDto, TestCreateMatchingRoundResponseDto } from '@api/axios/matching-round/types';

export const getCurrentMatchingRound = async () => {
  const res = await api.get<ApiResponse<MatchingRoundResponseDto>>('/v1/projects/matching-round/current');
  return res.data.result;
};

export const createMatchingRound = async (data: CreateMatchingRoundRequestDto) => {
  const res = await api.post<ApiResponse<MatchingRoundResponseDto>>('/v1/projects/matching-round', data);
  return res.data.result;
};

export const testCreateMatchingRound = async () => {
  const res = await api.post<ApiResponse<TestCreateMatchingRoundResponseDto>>('/v1/projects/test/matching-round');
  return res.data.result;
};