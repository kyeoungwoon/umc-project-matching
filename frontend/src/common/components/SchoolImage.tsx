'use client';

import Image from 'next/image';

interface SchoolLogoProps {
  /**
   * 표시할 학교의 전체 이름 (예: "중앙대학교")
   */
  schoolName: string;
  /**
   * 이미지의 너비 (px)
   * @default 24
   */
  width?: number;
  /**
   * 이미지의 높이 (px)
   * @default 24
   */
  height?: number;
  /**
   * 추가적인 스타일을 위한 className
   */
  className?: string;
}

const SchoolLogo = ({ schoolName, width = 24, height = 24, className }: SchoolLogoProps) => {
  // 매핑된 로고 파일이 없으면 아무것도 렌더링하지 않습니다.
  if (!schoolName) {
    return null;
  }

  const src = `/assets/school-logo/${schoolName}.png`;

  return (
    <Image
      src={src}
      alt={`${schoolName} 로고`}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default SchoolLogo;
