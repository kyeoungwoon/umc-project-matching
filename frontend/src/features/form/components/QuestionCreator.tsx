'use client';

import { UseFormReturnType } from '@tanstack/react-form';
import { Card, CardContent, CardHeader } from '@styles/components/ui/card';
import { Input } from '@styles/components/ui/input';
import { Label } from '@styles/components/ui/label';
import { Button } from '@styles/components/ui/button';
import { Checkbox } from '@styles/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@styles/components/ui/select';
import { QuestionType } from '@api/axios/form/types';

interface QuestionCreatorProps {
  form: UseFormReturnType<any, any, any>;
  index: number;
  remove: (index: number) => void;
}

const questionTypes: QuestionType[] = ['SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'SUBJECTIVE'];

export const QuestionCreator = ({ form, index, remove }: QuestionCreatorProps) => {
  const questionType = form.getFieldValue(`questions[${index}].type`);
  const isObjective = questionType === 'SINGLE_CHOICE' || questionType === 'MULTIPLE_CHOICE';

  return (
    <Card className="p-4 space-y-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="font-bold">질문 {index + 1}</h3>
        <Button type="button" variant="destructive" size="sm" onClick={() => remove(index)}>
          질문 삭제
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <form.Field
          name={`questions[${index}].title`}
          children={(field) => (
            <div>
              <Label>질문 제목</Label>
              <Input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
            </div>
          )}
        />
        <form.Field
          name={`questions[${index}].description`}
          children={(field) => (
            <div>
              <Label>질문 설명</Label>
              <Input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
            </div>
          )}
        />
        <div className="flex items-center space-x-4">
            <form.Field
              name={`questions[${index}].type`}
              children={(field) => (
                <Select
                  onValueChange={(newType) => {
                    field.handleChange(newType);
                    const isNowObjective = newType === 'SINGLE_CHOICE' || newType === 'MULTIPLE_CHOICE';
                    const currentOptions = form.getFieldValue(`questions[${index}].options`) || [];
                    if (isNowObjective && currentOptions.length === 0) {
                      form.pushFieldValue(`questions[${index}].options`, '');
                      form.pushFieldValue(`questions[${index}].options`, '');
                    }
                  }}
                  value={field.state.value}
                >
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="질문 유형" />
                    </SelectTrigger>
                    <SelectContent>
                        {questionTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                    </SelectContent>
                </Select>
              )}
            />
            <form.Field
                name={`questions[${index}].isRequired`}
                children={(field) => (
                    <div className="flex items-center space-x-2">
                        <Checkbox checked={field.state.value} onCheckedChange={field.handleChange} id={`isRequired-${index}`} />
                        <Label htmlFor={`isRequired-${index}`}>필수 응답</Label>
                    </div>
                )}
            />
        </div>

        {isObjective && (
          <div className="space-y-2">
            <Label>선택지</Label>
            <form.Field
              name={`questions[${index}].options`}
              mode="array"
              children={(field) => (
                <div className="space-y-2">
                  {field.state.value.map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <form.Field
                        name={`questions[${index}].options[${i}]`}
                        children={(optionSubField) => (
                            <Input value={optionSubField.state.value} onChange={e => optionSubField.handleChange(e.target.value)} />
                        )}
                      />
                      <Button type="button" variant="ghost" size="sm" onClick={() => field.removeValue(i)}>
                        X
                      </Button>
                    </div>
                  ))}
                  <Button type="button" variant="secondary" onClick={() => field.pushValue('')}>
                    선택지 추가
                  </Button>
                </div>
              )}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};