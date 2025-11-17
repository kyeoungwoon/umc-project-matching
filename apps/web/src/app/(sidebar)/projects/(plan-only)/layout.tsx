'use client';

import { ReactNode } from 'react';

import { useRedirectToHomeIfNotPlan } from '@common/hooks/useGetChallengerPerms';

const PlanOnlyLayout = ({ children }: { children: ReactNode }) => {
  useRedirectToHomeIfNotPlan();

  return <>{children}</>;
};

export default PlanOnlyLayout;
