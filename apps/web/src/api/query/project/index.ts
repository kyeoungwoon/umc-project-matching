import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createProject,
  deleteProject,
  getProjectDetails,
  getProjectList,
  updateProject,
} from '@api/axios/project';
import { UpdateProjectRequestDto } from '@api/axios/project/types';

import { queryKeyStore } from '@common/constants/query-key.constants';

export const useGetProjectListQuery = () => {
  return useQuery({
    queryKey: queryKeyStore.project.allProjects.queryKey,
    queryFn: getProjectList,
  });
};

export const useCreateProjectMutation = () => {
  return useMutation({ mutationFn: createProject });
};

export const useGetProjectDetailsQuery = (projectId: string) => {
  return useQuery({
    queryKey: queryKeyStore.project.singleProject(projectId).queryKey,
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
