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

import { getStatusBadgeVariant, getStatusLabel } from '@features/admin/utils/dashboard-status';

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">지원서 상세 정보</DialogTitle>
          <DialogDescription>지원자의 상세 정보를 확인할 수 있습니다.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* 지원 상태 */}
          <div>
            <h3 className="text-muted-foreground mb-2 text-sm font-semibold">지원 상태</h3>
            <Badge variant={getStatusBadgeVariant(application.status)}>
              {getStatusLabel(application.status)}
            </Badge>
          </div>

          <Separator />

          {/* 지원자 정보 */}
          <div>
            <h3 className="mb-3 text-lg font-bold">지원자 정보</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground text-sm">이름</p>
                <p className="font-medium">{application.applicant.name}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">닉네임</p>
                <p className="font-medium">{application.applicant.nickname}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">챌린저 ID</p>
                <p className="font-mono text-sm">{application.applicant.umsbChallengerId}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">소속 대학</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">{application.applicant.challengerSchool.name}</Badge>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* 프로젝트 정보 */}
          <div>
            <h3 className="mb-3 text-lg font-bold">프로젝트 정보</h3>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground text-sm">프로젝트 제목</p>
                <p className="font-medium">{application.form.project.title}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">지원 폼 제목</p>
                <p className="font-medium">{application.form.title}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">기획자 정보</p>
                <div className="rounded-lg border p-3">
                  <p className="font-medium">
                    {application.form.project.projectPlan.name} (
                    {application.form.project.projectPlan.nickname})
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="secondary">
                      {application.form.project.projectPlan.challengerSchool.name}
                    </Badge>
                  </div>
                </div>
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
              <div>
                <p className="text-muted-foreground text-sm">최종 수정</p>
                <p className="font-medium">
                  {format(new Date(application.updatedAt), 'yyyy년 MM월 dd일 HH:mm:ss')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
