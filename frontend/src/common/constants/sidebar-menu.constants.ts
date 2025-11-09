import { JSX } from 'react';

import {
  CircleUserIcon,
  FilePenIcon,
  FileUserIcon,
  FolderOpen,
  FormInputIcon,
  HomeIcon,
  RectangleEllipsisIcon,
  Settings,
  SheetIcon,
  ShieldUserIcon,
  SquarePenIcon,
  SquarePlusIcon,
} from 'lucide-react';

import { Part } from '@api/axios/auth/types';

import { ROUTES } from '@common/constants/routes.constants';

export interface menuItem {
  title: string;
  url: string;
  icon: any;
  part?: Part;
  role?: 'USER' | 'ADMIN';
}

export interface SidebarMenus {
  label?: string;
  items: menuItem[];
}

export const generalMenu: menuItem[] = [
  {
    title: '홈',
    url: ROUTES.HOME,
    icon: HomeIcon,
  },
  {
    title: '프로젝트 목록 및 지원',
    url: ROUTES.PROJECTS.LIST,
    icon: FolderOpen,
  },
];

export const pmMenu: menuItem[] = [
  {
    title: '내 프로젝트 관리',
    url: ROUTES.PROJECTS.MY_PROJECTS,
    icon: Settings,
    part: 'PLAN',
  },
];

export const adminMenu: menuItem[] = [
  {
    title: '운영진 대시보드',
    url: ROUTES.ADMIN.DASHBOARD,
    icon: ShieldUserIcon,
    role: 'ADMIN',
  },
  {
    title: '매칭 차수 설정',
    url: ROUTES.ADMIN.MATCHING_ROUNDS,
    icon: SquarePenIcon,
    role: 'ADMIN',
  },
  {
    title: '프로젝트 생성',
    url: ROUTES.PROJECTS.CREATE,
    icon: SquarePlusIcon,
    role: 'ADMIN',
  },
];

export const myMenu: menuItem[] = [
  {
    title: '내 프로필',
    url: ROUTES.MY.INFO,
    icon: CircleUserIcon,
  },
  {
    title: '내 지원 현황',
    url: ROUTES.MY.APPLICATIONS,
    icon: FileUserIcon,
  },
  {
    title: '비밀번호 변경',
    url: ROUTES.MY.CHANGE_PASSWORD,
    icon: RectangleEllipsisIcon,
  },
];

const GOOGLE_FORM_URL = 'https://forms.gle/KNamMGSzk6r166mg6';
const LEO_TEAM_MATCHING_MASTER_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1L6tEzM3KVizPdI_e7tIlEDsXpLOuZtispyfJCQzXeiM/edit?gid=445694956#gid=445694956';

const allMenus: SidebarMenus[] = [
  {
    label: undefined,
    items: generalMenu,
  },
  {
    label: 'Plan',
    items: pmMenu,
  },
  {
    label: '운영진',
    items: adminMenu,
  },
  {
    label: 'MY',
    items: myMenu,
  },
  {
    label: '건의사항 및 문의사항',
    items: [
      {
        title: '구글 폼 작성',
        icon: FilePenIcon,
        url: GOOGLE_FORM_URL,
      },
      {
        title: '팀 매칭 마스터시트',
        icon: SheetIcon,
        url: LEO_TEAM_MATCHING_MASTER_SHEET_URL,
      },
    ],
  },
];

export const getMenusByPart = (
  part: Part | undefined,
  role: 'USER' | 'ADMIN' = 'USER',
): SidebarMenus[] => {
  return allMenus
    .map((menu) => ({
      ...menu,
      items: menu.items.filter((item) => {
        // part와 role이 모두 undefined면 공용 메뉴
        if (item.part === undefined && item.role === undefined) return true;

        // part 또는 role이 일치하면 표시
        if (item.part === part || item.role === role) return true;

        return false;
      }),
    }))
    .filter((menu) => menu.items.length > 0); // 빈 카테고리는 제외
};
