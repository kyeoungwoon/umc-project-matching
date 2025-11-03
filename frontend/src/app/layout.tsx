import { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { QueryClientProvider } from '@tanstack/react-query';

import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';

import '@styles/globals.css';

import QueryClientProviders from '@app/query-client-providers';

const pretendard = localFont({
  src: '../assets/fonts/pretendard/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'UPMS',
  description: 'UMC Project Matching Service',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={clsx('flex min-h-screen flex-col', pretendard.variable)}>
        <QueryClientProviders>
          <SpeedInsights />
          {children}
        </QueryClientProviders>
      </body>
    </html>
  );
};

export default RootLayout;
