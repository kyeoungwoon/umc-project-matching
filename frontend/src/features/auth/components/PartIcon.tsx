'use client';

import { clsx } from 'clsx';
import {
  AppleIcon,
  BadgeQuestionMarkIcon,
  BookOpenIcon,
  BotIcon,
  BrushIcon,
  EarthIcon,
  HexagonIcon,
  LeafIcon,
  ShieldUserIcon,
} from 'lucide-react';

import { Part } from '@api/axios/auth/types';

const PartIcon = ({ part, className }: { part: Part; className?: string }) => {
  const iconClassName = clsx(className);

  switch (part) {
    case 'PLAN':
      return <BookOpenIcon className={iconClassName} />;
    case 'DESIGN':
      return <BrushIcon className={iconClassName} />;
    case 'WEB':
      return <EarthIcon className={iconClassName} />;
    case 'IOS':
      return <AppleIcon className={iconClassName} />;
    case 'ANDROID':
      return <BotIcon className={iconClassName} />;
    case 'SPRINGBOOT':
      return <LeafIcon className={iconClassName} />;
    case 'NODEJS':
      return <HexagonIcon className={iconClassName} />;
    case 'ADMIN':
      return <ShieldUserIcon className={iconClassName} />;
    default:
      return <BadgeQuestionMarkIcon className={iconClassName} />;
  }
};

export default PartIcon;
