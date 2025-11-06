import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@styles/components/ui/button';
import { ButtonGroup } from '@styles/components/ui/button-group';
import { Card, CardContent, CardHeader, CardTitle } from '@styles/components/ui/card';
import { Input } from '@styles/components/ui/input';

import { FormResponseDto, UpdateFormRequestDto } from '@api/axios/form/types';
import { useEditFormMutation } from '@api/query/form';

import { ROUTES } from '@common/constants/routes.constants';

interface FormCardProps {
  form: FormResponseDto;
}

enum FormCardMode {
  EDIT = 'edit',
  NORMAL = 'normal',
}

export const FormCard = ({ form }: FormCardProps) => {
  const { id: formId, projectId } = form;
  const { mutate: editForm } = useEditFormMutation(projectId, formId);

  const router = useRouter();

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
        editForm(editedForm);
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
          <CardTitle>{form.title}</CardTitle>
        ) : (
          <Input
            value={editedForm.title}
            onChange={(e) => setEditedForm({ ...editedForm, title: e.target.value })}
          />
        )}
      </CardHeader>
      <CardContent>
        {mode === FormCardMode.NORMAL ? (
          <p>{form.description}</p>
        ) : (
          <Input
            value={editedForm.description}
            onChange={(e) => setEditedForm({ ...editedForm, description: e.target.value })}
          />
        )}

        {/* TODO: Plan 챌린저에 대한 권한 처리 필요 */}
        <ButtonGroup className="mt-4 flex w-full flex-row justify-end">
          <Button onClick={handleViewApplicants} variant="outline">
            지원자 보기
          </Button>
          <Button onClick={handleToggleMode} variant="outline">
            {mode === FormCardMode.NORMAL ? '제목/설명 수정' : '저장하기'}
          </Button>
          <Button onClick={handleManageForm} variant="outline">
            질문 수정
          </Button>
          <Button onClick={handleApplyToForm} variant="default">
            지원하기
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
