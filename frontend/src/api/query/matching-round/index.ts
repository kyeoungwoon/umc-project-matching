import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createMatchingRound,
  getCurrentMatchingRound,
  testCreateMatchingRound,
} from '@api/axios/matching-round';
import { CreateMatchingRoundRequestDto } from '@api/axios/matching-round/types';

export const useGetCurrentMatchingRoundQuery = () => {
  return useQuery({ queryKey: ['matching-round', 'current'], queryFn: getCurrentMatchingRound });
};

export const useCreateMatchingRoundMutation = () => {
  return useMutation({
    mutationFn: (data: CreateMatchingRoundRequestDto) => createMatchingRound(data),
  });
};

export const useTestCreateMatchingRoundMutation = () => {
  return useMutation({ mutationFn: testCreateMatchingRound });
};
