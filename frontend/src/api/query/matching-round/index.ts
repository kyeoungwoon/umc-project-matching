import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createMatchingRound,
  getAllMatchingRound,
  getClosestMatchingRound,
  getMatchingRound,
  getMatchingRoundsByStartEndDatetime,
} from '@api/axios/matching-round';
import { CreateMatchingRoundRequestDto } from '@api/axios/matching-round/types';

import { queryKeyStore } from '@common/constants/query-key.constants';

export const useGetClosestMatchingRoundQuery = () => {
  return useQuery({
    queryKey: queryKeyStore.matchingRound.closest.queryKey,
    queryFn: getClosestMatchingRound,
    retry: false,
  });
};

export const useGetAllMatchingRoundQuery = () => {
  return useQuery({
    queryKey: queryKeyStore.matchingRound.all.queryKey,
    queryFn: getAllMatchingRound,
    retry: false,
  });
};

export const useGetMatchingRound = (roundId: string) => {
  return useQuery({
    queryKey: queryKeyStore.matchingRound.singleMatchingRound(roundId).queryKey,
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
    queryKey: queryKeyStore.matchingRound.byPeriod(startDate, endDate).queryKey,
    queryFn: () => getMatchingRoundsByStartEndDatetime(startDate, endDate),
  });
};
