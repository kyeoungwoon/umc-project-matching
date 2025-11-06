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
  const [selectedStatus, setSelectedStatus] = useState<ApplicationStatus | null>(
    application.status,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { mutate: changeStatus, isPending } = useChangeApplicationStatusMutation(
    projectId,
    application.id,
  );

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
          toast.success('지원서 합격/불합격 처리에 성공하였습니다..', {});
          setIsDialogOpen(false);
          setSelectedStatus(null);
        },
        onError: (err) => {
          setIsDialogOpen(false);
          toast.error('지원서 합격/불합격 처리에 실패하였습니다.', {
            description: err.message,
          });
        },
      },
    );
  };

  return (
    <>
      <ConfirmDialog
        isOpen={isDialogOpen}
        handleConfirm={() => handleStatusChange(selectedStatus)}
        onChange={(state) => setSelectedStatus(state)}
        pendingAction={selectedStatus}
      />
      <Card className="transition-shadow hover:shadow-md">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {getStatusIcon(application.status)}
                <CardTitle className="text-base">지원서 ID: {application.id}</CardTitle>
              </div>
              <CardDescription>지원자 ID: {application.applicantId}</CardDescription>
            </div>
            <Badge variant={getStatusBadgeVariant(application.status)}>
              {getStatusText(application.status)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground font-medium">제출일:</span>
                <span>{new Date(application.createdAt).toLocaleString('ko-KR')}</span>
              </div>
              {application.createdAt !== application.updatedAt && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-medium">최종 수정일:</span>
                  <span>{new Date(application.updatedAt).toLocaleString('ko-KR')}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground font-medium">답변 개수:</span>
                <Badge variant="outline">{application.answers.length}개</Badge>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium">지원서 합격/불합격 결정</span>
              <ButtonGroup>
                <Button variant={'destructive'} onClick={() => handleButtonClick('REJECTED')}>
                  <CheckCircle2Icon className="mr-1 h-4 w-4" />
                  불합격
                </Button>
                <Button variant={'default'} onClick={() => handleButtonClick('CONFIRMED')}>
                  <CheckCircle2Icon className="mr-1 h-4 w-4" />
                  합격
                </Button>
              </ButtonGroup>
              {isPending && <span className="text-muted-foreground text-xs">변경 중...</span>}
            </div>

            <Separator />

            <ApplicationInfoCard application={application} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ApplicantApplicationCard;
