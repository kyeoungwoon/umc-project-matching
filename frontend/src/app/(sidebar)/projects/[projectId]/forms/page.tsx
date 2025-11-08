'use client';

import { useParams, useRouter } from 'next/navigation';

import { FileTextIcon, InboxIcon } from 'lucide-react';

import { Badge } from '@styles/components/ui/badge';
import { Button } from '@styles/components/ui/button';
import { Card, CardContent, CardTitle } from '@styles/components/ui/card';
import { Separator } from '@styles/components/ui/separator';

import { useGetProjectDetailsQuery } from '@api/query/project';

import { ROUTES } from '@common/constants/routes.constants';

import { projectResponseToCardProps } from '@common/utils/project-response-card';

import { useIsPlanChallenger } from '@common/hooks/useGetChallengerPerms';

import DefaultSkeleton from '@common/components/DefaultSkeleton';
import ProjectCard from '@common/components/ProjectCard';

import { FormCard } from '@features/form/components/FormCard';

const ProjectFormsPage = () => {
  const params = useParams();
  const projectId = params.projectId as string;
  const { data: project, isLoading } = useGetProjectDetailsQuery(projectId);
  const isPlanChallenger = useIsPlanChallenger();

  const router = useRouter();
  const handleCreateFormClick = () => {
    router.push(ROUTES.PROJECTS.CREATE_FORM(projectId));
  };

  if (isLoading || !project) {
    return <DefaultSkeleton />;
  }

  return (
    <div className="container mx-auto max-w-6xl space-y-8 p-6">
      {/* Header Section */}
      <div className={'flex flex-row items-center justify-between'}>
        <div className={'flex flex-col gap-1'}>
          <div className={'flex flex-row items-center justify-start gap-2'}>
            <span className={'w-30'}>프로젝트명</span>
            <Separator orientation={'vertical'} />
            <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
          </div>
          <div className={'flex flex-row items-center justify-start gap-2'}>
            <span className={'w-30'}>한줄 설명</span>
            <Separator orientation={'vertical'} />
            <p className="text-muted-foreground mb-2 text-lg">{project.description}</p>
          </div>
        </div>
        <>
          {isPlanChallenger && (
            <Button className={'mt-4'} onClick={handleCreateFormClick}>
              지원용 폼 생성하기
            </Button>
          )}
        </>
      </div>

      {/*TODO: 안내멘트, 삭제 필요*/}
      {/*TODO: 중복된 내용 컴포넌트화하기*/}
      <div className="text-muted-foreground mb-2 text-sm">
        <span className={'text-black'}>파트별 TO | </span>
        형식 : (현재 지원자 수) TO
      </div>

      <div className="flex flex-wrap items-center gap-x-2">
        {projectResponseToCardProps(project).partAndTo.map((partTo, index) => {
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

      <Separator />

      {/* Forms Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">지원용 폼 목록</h2>
        </div>

        {project.projectForms.length > 0 ? (
          <div className="grid gap-4">
            {project.projectForms.map((form) => (
              <FormCard key={form.id} form={form} />
            ))}
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center gap-y-1 py-16">
              <InboxIcon className="text-muted-foreground h-12 w-12" />
              <p className="text-muted-foreground text-lg font-medium">
                이 프로젝트에 제출 가능한 폼이 존재하지 않습니다.
              </p>
              <p className="text-muted-foreground text-sm">
                {isPlanChallenger
                  ? '폼을 생성해서 지원자를 모집해 보세요.'
                  : 'Plan 챌린저에게 폼 생성을 요구해주세요.'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProjectFormsPage;
