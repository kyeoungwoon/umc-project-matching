'use client';

import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@styles/components/ui/tabs';

import { AdminGetAllApplicationsResponseDto } from '@api/axios/admin/types';
import { useAdminGetAllApplications } from '@api/query/admin';

import DefaultSkeleton from '@common/components/DefaultSkeleton';

import { AdminInfoTableColumn } from '@features/admin/components/AdminInfoTableColumn';
import { ApplicantSummary } from '@features/admin/components/ApplicantSummary';
import { ApplicationDetailDialog } from '@features/admin/components/ApplicationDetailDialog';
import { DataTable } from '@features/admin/components/DataTable';
import { OverviewStatus } from '@features/admin/components/OverviewStatus';
import { ProjectStats } from '@features/admin/components/ProjectStats';

const AdminDashboard = () => {
  const { data: applications, isLoading } = useAdminGetAllApplications();
  const [selectedApplication, setSelectedApplication] =
    useState<AdminGetAllApplicationsResponseDto | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewApplication = (application: AdminGetAllApplicationsResponseDto) => {
    setSelectedApplication(application);
    setIsDialogOpen(true);
  };

  const handleViewProject = (projectTitle: string) => {
    // TODO: Navigate to project details page
    console.log('View project:', projectTitle);
  };

  if (isLoading) {
    return <DefaultSkeleton />;
  }

  if (!applications || applications.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">지원서가 없습니다</h2>
          <p className="text-muted-foreground">아직 제출된 지원서가 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container space-y-6 p-6">
      {/* 최상단 헤더 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">운영진 대시보드</h1>
        <p className="text-muted-foreground">지원서 관리 및 통계를 확인할 수 있습니다.</p>
      </div>

      {/* 지원 통계 카드들 (수치 표시) */}
      <OverviewStatus applications={applications} />

      {/* 탭, 조건별 필터링 선택화면 */}
      <Tabs defaultValue="applications" className="space-y-4">
        <TabsList>
          <TabsTrigger value="applications">전체 지원서</TabsTrigger>
          <TabsTrigger value="projects">프로젝트별 통계</TabsTrigger>
          <TabsTrigger value="applicants">지원자별 현황</TabsTrigger>
        </TabsList>

        {/*전체 지원서 확인*/}
        <TabsContent value="applications" className="space-y-4">
          <DataTable
            columns={AdminInfoTableColumn(handleViewApplication, handleViewProject)}
            data={applications}
            filterConfigs={[
              { columnId: 'applicant.nickname', placeholder: '닉네임으로 필터링...' },
              { columnId: 'applicant.name', placeholder: '이름으로 필터링...' },
            ]}
          />
        </TabsContent>

        {/*프로젝트별 지원서 확인*/}
        <TabsContent value="projects" className="space-y-4">
          <ProjectStats applications={applications} />
        </TabsContent>

        {/*지원자별 지원서 확인*/}
        <TabsContent value="applicants" className="space-y-4">
          NOT IMPLEMENTED
          {/*<ApplicantSummary applications={applications} />*/}
        </TabsContent>
      </Tabs>

      {/* 지원서 상세보기 Dialog */}
      {/*<ApplicationDetailDialog*/}
      {/*  application={selectedApplication}*/}
      {/*  open={isDialogOpen}*/}
      {/*  onOpenChange={setIsDialogOpen}*/}
      {/*/>*/}
    </div>
  );
};

export default AdminDashboard;
