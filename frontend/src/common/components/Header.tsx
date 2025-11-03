'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@styles/components/ui/button';

import { useGetMyInfoQuery } from '@api/query/user';

import { HEADER_SECTION } from '@common/constants/header-title-description.constants';
import { ROUTES } from '@common/constants/routes.constants';

import { useClearUser } from '@features/auth/hooks/useAuthStore';

const Header = ({ section }: { section: { title: string; description: string } }) => {
  const { data, isLoading } = useGetMyInfoQuery();
  const router = useRouter();
  const clearUser = useClearUser();

  const handleLogout = () => {
    clearUser();
    return router.push(ROUTES.AUTH.LOGIN);
  };

  const isLoggedIn = !!data;

  if (isLoading) {
    return (
      <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div>
            <p className="text-16pxr font-medium">{section.title}</p>
            <p className="text-14pxr text-[#6A7282]">{section.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-14pxr text-[#6A7282]">Loading...</div>
          </div>
        </div>
      </header>
    );
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
                {data?.challengerSchool?.name} {data?.part}
              </p>
              <p className="text-14pxr text-[#6A7282]">{data?.name}</p>
            </div>
          )}
          <Button variant="outline" onClick={handleLogout}>
            {isLoggedIn ? '로그아웃' : '로그인'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
