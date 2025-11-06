'use client';

import { useParams } from 'next/navigation';

import { useGetFormQuery } from '@api/query/form';

import { ApplicationForm } from '@common/components/ApplicationForm';
import DefaultSkeleton from '@common/components/DefaultSkeleton';

const ApplyPage = () => {
  const params = useParams();
  const projectId = params.projectId as string;
  const formId = params.formId as string;

  const { data: form, isLoading } = useGetFormQuery(projectId, formId);

  if (isLoading || !form) {
    return <DefaultSkeleton />;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <ApplicationForm form={form} projectId={projectId} formId={formId} />
    </div>
  );
};

export default ApplyPage;
