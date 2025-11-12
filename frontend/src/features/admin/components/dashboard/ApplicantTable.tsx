'use client';

import { useMemo } from 'react';

// useMemo 임포트
import { ColumnDef } from '@tanstack/react-table';
import { clsx } from 'clsx';

import { ChallengerApplicationInfo } from '@api/axios/admin/types';
import { ApplicationStatus } from '@api/axios/application/types';
import { Part } from '@api/axios/auth/types';
import { useAdminGetApplicationStatusByChallenger } from '@api/query/admin';

import DefaultSkeleton from '@common/components/DefaultSkeleton';

import { getStatusText } from '@features/projects/utils/get-by-application-status';

import { DataTable } from '@features/admin/components/DataTable';

interface ApplicationStatsByApplicantProps {
  part?: Part;
  school?: string;
  challengerId?: string;
}

// 기본 고정 열
const baseColumns: ColumnDef<ChallengerApplicationInfo>[] = [
  {
    accessorKey: 'umsbChallengerId',
    header: '챌린저 ID',
  },
  {
    accessorKey: 'school',
    header: '학교',
  },
  {
    accessorKey: 'nickname',
    header: '닉네임',
  },
  {
    accessorKey: 'name',
    header: '이름',
  },
  {
    accessorKey: 'part',
    header: '파트',
  },
  {
    accessorKey: 'projectMember.title',
    header: '최종 프로젝트',
  },
];

const ApplicationStatsByApplicant = (props: ApplicationStatsByApplicantProps) => {
  const { part, school, challengerId } = props;
  const { data, isLoading } = useAdminGetApplicationStatusByChallenger(part, school, challengerId);

  // useMemo를 사용하여 data가 변경될 때만 columns를 새로 계산
  const columns = useMemo<ColumnDef<ChallengerApplicationInfo>[]>(() => {
    if (!data) {
      return baseColumns; // 데이터가 없으면 기본 열만 반환
    }

    // 1. 모든 데이터에서 고유한 매칭 회차 목록 추출
    const uniqueMatchingRounds = new Map();
    data.applicationResults.forEach((applicant) => {
      applicant.matchingResults.forEach((result) => {
        if (!uniqueMatchingRounds.has(result.matchingRoundName)) {
          uniqueMatchingRounds.set(result.matchingRoundName, result);
        }
      });
    });

    // 2. 고유 매칭 회차 목록으로 동적 열 생성
    const dynamicColumns: ColumnDef<ChallengerApplicationInfo>[] = Array.from(
      uniqueMatchingRounds.values(),
    ).flatMap((matchingResult) => [
      {
        id: `matchingResults_${matchingResult.matchingRoundName}_project`,
        header: `${matchingResult.matchingRoundName}`,
        accessorFn: (row) => {
          const resultForRound = row.matchingResults.find(
            (r) => r.matchingRoundName === matchingResult.matchingRoundName,
          );
          return resultForRound ? resultForRound.projectTitle : '-';
        },
      },
      {
        id: `matchingResults_${matchingResult.matchingRoundName}_status`,
        header: `결과`,

        // 1. accessorFn: 순수한 데이터(applicationStatus 문자열)만 반환
        accessorFn: (row) => {
          const resultForRound = row.matchingResults.find(
            (r) => r.matchingRoundName === matchingResult.matchingRoundName,
          );
          // 결과가 있으면 status 문자열을, 없으면 'N/A'를 반환
          return resultForRound ? resultForRound.applicationStatus : '-';
        },

        // 2. cell: accessorFn이 반환한 값을 받아 JSX로 렌더링
        cell: ({ getValue }) => {
          // getValue()는 accessorFn이 반환한 값('CONFIRMED', 'REJECTED', 'N/A' 등)을 가져옵니다.
          const status = getValue<ApplicationStatus | 'NOT_APPLIED'>();

          return (
            <span
              className={clsx(
                'text-center font-semibold',
                status === 'CONFIRMED'
                  ? 'text-green-700'
                  : status === 'REJECTED'
                    ? 'text-red-700'
                    : 'text-gray-700',
              )}
            >
              {/* getStatusText 함수에는 status 문자열이 전달됩니다. */}
              {getStatusText(status)}
            </span>
          );
        },
      },
    ]);

    // 3. 기본 열과 동적 열을 합쳐서 반환
    return [...baseColumns, ...dynamicColumns];
  }, [data]);

  if (isLoading || !data) {
    return <DefaultSkeleton />;
  }

  return <DataTable columns={columns} data={data.applicationResults} />;
};

export default ApplicationStatsByApplicant;
