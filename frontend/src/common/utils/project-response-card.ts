import { ProjectResponseDto } from '@api/axios/project/types';

import { ProjectCardProps, ProjectPartAndTo } from '@common/components/ProjectInfoCard';

export const projectResponseToCardProps = (project: ProjectResponseDto): ProjectCardProps => {
  const partAndTo: ProjectPartAndTo[] = project.partTo.map((p) => {
    // console.log('Project part:', p.part);
    // console.log('Project members:', project.projectMember);
    const currentTo = project.projectMember.filter((member) => member?.user?.part == p.part).length;
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
    projectPlan: project.projectPlan,
    bannerImage: project.bannerImage || undefined,
  };
};
