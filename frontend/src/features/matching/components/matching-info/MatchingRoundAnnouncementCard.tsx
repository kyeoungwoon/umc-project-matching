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

  const getMatchingStatus = () => {
    if (!data) return null;
    const now = new Date();
    const start = new Date(data.startDatetime);
    const end = new Date(data.endDatetime);

    if (now < start) {
      return { text: '예정', variant: 'secondary' as const };
    } else if (now >= start && now <= end) {
      return { text: '진행 중', variant: 'default' as const };
    } else {
      return { text: '종료', variant: 'outline' as const };
    }
  };

  const status = getMatchingStatus();

  if (isError) {
    // console.error('매칭 차수 조회 오류:', error);
    toast.error('현재 매칭 차수를 불러오지 못했습니다.', {
      richColors: true,
      description: '무언가 잘못되었어요 ...',
    });
  }

  return <>{data ? <MatchingRoundInfoCard data={data} /> : <NoCurrentMatchingRound />}</>;
};

export default MatchingRoundAnnouncementCard;
