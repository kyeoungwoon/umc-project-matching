import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createProject,
  deleteProject,
  getProjectDetails,
  getProjectList,
  updateProject,
} from '@api/axios/project';
import { CreateProjectRequestDto, UpdateProjectRequestDto } from '@api/axios/project/types';

export const useGetProjectListQuery = () => {
  return useQuery({ queryKey: ['projects'], queryFn: getProjectList });
};

export const useCreateProjectMutation = () => {
  return useMutation({ mutationFn: createProject });
};

export const useGetProjectDetailsQuery = (projectId: string) => {
  return useQuery({
    queryKey: ['project', projectId],
    queryFn: () => getProjectDetails(projectId),
    enabled: !!projectId,
  });
};

export const useUpdateProjectMutation = (projectId: string) => {
  return useMutation({
    mutationFn: (data: UpdateProjectRequestDto) => updateProject(projectId, data),
  });
};

export const useDeleteProjectMutation = () => {
  return useMutation({ mutationFn: deleteProject });
};
