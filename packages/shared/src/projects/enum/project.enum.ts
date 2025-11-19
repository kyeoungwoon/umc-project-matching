// ApplicationStatus
export const APPLICATION_STATUS = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED',
} as const;

export type ApplicationStatusEnum = (typeof APPLICATION_STATUS)[keyof typeof APPLICATION_STATUS];

// QuestionType
export const QUESTION_TYPE = {
  SINGLE_CHOICE: 'SINGLE_CHOICE',
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  SUBJECTIVE: 'SUBJECTIVE',
} as const;

export type QuestionTypeEnum = (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE];
