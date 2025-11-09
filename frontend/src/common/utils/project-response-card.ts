import { ProjectResponseDto } from '@api/axios/project/types';

import { ProjectCardProps, ProjectPartAndTo } from '@common/components/ProjectInfoCard';

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
    planId: project.planId,
    name: project.title,
    description: project.description,
    link: project.link,
    partAndTo: partAndTo,
  };
};
