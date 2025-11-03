'use client';

import Header from '@common/components/Header';

const HomePage = () => {
  return (
    <>
      <div className={'flex w-full flex-col items-center justify-center'}>
        {/* Home page content goes here */}
        <Header title="Home" detail="UMC Project Matching System에 오신 것을 환영합니다." />
        {/* 현재 차수가 보여야 함 */}
      </div>
    </>
  );
};

export default HomePage;
