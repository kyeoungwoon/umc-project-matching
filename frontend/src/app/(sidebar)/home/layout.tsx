'use client';

import { ReactNode } from 'react';

import { HEADER_SECTION } from '@common/constants/header-title-description.constants';

import UpmsHeader from '@common/components/upms/UpmsHeader';

const HomeLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      {/*<Header section={HEADER_SECTION.MAIN} />*/}
      {children}
    </>
  );
};

export default HomeLayout;
