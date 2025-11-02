'use client';

import { Badge } from '@styles/components/ui/badge';
import { Label } from '@styles/components/ui/label';
import { Separator } from '@styles/components/ui/separator';

import { useGetMyApplicationsQuery } from '@api/query/application';

import ApplicantChallengerInfo from '@common/components/ApplicantChallengerInfo';
import DefaultSkeleton from '@common/components/DefaultSkeleton';

import ApplicationStatusBadge from '@features/matching/components/ApplicationStatusBadge';
import MatchingRoundBadge from '@features/matching/components/matching-info/MatchingRoundBadge';

import ApplicationAnswerList from '@features/applications/ApplicationAnswerList';
import ApplicationInfo from '@features/applications/ApplicationInfo';
import NoAppliedProject from '@features/applications/NoAppliedProject';

const MyApplicationsPage = () => {
  const { data: applications, isLoading } = useGetMyApplicationsQuery();

  if (isLoading) {
    return <DefaultSkeleton />;
  }

  return (
    <div className={'flex w-full flex-col space-y-6 p-6'}>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-end gap-3 text-3xl">
              <span className={'font-bold tracking-tight'}>나의 지원서 목록</span>
              <span>|</span>
              <h1 className="text-2xl tracking-tight text-gray-600">
                {applications?.length || 0}개의 지원서를 확인하세요
              </h1>
              {/*<p className="text-muted-foreground text-lg">{form.description}</p>*/}
            </div>
          </div>
        </div>
      </div>
      <Separator />

      {/* 내가 지원한 지원서 목록 */}
      <div className="flex flex-col gap-y-4">
        {applications && applications.length > 0 ? (
          <>
            {applications.map((application, idx) => (
              <div
                key={idx}
                className="rounded-20pxr flex w-full flex-col gap-y-4 border border-gray-400 px-6 py-7"
              >
                <div className={'flex w-full flex-row items-center justify-between'}>
                  <ApplicationStatusBadge status={application.status} />
                  <MatchingRoundBadge roundName={application.matchingRound?.name} />
                </div>
                <div className={'flex flex-row items-end gap-2'}>
                  <span className={'text-3xl font-semibold'}>
                    {application.form.project?.title}
                  </span>
                  <span className={'text-xl text-gray-700'}>지원서</span>
                </div>
                <ApplicationInfo id={application.id} createdAt={application.createdAt} />
                <ApplicationAnswerList application={application} key={idx} />
              </div>
            ))}
          </>
        ) : (
          <NoAppliedProject />
        )}
      </div>
    </div>
  );
};

export default MyApplicationsPage;
