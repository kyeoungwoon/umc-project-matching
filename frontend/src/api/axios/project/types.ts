import { Part, SchoolInfo, SchoolResponseDto } from '@api/axios/auth/types';
import { FormResponseDto } from '@api/axios/form/types';

// Request DTOs
export interface ProjectToDto {
  part: any; // The spec says object, but no properties are defined
  to: number;
}

export interface CreateProjectRequestDto {
  title: string;
  description: string;
  link: string;
  planId: string;
  partTo: ProjectToDto[];
}

export interface UpdateProjectRequestDto {
  title?: string;
  description?: string;
  link?: string;
  partTo?: ProjectToDto[];
}

// Response DTOs
export interface ProjectMemberInProjectResponseDto {
  id: string;
  user?: FilteredUserInfoDto;
}

export interface FilteredUserInfoDto {
  id: string;
  name: string;
  nickname: string;
  introduction: string;
  challengerSchool: SchoolInfo;
  part?: Part;
}

export interface ProjectResponseDto {
  id: string;
  title: string;
  description: string;
  link: string;
  bannerImage?: string;
  planId: string;
  partTo: ProjectToDto[];
  projectForms: FormResponseDto[];
  projectMember: ProjectMemberInProjectResponseDto[];
  projectPlan?: FilteredUserInfoDto;
  createdAt: string;
  updatedAt: string;
}
