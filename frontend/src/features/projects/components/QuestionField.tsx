'use client';

import { FormQuestionDto } from '@api/axios/form/types';

import { ObjectiveQuestion } from './ObjectiveQuestion';
import { SubjectiveQuestion } from './SubjectiveQuestion';

interface QuestionFieldProps {
  tanstackForm: any;
  question: FormQuestionDto;
  index: number;
}

export const QuestionField = ({ tanstackForm, question, index }: QuestionFieldProps) => {
  // This component is designed for the 'answering' mode.
  // For 'creation' mode, we would need a different set of components
  // to build the FormQuestionDto object itself, likely using a dynamic projects for questions and options.

  return (
    <tanstackForm.Field
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
