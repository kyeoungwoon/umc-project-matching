import { ProjectResponseDto } from '@api/axios/project/types';

import { ProjectCardProps, ProjectPartAndTo } from '@common/components/ProjectCard';

export const projectResponseToCardProps = (project: ProjectResponseDto): ProjectCardProps => {
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
