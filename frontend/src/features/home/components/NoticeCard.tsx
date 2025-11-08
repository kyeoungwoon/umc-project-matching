'use client';

import Link from 'next/link';

import { TerminalIcon } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@styles/components/ui/alert';

const NoticeCard = () => {
  const PROJECT_GUIDE_PAGE =
    'https://makeus-challenge.notion.site/Project-Guideline-2a0b57f4596b8085b536cfec845c3e2b';

  const HANEUL_LINK = 'https://github.com/kyeoungwoon';
  const BONNY_LINK = 'https://github.com/Bowoon1216';
  const BELLA_LINK = 'https://github.com/hwangjeewon';

  return (
    <Alert className={'p-5'}>
      <AlertTitle className={'mb-4 flex flex-row items-center gap-x-2 text-2xl'}>
        <TerminalIcon />
        공지사항
      </AlertTitle>
      <AlertDescription className={'text-17pxr'}>
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>
            <span className="font-semibold text-gray-800">Plan: </span>지원서는 내 프로젝트 관리
            &gt; 지원서 폼 확인 &gt; 지원자 보기 에서 확인 가능합니다.
          </li>
          <li>
            <span className="font-semibold text-gray-800">Design: </span>
          </li>
          <li className={'pl-5'}>
            프로젝트 목록 및 지원 메뉴에서 각 프로젝트 내용 확인 및 기획안 (Notion Link) 확인 후에,
            원하시는 곳에 지원하시면 됩니다.
          </li>
          <li>
            <span className="font-semibold text-gray-800">개발 파트: </span>지금은 기획-디자인 매칭
            기간입니다. 기획-개발자 매칭 기간에 지원해주세요.
          </li>
          <li>
            <span className="font-semibold text-gray-800">매칭 차수 관련 안내</span>
          </li>
          <li className={'pl-5'}>
            매칭 차수는 1,2,3차 총 3회로 구성되어 있으며, 각 차수에 반드시 지원할 필요는 없습니다.
          </li>
          <li className={'pl-5'}>
            이전 차수에 합격하지 못한 팀에 TO가 남아있다면, 다음 차수에 다시 지원하셔도 무관합니다.
          </li>
          <li className={'pl-5'}>
            사유와 무관하게 3차까지 팀이 매칭되지 못한 경우, TO가 남아있는 팀에 랜덤으로 배정됩니다.
          </li>
          <li className={'pl-5'}>
            매칭에 관한 보다 자세한 사항은 중앙운영사무국{' '}
            <Link className={'text-green-600'} href={PROJECT_GUIDE_PAGE}>
              Project Guideline
            </Link>{' '}
            를 참고해주세요.
          </li>
          <li>
            <span className="font-semibold text-gray-800">문의사항 및 건의사항 관련 안내: </span>
          </li>
          <li className={'pl-5'}>
            현재 사용하고 계시는 UPMS, UMC Project Matching Service는 Leo 지부 프로젝트 매칭 현황을
            관리하고자 제작되었습니다.
          </li>
          <li className={'pl-5'}>Chrome 기반 브라우저에 맞게 개발되었습니다.</li>
          <li className={'pl-5'}>
            사용 중 문의 및 건의사항, 버그 등을 발견하였을 때에는 메뉴 하단의 구글 폼 및 Discord
            DM을 통해 중앙대학교 회장 하늘/박경운 에게 문의 부탁드립니다.
          </li>
          <li className={'pl-5'}>
            제작 및 도움을 준 사람 :{' '}
            <Link className={'text-blue-600'} href={HANEUL_LINK}>
              중앙대학교 회장 하늘/박경운
            </Link>
            {', '}
            <Link className={'text-violet-600'} href={BONNY_LINK}>
              부회장 보니/정보운
            </Link>
            {', '}
            <Link className={'text-[#E65787]'} href={BELLA_LINK}>
              Plan 파트장 벨라/황지원
            </Link>
          </li>
        </ul>
      </AlertDescription>
    </Alert>
  );
};

export default NoticeCard;
