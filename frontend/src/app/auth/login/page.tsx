'use client';

import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

import { Button } from '@styles/components/ui/button';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from '@styles/components/ui/field';
import { Input } from '@styles/components/ui/input';
import { Label } from '@styles/components/ui/label';

import LoginComboBox from '@common/components/Combobox';

const loginSchema = z.object({
  school: z.string().min(1, '학교를 입력하세요'),
  studentId: z.string().min(1, '학번을 입력하세요'),
  password: z.string().min(1, '비밀번호를 입력하세요'),
});

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const form = useForm({
    defaultValues: {
      school: '',
      studentId: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      // 로그인 처리
      console.log('로그인 정보:', value);
    },
    validators: {
      onSubmit: loginSchema,
      onChange: loginSchema,
      onBlur: loginSchema,
    },
  });

  function FormField({
    name,
    label,
    type = 'text',
    placeholder,
  }: {
    name: keyof LoginInput;
    label: string;
    type?: string;
    placeholder: string;
  }) {
    return (
      <form.Field
        name={name}
        children={(field) => {
          const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field>
              <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
              <Input
                type={type}
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder={placeholder}
              />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          );
        }}
      />
    );
  }

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await form.handleSubmit();
        }}
        className="min-w-md"
      >
        <FieldGroup>
          <FieldTitle className={'text-2xl'}>UPMS</FieldTitle>
          <FormField name="school" label="학교" placeholder="학교 이름을 입력해주세요." />
          <form.Field
            name={'school'}
            children={(field) => {
              return (
                <Field className={'w-full'}>
                  <LoginComboBox />
                </Field>
              );
            }}
          />
          <FormField name="studentId" label="학번" placeholder="학번을 입력해주세요." />
          <FormField
            name="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <Button type="submit">로그인하기</Button>
        </FieldGroup>
      </form>
    </div>
  );
}
