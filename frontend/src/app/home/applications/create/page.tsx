'use client';

import { Button } from '@styles/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';

import Header from '@common/components/Header';
import QuestionCard from '@common/components/QuestionCard';

const CreateApplicationPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Card className={'min-w-700pxr max-w-1000pxr mt-5 flex flex-col justify-center p-5 px-0'}>
        <CardHeader className="gap-5">
          <CardTitle className="font-medium">{'프로젝트 이름'}</CardTitle>
          <Button
            variant="secondary"
            size="lg"
            className="h-14 text-[#999999]"
            onClick={() => {
              /**TODO */
            }}
          >
            {'+ 질문 문항 추가하기'}
          </Button>
        </CardHeader>

        <CardContent className="text-16pxr">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </CardContent>

        <CardFooter className="flex justify-end pt-0">
          <Button variant="default" size="lg">
            {'지원서 저장'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default CreateApplicationPage;
