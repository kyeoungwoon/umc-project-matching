'use client';

import { clsx } from 'clsx';
import { FileTextIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@styles/components/ui/card';

import { ApplicationStatusEnum } from '@api/axios/application/types';

const ApplicationStatusCard = ({
  statusCount,
  status,
}: {
  statusCount: number;
  status: ApplicationStatusEnum;
}) => {
  // Application에 따라서 Card title을 변경
  const getCardTitle = (status: ApplicationStatusEnum) => {
    switch (status) {
      case ApplicationStatusEnum.SUBMITTED:
        return '제출됨';
      case ApplicationStatusEnum.CONFIRMED:
        return '합격';
      case ApplicationStatusEnum.REJECTED:
        return '불합격';
      case ApplicationStatusEnum.DRAFT:
        return '임시저장';
      default:
        return '상태 없음';
    }
  };

  // Application Status에 따라서 색깔 변경
  const getIconColor = (status: ApplicationStatusEnum) => {
    switch (status) {
      case ApplicationStatusEnum.SUBMITTED:
        return 'text-blue-600';
      case ApplicationStatusEnum.CONFIRMED:
        return 'text-green-600';
      case ApplicationStatusEnum.REJECTED:
        return 'text-red-600';
      case ApplicationStatusEnum.DRAFT:
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{getCardTitle(status)}</CardTitle>
        <FileTextIcon className={clsx('h-4 w-4', getIconColor(status))} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{statusCount}</div>
      </CardContent>
    </Card>
  );
};

export default ApplicationStatusCard;
