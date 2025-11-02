'use client';

import { redirect, useRouter } from 'next/navigation';

import { ROUTES } from '@common/constants/routes.constants';

import { useGetUser } from '@features/auth/hooks/useAuthStore';

const RootPage = () => {
  const user = useGetUser();
  const router = useRouter();

  if (!user) {
    router.push(ROUTES.AUTH.LOGIN);
  } else router.push(ROUTES.HOME);
};

export default RootPage;
