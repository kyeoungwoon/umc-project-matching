'use client';

import { useState } from 'react';

import { useParams } from 'next/navigation';

import { CheckCircle2Icon, ClockIcon, FileTextIcon, SearchIcon, XCircleIcon } from 'lucide-react';

import { Badge } from '@styles/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';
import { Input } from '@styles/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@styles/components/ui/select';
import { Separator } from '@styles/components/ui/separator';

import { ApplicationStatus, ApplicationStatusEnum } from '@api/axios/application/types';
import { useGetFormQuery } from '@api/query/form';

import DefaultSkeleton from '@common/components/DefaultSkeleton';

import ApplicantApplicationCard from '@features/form/components/ApplicantApplicationCard';
import ApplicationStatusCard from '@features/form/components/StatusCard';

const ApplicantsPage = () => {
  const params = useParams();
  const projectId = params.projectId as string;
  const formId = params.formId as string;

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'ALL'>('ALL');

  const { data: form, isLoading } = useGetFormQuery(projectId, formId);
  // console.log(form);

  if (isLoading || !form) {
    return <DefaultSkeleton />;
  }

  // 필터링된 지원서 목록
  const filteredApplications = form?.applications?.filter((app) => {
    const matchesSearch =
      searchQuery === '' ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicantId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicant.challengerSchool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicant.part.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // 상태별 카운트
  const statusCounts = {
    SUBMITTED: form?.applications?.filter((a) => a.status === 'SUBMITTED').length ?? 0,
    CONFIRMED: form?.applications?.filter((a) => a.status === 'CONFIRMED').length ?? 0,
    REJECTED: form?.applications?.filter((a) => a.status === 'REJECTED').length ?? 0,
    DRAFT: form?.applications?.filter((a) => a.status === 'DRAFT').length ?? 0,
  };

  return (
    <div className="container mx-auto w-full max-w-7xl space-y-6 p-6">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FileTextIcon className="text-primary h-8 w-8" />
              <h1 className="text-3xl font-bold tracking-tight">{form.title}</h1>
            </div>
            <p className="text-muted-foreground text-lg">지원자 관리</p>
          </div>
          <Badge variant="secondary" className="text-sm">
            총 {form?.applications?.length}명
          </Badge>
        </div>
        <Separator />
      </div>

      {/* 지원 상태별 카드 */}
      <div className="grid gap-3 md:grid-cols-3">
        <ApplicationStatusCard
          status={ApplicationStatusEnum.SUBMITTED}
          statusCount={statusCounts.SUBMITTED}
        />
        <ApplicationStatusCard
          status={ApplicationStatusEnum.CONFIRMED}
          statusCount={statusCounts.CONFIRMED}
        />
        <ApplicationStatusCard
          status={ApplicationStatusEnum.REJECTED}
          statusCount={statusCounts.REJECTED}
        />
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>필터 및 검색</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="지원자 이름, 학교, 파트로 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select
              value={statusFilter}
              onValueChange={(value) => setStatusFilter(value as ApplicationStatus | 'ALL')}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="상태 필터" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">전체</SelectItem>
                <SelectItem value="SUBMITTED">제출됨</SelectItem>
                <SelectItem value="CONFIRMED">합격</SelectItem>
                <SelectItem value="REJECTED">불합격</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">지원서 목록 ({filteredApplications?.length}개)</h2>
        </div>

        {(filteredApplications?.length ?? 0) > 0 ? (
          <div className="flex w-full flex-col gap-y-4">
            {filteredApplications?.map(
              (application) =>
                application && (
                  <ApplicantApplicationCard
                    key={application.id}
                    application={application}
                    projectId={projectId}
                  />
                ),
            )}
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <SearchIcon className="text-muted-foreground mb-4 h-12 w-12" />
              <p className="text-muted-foreground text-lg font-medium">검색 결과가 없습니다</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ApplicantsPage;
