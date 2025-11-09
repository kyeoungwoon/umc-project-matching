'use client';

import { clsx } from 'clsx';

import { ApplicationStatus } from '@api/axios/application/types';

import { getStatusText } from '@features/projects/utils/get-by-application-status';

const ApplicationStatusBadge = ({ status }: { status: string }) => {
  return (
    <div
      className={clsx(
        'rounded-md px-3 py-1 text-lg font-semibold',
        status === 'REJECTED' && 'bg-red-300 text-gray-800',
        status === 'CONFIRMED' && 'bg-green-400 text-white',
        status === 'SUBMITTED' && 'bg-blue-400 text-white',
      )}
    >
      {getStatusText(status as ApplicationStatus)}
    </div>
  );
};

export default ApplicationStatusBadge;
