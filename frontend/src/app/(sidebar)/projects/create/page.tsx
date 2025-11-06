'use client';

import { useState } from 'react';

import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

import { Button } from '@styles/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@styles/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@styles/components/ui/dialog';
import { Field, FieldError, FieldGroup, FieldLabel } from '@styles/components/ui/field';
import { Input } from '@styles/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@styles/components/ui/select';

import { Part } from '@api/axios/auth/types';
import { useCreateProjectMutation } from '@api/query/project';

import FormField from '@common/components/FormField';

import { useGetUser } from '@features/auth/hooks/useAuthStore';

const partOptions: Part[] = ['PLAN', 'DESIGN', 'WEB', 'ANDROID', 'IOS', 'SPRINGBOOT', 'NODEJS'];

const projectSchema = z.object({
  title: z.string().min(1, '프로젝트 이름을 입력해주세요.'),
  description: z.string().min(1, '프로젝트 설명을 입력해주세요.'),
  link: z.url('올바른 URL을 입력해주세요.'),
  partTo: z
    .array(
      z.object({
        part: z.enum(partOptions),
        to: z.number().min(1, '인원은 1명 이상이어야 합니다.'),
      }),
    )
    .min(1, '모집 파트를 최소 1개 이상 추가해주세요.'),
});

const CreateProjectPage = () => {
  const user = useGetUser();

  const { mutate: createProject, isPending } = useCreateProjectMutation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogDescription, setDialogDescription] = useState('');
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      link: '',
      partTo: [{ part: 'PLAN' as Part, to: 1 }],
    },
    onSubmit: async ({ value }) => {
      if (!user) throw new Error('로그인되지 않은 사용자 입니다.');
      createProject(
        { ...value, planId: user.id },
        {
          onSuccess: () => {
            setConfirmDialogOpen(false);
            setDialogTitle('성공');
            setDialogDescription('프로젝트가 생성되었습니다.');
            setDialogOpen(true);
            form.reset();
          },
          onError: () => {
            setConfirmDialogOpen(false);
            setDialogTitle('오류');
            setDialogDescription('프로젝트 생성에 실패했습니다.');
            setDialogOpen(true);
          },
        },
      );
    },
    validators: {
      onSubmit: projectSchema,
      onChange: projectSchema,
      onBlur: projectSchema,
    },
  });

  const handleCreateClick = () => {
    form.validate('submit');
    if (form.state.isValid) {
      setConfirmDialogOpen(true);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // form.handleSubmit(); // This is now called from the confirmation dialog
        }}
      >
        <Card className={'min-w-700pxr max-w-1000pxr mt-5 flex flex-col justify-center p-5'}>
          <CardHeader>
            <CardTitle className="font-medium">프로젝트 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField tanstackForm={form} name="title" label="프로젝트 이름" />
            <form.Field
              name="description"
              children={(field) => (
                <Field>
                  <FieldLabel>프로젝트 설명</FieldLabel>
                  <Input
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            />
            <FormField tanstackForm={form} name={'link'} label="기획안 링크 (Notion 등)" />
            <FieldGroup>
              <FieldLabel>모집 파트 및 인원</FieldLabel>
              <form.Field
                name="partTo"
                mode="array"
                children={(field) => (
                  <div className="space-y-2">
                    {field.state.value.map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <form.Field
                          name={`partTo[${i}].part`}
                          children={(subField) => (
                            <Select
                              value={subField.state.value}
                              onValueChange={(value) => subField.handleChange(value as Part)}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="선택하세요" />
                              </SelectTrigger>
                              <SelectContent>
                                {partOptions.map((p) => (
                                  <SelectItem key={p} value={p}>
                                    {p}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                        <form.Field
                          name={`partTo[${i}].to`}
                          children={(subField) => (
                            <Input
                              type="number"
                              min={1}
                              value={subField.state.value}
                              onBlur={subField.handleBlur}
                              onChange={(e) => subField.handleChange(parseInt(e.target.value, 10))}
                            />
                          )}
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => field.removeValue(i)}
                        >
                          삭제
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => field.pushValue({ part: 'WEB', to: 1 })}
                    >
                      파트 추가
                    </Button>
                    <FieldError errors={field.state.meta.errors} />
                  </div>
                )}
              />
            </FieldGroup>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="button" onClick={handleCreateClick} disabled={isPending}>
              {isPending ? '생성 중...' : '프로젝트 생성'}
            </Button>
          </CardFooter>
        </Card>
      </form>
      <Dialog open={isConfirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>프로젝트 생성</DialogTitle>
            <DialogDescription>프로젝트를 생성하시겠습니까?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">취소</Button>
            </DialogClose>
            <Button onClick={() => form.handleSubmit()} disabled={isPending}>
              생성
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>확인</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProjectPage;
