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

export interface ApplicationResponseDto {
  id: string;
  formId: string;
  applicantId: string;
  matchingRoundId: string;
  status: ApplicationStatus;
  answers: AnswerDto[];
  createdAt: string;
  updatedAt: string;
}
