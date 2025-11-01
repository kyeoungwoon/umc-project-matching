import { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';

import '@styles/globals.css';

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
      <body className={clsx('scrollbar-page flex min-h-screen flex-col', pretendard.variable)}>
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
