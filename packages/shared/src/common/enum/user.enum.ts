// UserPart
export const USER_PART = {
  PLAN: 'PLAN',
  DESIGN: 'DESIGN',
  WEB: 'WEB',
  ANDROID: 'ANDROID',
  IOS: 'IOS',
  SPRINGBOOT: 'SPRINGBOOT',
  NODEJS: 'NODEJS',
  NO_PART: 'NO_PART',
} as const;

export type UserPartEnum = (typeof USER_PART)[keyof typeof USER_PART];

// Gender
export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const;

export type GenderEnum = (typeof GENDER)[keyof typeof GENDER];
