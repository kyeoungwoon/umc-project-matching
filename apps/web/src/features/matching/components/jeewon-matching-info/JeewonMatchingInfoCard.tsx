'use client';

import { ClockIcon } from 'lucide-react';

import { Badge } from '@styles/components/ui/badge';
import { Card } from '@styles/components/ui/card';

import { MatchingRoundResponseDto } from '@api/axios/matching-round/types';

import { formatDate } from '@common/utils/format-dates';

import JeewonMatchingTimeCard from '@features/matching/components/jeewon-matching-info/JeewonMatchingTimeCard';

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
    <Card className="flex w-full flex-row items-center justify-between gap-x-4 overflow-hidden px-5">
      {/* 라운드 이름 */}
      <div className={'flex flex-grow flex-row items-center gap-x-2'}>
        <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
          <ClockIcon className="text-primary h-4 w-4" />
        </div>
        <p className="text-foreground text-xl font-semibold">{data.name}</p>
        {/*{getStatusBadge()}*/}
      </div>
      {/* 기간 정보 */}
      <div className="flex flex-row gap-x-2">
        {/* 시작일 */}
        <JeewonMatchingTimeCard date={startDate} isStart={true} />
        {/* 종료일 */}
        <JeewonMatchingTimeCard date={endDate} isStart={false} />
      </div>
    </Card>
  );
};

export default JeewonMatchingInfoCard;
