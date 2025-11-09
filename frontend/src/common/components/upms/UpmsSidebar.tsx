'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { clsx } from 'clsx';
import { ChevronsUpDownIcon, LogOutIcon } from 'lucide-react';

import { Button } from '@styles/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@styles/components/ui/dropdown-menu';
import { Label } from '@styles/components/ui/label';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@styles/components/ui/sidebar';
import { Skeleton } from '@styles/components/ui/skeleton';

import { useGetMyInfoQuery } from '@api/query/user';

import { ROUTES } from '@common/constants/routes.constants';
import { getMenusByPart } from '@common/constants/sidebar-menu.constants';

import { parsePart } from '@common/utils/parse-userinfo';

import UpmsLogo from '@common/components/upms/UpmsLogo';

import { useClearUser, useGetUser, useSetUserInfo } from '@features/auth/hooks/useAuthStore';

import HeaderSkeleton from '@features/home/components/HeaderSkeleton';

const UpmsSideBar = () => {
  const { data, isLoading } = useGetMyInfoQuery();
  const setUserInfo = useSetUserInfo();
  const clearUser = useClearUser();
  const router = useRouter();

  // useEffect로 이동하여 렌더링 중 setState 방지
  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }
  }, [data, setUserInfo]);

  const pathname = usePathname();
  // console.log('path: ', pathname);

  const handleLogout = () => {
    clearUser();
    return router.push(ROUTES.AUTH.LOGIN);
  };

  if (isLoading || !data) {
    return <Skeleton />;
  }

  return (
    <Sidebar>
      <SidebarHeader className={'m-3 flex items-start'}>
        <UpmsLogo />
      </SidebarHeader>
      <SidebarContent>
        {getMenusByPart(data.part, data.role).map((menu, idx) => {
          return (
            <SidebarGroup key={idx}>
              {menu.label && <SidebarGroupLabel>{menu.label}</SidebarGroupLabel>}
              <SidebarGroupContent>
                <SidebarMenu>
                  {menu.items.map((item) => {
                    // NOTE: 현재 경로와 메뉴의 url이 일치하는지 확인합니다.
                    const isSelected = pathname == item.url;
                    // console.log('isSelected: ', isSelected);
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link href={item.url} className={clsx(isSelected && 'bg-primary/5')}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
      <SidebarFooter className={'mb-5 px-4'}>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className={'gap-8pxr flex w-full flex-row items-center'}>
              <div className={'flex w-full flex-col justify-between'}>
                <Label className="text-md">
                  {data.challengerSchool.name} {parsePart(data.part)}
                </Label>
                <Label className="text-md text-[#6A7282]">
                  {data.nickname}/{data.name}
                </Label>
              </div>
              <ChevronsUpDownIcon />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            className={'my-2 w-[var(--radix-dropdown-menu-trigger-width)]'}
          >
            <DropdownMenuItem asChild>
              <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
                <LogOutIcon /> 로그아웃
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default UpmsSideBar;
