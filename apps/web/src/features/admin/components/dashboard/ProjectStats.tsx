'use client';

import { useState } from 'react';

import { ColumnDef } from '@tanstack/react-table';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from '@styles/components/ui/item';
import { MultiSelectCombobox } from '@styles/components/ui/multi-select-combobox';

import { ProjectApplicationStats } from '@api/axios/admin/types';
import { Part } from '@api/axios/auth/types';
import { useAdminGetProjectApplicationStats } from '@api/query/admin';

import { partOptions } from '@common/constants/part-options.constants';

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
    accessorKey: 'maxTo',
    header: 'TO',
    cell: ({ row }) => row.original.maxTo,
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
  const [projectPartFilter, setProjectPartFilter] = useState<Part[]>([]);

  const { data: stats, isLoading } = useAdminGetProjectApplicationStats(
    projectId,
    projectPartFilter,
  );

  if (isLoading) {
    return (
      <Item>
        <ItemHeader className={'flex w-full flex-col items-start'}>
          <ItemTitle className={'text-xl'}>프로젝트별 지원 현황</ItemTitle>
          <ItemDescription className={'text-lg'}>데이터를 불러오는 중입니다...</ItemDescription>
        </ItemHeader>
        <ItemContent>
          <DefaultSkeleton />
        </ItemContent>
      </Item>
    );
  }

  if (!stats) {
    return (
      <Item>
        <ItemHeader className={'flex w-full flex-col items-start'}>
          <ItemTitle className={'text-xl'}>프로젝트별 지원 현황</ItemTitle>
          <ItemDescription className={'text-lg'}>
            데이터를 불러오는 중 오류가 발생했습니다.
          </ItemDescription>
        </ItemHeader>
      </Item>
    );
  }

  return (
    <Item>
      <ItemHeader className={'flex w-full flex-row items-center justify-between gap-4'}>
        <div className={'flex flex-grow flex-col gap-1'}>
          <ItemTitle className={'text-xl font-semibold'}>{stats.project.title}</ItemTitle>{' '}
          {/* project.title 사용 */}
          <ItemDescription className={'text-base'}>
            각 파트별 지원자 수와 합격/불합격 현황
          </ItemDescription>
        </div>
        <div className={'min-w-50 flex-grow-0'}>
          <MultiSelectCombobox
            options={partOptions}
            selectedValues={projectPartFilter}
            onChange={(part) => setProjectPartFilter(part as Part[])}
            placeholder="파트 선택"
            searchPlaceholder="파트를 검색하세요..."
            emptyPlaceholder="해당 파트가 없습니다."
          />
        </div>
      </ItemHeader>
      <ItemContent>
        <DataTable columns={columns} data={stats.applicationStats} />
      </ItemContent>
    </Item>
  );
}
