import { api } from '@api/axios';
import {
  ChangePasswordRequestDto,
  CreateSchoolRequestDto,
  CreateUserRequestDto,
  LoginRequestDto,
} from '@api/axios/auth/types';

export const register = async (data: CreateUserRequestDto) => {
  return api.post('/v1/auth/register', data);
};

export const login = async (data: LoginRequestDto) => {
  return api.post('/v1/auth/login', data);
};

export const deactivate = async (userId: string) => {
  return api.delete(`/v1/auth/deactivate/${userId}`);
};

export const changePassword = async (data: ChangePasswordRequestDto) => {
  return api.post('/v1/auth/change-password', data);
};

export const getSchools = async () => {
  return api.get('/v1/auth/schools');
};

export const createSchool = async (data: CreateSchoolRequestDto) => {
  return api.post('/v1/auth/school', data);
};
