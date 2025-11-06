import { FormResponseDto } from '@api/axios/form/types';
import { MatchingRoundResponseDto } from '@api/axios/matching-round/types';

export interface AnswerDto {
  questionId: string;
  value: string[];
}

export interface AnswerResponseDto extends AnswerDto {
  questionTitle?: string;
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
  answers: AnswerResponseDto[];
  createdAt: string;
  updatedAt: string;
  form?: FormResponseDto;
  matchingRound?: MatchingRoundResponseDto;
}
