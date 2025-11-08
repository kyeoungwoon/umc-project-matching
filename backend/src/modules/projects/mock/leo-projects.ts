import { CreateProjectRequestDto } from '@modules/projects/dto/project.dto';

export const leoProjects: CreateProjectRequestDto[] = [
  {
    title: '북리플',
    description:
      '“독서를 기록하고 나누며, 질문과 연결을 통해 책 너머의 경험을 확장하는 서비스.”',
    link: 'https://www.notion.so/makeus-challenge/2a4b57f4596b8063b891fa8f86146af7?pvs=255',
    planId: '벨라',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'WEB', to: 4 },
      { part: 'NODEJS', to: 5 },
    ],
  },
  {
    title: '이음50+',
    description: '싱글 시니어를 위한 음성 기반 데이팅 앱',
    link: 'https://www.notion.so/makeus-challenge/50-2a3b57f4596b80349dabdf40760ed604?pvs=25',
    planId: '루씨',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'WEB', to: 4 },
      { part: 'NODEJS', to: 5 },
    ],
  },
  {
    title: 'Wearly',
    description:
      'Wearly는 내 옷을 시각적으로 관리하고 코디를 계획할 수 있는 스마트 옷장 앱입니다.',
    link: 'https://www.notion.so/makeus-challenge/Wearly-2a3b57f4596b802781c7f110616bbc2e?pvs=25',
    planId: '먼지',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'ANDROID', to: 3 },
      { part: 'NODEJS', to: 5 },
    ],
  },
  {
    title: 'MY4CUT',
    description: '네컷 사진 아카이빙 및 통합 관리 서비스',
    link: 'https://www.notion.so/makeus-challenge/MY4CUT-2a3b57f4596b80cfbb65d5343430f563?pvs=25',
    planId: '에블린',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'ANDROID', to: 3 },
      { part: 'SPRINGBOOT', to: 5 },
    ],
  },
  {
    title: 'BarKit',
    description:
      'Barkit은 여러 멤버십·포인트 바코드를 한곳에 모아 매장별로 자동 매칭·즉시 제시할 수 있는 통합 멤버십 지갑 서비스 입니다.',
    link: 'https://www.notion.so/makeus-challenge/BarKit-2a2b57f4596b808585d6f2a7dcf1e23f?pvs=25',
    planId: '토리',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'WEB', to: 4 },
      { part: 'SPRINGBOOT', to: 5 },
    ],
  },
  {
    title: 'Co:N-next',
    description: '공연장 안내 및 메이트 찾기 서비스',
    link: 'https://www.notion.so/makeus-challenge/Co-N-next-2a3b57f4596b800597f0e7f0a7f43797?pvs=25',
    planId: '율무',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'WEB', to: 4 },
      { part: 'SPRINGBOOT', to: 6 },
    ],
  },
  {
    title: 'Finders',
    description: '필름 현상소 통합/추천 플랫폼',
    link: 'https://www.notion.so/makeus-challenge/Finders-2a3b57f4596b8079bdfdc041557b9a68?pvs=25',
    planId: '모건',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'WEB', to: 4 },
      { part: 'SPRINGBOOT', to: 5 },
    ],
  },
  {
    title: 'Proovy',
    description:
      'Proovy(프루비)는 “이공계 대학생들을 위한, 단순한 정답을 넘어, ‘약점’을 찾아 ‘완성’시키는 AI 튜터”입니다.',
    link: 'https://www.notion.so/makeus-challenge/Proovy-2a3b57f4596b809fbfe1edd30c33c621?pvs=25',
    planId: '초원',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'WEB', to: 4 },
      { part: 'SPRINGBOOT', to: 5 },
    ],
  },
  {
    title: 'Verbly',
    description: '구동사 학습 앱',
    link: 'https://www.notion.so/makeus-challenge/Verbly-2a4b57f4596b800d93bfd11df92bc88a?pvs=25',
    planId: '링꽃',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'WEB', to: 5 },
      { part: 'SPRINGBOOT', to: 6 },
    ],
  },
  {
    title: 'RealMatch',
    description:
      '브랜드와 인플루언서를 톤앤매너 중심으로 정교하게 연결해주는 매칭 플랫폼',
    link: 'https://www.notion.so/makeus-challenge/RealMatch-2a3b57f4596b80e7b248cc9d059aefdd?pvs=25',
    planId: '아이비',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'WEB', to: 4 },
      { part: 'SPRINGBOOT', to: 5 },
    ],
  },
  {
    title: 'ALLPLAY',
    description:
      'ALLPLAY는 “Play · Link · Achieve · You Better” 라는 가치를 중심에 두고,\n누구나 쉽고 간편하게 운동을 시작하고 지속할 수 있도록 돕습니다.',
    link: 'https://www.notion.so/makeus-challenge/ALLPLAY-2a3b57f4596b80a6a449d8ded32063a5?pvs=25',
    planId: '원송이',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'WEB', to: 4 },
      { part: 'SPRINGBOOT', to: 5 },
    ],
  },
  {
    title: '모아요',
    description:
      '모아요는 대학생의 이력 관리와 팀 빌딩을 한 번에 해결하는 플랫폼입니다.',
    link: 'https://www.notion.so/makeus-challenge/2a1b57f4596b80ecafeadba8766900d1?pvs=25',
    planId: '홍시',
    partTo: [
      { part: 'DESIGN', to: 1 },
      { part: 'WEB', to: 4 },
      { part: 'SPRINGBOOT', to: 5 },
    ],
  },
];
