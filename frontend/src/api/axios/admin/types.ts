import { ApplicationStatus } from '@api/axios/application/types';
import { Part, SchoolInfo, SchoolResponseDto } from '@api/axios/auth/types';
import { MatchingRoundResponseDto } from '@api/axios/matching-round/types';
import { ProjectResponseDto } from '@api/axios/project/types';

interface AdminPartialUserInfoDto {
  id: string;
  umsbChallengerId: string;
  name: string;
  nickname: string;
  school: string;
  challengerSchool: SchoolInfo;
  part: Part;
}

interface AdminPartialFormInfoDto {
  id: string;
  title: string;
  project: {
    id: string;
    title: string;
    projectPlan: AdminPartialUserInfoDto;
  };
}

export interface AdminGetAllApplicationsResponseDto {
  id: string;
  status: ApplicationStatus;
  createdAt: string;
  updatedAt: string;
  applicant: AdminPartialUserInfoDto;
  form: AdminPartialFormInfoDto;
  matchingRound?: MatchingRoundResponseDto;
}

export interface AdminProjectApplicationSummaryResponseDto {
  project: ProjectResponseDto;
  applicationStats: ProjectApplicationStats[];
}

export interface ProjectApplicationStats {
  matchingRoundId: string;
  matchingRound: MatchingRoundResponseDto;
  part: Part;
  maxTo: number;
  totalApplicants: number;
  confirmedApplicants: number;
  rejectedApplicants: number;
  submittedApplicants: number;
}

export interface ApplicationStatsByChallengerResponse {
  applicationResults: ChallengerApplicationInfo[];
}

export interface ChallengerApplicationInfo {
  challengerId: string;
  umsbChallengerId: string;
  name: string;
  nickname: string;
  part: Part;
  school: string;
  projectMember: {
    projectId: string;
    title: string;
  };
  matchingResults: {
    matchingRoundName: string;
    projectTitle: string;
    applicationStatus: ApplicationStatus | 'NOT_APPLIED';
  }[];
}
