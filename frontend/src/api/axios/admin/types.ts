import { Part, SchoolInfo, SchoolResponseDto } from '@api/axios/auth/types';
import { MatchingRoundResponseDto } from '@api/axios/matching-round/types';

interface AdminPartialUserInfoDto {
  umsbChallengerId: string;
  name: string;
  nickname: string;
  school: string;
  challengerSchool: SchoolInfo;
  part?: Part;
}

interface AdminPartialFormInfoDto {
  title: string;
  project: {
    title: string;
    projectPlan: AdminPartialUserInfoDto;
  };
}

export interface AdminGetAllApplicationsResponseDto {
  id: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
  applicant: AdminPartialUserInfoDto;
  form: AdminPartialFormInfoDto;
  matchingRound?: MatchingRoundResponseDto;
}
