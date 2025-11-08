'use client';

import { useRouter } from 'next/navigation';

import { useForm } from '@tanstack/react-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@styles/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel, FieldTitle } from '@styles/components/ui/field';

import { useLoginMutation } from '@api/query/auth';

import { ROUTES } from '@common/constants/routes.constants';

import LoginComboBox from '@common/components/Combobox';
import InputFormField from '@common/components/InputFormField';

import { useSetUser } from '@features/auth/hooks/useAuthStore';

const loginSchema = z.object({
  school: z.object({
    name: z.string().min(1, '학교를 선택하세요'),
    handle: z.string().min(1, '학교를 선택하세요'),
  }),
  studentId: z.string().min(1, '학번을 입력하세요'),
  password: z.string().min(1, '비밀번호를 입력하세요'),
});

export default function LoginForm() {
  const { mutate, isPending, isError, error } = useLoginMutation();
  const router = useRouter();
  const setUser = useSetUser();

  const form = useForm({
    defaultValues: {
      school: {
        name: '',
        handle: '',
      },
      studentId: '',
      password: '',
    },
    onSubmit: ({ value }) => {
      console.log('login clicked!');
      mutate(
        {
          school: value.school.handle,
          studentId: value.studentId,
          password: value.password,
        },
        {
          onSuccess: (data) => {
            console.log('로그인 성공:', data);
            if (!data) throw new Error('사용자 정보가 없습니다.');

            setUser({
              id: data.userId,
              accessToken: data.accessToken,
            });

            router.push(ROUTES.HOME);
            // 성공 시 처리 (예: 페이지 이동)
          },
          onError: (error) => {
            // console.error('로그인 실패:', error);
            // 에러 처리
            toast.error('로그인에 실패했습니다. 다시 시도해주세요.', {
              description: error.message,
            });
          },
        },
      );
    },
    validators: {
      onSubmit: loginSchema,
      onChange: loginSchema,
      // onChange, onBlur 제거 - 자동완성 시 문제 방지
    },
  });

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          e.stopPropagation();
          await form.handleSubmit();
        }}
        className="min-w-md"
      >
        <FieldGroup>
          {/* ...existing code... */}
          <FieldTitle className={'text-2xl'}>UPMS</FieldTitle>
          <form.Field
            name={'school'}
            children={(field) => {
              console.log('school field state:', field.state.meta.isTouched);
              return (
                <Field className={'w-full'}>
                  <FieldLabel htmlFor={field.name}>학교</FieldLabel>
                  <LoginComboBox value={field.state.value} onValueChange={field.handleChange} />
                  {field.state.meta.isTouched && !field.state.value.handle && (
                    <FieldError errors={[{ message: '학교를 선택해 주세요.' }]} />
                  )}
                </Field>
              );
            }}
          />
          <InputFormField
            tanstackForm={form}
            name="studentId"
            label="학번"
            placeholder="학번을 입력해주세요."
          />
          <InputFormField
            tanstackForm={form}
            name="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          {isError && (
            <div className="text-sm text-red-500">
              로그인에 실패했습니다. {error?.message || '다시 시도해주세요.'}
            </div>
          )}
          <Button type="submit" disabled={isPending}>
            {isPending ? '로그인 중...' : '로그인하기'}
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
}
