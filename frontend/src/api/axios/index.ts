import axios from 'axios';

import AuthStore from '@features/auth/stores/auth-store';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9999';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export interface ApiResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T | null;
  error: any;
}

// 요청 인터셉터 추가 - accessToken 자동 추가
api.interceptors.request.use(
  (config) => {
    const { user } = AuthStore.getState();

    if (user?.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
