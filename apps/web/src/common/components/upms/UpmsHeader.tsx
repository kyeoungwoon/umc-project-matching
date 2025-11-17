'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import HeaderSkeleton from '@skeletons/components/HeaderSkeleton';

import { Button } from '@styles/components/ui/button';

import { useGetMyInfoQuery } from '@api/query/user';

import { ROUTES } from '@common/constants/routes.constants';

import { useClearUser, useSetUserInfo } from '@features/auth/hooks/useAuthStore';

const UpmsHeader = ({ section }: { section: { title: string; description: string } }) => {
  const { data, isLoading } = useGetMyInfoQuery();
  const router = useRouter();
  const clearUser = useClearUser();
  const setUserInfo = useSetUserInfo();

  // useEffect로 이동하여 렌더링 중 setState 방지
  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }
  }, [data, setUserInfo]);

  const handleLogout = () => {
    clearUser();
    return router.push(ROUTES.AUTH.LOGIN);
  };

  const isLoggedIn = !!data;

  if (isLoading) {
    return <HeaderSkeleton />;
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div>
          <p className="text-16pxr font-medium">{section.title}</p>
          <p className="text-14pxr text-[#6A7282]">{section.description}</p>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn && (
            <div>
              <p className="text-14pxr">
                {data.challengerSchool.name} {data.part}
              </p>
              <p className="text-14pxr text-[#6A7282]">
                {data.nickname}/{data.name}
              </p>
            </div>
          )}
          <Button variant="outline" onClick={handleLogout}>
            {isLoggedIn ? '로그아웃' : '왜 여기 계십니까 ...'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default UpmsHeader;
