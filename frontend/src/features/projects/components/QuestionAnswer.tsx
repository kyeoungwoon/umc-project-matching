'use client';

import { Card, CardContent, CardHeader } from '@styles/components/ui/card';

import { FormAnswerResponseDto } from '@api/axios/application/types';

const QuestionAnswer = ({ answer }: { answer: FormAnswerResponseDto }) => {
  console.log(answer);
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex h-full flex-1 flex-row items-center justify-start space-x-1">
        {/*질문 배지 삭제 처리 하였음, 디자인 상 어떤게 더 좋을까?*/}
        <p className="text-md leading-relaxed font-medium">{answer.question.title}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4">
        <p className="text-muted-foreground text-sm">답변</p>
        {/*<Badge variant="outline" className="text-xs">*/}
        {/*  답변*/}
        {/*</Badge>*/}
        <div className="flex items-start gap-3">
          <div className="flex-1">
            {answer.value.length > 0 ? (
              <div className="space-y-2">
                {answer.value.map((val, idx) => (
                  <div
                    key={idx}
                    className="bg-muted/50 border-border/50 rounded-lg border p-3 text-sm"
                  >
                    {val}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm italic">답변 없음</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionAnswer;
