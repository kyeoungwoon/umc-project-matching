'use client';

import { Badge } from '@styles/components/ui/badge';
import { Card, CardContent, CardHeader } from '@styles/components/ui/card';
import { Separator } from '@styles/components/ui/separator';

import { AnswerResponseDto } from '@api/axios/application/types';

const QuestionAnswer = ({ answer }: { answer: AnswerResponseDto }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="flex h-full flex-1 flex-row items-center justify-start space-x-1">
        <Badge variant="outline" className="text-xs">
          질문
        </Badge>
        <p className="text-sm leading-relaxed font-medium">{answer.questionTitle}</p>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-y-4">
        <Badge variant="outline" className="text-xs">
          답변
        </Badge>
        <div className="flex items-start gap-3">
          <div className="flex-1">
            {answer.value.length > 0 ? (
              <div className="space-y-2">
                {answer.value.map((val, idx) => (
                  <div
                    key={idx}
                    className="border-border bg-background rounded-md border p-3 text-sm leading-relaxed"
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
