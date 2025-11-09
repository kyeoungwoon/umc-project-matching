'use client';

import { CalendarIcon, ClockIcon, InfoIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Badge } from '@styles/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';

import { useGetCurrentMatchingRoundQuery } from '@api/query/matching-round';

import DefaultSkeleton from '@common/components/DefaultSkeleton';

import MatchingRoundInfoCard from '@features/matching/components/MatchingRoundInfoCard';
import JeewonMatchingInfoCard from '@features/projects/components/JeewonMatchingInfoCard';

const MatchingRoundAnnouncementCard = () => {
  const { data, isLoading, isError, error } = useGetCurrentMatchingRoundQuery();

  if (isLoading) {
    return <DefaultSkeleton />;
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
    console.error('매칭 차수 조회 오류:', error);
    toast.error('현재 매칭 차수를 불러오지 못했습니다.', {
      richColors: true,
      description: '무언가 잘못되었어요 ...',
    });
  }

  return (
    <>
      {data ? (
        <JeewonMatchingInfoCard data={data} />
      ) : (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="bg-muted mb-3 flex h-12 w-12 items-center justify-center rounded-full">
            <InfoIcon className="text-muted-foreground h-6 w-6" />
          </div>
          <p className="text-muted-foreground text-sm font-medium">
            현재 진행 중인 매칭 차수가 없습니다
          </p>
          <p className="text-muted-foreground text-xs">다음 매칭 차수를 기다려주세요</p>
        </div>
      )}
    </>
  );
};

export default MatchingRoundAnnouncementCard;
