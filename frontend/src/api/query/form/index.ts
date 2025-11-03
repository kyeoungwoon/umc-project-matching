import { useMutation, useQuery } from '@tanstack/react-query';

import {
  addQuestionsToForm,
  createForm,
  deleteForm,
  editForm,
  editQuestionsFromForm,
  getForm,
} from '@api/axios/form';
import {
  CreateFormRequestDto,
  CreateQuestionRequestDto,
  UpdateFormRequestDto,
  UpdateQuestionRequestDto,
} from '@api/axios/form/types';

export const useCreateFormMutation = (projectId: string) => {
  return useMutation({ mutationFn: (data: CreateFormRequestDto) => createForm(projectId, data) });
};

export const useGetFormQuery = (projectId: string, formId: string) => {
  return useQuery({
    queryKey: ['form', projectId, formId],
    queryFn: () => getForm(projectId, formId),
    enabled: !!projectId && !!formId,
  });
};

export const useDeleteFormMutation = (projectId: string, formId: string) => {
  return useMutation({ mutationFn: () => deleteForm(projectId, formId) });
};

export const useEditFormMutation = (projectId: string, formId: string) => {
  return useMutation({
    mutationFn: (data: UpdateFormRequestDto) => editForm(projectId, formId, data),
  });
};

export const useAddQuestionsToFormMutation = (projectId: string) => {
  return useMutation({
    mutationFn: (variables: { formId: string; data: CreateQuestionRequestDto }) =>
      form.addQuestionsToForm(projectId, variables.formId, variables.data),
  });
};

export const useEditQuestionsFromFormMutation = (projectId: string, formId: string) => {
  return useMutation({
    mutationFn: (data: UpdateQuestionRequestDto) => editQuestionsFromForm(projectId, formId, data),
  });
};
