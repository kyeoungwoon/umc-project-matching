'use client';

import { useState } from 'react';

import { Button } from '@styles/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@styles/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@styles/components/ui/dialog';
import { Input } from '@styles/components/ui/input';
import { Label } from '@styles/components/ui/label';

import { useGetUser } from '@features/auth/hooks/useAuthStore';

const MyInfoPage = () => {
  const userObj = useGetUser();
  const user = userObj?.info;

  if (!user) throw new Error('로그인되지 않은 사용자일 것 같습니다.');

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>내 정보</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center">
            <Label className="w-24">이름</Label>
            <p className="text-sm">{user.name}</p>
          </div>
          <div className="flex items-center">
            <Label className="w-24">닉네임</Label>
            <p className="text-sm">{user.nickname}</p>
          </div>
          <div className="flex items-center">
            <Label className="w-24">학교</Label>
            <p className="text-sm">{user.challengerSchool.name}</p>
          </div>
          <div className="flex items-center">
            <Label className="w-24">학번</Label>
            <p className="text-sm">{user.studentId}</p>
          </div>
          <div className="flex items-center">
            <Label className="w-24">파트</Label>
            <p className="text-sm">{user.part}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyInfoPage;
