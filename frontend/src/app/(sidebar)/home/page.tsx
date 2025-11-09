'use client';

import NoticeCard from '@features/home/components/NoticeCard';
import MatchingRoundAnnouncementCard from '@features/matching/components/MatchingRoundAnnouncementCard';

const HomePage = () => {
  return (
    <>
      <div className={'flex w-full flex-col items-start justify-center gap-y-3 p-4'}>
        {/* 현재 차수가 보여야 함 */}
        <MatchingRoundAnnouncementCard />
        <NoticeCard />
      </div>
    </>
  );
};

export default HomePage;
