'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@styles/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';
import { Label } from '@styles/components/ui/label';

import { ProjectApplicationStats } from '@api/axios/admin/types';
import { useAdminGetProjectApplicationStats } from '@api/query/admin';

// ProjectApplicationStats 임포트

import DefaultSkeleton from '@common/components/DefaultSkeleton';

// SidebarSkeleton 대신 DefaultSkeleton 사용

import { DataTable } from '../DataTable';

interface ProjectStatsProps {
  projectId: string;
}

// DataTable에 사용할 columns 정의
const columns: ColumnDef<ProjectApplicationStats>[] = [
  {
    accessorKey: 'part', // part 객체의 name 속성에 접근
    header: '파트',
    cell: ({ row }) => row.original.part,
  },
  {
    accessorKey: 'matchingRound.name', // matchingRound 객체의 name 속성에 접근
    header: '매칭 차수',
    cell: ({ row }) => row.original.matchingRound.name,
  },
  {
    accessorKey: 'totalApplicants',
    header: '총 지원자',
    cell: ({ row }) => <span>{row.original.totalApplicants}</span>,
  },
  {
    accessorKey: 'submittedApplicants',
    header: '제출됨',
    cell: ({ row }) => (
      <span className={'text-center font-bold text-gray-700'}>
        {row.original.submittedApplicants}
      </span>
    ),
  },
  {
    accessorKey: 'confirmedApplicants',
    header: '합격',
    cell: ({ row }) => (
      <span className={'text-center font-bold text-green-700'}>
        {row.original.confirmedApplicants}
      </span>
    ),
  },
  {
    accessorKey: 'rejectedApplicants',
    header: '불합격',
    cell: ({ row }) => (
      <span className={'text-center font-bold text-red-700'}>
        {row.original.rejectedApplicants}
      </span>
    ),
  },
];

export function ProjectStats({ projectId }: ProjectStatsProps) {
  const { data: stats, isLoading } = useAdminGetProjectApplicationStats(projectId);

  if (isLoading) {
    return <DefaultSkeleton />; // 로딩 스켈레톤 변경
  }

  if (!stats) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>프로젝트별 지원 현황</CardTitle>
          <CardDescription>데이터를 불러오는 중 오류가 발생했습니다.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{stats.project.title}</CardTitle> {/* project.title 사용 */}
        <CardDescription>각 파트별 지원자 수와 합격/불합격 현황</CardDescription>
      </CardHeader>
      <CardContent>
        {/* DataTable 컴포넌트에 columns와 data 전달 */}
        <DataTable columns={columns} data={stats.applicationStats} />
      </CardContent>
    </Card>
  );
}
