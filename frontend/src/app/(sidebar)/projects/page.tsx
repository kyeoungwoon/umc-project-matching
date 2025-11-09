'use client';

import { useGetProjectListQuery } from '@api/query/project';

import { projectResponseToCardProps } from '@common/utils/project-response-card';

import ProjectInfoCard from '@common/components/ProjectInfoCard';

import ProjectCardSkeleton from '@/skeletons/components/ProjectCardSkeleton';

const ProjectListPage = () => {
  const { data, isLoading } = useGetProjectListQuery();

  if (isLoading || !data) {
    return <ProjectCardSkeleton />;
  }

  const projects = data.map(projectResponseToCardProps);

  return (
    <div className="grid w-full grid-cols-1 gap-6 p-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj, idx) => (
        <ProjectInfoCard key={idx} {...proj} />
      ))}
    </div>
  );
};

export default ProjectListPage;
