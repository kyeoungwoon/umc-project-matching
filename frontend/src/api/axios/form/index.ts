import { ApiResponse, api } from '@api/axios';
import { CreateFormRequestDto, UpdateFormRequestDto, CreateQuestionRequestDto, UpdateQuestionRequestDto, FormResponseDto, FormWithDetailsResponseDto, FormQuestionDto } from '@api/axios/form/types';

export const createForm = async (projectId: string, data: CreateFormRequestDto) => {
  const res = await api.post<ApiResponse<FormResponseDto>>(`/v1/projects/${projectId}/form`, data);
  return res.data.result;
};

export const getForm = async (projectId: string, formId: string) => {
  const res = await api.get<ApiResponse<FormWithDetailsResponseDto>>(`/v1/projects/${projectId}/form/${formId}`);
  return res.data.result;
};

export const deleteForm = async (projectId: string, formId: string) => {
  const res = await api.delete<ApiResponse<FormResponseDto>>(`/v1/projects/${projectId}/form/${formId}`);
  return res.data.result;
};

export const editForm = async (projectId: string, formId: string, data: UpdateFormRequestDto) => {
  const res = await api.patch<ApiResponse<FormResponseDto>>(`/v1/projects/${projectId}/form/${formId}`, data);
  return res.data.result;
};

export const addQuestionsToForm = async (projectId: string, formId: string, data: CreateQuestionRequestDto) => {
  const res = await api.post<ApiResponse<FormQuestionDto[]>>(`/v1/projects/${projectId}/forms/${formId}/questions`, data);
  return res.data.result;
};

export const editQuestionsFromForm = async (projectId: string, formId: string, data: UpdateQuestionRequestDto) => {
  const res = await api.patch<ApiResponse<FormQuestionDto[]>>(`/v1/projects/${projectId}/forms/${formId}/questions`, data);
  return res.data.result;
};
