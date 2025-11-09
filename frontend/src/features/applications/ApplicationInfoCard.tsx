'use client';

import { Badge } from '@styles/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';

import { ApplicationResponseDto } from '@api/axios/application/types';

import MatchingRoundInfoCard from '@features/matching/components/MatchingRoundInfoCard';
import QuestionAnswer from '@features/projects/components/QuestionAnswer';

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case 'SUBMITTED':
      return 'default';
    case 'CONFIRMED':
      return 'default';
    case 'REJECTED':
      return 'destructive';
    case 'DRAFT':
      return 'secondary';
    default:
      return 'secondary';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'SUBMITTED':
      return '제출됨';
    case 'CONFIRMED':
      return '합격';
    case 'REJECTED':
      return '불합격';
    case 'DRAFT':
      return '임시저장';
    default:
      return status;
  }
};

const ApplicationInfoCard = ({ application }: { application: ApplicationResponseDto }) => {
  return (
    <Card key={application.id} className="">
      {/*내 지원서에도 쓰이는 관계로 합/불 여부 표시*/}
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg font-semibold">지원서 정보</CardTitle>
          <Badge variant={getStatusBadgeVariant(application.status)}>
            {getStatusText(application.status)}
          </Badge>
        </div>
        {application.createdAt && (
          <CardDescription className="text-muted-foreground mt-1 text-sm">
            제출일: {new Date(application.createdAt).toLocaleString()}
          </CardDescription>
        )}
      </CardHeader>
      {/*본문은 매칭 라운드 + 답변 배열로 나열*/}
      <CardContent>
        <div className="grid gap-3 text-sm">
          <div className="flex items-center gap-2">
            {application?.matchingRound ? (
              <MatchingRoundInfoCard data={application.matchingRound} />
            ) : (
              <span>매칭 라운드 정보가 없습니다.</span>
            )}
          </div>

          {application.formAnswers &&
            application.formAnswers.length > 0 &&
            // 답변 배열이 존재하고, 그 길이가 0보다 클 때만 렌더링
            application.formAnswers.map((answer, idx) => (
              <QuestionAnswer key={idx} answer={answer} />
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationInfoCard;
