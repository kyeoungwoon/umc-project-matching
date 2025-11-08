'use client';

// Inner component to handle the form logic after data is fetched
import { useRouter } from 'next/navigation';

import { useForm } from '@tanstack/react-form';
import { toast } from 'sonner';

import { Button } from '@styles/components/ui/button';

import { AnswerDto } from '@api/axios/application/types';
import { FormWithDetailsResponseDto } from '@api/axios/form/types';
import { useApplyToProjectMutation } from '@api/query/application';

import { ROUTES } from '@common/constants/routes.constants';

import { QuestionField } from '@features/form/components/QuestionField';

export const ApplicationForm = ({
  form: formData,
  projectId,
  formId,
}: {
  form: FormWithDetailsResponseDto;
  projectId: string;
  formId: string;
}) => {
  const router = useRouter();
  const { mutate: apply, isPending } = useApplyToProjectMutation(projectId, formId);

  const form = useForm({
    defaultValues: {
      answers: formData.questions.map(
        (q): AnswerDto => ({
          questionId: q.id,
          value: [''],
        }),
      ),
    },
    onSubmit: ({ value }) => {
      // const newValue = value.answers.map((ans) => {
      //   if (ans === 0) {
      //     return {
      //       ...ans,
      //       value: [''],
      //     };
      //   } else return ans;
      // });
      apply(value, {
        onSuccess: () => {
          toast.success('지원이 완료되었습니다.', {
            richColors: true,
            position: 'top-center',
          });
          // TODO: redirect link 확인 필요
          router.push(ROUTES.PROJECTS.LIST); // Redirect to project list or a confirmation page
        },
        onError: (err) => {
          console.error('지원 실패', err);
          toast.error('지원에 실패했습니다. 다시 시도해주세요.', {
            richColors: true,
            position: 'top-center',
            description: err.message,
          });
        },
      });
    },
    validators: {},
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await form.handleSubmit();
      }}
      className="mt-5 w-full max-w-4xl space-y-4"
    >
      {formData.questions.map((question, index) => (
        <QuestionField key={question.id} tanstackForm={form} question={question} index={index} />
      ))}
      <div className="flex justify-end">
        <Button type="submit" disabled={isPending}>
          {isPending ? '제출 중...' : '지원서 제출하기'}
        </Button>
      </div>
    </form>
  );
};
