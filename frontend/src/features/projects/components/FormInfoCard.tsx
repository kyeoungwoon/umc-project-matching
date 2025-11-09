import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

import { Button } from '@styles/components/ui/button';
import { ButtonGroup } from '@styles/components/ui/button-group';
import { Card, CardContent, CardHeader, CardTitle } from '@styles/components/ui/card';
import { Input } from '@styles/components/ui/input';
import { Separator } from '@styles/components/ui/separator';

import { FormResponseDto, UpdateFormRequestDto } from '@api/axios/form/types';
import { useEditFormMutation } from '@api/query/form';
import { useGetAllMatchingRoundQuery, useGetMatchingRound } from '@api/query/matching-round';

import { ROUTES } from '@common/constants/routes.constants';

import { useIsAdminChallenger, useIsPlanChallenger } from '@common/hooks/useGetChallengerPerms';

interface FormCardProps {
  form: FormResponseDto;
}

enum FormCardMode {
  EDIT = 'edit',
  NORMAL = 'normal',
}

export const FormInfoCard = ({ form }: FormCardProps) => {
  const { id: formId, projectId, availableMatchingRounds } = form;

  const { mutate: editForm } = useEditFormMutation(projectId, formId);

  // TODO: 각각 가져오도록 변경
  const { data: matchingRound, isLoading: isMatchingRoundInfoLoading } =
    useGetAllMatchingRoundQuery();

  const router = useRouter();

  const isPlan = useIsPlanChallenger();
  const isAdmin = useIsAdminChallenger();

  // console.log(isPlan, isAdmin, isAdmin || isPlan, '!!!!!!!!!!');

  const [mode, setMode] = useState<FormCardMode>(FormCardMode.NORMAL);
  const [editedForm, setEditedForm] = useState<UpdateFormRequestDto>({
    title: form.title,
    description: form.description || '',
  });

  const handleManageForm = () => {
    router.push(ROUTES.PROJECTS.EDIT_FORM(projectId, formId));
  };
  const handleApplyToForm = () => {
    router.push(ROUTES.PROJECTS.APPLY_TO_FORM(projectId, formId));
  };
  const handleToggleMode = () => {
    setMode((prevMode) => {
      if (prevMode === FormCardMode.EDIT) {
        // Save changes
        editForm(editedForm, {
          onSuccess: () => {
            toast.success('폼 제목과 설명을 수정했습니다.');
          },
          onError: (err) => {
            toast.error('Form 정보 수정에 실패하였습니다.', {
              description: err.message,
            });
          },
        });
      }

      return prevMode === FormCardMode.NORMAL ? FormCardMode.EDIT : FormCardMode.NORMAL;
    });
  };
  const handleViewApplicants = () => {
    router.push(ROUTES.PROJECTS.VIEW_APPLICANTS(projectId, formId));
  };

  return (
    <Card>
      <CardHeader>
        {mode === FormCardMode.NORMAL ? (
          <>
            <div className={'flex flex-col gap-y-5'}>
              <div className={'flex flex-row items-center justify-start gap-2'}>
                <span className={'w-30'}>지원 폼 이름</span>
                <CardTitle className="text-xl font-semibold">{form.title}</CardTitle>
              </div>
              <div className={'flex flex-row items-start justify-start gap-2'}>
                <span className={'w-30'}>폼에 대한 설명</span>
                <p className="mb-2 text-lg whitespace-pre-line text-gray-800">
                  {form.description || '설명 없음'}
                </p>
              </div>

              <div className={'flex flex-row items-center gap-x-2 text-lg'}>
                <span>지원 가능한 매칭 라운드 : </span>
                {availableMatchingRounds.map((roundId, idx) => {
                  const round = matchingRound?.find((mr) => mr.id === roundId);
                  if (!round) return null;
                  return (
                    <span key={roundId} className="text-muted-foreground text-lg">
                      {isMatchingRoundInfoLoading ? '로딩 중...' : round.name}{' '}
                    </span>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <>
            <Input
              value={editedForm.title}
              onChange={(e) => setEditedForm({ ...editedForm, title: e.target.value })}
            />
            <Input
              value={editedForm.description}
              onChange={(e) => setEditedForm({ ...editedForm, description: e.target.value })}
            />
          </>
        )}
      </CardHeader>
      <CardContent>
        {/* TODO: Plan 챌린저에 대한 권한 처리 필요 */}
        <ButtonGroup className="mt-4 flex w-full flex-row justify-end">
          {(isPlan || isAdmin) && (
            <>
              <Button onClick={handleToggleMode} variant="outline">
                {mode === FormCardMode.NORMAL ? '제목/설명 수정' : '저장하기'}
              </Button>
              <Button onClick={handleManageForm} variant="outline">
                질문 수정하기
              </Button>
              <Button onClick={handleViewApplicants} variant="outline">
                지원자 보기
              </Button>
            </>
          )}

          <Button onClick={handleApplyToForm} variant="default">
            지원하기
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
