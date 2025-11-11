'use client';

import { clsx } from 'clsx';
import {
  CheckCircle2Icon,
  FileTextIcon,
  ListIcon,
  PencilIcon,
  SendIcon,
  XIcon,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@styles/components/ui/card';

import { ApplicationStatusEnum } from '@api/axios/application/types';

const ApplicationCountByStatusCard = ({
  statusCount,
  status,
}: {
  statusCount: number;
  status: ApplicationStatusEnum | 'ALL';
}) => {
  // Application에 따라서 Card title을 변경
  const getCardTitle = (status: ApplicationStatusEnum | 'ALL') => {
    switch (status) {
      case ApplicationStatusEnum.SUBMITTED:
        return '제출됨';
      case ApplicationStatusEnum.CONFIRMED:
        return '합격';
      case ApplicationStatusEnum.REJECTED:
        return '불합격';
      case ApplicationStatusEnum.DRAFT:
        return '임시저장';
      case 'ALL':
        return '전체';
      default:
        return '상태 없음';
    }
  };

  // Application Status에 따라서 색깔 변경
  const getStatusIcon = (status: ApplicationStatusEnum | 'ALL') => {
    switch (status) {
      case ApplicationStatusEnum.SUBMITTED:
        return <SendIcon className={'text-blue-600'} />;
      case ApplicationStatusEnum.CONFIRMED:
        return <CheckCircle2Icon className={'text-green-600'} />;
      case ApplicationStatusEnum.REJECTED:
        return <XIcon className={'text-red-600'} />;
      case ApplicationStatusEnum.DRAFT:
        return <PencilIcon className={'text-yellow-600'} />;
      default:
        return <ListIcon className={'text-black-800'} />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-semibold">{getCardTitle(status)}</CardTitle>
        {getStatusIcon(status)}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{statusCount}</div>
      </CardContent>
    </Card>
  );
};

export default ApplicationCountByStatusCard;
