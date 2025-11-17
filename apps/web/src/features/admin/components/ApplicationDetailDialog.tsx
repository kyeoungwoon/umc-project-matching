'use client';

import { format } from 'date-fns';

import { Badge } from '@styles/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@styles/components/ui/dialog';
import { Separator } from '@styles/components/ui/separator';

import { AdminGetAllApplicationsResponseDto } from '@api/axios/admin/types';

import ApplicantChallengerInfo from '@common/components/ApplicantChallengerInfo';

import ApplicationStatusBadge from '@features/matching/components/ApplicationStatusBadge';
import ApplicantApplicationCard from '@features/projects/components/ApplicantApplicationCard';

interface ApplicationDetailDialogProps {
  application: AdminGetAllApplicationsResponseDto | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ApplicationDetailDialog({
  application,
  open,
  onOpenChange,
}: ApplicationDetailDialogProps) {
  if (!application) return null;

  const projectPlan = application.form.project.projectPlan;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] max-w-3xl overflow-y-auto px-10 py-9">
        <DialogHeader className={'flex flex-row items-end justify-between gap-4'}>
          <div className={'flex flex-col gap-y-2'}>
            <DialogTitle className="text-2xl">지원서</DialogTitle>
            <DialogDescription>지원자의 상세 정보를 확인할 수 있습니다.</DialogDescription>
          </div>
          <ApplicationStatusBadge status={application.status} />
        </DialogHeader>

        <Separator />

        <div className="space-y-6">
          {/* 지원자 정보 */}
          <div>
            <h3 className="mb-3 text-lg font-bold">지원자 정보</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground text-sm">이름</p>
                <p className="">{application.applicant.name}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">닉네임</p>
                <p className="">{application.applicant.nickname}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">챌린저 ID</p>
                <p className="text-base">{application.applicant.umsbChallengerId}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">소속 대학</p>
                <div className="flex flex-wrap gap-1">
                  {application.applicant.challengerSchool.name}
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* 프로젝트 정보 */}
          <div>
            <h3 className="mb-3 text-lg font-bold">프로젝트 정보</h3>
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="text-muted-foreground text-sm">프로젝트 제목</p>
                <p className="font-medium">{application.form.project.title}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">지원 폼 제목</p>
                <p className="font-medium">{application.form.title}</p>
              </div>
              <div className={'flex flex-col gap-y-1'}>
                <p className="text-muted-foreground text-sm">Plan Info.</p>
                <span className={'flex flex-row gap-x-2 text-lg'}>
                  {projectPlan.challengerSchool.name}
                  <span className={'font-semibold'}>
                    {projectPlan.name}/{projectPlan.nickname}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <Separator />

          {/* 지원 시간 */}
          <div>
            <h3 className="mb-3 text-lg font-bold">지원 일시</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground text-sm">지원 일시</p>
                <p className="font-medium">
                  {format(new Date(application.createdAt), 'yyyy년 MM월 dd일 HH:mm:ss')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
