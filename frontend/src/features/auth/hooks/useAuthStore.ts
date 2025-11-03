import AuthStore from '@features/auth/stores/auth-store';

export const useGetUserInfo = () => AuthStore((state) => state.user);

export const useSetUser = () => {
  return AuthStore((state) => state.actions.setUser);
};

export const useClearTokens = () => AuthStore((state) => state.actions.clearTokens);
