'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';

import { Button } from '@styles/components/ui/button';
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

import { getMenusByPart } from '@common/constants/sidebar-menu.constants';

import UpmsLogo from '@common/components/UpmsLogo';

import { useGetUser } from '@features/auth/hooks/useAuthStore';

const UpmsSideBar = () => {
  const user = useGetUser();
  const part = user?.info?.part;
  const role = user?.info?.role;

  const pathname = usePathname();
  // console.log('path: ', pathname);

  return (
    <Sidebar>
      <SidebarHeader>
        <UpmsLogo />
      </SidebarHeader>
      <SidebarContent>
        {getMenusByPart(part, role).map((menu, idx) => {
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
    </Sidebar>
  );
};

export default UpmsSideBar;
