'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

import { Button } from '@styles/components/ui/button';
import { Input } from '@styles/components/ui/input';
import { Label } from '@styles/components/ui/label';

import { FilteredUserInfoDto, UpdateProjectRequestDto } from '@api/axios/project/types';
import { useUpdateProjectMutation } from '@api/query/project';

import { ROUTES } from '@common/constants/routes.constants';

import { useIsAdminChallenger, useIsPlanChallenger } from '@common/hooks/useGetChallengerPerms';

export interface ProjectCardProps {
  id: string;
  planId: string;
  projectPlan?: FilteredUserInfoDto;
  name: string;
  description: string;
  bannerImage?: string;
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

const ProjectInfoCard = (props: ProjectCardProps) => {
  const { id, name, description, link, partAndTo, planId, bannerImage, projectPlan } = props;
  const isPlan = useIsPlanChallenger(planId);
  const isAdmin = useIsAdminChallenger();

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

  if (mode === ProjectCardMode.EDIT) {
    return (
      <>
        <Input
          value={editedProject.title}
          onChange={(e) => setEditedProject((prev) => ({ ...prev, title: e.target.value }))}
          className="text-xl font-bold"
        />
        <Input
          value={editedProject.description}
          onChange={(e) => setEditedProject((prev) => ({ ...prev, description: e.target.value }))}
          className="text-muted-foreground mb-2 text-lg"
        />
        <Input
          value={editedProject.link}
          onChange={(e) => setEditedProject((prev) => ({ ...prev, link: e.target.value }))}
          className="text-muted-foreground mb-2 text-lg"
        />
        <Button size={'sm'} variant={'outline'} onClick={handleSaveClick}>
          수정 완료
        </Button>
      </>
    );
  }

  return (
    <div className="rounded-22pxr flex w-full max-w-100 min-w-80 flex-col justify-between border border-gray-200 bg-white">
      {/*상단 이미지 영역*/}
      <Image
        src={bannerImage || 'https://placehold.co/600x400'}
        alt={'프로젝트 로고'}
        width={800}
        height={200}
        className={'rounded-t-22pxr h-48 w-full bg-gray-200 object-cover'}
      />

      <div className={'flex h-full flex-col items-start gap-y-3 p-6'}>
        <div className={'flex w-full flex-row items-end justify-between'}>
          <p className="text-3xl font-semibold">{name}</p>
          <div className={'text-15pxr flex flex-row gap-x-2 text-gray-700'}>
            {projectPlan?.challengerSchool.name} {projectPlan?.nickname}/{projectPlan?.name}
          </div>
        </div>
        <p className="text-muted-foreground text-md">{description}</p>

        {/*TODO: 안내멘트, 삭제 필요*/}
        {/*<div className="text-muted-foreground mb-2 text-sm">*/}
        {/*  <span className={'text-black'}>파트별 TO | </span>*/}
        {/*  형식 : (현재 지원자 수) TO*/}
        {/*</div>*/}

        <div className={'flex-1'} />

        <div className="mt-2 mb-5 flex w-full flex-col items-center gap-y-1">
          {partAndTo.map((partTo, index) => {
            const { part, currentTo, maxTo } = partTo;
            return (
              <div key={index} className="flex w-full flex-row items-center justify-between">
                <div className={'flex flex-row items-center text-sm text-gray-800'}>
                  <span className="min-w-25">{part}</span>
                  <span className={'tracking-wide'}>
                    {currentTo}/{maxTo}
                  </span>
                </div>
                <Label
                  className={`font-semibold tracking-wide ${currentTo >= maxTo ? 'text-red-500' : 'text-green-600'}`}
                >
                  {currentTo >= maxTo ? '모집 완료' : '모집 중'}
                </Label>
              </div>
            );
          })}
        </div>

        {(isPlan || isAdmin) && (
          <Button
            variant={'outline'}
            onClick={handleEditModeClick}
            className={'text-md h-10 w-full px-4'}
          >
            프로젝트 정보 수정
          </Button>
        )}
        <div className="flex h-12 w-full flex-row gap-x-2">
          <Button
            onClick={handleViewMoreClick}
            variant={'default'}
            className={'text-md h-full flex-1'}
          >
            기획안 자세히 보기
          </Button>
          <Button
            onClick={handleApplyClick}
            variant={'outline'}
            className={'text-md h-full flex-1'}
          >
            {isPlan ? '지원자 보기' : '지원하기'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoCard;
