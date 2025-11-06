'use client';

import { toast } from 'sonner';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';

import { useGetCurrentMatchingRoundQuery } from '@api/query/matching-round';

import DefaultSkeleton from '@common/components/DefaultSkeleton';

const MatchingRoundAnnouncementCard = () => {
  const { data, isLoading, isError, error } = useGetCurrentMatchingRoundQuery();

  if (isLoading) {
    return <DefaultSkeleton />;
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return '[날짜 없음]';
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  if (isError) {
    console.error('매칭 차수 조회 오류:', error);
    toast.error('현재 매칭 차수를 불러오지 못했습니다.', {
      richColors: true,
      description: '무언가 잘못되었어요 ...',
    });
  }

  return (
    <Card className={'w-100'}>
      <CardHeader>
        <CardTitle>매칭 공지사항</CardTitle>
        <CardDescription>매칭 일정 안내</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li>현재 매칭 차수 : {data?.name ?? '현재 매칭 차수가 존재하지 않습니다'}</li>
          <li>
            현재 매칭 차수 기간 : {formatDate(data?.startDatetime)} ~{' '}
            {formatDate(data?.endDatetime)}
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default MatchingRoundAnnouncementCard;
