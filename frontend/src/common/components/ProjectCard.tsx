'use client';

import { Badge } from '@styles/components/ui/badge';
import { Button } from '@styles/components/ui/button';
import { ButtonGroup } from '@styles/components/ui/button-group';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@styles/components/ui/card';

export interface ProjectCardProps {
  name: string;
  description: string;
  partAndTo: ProjectPartAndTo[];
  link?: string;
}

export interface ProjectPartAndTo {
  part: string;
  currentTo: number;
  maxTo: number;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { name, description, partAndTo } = props;

  return (
    <Card className="w-full rounded-xl p-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="text-muted-foreground mb-2 text-lg">{description}</p>
        <div className="text-muted-foreground mb-1 text-sm">형식 : (현재 지원자 수) TO</div>

        <div className="flex flex-wrap items-center gap-x-2">
          {partAndTo.map((partTo, index) => {
            const { part, currentTo, maxTo } = partTo;
            return (
              <div key={index} className="flex items-center gap-2">
                <Badge variant="outline" className="text-gray-700">
                  {part}
                </Badge>
                <span className="text-muted-foreground tracking-wide">
                  ({currentTo}){maxTo}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <ButtonGroup>
          <Button size={'sm'} variant={'secondary'} className={'text-semibold text-sm'}>
            기획안 보기
          </Button>
          <Button size={'sm'} variant="default" className={'text-semibold text-sm text-white'}>
            지원하기
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
