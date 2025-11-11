'use client';

import { useMemo } from 'react';

import { format } from 'date-fns';

import { Badge } from '@styles/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@styles/components/ui/table';

import { AdminGetAllApplicationsResponseDto } from '@api/axios/admin/types';

interface ApplicantSummaryProps {
  applications: AdminGetAllApplicationsResponseDto[];
}

interface ApplicantInfo {
  umsbChallengerId: string;
  name: string;
  nickname: string;
  school: string;
  applications: {
    projectTitle: string;
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
    createdAt: string;
  }[];
  acceptedProject?: string;
}

const getStatusBadgeVariant = (
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED',
): 'default' | 'secondary' | 'destructive' => {
  switch (status) {
    case 'ACCEPTED':
      return 'default';
    case 'PENDING':
      return 'secondary';
    case 'REJECTED':
      return 'destructive';
    default:
      return 'secondary';
  }
};

const getStatusLabel = (status: 'PENDING' | 'ACCEPTED' | 'REJECTED'): string => {
  switch (status) {
    case 'ACCEPTED':
      return '합격';
    case 'PENDING':
      return '대기';
    case 'REJECTED':
      return '불합격';
    default:
      return status;
  }
};

export function ApplicantSummary({ applications }: ApplicantSummaryProps) {
  const applicantInfos = useMemo(() => {
    const infoMap = new Map<string, ApplicantInfo>();

    applications.forEach((app) => {
      const id = app.applicant.umsbChallengerId;

      if (!infoMap.has(id)) {
        infoMap.set(id, {
          umsbChallengerId: id,
          name: app.applicant.name,
          nickname: app.applicant.nickname,
          school: app.applicant.school.map((s) => s.name).join(', '),
          applications: [],
        });
      }

      const info = infoMap.get(id)!;
      info.applications.push({
        projectTitle: app.form.project.title,
        status: app.status,
        createdAt: app.createdAt,
      });

      // 합격한 프로젝트가 있으면 기록
      if (app.status === 'ACCEPTED') {
        info.acceptedProject = app.form.project.title;
      }
    });

    return Array.from(infoMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [applications]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>지원자별 지원 현황</CardTitle>
        <CardDescription>각 지원자의 지원 이력 및 합격 여부</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>이름</TableHead>
                <TableHead>닉네임</TableHead>
                <TableHead>소속 대학</TableHead>
                <TableHead>지원 프로젝트</TableHead>
                <TableHead>최종 팀</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicantInfos.length > 0 ? (
                applicantInfos.map((info, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{info.name}</TableCell>
                    <TableCell>{info.nickname}</TableCell>
                    <TableCell>
                      <span className="text-sm">{info.school}</span>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        {info.applications.map((app, appIdx) => (
                          <div key={appIdx} className="flex items-center gap-2">
                            <span className="text-sm">{app.projectTitle}</span>
                            <Badge variant={getStatusBadgeVariant(app.status)} className="text-xs">
                              {getStatusLabel(app.status)}
                            </Badge>
                            <span className="text-muted-foreground text-xs">
                              {format(new Date(app.createdAt), 'MM/dd HH:mm')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      {info.acceptedProject ? (
                        <Badge variant="default">{info.acceptedProject}</Badge>
                      ) : (
                        <span className="text-muted-foreground text-sm">미정</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    데이터가 없습니다.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
