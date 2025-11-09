'use client';

import { ReactNode } from 'react';

import { HEADER_SECTION } from '@common/constants/header-title-description.constants';

import UpmsHeader from '@common/components/upms/UpmsHeader';

const MyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'flex flex-col gap-y-3'}>
      <UpmsHeader section={HEADER_SECTION.MY_INFO} />
      {children}
    </div>
  );
};

export default MyLayout;
