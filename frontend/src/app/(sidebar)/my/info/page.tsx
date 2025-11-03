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

import { useChangePasswordMutation } from '@api/query/auth';
import { useGetMyInfoQuery } from '@api/query/user';

const MyInfoPage = () => {
  const { data: user, isLoading } = useGetMyInfoQuery();
  const { mutate: changePassword, isPending } = useChangePasswordMutation();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogDescription, setDialogDescription] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setError('새 비밀번호가 일치하지 않습니다.');
      return;
    }
    setError('');
    changePassword(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          setDialogTitle('성공');
          setDialogDescription('비밀번호가 변경되었습니다.');
          setDialogOpen(true);
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
        },
        onError: () => {
          setDialogTitle('오류');
          setDialogDescription('비밀번호 변경에 실패했습니다.');
          setDialogOpen(true);
        },
      },
    );
  };

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

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
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>비밀번호 변경</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">현재 비밀번호</Label>
            <Input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">새 비밀번호</Label>
            <Input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">새 비밀번호 확인</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </CardContent>
        <CardFooter>
          <Button onClick={handleChangePassword} disabled={isPending}>
            {isPending ? '변경 중...' : '비밀번호 변경'}
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>확인</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyInfoPage;
