'use client';

import SidebarSkeleton from '@skeletons/components/SidebarSkeleton';

import { Badge } from '@styles/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@styles/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@styles/components/ui/table';

import { useAdminGetProjectApplicationStats } from '@api/query/admin';

interface ProjectStatsProps {
  projectId: string;
}



export function ProjectStats({ projectId }: ProjectStatsProps) {
  const { data: stats, isLoading } = useAdminGetProjectApplicationStats(projectId);

  if (isLoading || !stats) {
    return <SidebarSkeleton />;
  }

  const { project, applicationStats } = stats;

  if (!stats) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>프로젝트별 지원 현황</CardTitle>
          <CardDescription>데이터를 불러오는 중 오류가 발생했습니다.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>각 파트별 지원자 수와 합격/불합격 현황</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">파트</TableHead>
                <TableHead className="">매칭 차수</TableHead>
                <TableHead className="text-center">TO</TableHead>
                <TableHead className="text-center">총 지원자</TableHead>
                <TableHead className="text-center">합격</TableHead>
                <TableHead className="text-center">불합격</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicationStats.length > 0 ? (
                applicationStats.map((stat, idx) => (
                  <TableRow key={idx}>
                    {/*파트*/}
                    <TableCell className="font-medium">{stat.part}</TableCell>
                    {/*매칭 차수 이름*/}
                    <TableCell className="font-medium">{stat.matchingRound.name}</TableCell>
                    {/*파트별 최대 TO*/}
                    <TableCell className="text-center">{stat.maxTo}</TableCell>
                    {/*해당 차수 총 지원자*/}
                    <TableCell className="text-center">{stat.totalApplicants}</TableCell>
                    {/*해당 차수에서 합격한 지원자*/}
                    <TableCell className="text-center">
                      <Badge className={'bg-green-700 text-white'}>
                        {stat.confirmedApplicants}
                      </Badge>
                    </TableCell>
                    {/*해당 차수에서 불합격한 지원자*/}
                    <TableCell className="text-center">
                      <Badge className={'bg-red-700 text-white'}>{stat.rejectedApplicants}</Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    데이터가 없습니다.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
