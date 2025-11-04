'use client';

import { useParams, useRouter } from 'next/navigation';

import { useForm } from '@tanstack/react-form';

import { Button } from '@styles/components/ui/button';

import { FormWithDetailsResponseDto } from '@api/axios/form/types';
import { useApplyToProjectMutation } from '@api/query/application';
import { useGetFormQuery } from '@api/query/form';

import { ROUTES } from '@common/constants/routes.constants';

import { QuestionField } from '@features/form/components/QuestionField';

// Inner component to handle the form logic after data is fetched
const ApplicationForm = ({
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
      answers: formData.questions.map((q) => ({
        questionId: q.id,
        value: q.type === 'MULTIPLE_CHOICE' ? [] : '',
      })),
    },
    onSubmit: ({ value }) => {
      apply(value, {
        onSuccess: () => {
          alert('지원이 완료되었습니다.');
          // TODO: redirect link 확인 필요
          router.push(ROUTES.PROJECTS.LIST); // Redirect to project list or a confirmation page
        },
        onError: () => {
          alert('지원에 실패했습니다. 다시 시도해주세요.');
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

const ApplyPage = () => {
  const params = useParams();
  const projectId = params.projectId as string;
  const formId = params.formId as string;

  const { data: form, isLoading } = useGetFormQuery(projectId, formId);

  if (isLoading || !form) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <ApplicationForm form={form} projectId={projectId} formId={formId} />
    </div>
  );
};

export default ApplyPage;
