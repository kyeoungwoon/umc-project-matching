import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Badge } from 'lucide-react';
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

import DefaultSkeleton from '@common/components/DefaultSkeleton';

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

  if (isMatchingRoundInfoLoading) {
    return <DefaultSkeleton />;
  }

  return (
    <div className={'flex flex-col gap-y-4 rounded-lg border border-gray-200 px-8 py-6'}>
      <div>
        {mode === FormCardMode.NORMAL ? (
          <>
            <div className={'flex flex-col gap-y-5'}>
              <p className="text-4xl font-bold">{form.title}</p>
              <p className="mb-2 text-xl whitespace-pre-line text-gray-900">
                {form.description || '설명 없음'}
              </p>

              {/*<div className={'flex flex-row items-center gap-x-2 text-lg'}>*/}
              {/*  <span>지원 가능한 매칭 라운드 : </span>*/}
              {/*  {availableMatchingRounds.map((roundId, idx) => {*/}
              {/*    const round = matchingRound?.find((mr) => mr.id === roundId);*/}
              {/*    if (!round) return null;*/}
              {/*    return (*/}
              {/*      <Badge key={roundId} className="text-muted-foreground text-lg">*/}
              {/*        {isMatchingRoundInfoLoading ? '로딩 중...' : round.name}{' '}*/}
              {/*      </Badge>*/}
              {/*    );*/}
              {/*  })}*/}
              {/*</div>*/}
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
      </div>
      <div className="mt-4 flex w-full flex-col justify-between">
        {/*Plan이거나 관리자일 땐 질문 수정 및 지원자 보기 버튼 활성화 (관리자는 아직 TODO)*/}
        {(isPlan || isAdmin) && (
          <>
            <ButtonGroup className={'w-full'}>
              <Button
                className={'mt-4 h-14 flex-grow-1 py-4 text-2xl'}
                onClick={handleToggleMode}
                variant="outline"
              >
                {mode === FormCardMode.NORMAL ? '제목/설명 수정' : '저장하기'}
              </Button>
              <Button
                className={'mt-4 h-14 flex-grow-1 py-4 text-2xl'}
                onClick={handleManageForm}
                variant="outline"
              >
                질문 수정하기
              </Button>
            </ButtonGroup>
            <Button
              className={'mt-4 h-14 flex-grow-1 py-4 text-2xl'}
              onClick={handleViewApplicants}
              variant="default"
            >
              지원자 보기
            </Button>
          </>
        )}
        {/*일반 사용자는 무조건 지원하기만 가능*/}
        {!isPlan && (
          <Button
            onClick={handleApplyToForm}
            className={'mt-4 h-14 w-full py-4 text-2xl'}
            variant="default"
          >
            지원하기
          </Button>
        )}
      </div>
    </div>
  );
};
