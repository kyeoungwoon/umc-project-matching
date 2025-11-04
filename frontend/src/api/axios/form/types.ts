import { ApplicationResponseDto } from '@api/axios/application/types';
import { ProjectResponseDto } from '@api/axios/project/types';

// Request DTOs
export interface CreateFormRequestDto {
  title: string;
  description?: string;
}

export interface UpdateFormRequestDto {
  title?: string;
  description?: string;
}

export type QuestionType = 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'SUBJECTIVE';

export interface CreateFormQuestionDto {
  questionNo: number;
  title: string;
  description: string;
  type: QuestionType;
  isRequired: boolean;
  options: string[];
}

export interface CreateQuestionRequestDto {
  questions: CreateFormQuestionDto[];
}

export interface UpdateFormQuestionDto {
  id: string;
  questionNo?: number;
  title?: string;
  description?: string;
  isRequired?: boolean;
  options?: string[];
}

export interface UpdateQuestionRequestDto {
  questions: UpdateFormQuestionDto[];
}

// Response DTOs
export interface FormResponseDto {
  id: string;
  projectId: string;
  title: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface FormQuestionDto {
  id: string;
  questionNo: number;
  title: string;
  description: string;
  type: QuestionType;
  isRequired: boolean;
  formId: string;
  options: string[];
}

export interface FormWithDetailsResponseDto extends FormResponseDto {
  project: ProjectResponseDto;
  questions: FormQuestionDto[];
  applications: ApplicationResponseDto[];
}
