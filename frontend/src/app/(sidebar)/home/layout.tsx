'use client';

import { ReactNode } from 'react';

import { HEADER_SECTION } from '@common/constants/header-title-description.constants';

import Header from '@common/components/Header';

const HomeLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <Header section={HEADER_SECTION.MAIN} />
      {children}
    </div>
  );
};

export default HomeLayout;
