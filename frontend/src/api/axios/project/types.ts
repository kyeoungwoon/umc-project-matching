export interface CreateProjectRequestDto {
  title: string;
  description: string;
  link: string;
  planId: string;
}

export interface UpdateProjectRequestDto {
  projectId: string;
  title?: string;
  description?: string;
  link?: string;
}

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

export interface AnswerDto {
  questionId: string;
  value: string[];
}

export interface ApplyToProjectRequestDto {
  answers: AnswerDto[];
}

export type ApplicationStatus = 'DRAFT' | 'SUBMITTED' | 'CONFIRMED' | 'REJECTED';

export interface ChangeApplicationStatusDto {
  status: ApplicationStatus;
}

export interface CreateMatchingRoundRequestDto {
  name: string;
  startDatetime: string; // ISO 8601 format
  endDatetime: string; // ISO 8601 format
}
