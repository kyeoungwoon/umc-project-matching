import { Button } from '@styles/components/ui/button';
import { ButtonGroup } from '@styles/components/ui/button-group';
import { Card, CardContent, CardHeader, CardTitle } from '@styles/components/ui/card';

import { FormResponseDto } from '@api/axios/form/types';

interface FormCardProps {
  form: FormResponseDto;
}

export const FormCard = ({ form }: FormCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{form.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{form.description}</p>
        <ButtonGroup className="mt-4 flex w-full flex-row justify-end">
          {/* TODO: Plan 챌린저에 대한 권한 처리 필요 */}
          <Button variant={'outline'}>지원서 관리</Button>
          {/*TODO: form link에 해당하는 지원 페이지로 이동 */}
          <Button>지원하기</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
