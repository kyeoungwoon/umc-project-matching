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
    title: '지부 내 프로젝트 보기',
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
    url: '#',
    icon: Settings,
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
    title: '지원 현황 보기',
    url: '#',
    icon: ShieldUserIcon,
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
          <SidebarGroupLabel className={'flex h-5 flex-row items-center gap-1'}>
            Design
            <Separator orientation={'vertical'} />
            Frontend
            <Separator orientation={'vertical'} />
            Backend
          </SidebarGroupLabel>
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
