export const getStatusLabel = (status: 'PENDING' | 'ACCEPTED' | 'REJECTED'): string => {
  switch (status) {
    case 'ACCEPTED':
      return '합격';
    case 'PENDING':
      return '대기';
    case 'REJECTED':
      return '불합격';
    default:
      return status;
  }
};

export const getStatusBadgeVariant = (
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED',
): 'default' | 'secondary' | 'destructive' => {
  switch (status) {
    case 'ACCEPTED':
      return 'default';
    case 'PENDING':
      return 'secondary';
    case 'REJECTED':
      return 'destructive';
    default:
      return 'secondary';
  }
};
