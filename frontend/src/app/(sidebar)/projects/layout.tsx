'use client';

import { ReactNode } from 'react';

import { HEADER_SECTION } from '@common/constants/header-title-description.constants';

import Header from '@common/components/Header';

const ProjectListLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'flex w-full flex-col gap-y-3'}>
      <Header section={HEADER_SECTION.PROJECT} />
      {children}
    </div>
  );
};

export default ProjectListLayout;
