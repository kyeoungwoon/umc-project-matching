import { ApiResponse, api } from '@api/axios';

export const tokenCheck = async () => {
  const res = await api.get<ApiResponse<null>>('/auth/test/protected');
  return res.data.result;
};

export const getTestToken = async (userId: string) => {
  const res = await api.get<ApiResponse<any>>('/auth/test/token', { params: { userId } });
  return res.data.result;
};

export const checkCookie = async () => {
  const res = await api.get<ApiResponse<any>>('/auth/test/cookie');
  return res.data.result;
};

export const raiseError = async (type: 'HTTP' | 'NORMAL' | 'CUSTOM') => {
  const res = await api.get<ApiResponse<string>>('/test/error/exception', { params: { type } });
  return res.data.result;
};

export const mongoCreateTest = async () => {
  const res = await api.post<ApiResponse<null>>('/test/db/mongo/create-test');
  return res.data.result;
};

export const mirror = async () => {
  const res = await api.get<ApiResponse<any>>('/test/basic/mirror');
  return res.data.result;
};

export const getHello = async () => {
  const res = await api.get<ApiResponse<string>>('/test/basic/hello');
  return res.data.result;
};

export const getRequestContext = async () => {
  const res = await api.get<ApiResponse<any>>('/test/basic/als');
  return res.data.result;
};
