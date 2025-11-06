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

import MatchingRoundInfoCard from '@common/components/MatchingRoundInfoCard';

import QuestionAnswer from '@features/form/components/QuestionAnswer';

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
    <Card key={application.id} className="transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            {application?.form ? (
              <>
                <CardTitle>{application.form.title}</CardTitle>
                <CardDescription>{application.form.description || '설명 없음'}</CardDescription>
              </>
            ) : (
              <CardTitle>폼 정보를 불러올 수 없습니다.</CardTitle>
            )}
          </div>
          <div className={'flex flex-row gap-x-2'}>
            <Badge variant={'secondary'}>
              {new Date(application.createdAt).toLocaleString('ko-KR')}
            </Badge>
            <Badge variant={getStatusBadgeVariant(application.status)}>
              {getStatusText(application.status)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 text-sm">
          <div className="flex items-center gap-2">
            {application?.matchingRound ? (
              <MatchingRoundInfoCard matchingRound={application.matchingRound} />
            ) : (
              <span>매칭 라운드 정보가 없습니다.</span>
            )}
          </div>

          {application.answers &&
            application.answers.length > 0 &&
            // 답변 배열이 존재하고, 그 길이가 0보다 클 때만 렌더링
            application.answers.map((answer, idx) => <QuestionAnswer key={idx} answer={answer} />)}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationInfoCard;
