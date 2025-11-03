'use client';

import { useParams } from 'next/navigation';

import { Button } from '@styles/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@styles/components/ui/card';

import { FormResponseDto } from '@api/axios/form/types';
import { useGetProjectDetailsQuery } from '@api/query/project';

interface FormCardProps {
  form: FormResponseDto;
}

const FormCard = ({ form }: FormCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{form.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{form.description}</p>
        <div className="mt-4 flex justify-end">
          <Button>지원서 관리</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectFormsPage = () => {
  const params = useParams();
  const projectId = params.projectId as string;
  const { data: project, isLoading } = useGetProjectDetailsQuery(projectId);

  if (isLoading || !project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-4">
        <h1 className="text-2xl font-bold">{project.title} - 지원서 목록</h1>
        {project.projectForms.length > 0 ? (
          project.projectForms.map((form) => <FormCard key={form.id} form={form} />)
        ) : (
          <p>이 프로젝트에는 아직 지원서가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectFormsPage;
