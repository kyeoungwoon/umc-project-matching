'use client';

import { ReactNode } from 'react';

import { HEADER_SECTION } from '@common/constants/header-title-description.constants';

import Header from '@common/components/Header';

const AdminLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className={'flex flex-col gap-4'}>
      <Header section={HEADER_SECTION.ADMIN} />
      <div className={'p-4'}>{children}</div>
    </div>
  );
};

export default AdminLayout;
