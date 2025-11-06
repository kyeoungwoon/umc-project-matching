'use client';

import { InboxIcon } from 'lucide-react';

import { Card, CardContent } from '@styles/components/ui/card';

const NoAppliedProject = () => {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-16">
        <InboxIcon className="text-muted-foreground mb-4 h-12 w-12" />
        <p className="text-muted-foreground text-lg font-medium">아직 지원한 프로젝트가 없습니다</p>
        <p className="text-muted-foreground text-sm">프로젝트에 지원해보세요!</p>
      </CardContent>
    </Card>
  );
};

export default NoAppliedProject;
