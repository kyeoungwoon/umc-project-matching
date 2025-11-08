'use client';

import { Button } from '@styles/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@styles/components/ui/dialog';

import { ApplicationStatus } from '@api/axios/application/types';

interface DialogContents {
  title: string;
  description: string;
  variant: 'default' | 'destructive' | 'outline';
  cancelText?: string;
  confirmText?: string;
}

interface DoubleCheckDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen?: boolean) => void;
  onConfirm: () => void;
  onClose: () => void;
  content: DialogContents;
}

// TODO: 언젠간 쓰지 않을까?
const DoubleCheckDialog = ({
  isOpen,
  onOpenChange,
  onClose,
  onConfirm,
  content,
}: DoubleCheckDialogProps) => {
  if (!onConfirm) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
          <DialogDescription>{content.description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose}>{content.cancelText ?? '취소'}</Button>
          <Button variant={content.variant} onClick={onConfirm}>
            {content.confirmText ?? '확인'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DoubleCheckDialog;
