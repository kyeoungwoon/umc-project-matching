'use client';

import { useRouter } from 'next/navigation';

import { Badge } from '@styles/components/ui/badge';
import { Button } from '@styles/components/ui/button';
import { ButtonGroup } from '@styles/components/ui/button-group';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@styles/components/ui/card';

import { ROUTES } from '@common/constants/routes.constants';

export interface ProjectCardProps {
  id: string;
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

  const router = useRouter();

  const handleApplyClick = () => {
    // Navigate to the application page (replace '/apply' with the actual route)
    router.push(ROUTES.PROJECTS.FORM_LIST(props.id));
  };

  const handleViewMoreClick = () => {
    // props.link 로 새로운 창을 띄워준다
    if (props.link) {
      window.open(props.link, '_blank');
    }
  };

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
          <Button
            onClick={handleViewMoreClick}
            size={'sm'}
            variant={'secondary'}
            className={'text-semibold text-sm'}
          >
            기획안 보기
          </Button>
          <Button
            onClick={handleApplyClick}
            size={'sm'}
            variant="default"
            className={'text-semibold text-sm text-white'}
          >
            지원하기
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
