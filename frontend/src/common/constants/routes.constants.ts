export const ROUTES = {
  HOME: '/home',
  AUTH: {
    LOGIN: '/auth/login',
  },
  PROJECTS: {
    LIST: '/projects', // 프로젝트 목록 보기
    CREATE: '/projects/create', // 프로젝트 생성하기
    // 지원자용, 프로젝트가 가지고 있는 폼 목록 조회
    FORM_LIST: (projectId: string) => `/projects/${projectId}/forms`,
    // Plan용, 프로젝트 폼 조회 및 생성
    CREATE_FORM: (projectId: string) => `/projects/${projectId}/form/create`,
    APPLICATION: (projectId: string) => `/projects/${projectId}/apply`,
  },
  MY: {
    INFO: '/my/info',
    SETTINGS: '/my/settings',
    APPLICATIONS: '/my/applications',
  },
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
  },
} as const;
