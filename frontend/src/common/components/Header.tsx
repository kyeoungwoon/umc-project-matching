'use client';

import { Button } from '@styles/components/ui/button';

const Header = ({ title,detail }: { title?: string, detail?:string }) => {
  const isLoginedIn = true; // TODO: 로그인 상태에 따른 처리

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div>
            <p className="text-16pxr font-medium">{title}</p>
            <p className='text-14pxr text-[#6A7282]'>{detail}</p>
        </div>
        
        <div className='flex items-center gap-4'>
          {isLoginedIn && (
            <div>
              <p className='text-14pxr'>본인 지부</p>
              <p className='text-14pxr text-[#6A7282]'>내이름</p>
            </div>
          )}
          <Button variant="outline">{isLoginedIn ? '로그인' : '로그아웃'}</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
