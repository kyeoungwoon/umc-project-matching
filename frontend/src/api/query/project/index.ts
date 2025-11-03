import { useMutation, useQuery } from '@tanstack/react-query';

import * as project from '@api/axios/project';

export const useGetProjectListQuery = () => {
  return useQuery({ queryKey: ['projects'], queryFn: project.getProjectList });
};

export const useCreateProjectMutation = () => {
  return useMutation({ mutationFn: project.createProject });
};

export const useGetProjectDetailsQuery = (projectId: string) => {
  return useQuery({
    queryKey: ['project', projectId],
    queryFn: () => project.getProjectDetails(projectId),
  });
};

export const useUpdateProjectMutation = (projectId: string) => {
  return useMutation({
    mutationFn: (data: project.UpdateProjectRequestDto) => project.updateProject(projectId, data),
  });
};

export const useDeleteProjectMutation = () => {
  return useMutation({ mutationFn: project.deleteProject });
};

export const useCreateProjectApplicationFormMutation = (projectId: string) => {
  return useMutation({
    mutationFn: (data: project.CreateFormRequestDto) =>
      project.createProjectApplicationForm(projectId, data),
  });
};

export const useGetProjectApplicationFormQuery = (projectId: string, formId: string) => {
  return useQuery({
    queryKey: ['form', projectId, formId],
    queryFn: () => project.getProjectApplicationForm(projectId, formId),
  });
};

export const useDeleteProjectApplicationFormMutation = (projectId: string, formId: string) => {
  return useMutation({ mutationFn: () => project.deleteProjectApplicationForm(projectId, formId) });
};

export const useEditProjectApplicationFormMutation = (projectId: string, formId: string) => {
  return useMutation({
    mutationFn: (data: project.UpdateFormRequestDto) =>
      project.editProjectApplicationForm(projectId, formId, data),
  });
};

export const useAddQuestionsToFormMutation = (projectId: string, formId: string) => {
  return useMutation({
    mutationFn: (data: project.CreateQuestionRequestDto) =>
      project.addQuestionsToForm(projectId, formId, data),
  });
};

export const useEditQuestionsFromFormMutation = (projectId: string, formId: string) => {
  return useMutation({
    mutationFn: (data: project.UpdateQuestionRequestDto) =>
      project.editQuestionsFromForm(projectId, formId, data),
  });
};

export const useApplyToProjectMutation = (projectId: string, formId: string) => {
  return useMutation({
    mutationFn: (data: project.ApplyToProjectRequestDto) =>
      project.applyToProject(projectId, formId, data),
  });
};

export const useGetApplicationQuery = (projectId: string, applicationId: string) => {
  return useQuery({
    queryKey: ['application', projectId, applicationId],
    queryFn: () => project.getApplication(projectId, applicationId),
  });
};

export const useDeleteApplicationMutation = (projectId: string, applicationId: string) => {
  return useMutation({ mutationFn: () => project.deleteApplication(projectId, applicationId) });
};

export const useChangeApplicationStatusMutation = (projectId: string, applicationId: string) => {
  return useMutation({
    mutationFn: (data: project.ChangeApplicationStatusDto) =>
      project.changeApplicationStatus(projectId, applicationId, data),
  });
};

export const useGetCurrentMatchingRoundQuery = () => {
  return useQuery({
    queryKey: ['matching-round', 'current'],
    queryFn: project.getCurrentMatchingRound,
  });
};

export const useCreateMatchingRoundMutation = () => {
  return useMutation({ mutationFn: project.createMatchingRound });
};

export const useTestCreateMatchingRoundMutation = () => {
  return useMutation({ mutationFn: project.testCreateMatchingRound });
};
