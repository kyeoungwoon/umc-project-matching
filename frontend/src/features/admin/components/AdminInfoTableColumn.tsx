'use client';

import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { MoreHorizontal } from 'lucide-react';

import { Badge } from '@styles/components/ui/badge';
import { Button } from '@styles/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@styles/components/ui/dropdown-menu';
import { Label } from '@styles/components/ui/label';

import { AdminGetAllApplicationsResponseDto } from '@api/axios/admin/types';

const getStatusBadgeVariant = (
  status: 'SUBMITTED' | 'CONFIRMED' | 'REJECTED',
): 'default' | 'secondary' | 'destructive' => {
  switch (status) {
    case 'CONFIRMED':
      return 'default';
    case 'SUBMITTED':
      return 'secondary';
    case 'REJECTED':
      return 'destructive';
    default:
      return 'secondary';
  }
};

const getStatusLabel = (status: 'SUBMITTED' | 'CONFIRMED' | 'REJECTED'): string => {
  switch (status) {
    case 'CONFIRMED':
      return '합격';
    case 'SUBMITTED':
      return '대기';
    case 'REJECTED':
      return '불합격';
    default:
      return status;
  }
};

const getStatusLabelClassname = (status: 'SUBMITTED' | 'CONFIRMED' | 'REJECTED'): string => {
  switch (status) {
    case 'CONFIRMED':
      return 'bg-green-600 text-white';
    case 'SUBMITTED':
      return 'bg-gray-600 text-white';
    case 'REJECTED':
      return 'bg-red-600 text-white';
    default:
      return status;
  }
};

export const AdminInfoTableColumn = (
  onViewApplication: (application: AdminGetAllApplicationsResponseDto) => void,
  onViewProject: (projectTitle: string) => void,
): ColumnDef<AdminGetAllApplicationsResponseDto>[] => [
  {
    accessorKey: 'createdAt',
    header: '지원 시간',
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'));
      return <div className="whitespace-nowrap">{format(date, 'yyyy-MM-dd HH:mm')}</div>;
    },
  },
  {
    accessorKey: 'matchingRound.name',
    header: '지원 차수',
    cell: ({ row }) => {
      const matchingRound = row.original.matchingRound;
      return matchingRound ? (
        <Badge variant="outline">{matchingRound.name}</Badge>
      ) : (
        <span className="text-muted-foreground text-sm">-</span>
      );
    },
  },
  {
    id: 'applicant.school',
    accessorKey: 'applicant.school',
    header: '소속 대학',
    cell: ({ row }) => {
      const schools = row.original.applicant.challengerSchool;
      console.log(schools.name);

      // Handle case where school might not be an array or might be undefined
      if (!schools) {
        return <span className="text-muted-foreground text-sm">-</span>;
      }

      return (
        // <div className="flex flex-wrap gap-1">
        //   {schools.map((school, idx) => (
        <Label>{schools.name}</Label>
        // ))}
        // </div>
      );
    },
  },
  {
    id: 'applicant.nickname',
    accessorKey: 'applicant.nickname',
    header: '닉네임',
    cell: ({ row }) => <div>{row.original.applicant.nickname}</div>,
  },
  {
    id: 'applicant.name',
    accessorKey: 'applicant.name',
    header: '이름',
    cell: ({ row }) => <div>{row.original.applicant.name}</div>,
  },
  {
    accessorKey: 'applicant.part',
    header: '파트',
    cell: ({ row }) => {
      const part = row.original.applicant.part;
      return part ? (
        <Badge variant="secondary">{part}</Badge>
      ) : (
        <span className="text-muted-foreground text-sm">-</span>
      );
    },
  },
  {
    accessorKey: 'form.project.title',
    header: '지원한 기획',
    cell: ({ row }) => {
      const projectTitle = row.original.form.project.title;
      return (
        <button
          onClick={() => onViewProject(projectTitle)}
          className="text-left text-blue-600 hover:underline"
        >
          {projectTitle}
        </button>
      );
    },
  },
  {
    accessorKey: 'form.title',
    header: '지원 폼 제목',
    cell: ({ row }) => <div className="max-w-[200px] truncate">{row.original.form.title}</div>,
  },
  {
    accessorKey: 'status',
    header: '상태',
    cell: ({ row }) => {
      const status = row.getValue('status') as 'SUBMITTED' | 'CONFIRMED' | 'REJECTED';
      return <Badge className={getStatusLabelClassname(status)}>{getStatusLabel(status)}</Badge>;
    },
  },
  {
    id: 'actions',
    header: '작업',
    cell: ({ row }) => {
      const application = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">메뉴 열기</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>작업</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => onViewApplication(application)}>
              지원서 상세보기
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(application.applicant.umsbChallengerId)}
            >
              챌린저 ID 복사
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
