// ApplicationStatus
export const APPLICATION_STATUS = {
  SUBMITTED: 'SUBMITTED',
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED',
  DRAFT: 'DRAFT',
} as const;

export type ApplicationStatusEnum = (typeof APPLICATION_STATUS)[keyof typeof APPLICATION_STATUS];

// QuestionType
export const QUESTION_TYPE = {
  SINGLE_CHOICE: 'SINGLE_CHOICE',
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  SUBJECTIVE: 'SUBJECTIVE',
} as const;

export type QuestionTypeEnum = (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE];

// UserPart
export const USER_PART = {
  PLAN: 'PLAN',
  DESIGN: 'DESIGN',
  WEB: 'WEB',
  ANDROID: 'ANDROID',
  IOS: 'IOS',
  SPRINGBOOT: 'SPRINGBOOT',
  NODEJS: 'NODEJS',
  ADMIN: 'ADMIN',
} as const;

export type UserPartEnum = (typeof USER_PART)[keyof typeof USER_PART];

// Gender
export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const;

export type GenderEnum = (typeof GENDER)[keyof typeof GENDER];
