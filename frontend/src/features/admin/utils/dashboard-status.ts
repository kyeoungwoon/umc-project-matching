export const getStatusLabel = (status: 'SUBMITTED' | 'ACCEPTED' | 'REJECTED'): string => {
  switch (status) {
    case 'ACCEPTED':
      return '합격';
    case 'SUBMITTED':
      return '대기';
    case 'REJECTED':
      return '불합격';
    default:
      return status;
  }
};

export const getStatusBadgeVariant = (
  status: 'SUBMITTED' | 'ACCEPTED' | 'REJECTED',
): 'default' | 'secondary' | 'destructive' => {
  switch (status) {
    case 'ACCEPTED':
      return 'default';
    case 'SUBMITTED':
      return 'secondary';
    case 'REJECTED':
      return 'destructive';
    default:
      return 'secondary';
  }
};
