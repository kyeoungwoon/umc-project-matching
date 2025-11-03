'use client';

import { ReactNode } from 'react';

import { HEADER_SECTION } from '@common/constants/header-title-description.constants';

import Header from '@common/components/Header';

const MyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'flex flex-col gap-y-3'}>
      <Header section={HEADER_SECTION.MY_INFO} />
      {children}
    </div>
  );
};

export default MyLayout;
