'use client';

import MatchingRoundAnnouncementCard from '@common/components/MatchingRoundAnnouncementCard';

import NoticeCard from '@features/home/components/NoticeCard';

const HomePage = () => {
  return (
    <>
      <div className={'flex w-full flex-col items-start justify-center gap-y-3 p-4'}>
        {/* 현재 차수가 보여야 함 */}
        <NoticeCard />
        <MatchingRoundAnnouncementCard />
      </div>
    </>
  );
};

export default HomePage;
