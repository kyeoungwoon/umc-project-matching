'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';

import { useGetCurrentMatchingRoundQuery } from '@api/query/matching-round';

const AnnouncementCard = () => {
  const { data, isLoading } = useGetCurrentMatchingRoundQuery();

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  return (
    <Card className={'w-100'}>
      <CardHeader>
        <CardTitle>매칭 공지사항</CardTitle>
        <CardDescription>매칭 일정 안내</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li>기획-디자인 매칭 : </li>
          <li>현재 매칭 차수 : {data.name}</li>
          <li>
            현재 매칭 차수 기간 : {formatDate(data.startDatetime)} ~ {formatDate(data.endDatetime)}
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
