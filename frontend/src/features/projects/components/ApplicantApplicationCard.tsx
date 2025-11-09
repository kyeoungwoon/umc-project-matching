'use client';

// Application Card Component
import { useState } from 'react';

import { clsx } from 'clsx';
import {
  CheckCircle2Icon,
  ClockIcon,
  CrossIcon,
  FileTextIcon,
  XCircleIcon,
  XIcon,
} from 'lucide-react';
import { toast } from 'sonner';

import { Badge } from '@styles/components/ui/badge';
import { Button } from '@styles/components/ui/button';
import { ButtonGroup } from '@styles/components/ui/button-group';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';
import { ScrollArea } from '@styles/components/ui/scroll-area';
import { Separator } from '@styles/components/ui/separator';

import { ApplicationResponseDto, ApplicationStatus } from '@api/axios/application/types';
import { useChangeApplicationStatusMutation } from '@api/query/application';

import { parsePart } from '@common/utils/parse-userinfo';

import ApplicantChallengerInfo from '@common/components/ApplicantChallengerInfo';

import {
  getStatusBadgeVariant,
  getStatusIcon,
  getStatusText,
} from '@features/projects/utils/get-by-application-status';

import ApplicationStatusBadge from '@features/matching/components/ApplicationStatusBadge';
import MatchingRoundBadge from '@features/matching/components/matching-info/MatchingRoundBadge';
import ConfirmDialog from '@features/projects/components/ConfirmDialog';

import ApplicationAnswerList from '@features/applications/ApplicationAnswerList';
import ApplicationInfo from '@features/applications/ApplicationInfo';

const ApplicantApplicationCard = ({
  application,
  projectId,
}: {
  application: ApplicationResponseDto;
  projectId: string;
}) => {
  // console.log('application:', application);
  // console.log('projectId:', projectId);

  const [selectedStatus, setSelectedStatus] = useState<ApplicationStatus | null>(
    application.status,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { mutate: changeStatus } = useChangeApplicationStatusMutation(projectId, application.id);

  const handleButtonClick = (newStatus: ApplicationStatus) => {
    setSelectedStatus(newStatus);
    setIsDialogOpen(true);
  };

  const handleStatusChange = (newStatus: ApplicationStatus | null) => {
    if (!newStatus) throw new Error('pending 상태값이 null 입니다.');

    changeStatus(
      { status: newStatus },
      {
        onSuccess: () => {
          toast.success(`지원서 ${selectedStatus} 처리에 성공하였습니다.`, {});
          setIsDialogOpen(false);
          setSelectedStatus(null);
        },
        onError: (err) => {
          setIsDialogOpen(false);
          toast.error(`지원서 ${selectedStatus} 처리에 실패하였습니다.`, {
            description: err.message,
          });
        },
      },
    );
  };

  return (
    <>
      {/*합/불 처리시 double-check 용 dialog*/}
      <ConfirmDialog
        isOpen={isDialogOpen}
        handleConfirm={() => handleStatusChange(selectedStatus)}
        onChange={(state) => setSelectedStatus(state)}
        pendingAction={selectedStatus}
      />
      {/*카드 본문 내용*/}
      <div className="rounded-20pxr flex w-full flex-col gap-y-2 border border-gray-400 px-6 py-7">
        {/*최상단 : 상태 뱃지 + 매칭 info justify-between*/}
        <div className={'flex w-full flex-row items-center justify-between'}>
          <ApplicationStatusBadge status={application.status} />
          <MatchingRoundBadge roundName={application.matchingRound?.name} />
        </div>

        {/*중간 정보 : 학교 이름/닉네임, 다음에 지원서 ID랑 제출일*/}

        <ApplicantChallengerInfo
          school={application.applicant.challengerSchool.name}
          part={application.applicant.part}
          name={application.applicant.name}
          nickname={application.applicant.nickname}
        />

        <ApplicationInfo id={application.id} createdAt={application.createdAt} />

        {/*카드 헤더: 폼 제목과 설명, 합불 여부를 표시함*/}
        <ScrollArea className={'h-100'}>
          <ApplicationAnswerList application={application} />
        </ScrollArea>

        {/*제출 상태일 경우 합불 처리 가능하도록 버튼 배치*/}
        {application.status === 'SUBMITTED' && (
          <div className={'mt-5 flex w-full flex-row items-center gap-x-2'}>
            <Button
              className={'h-15 flex-1 px-10 py-3 text-2xl'}
              variant={'destructive'}
              onClick={() => handleButtonClick('REJECTED')}
            >
              <XIcon className="mr-1 h-10 w-10" />
              불합격
            </Button>
            <Button
              className={'h-15 flex-1 bg-green-500 px-10 py-3 text-2xl'}
              variant={'default'}
              onClick={() => handleButtonClick('CONFIRMED')}
            >
              <CheckCircle2Icon className="mr-1 h-10 w-10" />
              합격
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ApplicantApplicationCard;
