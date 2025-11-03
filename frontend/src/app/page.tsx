'use client';

import { redirect, useRouter } from 'next/navigation';

import { ROUTES } from '@common/constants/routes.constants';

import { useGetUserInfo } from '@features/auth/hooks/useAuthStore';

const RootPage = () => {
  const user = useGetUserInfo();
  const router = useRouter();

  if (!user) {
    router.push(ROUTES.AUTH.LOGIN);
  } else router.push(ROUTES.HOME);
};

export default RootPage;
