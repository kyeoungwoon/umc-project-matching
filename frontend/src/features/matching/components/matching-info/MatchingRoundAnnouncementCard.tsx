'use client';

import HeaderSkeleton from '@skeletons/components/HeaderSkeleton';
import { toast } from 'sonner';

import { useGetCurrentMatchingRoundQuery } from '@api/query/matching-round';

import MatchingRoundInfoCard from '@features/matching/components/matching-info/MatchingRoundInfoCard';
import NoCurrentMatchingRound from '@features/matching/components/matching-info/NoCurrentMatchingRound';

const MatchingRoundAnnouncementCard = () => {
  const { data, isLoading, isError, error } = useGetCurrentMatchingRoundQuery();

  if (isLoading) {
    return <HeaderSkeleton />;
  }

  if (isError) {
    // console.error('매칭 차수 조회 오류:', error);
    toast.error('미래 매칭 차수가 존재하지 않습니다.', {
      richColors: true,
      description: '무언가 잘못되었어요 ...',
    });
  }

  return <>{data ? <MatchingRoundInfoCard data={data} /> : <NoCurrentMatchingRound />}</>;
};

export default MatchingRoundAnnouncementCard;
