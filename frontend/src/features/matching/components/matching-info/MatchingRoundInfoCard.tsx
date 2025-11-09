'use client';

import { useEffect, useState } from 'react';

import { CalendarIcon, ClockIcon, PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Badge } from '@styles/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@styles/components/ui/card';
import { Label } from '@styles/components/ui/label';
import { Progress } from '@styles/components/ui/progress';
import { Separator } from '@styles/components/ui/separator';

import { MatchingRoundResponseDto } from '@api/axios/matching-round/types';

import { formatDate } from '@common/utils/format-dates';

import { getProgress, getTimeRemaining } from '@features/matching/utils/date-related';

import { Time } from '@features/matching/components/matching-info/Time';

const MatchingRoundInfoCard = ({ data }: { data: MatchingRoundResponseDto }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const startDate = formatDate(data?.startDatetime);
  const endDate = formatDate(data?.endDatetime);

  // 1초마다 갱신되는 남은 시간 계산
  useEffect(() => {
    const interval = setInterval(() => {
      // 강제로 리렌더링을 유발하는 상태 업데이트
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // const isActive = now >= new Date(data.startDatetime) && now <= new Date(data.endDatetime);
  // const isUpcoming = now < new Date(data.startDatetime);
  // const isEnded = now > new Date(data.endDatetime);

  return (
    <div className="my-5 flex w-full flex-row items-center justify-between gap-x-4 overflow-hidden px-5">
      {/*이름 */}
      <Label className={'flex-shrink-0 flex-grow-0 text-3xl tracking-tight text-gray-600'}>
        현재 매칭 | <p className="text-foreground font-semibold">{data.name}</p>
      </Label>

      {/*종료 시간 */}
      <div className={'flex flex-shrink-0 flex-grow-0 flex-row items-center justify-center gap-2'}>
        <Time datetime={startDate} /> ~ <Time datetime={endDate} />
      </div>

      <span
        className={
          'flex w-50 flex-shrink-0 flex-grow-0 flex-row items-center gap-x-3 text-gray-600'
        }
      >
        <ClockIcon />
        {getTimeRemaining(data.endDatetime, currentTime)}
      </span>

      {/*<Progress*/}
      {/*  value={getProgress(data.startDatetime, data.endDatetime) * 100}*/}
      {/*  className="mt-4"*/}
      {/*/>*/}
    </div>
  );
};

export default MatchingRoundInfoCard;
