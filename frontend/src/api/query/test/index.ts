import { useMutation, useQuery } from '@tanstack/react-query';

import {
  checkCookie,
  getHello,
  getRequestContext,
  getTestToken,
  mirror,
  mongoCreateTest,
  raiseError,
  tokenCheck,
} from '@api/axios/test';

export const useTokenCheckQuery = () => {
  return useQuery({ queryKey: ['test', 'tokenCheck'], queryFn: tokenCheck });
};

export const useGetTestTokenQuery = (userId: string) => {
  return useQuery({
    queryKey: ['test', 'testToken', userId],
    queryFn: () => getTestToken(userId),
  });
};

export const useCheckCookieQuery = () => {
  return useQuery({ queryKey: ['test', 'checkCookie'], queryFn: checkCookie });
};

export const useRaiseErrorQuery = (type: 'HTTP' | 'NORMAL' | 'CUSTOM') => {
  return useQuery({ queryKey: ['test', 'raiseError', type], queryFn: () => raiseError(type) });
};

export const useMongoCreateTestMutation = () => {
  return useMutation({ mutationFn: mongoCreateTest });
};

export const useMirrorQuery = () => {
  return useQuery({ queryKey: ['test', 'mirror'], queryFn: mirror });
};

export const useGetHelloQuery = () => {
  return useQuery({ queryKey: ['test', 'hello'], queryFn: getHello });
};

export const useGetRequestContextQuery = () => {
  return useQuery({ queryKey: ['test', 'requestContext'], queryFn: getRequestContext });
};
