import { ApiResponse, api } from '@api/axios';
import {
  ChangePasswordRequestDto,
  CreateSchoolRequestDto,
  CreateUserRequestDto,
  LoginRequestDto,
  LoginResponseDto,
  SchoolResponseDto,
} from '@api/axios/auth/types';

export const register = async (data: CreateUserRequestDto) => {
  return api.post('/v1/auth/register', data);
};

export const login = async (data: LoginRequestDto) => {
  const result = await api.post<ApiResponse<LoginResponseDto>>('/v1/auth/login', data);

  return result.data.result;
};

export const deactivate = async (userId: string) => {
  return api.delete(`/v1/auth/deactivate/${userId}`);
};

export const changePassword = async (data: ChangePasswordRequestDto) => {
  return api.post('/v1/auth/change-password', data);
};

export const getSchools = async () => {
  const result = await api.get<ApiResponse<SchoolResponseDto>>('/v1/auth/schools');

  return result.data.result;
};

export const createSchool = async (data: CreateSchoolRequestDto) => {
  return api.post('/v1/auth/school', data);
};
