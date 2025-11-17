'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

import { Combobox, ComboboxOption } from '@styles/components/ui/combobox';
import { MultiSelectCombobox } from '@styles/components/ui/multi-select-combobox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@styles/components/ui/tabs';

import { AdminGetAllApplicationsResponseDto } from '@api/axios/admin/types';
import { ApplicationStatus } from '@api/axios/application/types';
import { Part } from '@api/axios/auth/types';
import {
  useAdminChangeApplicationStatus,
  useAdminDeleteApplicationMutation,
  useAdminGetAllApplications,
} from '@api/query/admin';
import { useGetSchoolsQuery } from '@api/query/auth';
import { useGetProjectListQuery } from '@api/query/project';

import { partOptions } from '@common/constants/part-options.constants';
import { queryKeyStore } from '@common/constants/query-key.constants';
import { ROUTES } from '@common/constants/routes.constants';

import DefaultSkeleton from '@common/components/DefaultSkeleton';

import { ApplicationDetailDialog } from '@features/admin/components/ApplicationDetailDialog';
import { DataTable } from '@features/admin/components/DataTable';
import { OverviewStatus } from '@features/admin/components/OverviewStatus';
import { AdminInfoTableColumn } from '@features/admin/components/dashboard/AdminInfoTableColumn';
import ApplicationStatsByApplicant from '@features/admin/components/dashboard/ApplicantTable';
import { ProjectStats } from '@features/admin/components/dashboard/ProjectStats';

const AdminDashboard = () => {
  const { data: applications, isLoading: isApplicationsLoading } = useAdminGetAllApplications();
  const { data: schools, isLoading: isSchoolLoading } = useGetSchoolsQuery();
  const { data: projects, isLoading: isProjectListLoading } = useGetProjectListQuery();
  const { mutate: changeApplicationStatus } = useAdminChangeApplicationStatus();
  const { mutate: deleteApplication } = useAdminDeleteApplicationMutation();
  const router = useRouter();
  const queryClient = useQueryClient();

  const [selectedApplication, setSelectedApplication] =
    useState<AdminGetAllApplicationsResponseDto | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string[]>([]);
  const [projectPartFilter, setProjectPartFilter] = useState<Part[]>([]);
  const [partFilter, setPartFilter] = useState<Part | undefined>(undefined);
  const [schoolFilter, setSchoolFilter] = useState<string | undefined>(undefined);

  const handleViewApplication = (application: AdminGetAllApplicationsResponseDto) => {
    setSelectedApplication(application);
    setIsDialogOpen(true);
  };

  const handleViewProject = (projectId: string) => {
    router.push(ROUTES.PROJECTS.FORM_LIST(projectId));
  };

  const handleApplicationStatusChange = (applicationId: string, status: ApplicationStatus) => {
    changeApplicationStatus(
      { applicationId, newStatus: status },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            // 지원서 목록 쿼리 무효화
            queryKey: queryKeyStore.admin.applications.queryKey,
          });
          toast.success(`지원서 상태를 ${status}로 변경하였습니다.`);
        },
        onError: (err) => {
          toast.error(`지원서 상태를 ${status}로 변경하는데 실패하였습니다.`, {
            description: err.message,
          });
        },
      },
    );
  };

  const handleApplicationDelete = (applicationId: string) => {
    deleteApplication(applicationId, {
      onSuccess: () => {
        toast.success(`지원서 ${applicationId}를 삭제하였습니다.`);
      },
      onError: (err) => {
        toast.error(`지원서 삭제에 실패하였습니다.`, {
          description: err.message,
        });
      },
    });
  };

  const schoolOptions: ComboboxOption[] = schools
    ? schools.map((school) => ({ value: school.handle, label: school.name }))
    : [];

  const projectOptions: ComboboxOption[] = projects
    ? projects.map((project) => {
        return { value: project.id, label: project.title };
      })
    : [];

  if (isApplicationsLoading || isSchoolLoading || isProjectListLoading) {
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
      {/* 페이지 최상단 헤더 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">운영진 대시보드</h1>
        <p className="text-muted-foreground">지원서 관리 및 통계를 확인할 수 있습니다.</p>
      </div>

      {/* 지원 통계 카드들 (수치 표시) */}
      {/*총 지원서, 지원자 수, 프로젝트 수, 상태별 (제출됨/합격/불합격) 지원서 수 등*/}
      <OverviewStatus applications={applications} />

      {/* 탭 : 조건 선택 */}
      <Tabs defaultValue="applications" className="">
        <TabsList>
          <TabsTrigger value="applications">전체 지원서</TabsTrigger>
          <TabsTrigger value="projects">프로젝트별 통계</TabsTrigger>
          <TabsTrigger value="applicants">지원자별 현황</TabsTrigger>
        </TabsList>

        {/*전체 지원서 확인*/}
        <TabsContent value="applications" className="space-y-4">
          <DataTable
            columns={AdminInfoTableColumn(
              handleViewApplication,
              handleViewProject,
              handleApplicationStatusChange,
              handleApplicationDelete,
            )}
            data={applications}
            filterConfigs={[
              { columnId: 'applicant.nickname', placeholder: '닉네임으로 필터링...' },
              { columnId: 'applicant.name', placeholder: '이름으로 필터링...' },
            ]}
          />
        </TabsContent>

        {/*프로젝트별 지원서 확인*/}
        <TabsContent value="projects" className="flex flex-col gap-y-4">
          <MultiSelectCombobox
            options={projectOptions}
            selectedValues={projectFilter}
            onChange={(selectedProjects) => setProjectFilter(selectedProjects)}
            placeholder="프로젝트 선택"
            searchPlaceholder="프로젝트를 검색하세요..."
            className="w-100 truncate"
          />

          <div className="flex flex-col gap-y-4">
            {projectFilter.map((id, idx) => (
              <div className={'flex flex-col gap-y-2'} key={id}>
                <ProjectStats key={idx} projectId={id} />
              </div>
            ))}
          </div>
        </TabsContent>

        {/*지원자별 지원서 확인*/}
        <TabsContent value="applicants" className="flex flex-col gap-y-4">
          <div className={'flex flex-row gap-x-2'}>
            <Combobox
              options={schoolOptions}
              value={schoolFilter}
              onChange={(schoolHandle) => setSchoolFilter(schoolHandle)}
              placeholder="학교 선택"
              searchPlaceholder="학교를 검색하세요..."
              emptyPlaceholder="해당하는 학교가 없습니다."
              className="" // 필요에 따라 너비 등 스타일 조정
            />

            <Combobox
              options={partOptions}
              value={partFilter}
              onChange={(part) => setPartFilter(part as Part | undefined)}
              placeholder="파트 선택"
              searchPlaceholder="파트를 검색하세요..."
              emptyPlaceholder="해당 파트가 없습니다."
              className="" // 필요에 따라 너비 등 스타일 조정
            />
          </div>

          <ApplicationStatsByApplicant school={schoolFilter} part={partFilter} />
        </TabsContent>
      </Tabs>

      {/* 지원서 상세보기 Dialog */}
      <ApplicationDetailDialog
        application={selectedApplication}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
};

export default AdminDashboard;
