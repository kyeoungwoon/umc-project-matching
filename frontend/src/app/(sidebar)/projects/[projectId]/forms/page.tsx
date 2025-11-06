'use client';

import { useParams, useRouter } from 'next/navigation';

import { FileTextIcon, InboxIcon } from 'lucide-react';

import { Badge } from '@styles/components/ui/badge';
import { Button } from '@styles/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';
import { Separator } from '@styles/components/ui/separator';

import { useGetProjectDetailsQuery } from '@api/query/project';

import { ROUTES } from '@common/constants/routes.constants';

import { projectResponseToCardProps } from '@common/utils/project-response-card';

import DefaultSkeleton from '@common/components/DefaultSkeleton';
import ProjectCard from '@common/components/ProjectCard';

import { FormCard } from '@features/form/components/FormCard';

const ProjectFormsPage = () => {
  const params = useParams();
  const projectId = params.projectId as string;
  const { data: project, isLoading } = useGetProjectDetailsQuery(projectId);

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
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FileTextIcon className="text-primary h-8 w-8" />
              <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
            </div>
            <p className="text-muted-foreground text-lg">지원 가능한 지원서 목록</p>
          </div>

          {/*<Badge variant="secondary" className="text-sm">*/}
          {/*  {project.projectForms.length}개의 지원서*/}
          {/*</Badge>*/}
        </div>
        <Separator />
      </div>

      <ProjectCard {...projectResponseToCardProps(project)} />

      {/* Forms Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">프로젝트 지원 폼</h2>
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
              <p className="text-muted-foreground text-sm">폼을 생성해서 지원자를 모집해 보세요.</p>
              <Button className={'mt-4'} onClick={handleCreateFormClick}>
                지원용 폼 생성하러 가기
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProjectFormsPage;
