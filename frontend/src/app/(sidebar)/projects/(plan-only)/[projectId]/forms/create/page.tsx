'use client';

import { useState } from 'react';

import { useParams, useRouter } from 'next/navigation';

import { toast } from 'sonner';

import { Button } from '@styles/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@styles/components/ui/card';
import { Checkbox } from '@styles/components/ui/checkbox';
import { Input } from '@styles/components/ui/input';
import { Label } from '@styles/components/ui/label';
import { Textarea } from '@styles/components/ui/textarea';

import { useCreateFormMutation } from '@api/query/form';
import { useGetAllMatchingRoundQuery } from '@api/query/matching-round';

import { ROUTES } from '@common/constants/routes.constants';

import DefaultSkeleton from '@common/components/DefaultSkeleton';

import RequiredStar from '@features/projects/components/forms/RequiredStar';

const CreateProjectFormPage = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = params.projectId as string;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedMatchingRounds, setSelectedMatchingRounds] = useState<string[]>([]);

  const { data: matchingRounds, isLoading: isLoadingMatchingRounds } =
    useGetAllMatchingRoundQuery();
  const { mutate: createForm, isPending } = useCreateFormMutation(projectId);

  const handleCreateForm = () => {
    if (!title || !selectedMatchingRounds[0]) {
      toast.error('지원서 제목과 매칭 차수를 입력해주세요.', {
        richColors: true,
      }); // Simple alert for now
      return;
    }

    createForm(
      { title, description },
      {
        onSuccess: (form) => {
          if (form) {
            // Redirect to the projects editing page to add questions
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

  if (isLoadingMatchingRounds || !matchingRounds) return <DefaultSkeleton />;

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
            <Textarea
              id="form-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={'flex flex-col gap-y-2'}>
            <Label>
              매칭 차수 선택 <RequiredStar />
            </Label>
            <div className="space-y-2">
              {matchingRounds.map((round) => (
                <div key={round.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={round.id}
                    checked={selectedMatchingRounds.includes(round.id)}
                    onCheckedChange={(checked) => {
                      let newValues = selectedMatchingRounds || [];

                      if (checked) {
                        newValues = [...newValues, round.id];
                      } else {
                        newValues = newValues.filter((v: string) => v !== round.id);
                      }

                      newValues = newValues.filter((v: string) => v !== '');
                      if (!newValues.length) newValues = [''];
                      setSelectedMatchingRounds(newValues);
                    }}
                  />
                  <Label htmlFor={round.name}>{round.name}</Label>
                </div>
              ))}
            </div>
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
