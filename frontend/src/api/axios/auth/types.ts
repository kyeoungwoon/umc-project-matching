export type Part =
  | 'PLAN'
  | 'DESIGN'
  | 'WEB'
  | 'ANDROID'
  | 'IOS'
  | 'SPRINGBOOT'
  | 'NODEJS'
  | 'ADMIN';

export interface CreateUserRequestDto {
  name: string;
  nickname: string;
  introduction?: string;
  school: string;
  studentId: string;
  password: string;
  part: Part;
}

export interface LoginRequestDto {
  school: string;
  studentId: string;
  password: string;
}

export interface ChangePasswordRequestDto {
  currentPassword: string;
  newPassword: string;
}

export interface CreateSchoolRequestDto {
  name: string;
  handle: string;
}

export type SchoolResponseDto = SchoolInfo[];

export interface SchoolInfo {
  name: string;
  handle: string;
}

export interface LoginResponseDto {
  userId: string;
  accessToken: string;
}


