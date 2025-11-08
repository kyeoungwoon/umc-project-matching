'use client';

import { type VariantProps } from 'class-variance-authority';
import { BoltIcon, ContactRoundIcon, GraduationCapIcon, UserRoundIcon } from 'lucide-react';

import { Badge, badgeVariants } from '@styles/components/ui/badge';

import { parsePart } from '@common/utils/parse-userinfo';

const ChallengerInfoBadge = ({
  school,
  part,
  name,
  nickname,
}: {
  school: string;
  part: string;
  nickname: string;
  name: string;
}) => {
  // part에 따라서 badge 색깔 변경
  const getPartVariant = (part: string): VariantProps<typeof badgeVariants>['variant'] => {
    switch (part) {
      case 'ADMIN':
        return 'destructive';
      case 'SPRINGBOOT':
      case 'NODEJS':
        return 'secondary';
      default:
        return 'default';
    }
  };

  return (
    <div className={'flex flex-row'}>
      <Badge className="mr-1 text-sm" variant={'outline'}>
        <GraduationCapIcon />
        {school}
        <UserRoundIcon /> {nickname}/{name}
      </Badge>
      <Badge className="text-sm" variant={getPartVariant(part)}>
        <BoltIcon /> {parsePart(part)}
      </Badge>
    </div>
  );
};

export default ChallengerInfoBadge;
