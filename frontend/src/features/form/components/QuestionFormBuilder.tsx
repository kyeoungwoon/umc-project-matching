'use client';

import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

import { Button } from '@styles/components/ui/button';

import { CreateFormQuestionDto, CreateQuestionRequestDto } from '@api/axios/form/types';

import QuestionCreator from '@features/form/components/QuestionCreator';

interface QuestionFormBuilderProps {
  onSubmit: (data: CreateQuestionRequestDto) => void;
  initialData?: CreateFormQuestionDto[];
}

const formSchema = z.object({
  questions: z.array(
    z.object({
      questionNo: z.number(),
      title: z.string().min(1, '질문 제목을 입력해주세요.'),
      description: z.string().min(1, '질문에 대한 설명을 입력해주세요.'),
      type: z.enum(['SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'SUBJECTIVE']),
      isRequired: z.boolean(),
      options: z.array(z.string().min(1, '선택지를 입력해주세요.')),
    }),
  ),
});

// type FormValues = z.infer<typeof formSchema>;

export const QuestionFormBuilder = ({ onSubmit, initialData }: QuestionFormBuilderProps) => {
  const form = useForm({
    defaultValues: {
      questions: initialData || [],
    },
    onSubmit: ({ value }) => onSubmit(value),
    validators: {
      onSubmit: formSchema,
      onChange: formSchema,
      onBlur: formSchema,
    },
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await form.handleSubmit();
      }}
      className="space-y-4"
    >
      <form.Field
        name="questions"
        mode="array"
        children={(field) => (
          <div className="space-y-4">
            {field.state.value.map((_, index) => (
              <QuestionCreator
                key={index}
                tanstackForm={form}
                index={index}
                remove={() => field.removeValue(index)}
              />
            ))}

            {/* 폼에 속한 모든 문항들이 표시되고 나서 가장 최하단임! */}
            {/* 문항 추가 및 지원서 저장 버튼 */}
            <div className="flex justify-between">
              <Button
                type="button"
                variant="secondary"
                onClick={() =>
                  field.pushValue({
                    questionNo: field.state.value.length + 1,
                    title: '',
                    description: '',
                    type: 'SUBJECTIVE',
                    isRequired: false,
                    options: [],
                  })
                }
              >
                새로운 질문 추가하기
              </Button>
              <Button type="submit">지원서 저장</Button>
            </div>
          </div>
        )}
      />
    </form>
  );
};
