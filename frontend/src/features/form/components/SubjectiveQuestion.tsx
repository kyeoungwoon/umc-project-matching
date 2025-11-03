'use client';

import { FieldApi } from '@tanstack/react-form';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';
import { Input } from '@styles/components/ui/input';

import { FormQuestionDto } from '@api/axios/form/types';

interface SubjectiveQuestionProps {
  field: FieldApi<any, any, any, any>;
  question: FormQuestionDto;
}

export const SubjectiveQuestion = ({ field, question }: SubjectiveQuestionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{question.title}</CardTitle>
        <CardDescription>{question.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          placeholder="답변을 입력해주세요."
        />
      </CardContent>
    </Card>
  );
};
