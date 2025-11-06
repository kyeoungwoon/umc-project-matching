'use client';

import { Badge } from '@styles/components/ui/badge';
import { Separator } from '@styles/components/ui/separator';

import { useGetMyApplicationsQuery } from '@api/query/application';

import DefaultSkeleton from '@common/components/DefaultSkeleton';

import ApplicationInfoCard from '@features/applications/ApplicationInfoCard';
import NoAppliedProject from '@features/applications/NoAppliedProject';

const MyApplicationsPage = () => {
  const { data: applications, isLoading } = useGetMyApplicationsQuery();

  if (isLoading) {
    return <DefaultSkeleton />;
  }

  return (
    <div className="container mx-auto max-w-6xl space-y-8 p-6">
      {/* 평범~한 헤더 */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          {/*<div className="space-y-2">*/}
          {/*  <div className="flex items-center gap-3">*/}
          {/*    <FileTextIcon className="text-primary h-8 w-8" />*/}
          {/*    <h1 className="text-3xl font-bold tracking-tight">내 지원서</h1>*/}
          {/*  </div>*/}
          {/*  <p className="text-muted-foreground text-lg">내가 지원한 프로젝트 목록입니다</p>*/}
          {/*</div>*/}
          <Badge variant="secondary" className="text-sm">
            총 {applications?.length || 0}개의 지원서
          </Badge>
        </div>
        <Separator />
      </div>

      {/* 내가 지원한 지원서 목록 */}
      <div className="space-y-4">
        {applications && applications.length > 0 ? (
          <div className="flex flex-col gap-2">
            {applications.map((application, idx) => (
              <ApplicationInfoCard application={application} key={idx} />
            ))}
          </div>
        ) : (
          <NoAppliedProject />
        )}
      </div>
    </div>
  );
};

export default MyApplicationsPage;
