'use client';

import Header from '@common/components/Header';
import ProjectCard, { ProjectCardProps } from '@common/components/ProjectCard';

const mockProjectData: ProjectCardProps[] = [
  {
    name: 'AI 챗봇 서비스',
    description: '사용자 맞춤형 AI 챗봇 개발 프로젝트입니다.',
    partAndTo: [
      {
        part: 'Frontend',
        currentTo: 2,
        maxTo: 3,
      },
    ],
  },
  {
    name: '전자상거래 플랫폼',
    description: '소상공인을 위한 온라인 쇼핑몰 구축 프로젝트입니다.',
    partAndTo: [
      {
        part: 'Backend',
        currentTo: 1,
        maxTo: 2,
      },
    ],
  },
  {
    name: '헬스케어 앱',
    description: '건강 관리 및 운동 기록을 위한 모바일 앱 개발입니다.',
    partAndTo: [
      {
        part: 'Designer',
        currentTo: 0,
        maxTo: 1,
      },
    ],
  },
  {
    name: '학습 관리 시스템',
    description: '온라인 강의 플랫폼 및 학습 진도 관리 시스템입니다.',
    partAndTo: [
      {
        part: 'Fullstack',
        currentTo: 3,
        maxTo: 4,
      },
    ],
  },
  {
    name: '부동산 중개 플랫폼',
    description: 'AI 기반 부동산 매물 추천 서비스 개발 프로젝트입니다.',
    partAndTo: [
      {
        part: 'ML Engineer',
        currentTo: 1,
        maxTo: 1,
      },
    ],
  },
];

const ProjectListPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header
        title="프로젝트 목록 보기"
        detail="스택별 모집 현황과 프로젝트 상세 정보를 확인하세요"
      />
      <div className={'min-w-700pxr max-w-1000pxr flex flex-col justify-center gap-y-4 pt-5'}>
        {mockProjectData.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default ProjectListPage;
