'use client';

import { useGetProjectListQuery } from '@api/query/project';

import { projectResponseToCardProps } from '@common/utils/project-response-card';

import DefaultSkeleton from '@common/components/DefaultSkeleton';
import ProjectCard from '@common/components/ProjectCard';

const ProjectListPage = () => {
  const { data, isLoading } = useGetProjectListQuery();

  if (isLoading || !data) {
    return <DefaultSkeleton />;
  }

  const projects = data.map(projectResponseToCardProps);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className={'min-w-700pxr max-w-1000pxr flex flex-col justify-center gap-y-4 pt-5'}>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default ProjectListPage;
