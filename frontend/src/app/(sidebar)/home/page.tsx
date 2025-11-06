'use client';

import MatchingRoundAnnouncementCard from '@common/components/MatchingRoundAnnouncementCard';

const HomePage = () => {
  return (
    <>
      <div className={'flex w-full flex-col items-start justify-center gap-y-3 p-4'}>
        {/* Home page content goes here */}
        {/* 현재 차수가 보여야 함 */}
        <MatchingRoundAnnouncementCard />
      </div>
    </>
  );
};

export default HomePage;
