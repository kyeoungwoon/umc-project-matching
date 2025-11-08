'use client';

import { useState } from 'react';

import { useParams, useRouter } from 'next/navigation';

import { toast } from 'sonner';

import { Button } from '@styles/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@styles/components/ui/card';
import { Input } from '@styles/components/ui/input';
import { Label } from '@styles/components/ui/label';

import { useCreateFormMutation } from '@api/query/form';

import { ROUTES } from '@common/constants/routes.constants';

import RequiredStar from '@common/components/RequiredStar';

const CreateProjectFormPage = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = params.projectId as string;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { mutate: createForm, isPending } = useCreateFormMutation(projectId);

  const handleCreateForm = () => {
    if (!title) {
      toast.error('지원서 제목을 입력해주세요.', {
        richColors: true,
      }); // Simple alert for now
      return;
    }

    createForm(
      { title, description },
      {
        onSuccess: (form) => {
          if (form) {
            // Redirect to the form editing page to add questions
            toast.success('지원용 폼이 생성되었습니다.', {
              description: '이동되는 페이지에서 질문을 추가해주세요.',
              richColors: true,
              position: 'top-center',
            });
            router.push(ROUTES.PROJECTS.EDIT_FORM(projectId, form.id));
          }
        },
        onError: () => {
          toast.error('지원서 생성에 실패했습니다.', {
            richColors: true,
          });
        },
      },
    );
  };

  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <Card className="mt-5 w-full max-w-2xl p-5">
        <CardHeader>
          <CardTitle>프로젝트 지원용 폼 생성</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={'flex flex-col gap-y-2'}>
            <Label htmlFor="form-title">
              폼 제목 (필수)
              <RequiredStar />
            </Label>
            <Input id="form-title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className={'flex flex-col gap-y-2'}>
            <Label htmlFor="form-description">폼 설명</Label>
            <Input
              id="form-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleCreateForm} disabled={isPending}>
            {isPending ? '생성 중...' : '폼 생성 및 질문 추가하러 가기'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateProjectFormPage;
