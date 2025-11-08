'use client';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import { Card, CardContent, CardHeader, CardTitle } from '@styles/components/ui/card';

import { ApiResponse, api } from '@api/axios';

interface LinkPreviewCardProps {
  url: string;
}

const LinkPreviewCard = ({ url }: LinkPreviewCardProps) => {
  const getLinkPreview = async (link: string) => {
    const response = await api.get<ApiResponse<any>>(
      `/v1/projects/link/preview?url=${encodeURIComponent(link)}`,
    );

    return response.data.result;
  };

  const {
    data: preview,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['linkPreview', url],
    queryFn: () => getLinkPreview(url),
    enabled: !!url, // url이 있을 때만 쿼리 실행
    staleTime: 1000 * 60 * 60 * 24, // 24시간 동안 캐시 유지
    gcTime: 1000 * 60 * 60 * 24,
  });

  if (isLoading) return <div className="text-sm text-gray-500">미리보기를 불러오는 중...</div>;
  if (isError || !preview) return null; // 에러 발생 시 또는 데이터가 없으면 아무것도 표시하지 않음

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4 block">
      <Card className="overflow-hidden transition-shadow duration-200 hover:shadow-md">
        {preview.imageUrl && (
          <div className="relative h-40 w-full">
            <Image src={preview.imageUrl} alt={preview.title} layout="fill" objectFit="cover" />
          </div>
        )}
        <CardHeader>
          <CardTitle className="truncate text-lg">{preview.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-2 text-sm">{preview.description}</p>
          <p className="text-muted-foreground mt-2 truncate text-xs">{url}</p>
        </CardContent>
      </Card>
    </a>
  );
};

export default LinkPreviewCard;
