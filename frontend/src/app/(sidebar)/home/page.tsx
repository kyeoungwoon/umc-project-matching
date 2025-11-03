'use client';

import AnnouncementCard from '@common/components/AnnouncementCard';

const HomePage = () => {
  return (
    <>
      <div className={'flex w-full flex-col items-center justify-center gap-y-3'}>
        {/* Home page content goes here */}
        {/* 현재 차수가 보여야 함 */}
        <AnnouncementCard />
      </div>
    </>
  );
};

export default HomePage;
