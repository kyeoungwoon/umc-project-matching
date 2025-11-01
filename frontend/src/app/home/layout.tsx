'use client';

import { SidebarProvider, SidebarTrigger } from '@styles/components/ui/sidebar';

import UpmsSideBar from '@common/components/UpmsSidebar';
import { ReactNode } from 'react';

const UpmsHomeLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <UpmsSideBar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default UpmsHomeLayout;
