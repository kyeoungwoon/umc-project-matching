'use client';

import { Button } from '@styles/components/ui/button';

import { useGetMyInfoQuery } from '@api/query/user';

const Header = ({ title, detail }: { title?: string; detail?: string }) => {
  const { data, isLoading } = useGetMyInfoQuery();

  const isLoggedIn = !!data;

  if (isLoading) {
    return (
      <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div>
            <p className="text-16pxr font-medium">{title}</p>
            <p className="text-14pxr text-[#6A7282]">{detail}</p>
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
          <p className="text-16pxr font-medium">{title}</p>
          <p className="text-14pxr text-[#6A7282]">{detail}</p>
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
          <Button variant="outline">{isLoggedIn ? '로그아웃' : '로그인'}</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
