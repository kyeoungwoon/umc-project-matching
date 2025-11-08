'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';
import { Input } from '@styles/components/ui/input';

import { FormQuestionDto } from '@api/axios/form/types';

import RequiredStar from '@common/components/RequiredStar';

interface SubjectiveQuestionProps {
  field: any;
  question: FormQuestionDto;
}

export const SubjectiveQuestion = ({ field, question }: SubjectiveQuestionProps) => {
  return (
    <Card>
      <CardHeader>
        {/*TODO: title 부분 분리해서 스타일 통일하기*/}
        <CardTitle>
          {question.title}
          {question.isRequired && <RequiredStar />}
        </CardTitle>
        <CardDescription>{question.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          value={field.state.value[0] ?? ''}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange([e.target.value || ''])}
          placeholder="답변을 입력해주세요."
        />
      </CardContent>
    </Card>
  );
};
