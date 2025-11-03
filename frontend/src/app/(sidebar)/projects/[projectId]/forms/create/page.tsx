'use client';

import { useState } from 'react';

import { useParams, useRouter } from 'next/navigation';

import { Button } from '@styles/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@styles/components/ui/card';
import { Input } from '@styles/components/ui/input';
import { Label } from '@styles/components/ui/label';

import { useCreateFormMutation } from '@api/query/form';

import { ROUTES } from '@common/constants/routes.constants';

import Header from '@common/components/Header';

const CreateProjectFormPage = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = params.projectId as string;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { mutate: createForm, isPending } = useCreateFormMutation(projectId);

  const handleCreateForm = () => {
    if (!title) {
      alert('지원서 제목을 입력해주세요.'); // Simple alert for now
      return;
    }

    createForm(
      { title, description },
      {
        onSuccess: (form) => {
          if (form) {
            // Redirect to the form editing page to add questions
            router.push(ROUTES.PROJECTS.EDIT_FORM(projectId, form.id));
          }
        },
        onError: () => {
          alert('지원서 생성에 실패했습니다.');
        },
      },
    );
  };

  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <Card className="mt-5 w-full max-w-2xl p-5">
        <CardHeader>
          <CardTitle>지원서 정보</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="form-title">지원서 제목</Label>
            <Input id="form-title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="form-description">지원서 설명</Label>
            <Input
              id="form-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleCreateForm} disabled={isPending}>
            {isPending ? '생성 중...' : '다음: 질문 추가하기'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateProjectFormPage;
