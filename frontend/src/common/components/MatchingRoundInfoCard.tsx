'use client';

import { CalendarIcon, ClockIcon, PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Badge } from '@styles/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@styles/components/ui/card';
import { Separator } from '@styles/components/ui/separator';

import { MatchingRoundResponseDto } from '@api/axios/matching-round/types';

const MatchingRoundInfoCard = ({ matchingRound }: { matchingRound: MatchingRoundResponseDto }) => {
  const startDate = new Date(matchingRound.startDatetime);
  const endDate = new Date(matchingRound.endDatetime);
  const now = new Date();

  const isActive = now >= startDate && now <= endDate;
  const isUpcoming = now < startDate;
  const isEnded = now > endDate;

  const getStatusBadge = () => {
    if (isActive) return <Badge className="bg-green-500">진행 중</Badge>;
    if (isUpcoming) return <Badge variant="secondary">예정</Badge>;
    if (isEnded) return <Badge variant="outline">종료</Badge>;
    return null;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarIcon className="text-primary h-5 w-5" />
            <CardTitle className="text-base">매칭 정보</CardTitle>
          </div>
          {getStatusBadge()}
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <div className="space-y-3">
          <div className="border-border/50 flex items-center gap-3 rounded-md border p-2">
            <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
              <ClockIcon className="text-primary h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-xs">매칭 차수</p>
              <p className="font-medium">{matchingRound.name}</p>
            </div>
          </div>

          <div className="grid gap-2">
            <div className="border-border/50 flex items-center gap-3 rounded-md border p-2">
              <PlayCircleIcon className="h-4 w-4 text-green-600" />
              <div className="flex-1">
                <p className="text-muted-foreground text-xs">매칭 시작</p>
                <p className="text-sm font-medium">
                  {startDate.toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}{' '}
                  <span className="text-muted-foreground">
                    {startDate.toLocaleTimeString('ko-KR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </p>
              </div>
            </div>

            <div className="border-border/50 flex items-center gap-3 rounded-md border p-2">
              <StopCircleIcon className="h-4 w-4 text-red-600" />
              <div className="flex-1">
                <p className="text-muted-foreground text-xs">매칭 종료</p>
                <p className="text-sm font-medium">
                  {endDate.toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}{' '}
                  <span className="text-muted-foreground">
                    {endDate.toLocaleTimeString('ko-KR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchingRoundInfoCard;
