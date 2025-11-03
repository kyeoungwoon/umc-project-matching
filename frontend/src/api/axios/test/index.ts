import { api } from '@api/axios';

export const tokenCheck = async () => {
  return api.get('/auth/test/protected');
};

export const getTestToken = async (userId: string) => {
  return api.get('/auth/test/token', { params: { userId } });
};

export const checkCookie = async () => {
  return api.get('/auth/test/cookie');
};

export const raiseError = async (type: 'HTTP' | 'NORMAL' | 'CUSTOM') => {
  return api.get('/test/error/exception', { params: { type } });
};

export const mongoCreateTest = async () => {
  return api.post('/test/db/mongo/create-test');
};

export const mirror = async () => {
  return api.get('/test/basic/mirror');
};

export const getHello = async () => {
  return api.get('/test/basic/hello');
};

export const getRequestContext = async () => {
  return api.get('/test/basic/als');
};
