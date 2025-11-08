import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

import { ROUTES } from '@common/constants/routes.constants';

import { useGetUser } from '@features/auth/hooks/useAuthStore';

export const useIsPlanChallenger = () => {
  const user = useGetUser();
  return user?.info?.part === 'PLAN';
};

export const useIsAdminChallenger = () => {
  const user = useGetUser();
  return user?.info?.role === 'ADMIN';
};

/**
 * Plan 파트가 아닌 경우 홈으로 리다이렉트하는 Hook
 * @example
 * const MyPlanOnlyPage = () => {
 *   useRedirectToHomeIfNotPlan();
 *   return <div>Plan Only Content</div>;
 * };
 */
export const useRedirectToHomeIfNotPlan = () => {
  const router = useRouter();
  const isPlanChallenger = useIsPlanChallenger();

  useEffect(() => {
    if (!isPlanChallenger) {
      toast.error('접근 권한이 없습니다.', {
        description: 'Plan 파트만 접근할 수 있습니다.',
      });
      router.push(ROUTES.HOME);
    }
  }, [isPlanChallenger, router]);
};

/**
 * Admin이 아닌 경우 홈으로 리다이렉트하는 Hook
 */
export const useRedirectToHomeIfNotAdmin = () => {
  const router = useRouter();
  const isAdminChallenger = useIsAdminChallenger();

  useEffect(() => {
    if (!isAdminChallenger) {
      toast.error('접근 권한이 없습니다.', {
        description: '관리자만 접근할 수 있습니다.',
      });
      router.push(ROUTES.HOME);
    }
  }, [isAdminChallenger, router]);
};
