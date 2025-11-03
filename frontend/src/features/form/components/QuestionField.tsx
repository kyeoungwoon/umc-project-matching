'use client';

import { FormQuestionDto } from '@api/axios/form/types';

import { ObjectiveQuestion } from './ObjectiveQuestion';
import { SubjectiveQuestion } from './SubjectiveQuestion';

interface QuestionFieldProps {
  form: any;
  question: FormQuestionDto;
  index: number;
}

export const QuestionField = ({ form, question, index }: QuestionFieldProps) => {
  // This component is designed for the 'answering' mode.
  // For 'creation' mode, we would need a different set of components
  // to build the FormQuestionDto object itself, likely using a dynamic form for questions and options.

  return (
    <form.Field
      name={`answers[${index}].value`}
      children={(field: any) => {
        if (question.type === 'SUBJECTIVE') {
          return <SubjectiveQuestion field={field} question={question} />;
        }
        return <ObjectiveQuestion field={field} question={question} />;
      }}
    />
  );
};
