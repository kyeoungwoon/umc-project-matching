'use client';

const NoticeContent = ({ text }: { text: string }) => {
  return <span className={'text-md tracking-tight'}>- {text}</span>;
};

export default NoticeContent;
