'use client';

import { useParams, useRouter } from 'next/navigation';
import { useGetFormQuery, useAddQuestionsToFormMutation } from '@api/query/form';
import { QuestionFormBuilder } from '@features/form/components/QuestionFormBuilder';
import Header from '@common/components/Header';
import { CreateQuestionRequestDto } from '@api/axios/form/types';
import { ROUTES } from '@common/constants/routes.constants';

const EditProjectFormPage = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = params.projectId as string;
  const formId = params.formId as string;

  const { data: form, isLoading } = useGetFormQuery(projectId, formId);
  const { mutate: addQuestions } = useAddQuestionsToFormMutation(projectId);

  const handleFormSubmit = (questionsData: CreateQuestionRequestDto) => {
    addQuestions({ formId, data: questionsData }, {
      onSuccess: () => {
        alert('질문이 저장되었습니다.');
        router.push(ROUTES.PROJECTS.FORM_LIST(projectId));
      },
      onError: () => {
        alert('질문 저장에 실패했습니다.');
      }
    });
  };

  if (isLoading || !form) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <Header title={`지원서 수정: ${form.title}`} detail="지원서에 포함될 질문들을 추가하고 수정해주세요." />
      <div className="w-full max-w-4xl mt-5">
        <QuestionFormBuilder onSubmit={handleFormSubmit} initialData={form.questions} />
      </div>
    </div>
  );
};

export default EditProjectFormPage;
