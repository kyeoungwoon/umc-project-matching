import { SchoolResponseDto } from '@api/axios/auth/types';
import { FormQuestionDto, FormResponseDto } from '@api/axios/form/types';
import { MatchingRoundResponseDto } from '@api/axios/matching-round/types';
import { UserResponseDto } from '@api/axios/user/types';

export interface AnswerDto {
  questionId: string;
  value: string[];
}

export interface ApplyToProjectRequestDto {
  answers: AnswerDto[];
}

export type ApplicationStatus = 'DRAFT' | 'SUBMITTED' | 'CONFIRMED' | 'REJECTED';

export enum ApplicationStatusEnum {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  CONFIRMED = 'CONFIRMED',
  REJECTED = 'REJECTED',
}

export interface ChangeApplicationStatusDto {
  status: ApplicationStatus;
}

export interface ApplicationResponseDto {
  id: string;
  formId: string;
  applicantId: string;
  matchingRoundId: string;
  status: ApplicationStatus;
  createdAt: string;
  updatedAt: string;
  applicant: UserResponseDto;
  form: FormResponseDto;
  matchingRound?: MatchingRoundResponseDto;
  formAnswers?: FormAnswerResponseDto[];
}

export interface FormAnswerResponseDto {
  id: string;
  applicationId: string;
  questionId: string;
  question: FormQuestionDto;
  value: string[];
}
