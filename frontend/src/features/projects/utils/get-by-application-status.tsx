import { CheckCircle2Icon, ClockIcon, FileTextIcon, XCircleIcon } from 'lucide-react';

import { ApplicationStatus } from '@api/axios/application/types';

export const getStatusBadgeVariant = (status: ApplicationStatus) => {
  switch (status) {
    case 'SUBMITTED':
      return 'outline';
    case 'CONFIRMED':
      return 'default';
    case 'REJECTED':
      return 'destructive';
    case 'DRAFT':
      return 'secondary';
    default:
      return 'secondary';
  }
};

export const getStatusText = (status: ApplicationStatus) => {
  switch (status) {
    case 'SUBMITTED':
      return '제출됨';
    case 'CONFIRMED':
      return '합격';
    case 'REJECTED':
      return '불합격';
    case 'DRAFT':
      return '임시저장';
    default:
      return status;
  }
};

export const getStatusLabelClassname = (status: 'SUBMITTED' | 'CONFIRMED' | 'REJECTED'): string => {
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

export const getStatusIcon = (status: ApplicationStatus) => {
  switch (status) {
    case 'CONFIRMED':
      return <CheckCircle2Icon className="h-4 w-4 text-green-600" />;
    case 'REJECTED':
      return <XCircleIcon className="h-4 w-4 text-red-600" />;
    case 'SUBMITTED':
      return <FileTextIcon className="h-4 w-4 text-blue-600" />;
    case 'DRAFT':
      return <ClockIcon className="h-4 w-4 text-gray-600" />;
    default:
      return null;
  }
};
