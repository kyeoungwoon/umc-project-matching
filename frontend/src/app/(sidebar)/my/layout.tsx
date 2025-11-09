'use client';

import { ReactNode } from 'react';

import { HEADER_SECTION } from '@common/constants/header-title-description.constants';

import UpmsHeader from '@common/components/upms/UpmsHeader';

const MyLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default MyLayout;
