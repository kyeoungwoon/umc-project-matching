'use client';

import Link from 'next/link';

import {
  Calendar,
  FileUser,
  FileUserIcon,
  FolderOpen,
  HomeIcon,
  ScrollTextIcon,
  Settings,
  ShieldUserIcon,
  SquarePenIcon,
  SquarePlusIcon,
  UserPenIcon,
  UserRoundIcon,
} from 'lucide-react';

import { Separator } from '@styles/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@styles/components/ui/sidebar';

import { ROUTES } from '@common/constants/routes.constants';

import UpmsLogo from '@common/components/UpmsLogo';

// Menu items.
const generalMenu = [
  {
    title: '홈',
    url: ROUTES.HOME,
    icon: HomeIcon,
  },
  {
    title: '프로젝트 목록 및 지원',
    url: ROUTES.PROJECTS.LIST,
    icon: FolderOpen,
  },
  {
    title: '내 정보',
    url: ROUTES.MY.INFO,
    icon: UserRoundIcon,
  },
];

const pmMenu = [
  {
    title: '내 프로젝트 관리',
    url: ROUTES.PROJECTS.MY_PROJECTS,
    icon: Settings,
  },
  {
    title: '프로젝트 생성',
    url: ROUTES.PROJECTS.CREATE,
    icon: SquarePlusIcon,
  },
  {
    title: '지원서 폼 제작',
    url: '#',
    icon: SquarePenIcon,
  },
  {
    title: '지원자 목록 보기',
    url: '#',
    icon: ScrollTextIcon,
  },
];

const exceptPmMenu = [
  {
    title: '내 지원서 보기',
    url: '#',
    icon: FileUserIcon,
  },
];

const adminMenu = [
  {
    title: '운영진 대시보드',
    url: ROUTES.ADMIN.DASHBOARD,
    icon: ShieldUserIcon,
  },
  {
    title: '매칭 차수 설정',
    url: ROUTES.ADMIN.MATCHING_ROUNDS,
    icon: SquarePenIcon,
  },
];

const UpmsSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <UpmsLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/*<SidebarGroupLabel>공용</SidebarGroupLabel>*/}
          <SidebarGroupContent>
            <SidebarMenu>
              {generalMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Plan</SidebarGroupLabel>
          <SidebarMenu>
            {pmMenu.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Design | Frontend | Backend</SidebarGroupLabel>
          <SidebarMenu>
            {exceptPmMenu.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>운영진</SidebarGroupLabel>
          <SidebarMenu>
            {adminMenu.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default UpmsSideBar;
