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

import { MatchingRoundResponseDto } from '@api/axios/matching-round/types';
import { useGetCurrentMatchingRoundQuery } from '@api/query/matching-round';

import { formatDate } from '@common/utils/format-dates';

import DefaultSkeleton from '@common/components/DefaultSkeleton';
import MatchingRoundInfoCard from '@common/components/MatchingRoundInfoCard';

import JeewonMatchingTimeCard from '@features/form/components/JeewonMatchingTimeCard';

const JeewonMatchingInfoCard = ({ data }: { data: MatchingRoundResponseDto }) => {
  const now = new Date();
  const startDate = formatDate(data?.startDatetime);
  const endDate = formatDate(data?.endDatetime);

  const isActive = now >= new Date(data.startDatetime) && now <= new Date(data.endDatetime);
  const isUpcoming = now < new Date(data.startDatetime);
  const isEnded = now > new Date(data.endDatetime);

  const getStatusBadge = () => {
    if (isActive) return <Badge className="bg-green-500 text-lg">진행 중</Badge>;
    if (isUpcoming)
      return (
        <Badge className={'text-lg'} variant="secondary">
          예정
        </Badge>
      );
    if (isEnded)
      return (
        <Badge className={'text-lg'} variant="outline">
          종료
        </Badge>
      );
    return null;
  };

  return (
    <Card className="flex w-full flex-col items-center justify-between gap-x-4 overflow-hidden px-5">
      {/* 라운드 이름 */}
      <div className="bg-muted/50 flex w-full items-center gap-3 rounded-lg p-3">
        <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
          <ClockIcon className="text-primary h-4 w-4" />
        </div>
        <div className="flex-1">
          <p className="text-muted-foreground text-md">매칭 차수 이름</p>
          <p className="text-foreground text-xl font-semibold">{data.name}</p>
        </div>
        {getStatusBadge()}
      </div>

      {/* 기간 정보 */}
      <div className="flex w-full flex-row gap-x-2">
        {/* 시작일 */}
        <JeewonMatchingTimeCard date={startDate} isStart={true} />
        {/* 종료일 */}
        <JeewonMatchingTimeCard date={endDate} isStart={false} />
      </div>
    </Card>
  );
};

export default JeewonMatchingInfoCard;
