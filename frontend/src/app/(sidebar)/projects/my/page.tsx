'use client';

import Link from 'next/link';

import { Button } from '@styles/components/ui/button';

import { useGetProjectListQuery } from '@api/query/project';
import { useGetMyInfoQuery } from '@api/query/user';

import { projectResponseToCardProps } from '@common/utils/project-response-card';

import DefaultSkeleton from '@common/components/DefaultSkeleton';
import ProjectCard from '@common/components/ProjectCard';

const MyProjectsPage = () => {
  const { data: user, isLoading: isUserLoading } = useGetMyInfoQuery();
  const { data: projects, isLoading: areProjectsLoading } = useGetProjectListQuery();

  const isLoading = isUserLoading || areProjectsLoading;

  if (isLoading || !user || !projects) {
    return <DefaultSkeleton />;
  }

  // Filter projects where the current user is the planner.
  const myProjects = projects.filter((p) => p.planId === user.id);

  console.log(myProjects);
  const projectCards = myProjects.map(projectResponseToCardProps);

  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <div className="mt-5 w-full max-w-4xl">
        <div className="mb-4 flex justify-end">
          <Link href="/projects/create">
            <Button>새 프로젝트 생성</Button>
          </Link>
        </div>
        <div className="space-y-4">
          {projectCards.length > 0 ? (
            projectCards.map((proj, idx) => <ProjectCard key={idx} {...proj} />)
          ) : (
            <div className="text-center text-gray-500">
              <p>아직 생성한 프로젝트가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProjectsPage;
