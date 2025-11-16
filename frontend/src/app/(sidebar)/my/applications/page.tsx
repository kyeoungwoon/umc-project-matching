'use client';

import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

import { Button } from '@styles/components/ui/button';
import { Separator } from '@styles/components/ui/separator';

import { useDeleteApplicationMutation, useGetMyApplicationsQuery } from '@api/query/application';

import { queryKeyStore } from '@common/constants/query-key.constants';

import { useDoubleCheck } from '@common/hooks/useDoubleCheck';

import DefaultSkeleton from '@common/components/DefaultSkeleton';
import DoubleCheckDialog from '@common/components/DoubleCheckDialog';

import ApplicationStatusBadge from '@features/matching/components/ApplicationStatusBadge';
import MatchingRoundBadge from '@features/matching/components/matching-info/MatchingRoundBadge';

import ApplicationAnswerList from '@features/applications/ApplicationAnswerList';
import ApplicationInfo from '@features/applications/ApplicationInfo';
import NoAppliedProject from '@features/applications/NoAppliedProject';

const MyApplicationsPage = () => {
  const { data: applications, isLoading } = useGetMyApplicationsQuery();
  const { mutate: deleteApplication } = useDeleteApplicationMutation();
  const queryClient = useQueryClient();
  const { onOpen, dialogProps } = useDoubleCheck({
    title: '지원서 삭제하기',
    description: '정말로 이 지원서를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
    confirmText: '삭제하기',
    cancelText: '취소',
    variant: 'destructive',
  });

  const handleDeleteApplication = (projectId: string, applicationId: string) => {
    onOpen(() => {
      deleteApplication(
        { projectId, applicationId },
        {
          onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: queryKeyStore.me.info.queryKey });
            toast.success('지원서가 성공적으로 삭제되었습니다.');
          },
          onError: (err) =>
            toast.error('지원서 삭제에 실패했습니다. 다시 시도해주세요.', {
              description: err.message,
            }),
        },
      );
    });
  };

  if (isLoading) {
    return <DefaultSkeleton />;
  }

  return (
    <>
      <DoubleCheckDialog {...dialogProps} />
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
                  <Button
                    variant={'destructive'}
                    className={'mt-5 h-12 text-lg font-semibold'}
                    onClick={() =>
                      handleDeleteApplication(application.form.projectId, application.id)
                    }
                  >
                    지원서 삭제하기
                  </Button>
                </div>
              ))}
            </>
          ) : (
            <NoAppliedProject />
          )}
        </div>
      </div>
    </>
  );
};

export default MyApplicationsPage;
