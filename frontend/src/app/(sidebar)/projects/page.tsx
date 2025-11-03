'use client';

import { ProjectResponseDto } from '@api/axios/project/types';
import { useGetProjectListQuery } from '@api/query/project';

import ProjectCard, { ProjectCardProps, ProjectPartAndTo } from '@common/components/ProjectCard';

const projectResponseToCardProps = (project: ProjectResponseDto): ProjectCardProps => {
  const partAndTo: ProjectPartAndTo[] = project.partTo.map((p) => {
    const currentTo = project.projectMember.filter((member) => member.part === p.part).length;
    return {
      part: p.part as string, // Assuming p.part is a string
      currentTo: currentTo,
      maxTo: p.to,
    };
  });

  return {
    id: project.id,
    name: project.title,
    description: project.description,
    link: project.link,
    partAndTo: partAndTo,
  };
};

const ProjectListPage = () => {
  const { data, isLoading } = useGetProjectListQuery();

  if (isLoading || !data) {
    return <div>Loading...</div>;
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
