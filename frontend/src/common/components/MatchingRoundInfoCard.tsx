'use client';

import { CalendarIcon, ClockIcon, PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Badge } from '@styles/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@styles/components/ui/card';
import { Separator } from '@styles/components/ui/separator';

import { MatchingRoundResponseDto } from '@api/axios/matching-round/types';

import { formatDate } from '@common/utils/format-dates';

const MatchingRoundInfoCard = ({ data }: { data: MatchingRoundResponseDto }) => {
  const now = new Date();
  const startDate = formatDate(data?.startDatetime);
  const endDate = formatDate(data?.endDatetime);

  const isActive = now >= new Date(data.startDatetime) && now <= new Date(data.endDatetime);
  const isUpcoming = now < new Date(data.startDatetime);
  const isEnded = now > new Date(data.endDatetime);

  const getStatusBadge = () => {
    if (isActive) return <Badge className="bg-green-500">진행 중</Badge>;
    if (isUpcoming) return <Badge variant="secondary">예정</Badge>;
    if (isEnded) return <Badge variant="outline">종료</Badge>;
    return null;
  };

  return (
    <Card className="flex w-full flex-row items-center justify-between gap-x-4 overflow-hidden px-5">
      {/* 라운드 이름 */}
      <div className="bg-muted/50 flex w-60 items-center gap-3 rounded-lg p-3">
        <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
          <ClockIcon className="text-primary h-4 w-4" />
        </div>
        <div className="flex-1">
          <p className="text-muted-foreground text-xs">매칭 차수 이름</p>
          <p className="text-foreground font-semibold">{data.name}</p>
        </div>
        {getStatusBadge()}
      </div>

      {/* 기간 정보 */}
      <div className="space-y-2">
        <div className="flex flex-row gap-x-2">
          {/* 시작일 */}
          <div className="border-border/50 bg-background flex items-center gap-3 rounded-md border p-3">
            <CalendarIcon className="h-4 w-4 text-green-600" />
            <div className="flex-1">
              <p className="text-muted-foreground text-xs">시작 시간</p>
              <div className="flex items-baseline gap-2">
                <p className="text-sm font-medium">{startDate.date}</p>
                <p className="text-muted-foreground text-xs">{startDate.time}</p>
              </div>
            </div>
          </div>

          {/* 종료일 */}
          <div className="border-border/50 bg-background flex items-center gap-3 rounded-md border p-3">
            <CalendarIcon className="h-4 w-4 text-red-600" />
            <div className="flex-1">
              <p className="text-muted-foreground text-xs">종료 시간</p>
              <div className="flex items-baseline gap-2">
                <p className="text-sm font-medium">{endDate.date}</p>
                <p className="text-muted-foreground text-xs">{endDate.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MatchingRoundInfoCard;
