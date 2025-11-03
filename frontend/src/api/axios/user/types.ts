import { Part } from '@api/axios/auth/types';

export interface UserResponseDto {
  id: string;
  name: string;
  nickname: string;
  introduction: string;
  school: string;
  challengerSchool: {
    name: string;
    handle: string;
  };
  studentId: string;
  part: Part;
  role: 'USER' | 'ADMIN';
}
