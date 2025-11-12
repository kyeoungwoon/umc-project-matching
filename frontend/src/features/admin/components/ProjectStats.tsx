'use client';

import { useMemo } from 'react';

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

interface ProjectStatsProps {
  applications: AdminGetAllApplicationsResponseDto[];
}

interface ProjectStat {
  projectTitle: string;
  formTitle: string;
  totalApplications: number;
  pendingCount: number;
  acceptedCount: number;
  rejectedCount: number;
}

export function ProjectStats({ applications }: ProjectStatsProps) {
  const projectStats = useMemo(() => {
    const statsMap = new Map<string, ProjectStat>();

    applications.forEach((app) => {
      const key = `${app.form.project.title}|||${app.form.title}`;

      if (!statsMap.has(key)) {
        statsMap.set(key, {
          projectTitle: app.form.project.title,
          formTitle: app.form.title,
          totalApplications: 0,
          pendingCount: 0,
          acceptedCount: 0,
          rejectedCount: 0,
        });
      }

      const stat = statsMap.get(key)!;
      stat.totalApplications++;

      if (app.status === 'SUBMITTED') stat.pendingCount++;
      if (app.status === 'ACCEPTED') stat.acceptedCount++;
      if (app.status === 'REJECTED') stat.rejectedCount++;
    });

    return Array.from(statsMap.values()).sort((a, b) =>
      a.projectTitle.localeCompare(b.projectTitle),
    );
  }, [applications]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>프로젝트별 지원 현황</CardTitle>
        <CardDescription>각 프로젝트의 지원자 수와 합격/불합격 현황</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>프로젝트</TableHead>
                <TableHead>지원 폼</TableHead>
                <TableHead className="text-center">총 지원자</TableHead>
                <TableHead className="text-center">대기</TableHead>
                <TableHead className="text-center">합격</TableHead>
                <TableHead className="text-center">불합격</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectStats.length > 0 ? (
                projectStats.map((stat, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{stat.projectTitle}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{stat.formTitle}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">{stat.totalApplications}</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="secondary">{stat.pendingCount}</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="default">{stat.acceptedCount}</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="destructive">{stat.rejectedCount}</Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
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
