'use client';

import { useParams, useRouter } from 'next/navigation';

import { toast } from 'sonner';

import { CreateQuestionRequestDto } from '@api/axios/form/types';
import { useAddQuestionsToFormMutation, useGetFormQuery } from '@api/query/form';

import { ROUTES } from '@common/constants/routes.constants';

import DefaultSkeleton from '@common/components/DefaultSkeleton';

import { QuestionFormBuilder } from '@features/projects/components/QuestionFormBuilder';

const EditProjectFormPage = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = params.projectId as string;
  const formId = params.formId as string;

  const { data: fetchedForm, isLoading } = useGetFormQuery(projectId, formId);
  const { mutate: addQuestions } = useAddQuestionsToFormMutation(projectId);

  const handleFormSubmit = (questionsData: CreateQuestionRequestDto) => {
    addQuestions(
      { formId, data: questionsData },
      {
        onSuccess: () => {
          toast.success('질문이 저장되었습니다.', { richColors: true });
          router.push(ROUTES.PROJECTS.FORM_LIST(projectId));
        },
        onError: (err) => {
          toast.error('질문 저장에 실패했습니다.', { richColors: true, description: err?.message });
        },
      },
    );
  };

  if (isLoading) {
    return <DefaultSkeleton />;
  }

  if (!fetchedForm) throw new Error('Form에 대한 정보가 없습니다.');

  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <div className="mt-5 w-full max-w-4xl">
        <QuestionFormBuilder onSubmit={handleFormSubmit} initialData={fetchedForm.questions} />
      </div>
    </div>
  );
};

export default EditProjectFormPage;
