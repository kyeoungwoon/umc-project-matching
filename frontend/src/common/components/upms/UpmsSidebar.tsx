'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import SidebarSkeleton from '@skeletons/components/SidebarSkeleton';
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

import SchoolLogo from '@common/components/SchoolImage';
import UpmsLogo from '@common/components/upms/UpmsLogo';

import { useClearUser, useGetUser, useSetUserInfo } from '@features/auth/hooks/useAuthStore';

import PartIcon from '@features/auth/components/PartIcon';

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

  const handleLogout = () => {
    clearUser();
    return router.push(ROUTES.AUTH.LOGIN);
  };

  if (isLoading || !data) {
    return <SidebarSkeleton />;
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
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          {item.isExternal ? ( // 외부 링크인 경우 a 태그로 처리
                            <a
                              href={item.url}
                              className={clsx(isSelected && 'bg-primary/5')}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <item.icon />
                              <span>{item.title}</span>
                            </a>
                          ) : (
                            <Link href={item.url} className={clsx(isSelected && 'bg-primary/5')}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          )}
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
            <div className={'gap-8pxr flex w-full flex-row items-center px-3 py-2'}>
              <SchoolLogo schoolName={data.challengerSchool.handle} width={50} height={50} />
              <div className={'ml-2 flex w-full flex-col justify-between'}>
                <Label className="text-xl whitespace-nowrap text-black">
                  {data.nickname}/{data.name}
                </Label>
                <Label className="text-md whitespace-nowrap text-gray-700">
                  {data.challengerSchool.name} <PartIcon className={'h-4 w-4'} part={data.part} />
                </Label>
              </div>
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
