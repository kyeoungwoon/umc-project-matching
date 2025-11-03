'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';
import { Checkbox } from '@styles/components/ui/checkbox';
import { Label } from '@styles/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@styles/components/ui/radio-group';

import { FormQuestionDto } from '@api/axios/form/types';

interface ObjectiveQuestionProps {
  field: any;
  question: FormQuestionDto;
}

export const ObjectiveQuestion = ({ field, question }: ObjectiveQuestionProps) => {
  const { type, options } = question;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{question.title}</CardTitle>
        <CardDescription>{question.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {type === 'SINGLE_CHOICE' ? (
          <RadioGroup
            value={field.state.value}
            onValueChange={field.handleChange}
            onBlur={field.handleBlur}
          >
            {options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className="space-y-2">
            {options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={field.state.value?.includes(option)}
                  onCheckedChange={(checked) => {
                    const currentValues = field.state.value || [];
                    if (checked) {
                      field.handleChange([...currentValues, option]);
                    } else {
                      field.handleChange(currentValues.filter((v: string) => v !== option));
                    }
                  }}
                />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
