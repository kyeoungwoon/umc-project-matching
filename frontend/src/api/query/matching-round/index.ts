import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createMatchingRound,
  getAllMatchingRound,
  getClosestMatchingRound,
  getMatchingRound,
  getMatchingRoundsByStartEndDatetime,
} from '@api/axios/matching-round';
import { CreateMatchingRoundRequestDto } from '@api/axios/matching-round/types';

export const useGetClosestMatchingRoundQuery = () => {
  return useQuery({
    queryKey: ['matching-round', 'closest'],
    queryFn: getClosestMatchingRound,
    retry: false,
  });
};

export const useGetAllMatchingRoundQuery = () => {
  return useQuery({
    queryKey: ['matching-round', 'all'],
    queryFn: getAllMatchingRound,
    retry: false,
  });
};

export const useGetMatchingRound = (roundId: string) => {
  return useQuery({
    queryKey: ['matching-round', 'roundId', roundId],
    queryFn: () => getMatchingRound(roundId),
  });
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
