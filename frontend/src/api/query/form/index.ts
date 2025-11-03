import { useMutation, useQuery } from '@tanstack/react-query';
import { createForm, getForm, deleteForm, editForm, addQuestionsToForm, editQuestionsFromForm } from '@api/axios/form';
import { CreateFormRequestDto, UpdateFormRequestDto, CreateQuestionRequestDto, UpdateQuestionRequestDto } from '@api/axios/form/types';

export const useCreateFormMutation = (projectId: string) => {
  return useMutation({ mutationFn: (data: CreateFormRequestDto) => createForm(projectId, data) });
};

export const useGetFormQuery = (projectId: string, formId: string) => {
  return useQuery({ queryKey: ['form', projectId, formId], queryFn: () => getForm(projectId, formId), enabled: !!projectId && !!formId });
};

export const useDeleteFormMutation = (projectId: string, formId: string) => {
  return useMutation({ mutationFn: () => deleteForm(projectId, formId) });
};

export const useEditFormMutation = (projectId: string, formId: string) => {
  return useMutation({ mutationFn: (data: UpdateFormRequestDto) => editForm(projectId, formId, data) });
};

export const useAddQuestionsToFormMutation = (projectId: string, formId: string) => {
  return useMutation({ mutationFn: (data: CreateQuestionRequestDto) => addQuestionsToForm(projectId, formId, data) });
};

export const useEditQuestionsFromFormMutation = (projectId: string, formId: string) => {
  return useMutation({ mutationFn: (data: UpdateQuestionRequestDto) => editQuestionsFromForm(projectId, formId, data) });
};
