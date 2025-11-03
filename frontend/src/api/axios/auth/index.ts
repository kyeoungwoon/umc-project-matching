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
  const result = await api.post<ApiResponse<null>>('/v1/auth/register', data);
  return result.data.result;
};

export const login = async (data: LoginRequestDto) => {
  const result = await api.post<ApiResponse<LoginResponseDto>>('/v1/auth/login', data);

  return result.data.result;
};

export const deactivate = async (userId: string) => {
  const result = await api.delete<ApiResponse<null>>(`/v1/auth/deactivate/${userId}`);
  return result.data.result;
};

export const changePassword = async (data: ChangePasswordRequestDto) => {
  const result = await api.post<ApiResponse<null>>('/v1/auth/change-password', data);
  return result.data.result;
};

export const getSchools = async () => {
  const result = await api.get<ApiResponse<SchoolResponseDto>>('/v1/auth/schools');

  return result.data.result;
};

export const createSchool = async (data: CreateSchoolRequestDto) => {
  const result = await api.post<ApiResponse<null>>('/v1/auth/school', data);
  return result.data.result;
};
