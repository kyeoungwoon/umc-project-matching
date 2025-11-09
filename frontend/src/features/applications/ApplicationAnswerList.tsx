'use client';

import { ApplicationResponseDto } from '@api/axios/application/types';

import SingleQuestionAnswer from '@features/projects/components/SingleQuestionAnswer';

const ApplicationAnswerList = ({ application }: { application: ApplicationResponseDto }) => {
  return (
    <div className="flex w-full flex-col gap-y-4">
      {application.formAnswers &&
        application.formAnswers.length > 0 &&
        // 답변 배열이 존재하고, 그 길이가 0보다 클 때만 렌더링
        application.formAnswers.map((answer, idx) => (
          <SingleQuestionAnswer key={idx} answer={answer} />
        ))}
    </div>
  );
};

export default ApplicationAnswerList;
