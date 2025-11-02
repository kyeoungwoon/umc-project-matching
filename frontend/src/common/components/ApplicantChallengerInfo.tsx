'use client';

import { parsePart } from '@common/utils/parse-userinfo';

const ApplicantChallengerInfo = ({
  school,
  part,
  name,
  nickname,
}: {
  school: string;
  part: string;
  nickname: string;
  name: string;
}) => {
  return (
    <div className={'text-30pxr mt-3 flex flex-row items-end justify-start gap-x-2'}>
      <span className={''}>{school}</span>
      <span className={'font-semibold'}>
        {nickname}/{name}
      </span>
      <span className={'text-25pxr ml-2'}>{parsePart(part)}</span>
    </div>
  );
};

export default ApplicantChallengerInfo;
