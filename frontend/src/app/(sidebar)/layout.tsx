'use client';

import { ReactNode } from 'react';

import { SidebarProvider, SidebarTrigger } from '@styles/components/ui/sidebar';
import { Toaster } from '@styles/components/ui/sonner';

import UpmsSideBar from '@common/components/UpmsSidebar';

const UpmsHomeLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <UpmsSideBar />
        <main className={'w-full'}>
          {/* <SidebarTrigger />*/}
          {children}
        </main>
        <Toaster />
      </SidebarProvider>
    </>
  );
};

export default UpmsHomeLayout;
