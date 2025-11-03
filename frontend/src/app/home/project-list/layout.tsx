'use client';

import { ReactNode } from 'react';

import Header from '@common/components/Header';

const ProjectListLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header
        title="프로젝트 목록 보기"
        detail="스택별 모집 현황과 프로젝트 상세 정보를 확인하세요"
      />
      {children}
    </div>
  );
};

export default ProjectListLayout;
