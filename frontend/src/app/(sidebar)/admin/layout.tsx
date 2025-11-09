'use client';

import { ReactNode } from 'react';

import { HEADER_SECTION } from '@common/constants/header-title-description.constants';

import { useRedirectToHomeIfNotAdmin } from '@common/hooks/useGetChallengerPerms';

import UpmsHeader from '@common/components/upms/UpmsHeader';

const AdminLayout = ({ children }: { children?: ReactNode }) => {
  useRedirectToHomeIfNotAdmin();

  return (
    <div className={'flex flex-col gap-4'}>
      <UpmsHeader section={HEADER_SECTION.ADMIN} />
      <div className={'p-4'}>{children}</div>
    </div>
  );
};

export default AdminLayout;
