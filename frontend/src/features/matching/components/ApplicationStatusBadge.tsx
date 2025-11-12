'use client';

import { clsx } from 'clsx';

import { ApplicationStatus } from '@api/axios/application/types';

import { getStatusText } from '@features/projects/utils/get-by-application-status';

const ApplicationStatusBadge = ({ status }: { status: string }) => {
  return (
    <div
      className={clsx(
        'w-full max-w-15 rounded-md px-3 py-1 text-center text-lg font-semibold',
        status === 'REJECTED' && 'bg-red-500 text-white',
        status === 'CONFIRMED' && 'bg-green-500 text-white',
        status === 'SUBMITTED' && 'bg-blue-500 text-white',
      )}
    >
      {getStatusText(status as ApplicationStatus)}
    </div>
  );
};

export default ApplicationStatusBadge;
