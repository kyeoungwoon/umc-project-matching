import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createMatchingRound,
  getAllMatchingRound,
  getCurrentMatchingRound,
  getMatchingRoundsByStartEndDatetime,
} from '@api/axios/matching-round';
import { CreateMatchingRoundRequestDto } from '@api/axios/matching-round/types';

export const useGetCurrentMatchingRoundQuery = () => {
  return useQuery({ queryKey: ['matching-round', 'current'], queryFn: getCurrentMatchingRound });
};

export const useGetAllMatchingRoundQuery = () => {
  return useQuery({ queryKey: ['matching-round', 'all'], queryFn: getAllMatchingRound });
};

export const useCreateMatchingRoundMutation = () => {
  return useMutation({
    mutationFn: (data: CreateMatchingRoundRequestDto) => createMatchingRound(data),
  });
};

export const useGetMatchingRoundByStartEndDatetime = (startDate: Date, endDate: Date) => {
  return useQuery({
    queryKey: ['matching-round', 'start-end-datetime', startDate, endDate],
    queryFn: () => getMatchingRoundsByStartEndDatetime(startDate, endDate),
  });
};
