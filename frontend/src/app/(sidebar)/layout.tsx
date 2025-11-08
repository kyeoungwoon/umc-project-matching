'use client';

import { ReactNode, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

import { SidebarProvider } from '@styles/components/ui/sidebar';

import { ROUTES } from '@common/constants/routes.constants';

import DefaultSkeleton from '@common/components/DefaultSkeleton';
import UpmsSideBar from '@common/components/UpmsSidebar';

import { useGetUser } from '@features/auth/hooks/useAuthStore';

const UpmsHomeLayout = ({ children }: { children?: ReactNode }) => {
  const user = useGetUser();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // 클라이언트 마운트 체크 (hydration 문제 해결)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // 클라이언트에서만 실행
    if (isMounted) {
      if (!user) {
        toast.error('로그인이 필요한 서비스입니다.', {
          description: '로그인 페이지로 이동합니다.',
        });
        router.push(ROUTES.AUTH.LOGIN);
      } else {
        setIsChecking(false);
      }
    }
  }, [user, router, isMounted]);

  // 마운트되지 않았거나 체크 중이거나 user가 없으면 로딩 표시
  if (!isMounted || isChecking || !user) {
    return <DefaultSkeleton />;
  }

  return (
    <>
      <SidebarProvider>
        <UpmsSideBar />
        <main className={'w-full'}>{children}</main>
      </SidebarProvider>
    </>
  );
};

export default UpmsHomeLayout;
