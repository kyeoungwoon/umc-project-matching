import { Part } from '@api/axios/auth/types';
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
  userId: string;
  part: Part;
}

export interface ProjectResponseDto {
  id: string;
  title: string;
  description: string;
  link: string;
  planId: string;
  partTo: ProjectToDto[];
  projectForms: FormResponseDto[];
  projectMember: ProjectMemberInProjectResponseDto[];
  createdAt: string;
  updatedAt: string;
}
