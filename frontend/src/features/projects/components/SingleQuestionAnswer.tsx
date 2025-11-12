'use client';

import { FormAnswerResponseDto } from '@api/axios/application/types';

const SingleQuestionAnswer = ({ answer }: { answer: FormAnswerResponseDto }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {/*질문 제목*/}
      {/*질문 배지 삭제 처리 하였음, 디자인 상 어떤게 더 좋을까?*/}
      <p className="text-md ml-1 leading-relaxed font-semibold tracking-tight">
        {answer.question.title}
      </p>
      {/*질문 답변*/}
      <div className="flex flex-col gap-y-4">
        {answer.value.length > 0 && answer.value[0] !== '' ? (
          <div className="space-y-2">
            {answer.value.map((val, idx) => (
              <div key={idx} className="bg-muted/50 border-border/50 rounded-lg border p-3 text-sm">
                {val}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm italic">답변 없음</p>
        )}
      </div>
    </div>
  );
};

export default SingleQuestionAnswer;
