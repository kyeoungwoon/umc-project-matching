import { useMutation, useQuery } from '@tanstack/react-query';

import * as test from '@api/axios/test';

export const useTokenCheckQuery = () => {
  return useQuery({ queryKey: ['test', 'tokenCheck'], queryFn: test.tokenCheck });
};

export const useGetTestTokenQuery = (userId: string) => {
  return useQuery({
    queryKey: ['test', 'testToken', userId],
    queryFn: () => test.getTestToken(userId),
  });
};

export const useCheckCookieQuery = () => {
  return useQuery({ queryKey: ['test', 'checkCookie'], queryFn: test.checkCookie });
};

export const useRaiseErrorQuery = (type: 'HTTP' | 'NORMAL' | 'CUSTOM') => {
  return useQuery({ queryKey: ['test', 'raiseError', type], queryFn: () => test.raiseError(type) });
};

export const useMongoCreateTestMutation = () => {
  return useMutation({ mutationFn: test.mongoCreateTest });
};

export const useMirrorQuery = () => {
  return useQuery({ queryKey: ['test', 'mirror'], queryFn: test.mirror });
};

export const useGetHelloQuery = () => {
  return useQuery({ queryKey: ['test', 'hello'], queryFn: test.getHello });
};

export const useGetRequestContextQuery = () => {
  return useQuery({ queryKey: ['test', 'requestContext'], queryFn: test.getRequestContext });
};
