'use client';

const ApplicationInfo = ({ id, createdAt }: { id: string; createdAt: string }) => {
  return (
    <div className={'text-16pxr mb-6 flex flex-col gap-y-1 text-gray-500'}>
      <span>
        지원서 ID: <span className={'text-gray-800'}>{id}</span>
      </span>
      <span>
        제출일:{' '}
        <span className={'text-gray-800'}>{new Date(createdAt).toLocaleString('ko-KR')}</span>
      </span>
    </div>
  );
};

export default ApplicationInfo;
