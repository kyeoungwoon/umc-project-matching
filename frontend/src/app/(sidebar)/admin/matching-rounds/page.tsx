'use client';

import { useState } from 'react';

import { toast } from 'sonner';

import { Button } from '@styles/components/ui/button';
import { Card, CardContent } from '@styles/components/ui/card';

import { useGetMatchingRoundByStartEndDatetime } from '@api/query/matching-round';

import DatetimePicker from '@common/components/DatetimePicker';
import DefaultSkeleton from '@common/components/DefaultSkeleton';

import CreateMatchingRoundCard from '@features/projects/components/CreateMatchingRoundCard';
import JeewonMatchingInfoCard from '@features/projects/components/JeewonMatchingInfoCard';

const MatchingRounds = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  const [startDate, setStartDate] = useState<Date>(yesterday);
  const [endDate, setEndDate] = useState<Date>(nextMonth);

  const { data, isFetching } = useGetMatchingRoundByStartEndDatetime(startDate, endDate);

  if (isFetching) return <DefaultSkeleton />;

  return (
    <>
      <CreateMatchingRoundCard />
      <Card className="mt-6 w-full">
        <CardContent className={'flex flex-col items-start justify-center gap-y-1'}>
          <div className="mb-4 flex items-end gap-4">
            <span>시작</span>
            <DatetimePicker date={startDate} onDateChange={(date) => date && setStartDate(date)} />
            <span>종료</span>
            <DatetimePicker date={endDate} onDateChange={(date) => date && setEndDate(date)} />
            <Button
              onClick={() => {
                if (isFetching) return;
                toast.success('조회가 완료되었습니다.');
              }}
            >
              조회
            </Button>
          </div>
          <p className={'ml-1'}>매칭 차수 목록</p>
          <div className={'mt-2 flex w-full flex-col gap-y-4'}>
            {data && data.length > 0 ? (
              data.map((round) => (
                <JeewonMatchingInfoCard key={round.id} data={round} />
                // <div key={round.id} className="mb-4 rounded border p-4">
                //   <div>매칭 라운드 ID: {round.id}</div>
                //   <div>매칭 차수 이름: {round.name}</div>
                //
                //   <div>시작 날짜: {new Date(round.startDatetime).toLocaleString('ko-KR')}</div>
                //   <div>종료 날짜: {new Date(round.endDatetime).toLocaleString('ko-KR')}</div>
                // </div>
              ))
            ) : (
              <div>해당 기간에 매칭 라운드가 없습니다.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default MatchingRounds;
