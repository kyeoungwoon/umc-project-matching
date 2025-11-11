'use client';

import { ReactNode } from 'react';

import { HEADER_SECTION } from '@common/constants/header-title-description.constants';

import { useRedirectToHomeIfNotAdmin } from '@common/hooks/useGetChallengerPerms';

import UpmsHeader from '@common/components/upms/UpmsHeader';

const AdminLayout = ({ children }: { children?: ReactNode }) => {
  useRedirectToHomeIfNotAdmin();

  return <>{children}</>;
};

export default AdminLayout;
