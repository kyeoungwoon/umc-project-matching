'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

import { Badge } from '@styles/components/ui/badge';
import { Button } from '@styles/components/ui/button';
import { ButtonGroup } from '@styles/components/ui/button-group';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@styles/components/ui/card';
import { Input } from '@styles/components/ui/input';

import { UpdateProjectRequestDto } from '@api/axios/project/types';
import { useUpdateProjectMutation } from '@api/query/project';

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

export enum ProjectCardMode {
  EDIT = 'edit',
  VIEW = 'view',
}

const ProjectCard = (props: ProjectCardProps) => {
  const { id, name, description, link, partAndTo } = props;
  console.log('ProjectCard props:', id);

  const [mode, setMode] = useState<ProjectCardMode>(ProjectCardMode.VIEW);
  const [editedProject, setEditedProject] = useState<UpdateProjectRequestDto>({
    title: name,
    description: description,
    link: link,
  });

  const { mutate } = useUpdateProjectMutation(id);
  const queryClient = useQueryClient();

  const router = useRouter();

  const handleApplyClick = () => {
    // Navigate to the application page
    router.push(ROUTES.PROJECTS.FORM_LIST(props.id));
  };

  const handleViewMoreClick = () => {
    // props.link 로 새로운 창을 띄워준다
    if (link) {
      window.open(link, '_blank');
    }
  };

  const handleEditModeClick = () => {
    setMode(ProjectCardMode.EDIT);
  };

  const handleSaveClick = () => {
    setMode(ProjectCardMode.VIEW);
    mutate(editedProject, {
      onSuccess: async () => {
        toast.success('프로젝트가 성공적으로 수정되었습니다.', { richColors: true });
        // 모든 쿼리 캐시 무효화
        await queryClient.invalidateQueries();
        // router.refresh();
      },
      onError: (error) => {
        toast.error(`프로젝트 수정에 실패했습니다, ${error}`, { richColors: true });
        console.error(error);
      },
    });
  };

  return (
    <Card className="w-full rounded-xl p-4">
      <CardHeader>
        {mode === ProjectCardMode.VIEW ? (
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
        ) : (
          <Input
            value={editedProject.title}
            onChange={(e) => setEditedProject((prev) => ({ ...prev, title: e.target.value }))}
            className="text-xl font-bold"
          />
        )}
      </CardHeader>
      <CardContent className="">
        {mode === ProjectCardMode.VIEW ? (
          <p className="text-muted-foreground mb-2 text-lg">{description}</p>
        ) : (
          <>
            <Input
              value={editedProject.description}
              onChange={(e) =>
                setEditedProject((prev) => ({ ...prev, description: e.target.value }))
              }
              className="text-muted-foreground mb-2 text-lg"
            />
            <Input
              value={editedProject.link}
              onChange={(e) => setEditedProject((prev) => ({ ...prev, link: e.target.value }))}
              className="text-muted-foreground mb-2 text-lg"
            />
          </>
        )}

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
        {mode === ProjectCardMode.EDIT ? (
          <Button size={'sm'} variant={'outline'} onClick={handleSaveClick}>
            수정 완료
          </Button>
        ) : (
          <ButtonGroup>
            <Button size={'sm'} variant={'outline'} onClick={handleEditModeClick}>
              수정하기
            </Button>
            <Button
              onClick={handleViewMoreClick}
              size={'sm'}
              variant={'outline'}
              className={'text-semibold text-sm'}
            >
              기획안 보기
            </Button>
            <Button
              onClick={handleApplyClick}
              size={'sm'}
              variant={'outline'}
              className={'text-semibold text-sm'}
            >
              지원하기
            </Button>
          </ButtonGroup>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
