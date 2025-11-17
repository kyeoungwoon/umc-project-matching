/**
 * 모노레포 통합 Prettier 설정 파일
 * - Next.js (Frontend)와 NestJS (Backend)의 규칙을 모두 포함
 * - TailwindCSS 플러그인은 프론트엔드 파일에만 작동하므로 전역 등록 가능
 */

export default {
    // =================================================================
    // 1. 기본 포맷팅 설정 (공통)
    // =================================================================
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: false, // React용 (백엔드 코드엔 영향 없음)
    trailingComma: 'all',
    printWidth: 100,
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'auto',

    // =================================================================
    // 2. 플러그인 설정
    // =================================================================
    // Tailwind 플러그인은 CSS 클래스가 없는 백엔드 코드에는 아무 영향도 주지 않으므로 안전합니다.
    plugins: [
        '@trivago/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
    ],

    // =================================================================
    // 3. Import 정렬 설정 (Superset)
    // =================================================================
    // NestJS의 데코레이터와 Next.js의 JSX를 모두 파싱할 수 있도록 설정
    importOrderParserPlugins: ['typescript', 'decorators-legacy', 'jsx'],

    importOrder: [
        // [1] 프레임워크 및 핵심 라이브러리
        '^(react/(.*)$)|^(react$)',
        '^(next/(.*)$)|^(next$)',
        '^@nestjs/(.*)$',

        // [2] 외부 라이브러리
        '^@tanstack/(.*)$',
        '<THIRD_PARTY_MODULES>',

        // [3] 모노레포 공유 패키지 (packages 폴더)
        '^@my-project/(.*)$',

        // [4] 설정, 공통 유틸리티, 전역 스타일 (Frontend & Backend Mix)
        '^@config/(.*)$',
        '^@common/(.*)$',
        '^@utils/(.*)$',
        '^@shared/(.*)$',
        '^@styles/(.*)$', // FE
        '^@assets/(.*)$', // FE
        '^@icons/(.*)$',  // FE
        '^@svgs/(.*)$',   // FE

        // [5] 인프라 및 데이터베이스 (Backend)
        '^@database/(.*)$',
        '^@entities/(.*)$',
        '^@repositories/(.*)$',
        '^@lib/(.*)$', // FE/BE common libs
        '^@api/(.*)$', // FE api client

        // [6] 인증, 보안, 미들웨어 (Backend)
        '^@auth/(.*)$',
        '^@guards/(.*)$',
        '^@decorators/(.*)$',
        '^@middleware/(.*)$',
        '^@filters/(.*)$',
        '^@pipes/(.*)$',

        // [7] 도메인 로직 및 기능 (Frontend Features & Backend Modules)
        '^@modules/(.*)$',     // BE
        '^@services/(.*)$',    // BE
        '^@controllers/(.*)$', // BE
        '^@features/(.*)$',    // FE

        // [8] 컴포넌트 및 UI (Frontend)
        '^@components/(.*)$',
        '^@buttons/(.*)$',

        // [9] 타입 및 DTO
        '^@dto/(.*)$',
        '^@types/(.*)$',
        '^@interfaces/(.*)$',
        '^@schemas/(.*)$',

        // [10] 앱 엔트리 및 기타 절대 경로
        '^@app/(.*)$',
        '^@/(.*)$',

        // [11] 상대 경로
        '^[./]',
    ],

    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};