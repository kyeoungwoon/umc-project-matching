'use client';

// Application Card Component
import { useState } from 'react';

import { CheckCircle2Icon, ClockIcon, FileTextIcon, XCircleIcon } from 'lucide-react';
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
import { Separator } from '@styles/components/ui/separator';

import { ApplicationResponseDto, ApplicationStatus } from '@api/axios/application/types';
import { useChangeApplicationStatusMutation } from '@api/query/application';

import ChallengerInfoBadge from '@common/components/ChallengerInfoBadge';

import {
  getStatusBadgeVariant,
  getStatusIcon,
  getStatusText,
} from '@features/form/utils/get-by-application-status';

import ConfirmDialog from '@features/form/components/ConfirmDialog';

import ApplicationInfoCard from '@features/applications/ApplicationInfoCard';

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
      <Card className="w-full transition-shadow hover:shadow-md">
        {/*카드 헤더: 폼 제목과 설명, 합불 여부를 표시함*/}
        <CardHeader className="flex w-full flex-col">
          {/*폼 설명 + 합불 뱃지*/}
          <CardTitle className={'flex w-full flex-row items-center justify-between'}>
            <span className={'flex flex-row items-center gap-x-2 text-lg font-semibold'}>
              {getStatusIcon(application.status)}
              <ChallengerInfoBadge
                school={application.applicant.challengerSchool.name}
                part={application.applicant.part}
                name={application.applicant.name}
                nickname={application.applicant.nickname}
              />
            </span>
            <span className={'flex flex-row items-center gap-x-2'}>
              <Badge variant={getStatusBadgeVariant(application.status)}>
                {getStatusText(application.status)}
              </Badge>
            </span>
          </CardTitle>
          {/*폼 설명*/}
          <CardDescription className={'flex w-full flex-col items-start justify-center gap-y-1'}>
            {/*부가 정보: 지원서 ID 및 지원한 챌린저 정보*/}
            <span className="text-sm">지원서 ID: {application.id}</span>
            <span className="text-muted-foreground font-medium">
              제출일: {new Date(application.createdAt).toLocaleString('ko-KR')}{' '}
            </span>
            {/*제출일과 수정일이 다를 경우 (그럴 이유가 있나?)*/}
            {application.createdAt !== application.updatedAt && (
              <span className="text-muted-foreground font-medium">
                최종 수정일: {new Date(application.updatedAt).toLocaleString('ko-KR')}
              </span>
            )}
            {/*제출 상태일 경우 합불 처리 가능하도록 버튼 배치*/}
            {application.status === 'SUBMITTED' && (
              <ButtonGroup>
                <Button
                  size={'sm'}
                  variant={'destructive'}
                  onClick={() => handleButtonClick('REJECTED')}
                >
                  <CheckCircle2Icon className="mr-1 h-4 w-4" />
                  불합격
                </Button>
                <Button
                  size={'sm'}
                  variant={'default'}
                  onClick={() => handleButtonClick('CONFIRMED')}
                >
                  <CheckCircle2Icon className="mr-1 h-4 w-4" />
                  합격
                </Button>
              </ButtonGroup>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between gap-2"></div>

          <Separator />

          <ApplicationInfoCard application={application} />
        </CardContent>
      </Card>
    </>
  );
};

export default ApplicantApplicationCard;
