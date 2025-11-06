import { useGetUser } from '@features/auth/hooks/useAuthStore';

export const useIsPlanChallenger = () => {
  const user = useGetUser();
  return user?.info?.part === 'PLAN';
};

export const useIsAdminChallenger = () => {
  const user = useGetUser();
  return user?.info?.role === 'ADMIN';
};
