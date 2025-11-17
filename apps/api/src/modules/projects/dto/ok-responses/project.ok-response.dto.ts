import { ApiProperty } from '@nestjs/swagger';
import { UserPartEnum } from '@generated/prisma/mongodb';
import { ProjectToDto } from '@modules/projects/dto/project.dto';
import { FormResponseDto } from '@modules/projects/dto/ok-responses/form.ok-response.dto';

class ProjectMemberInProjectResponseDto {
  @ApiProperty({ description: '프로젝트 멤버 ID' })
  id!: string;

  @ApiProperty({ description: '유저 ID' })
  userId!: string;

  @ApiProperty({ description: '참여 파트', enum: UserPartEnum })
  part!: UserPartEnum;
}

export class ProjectResponseDto {
  @ApiProperty({ description: '프로젝트 ID' })
  id!: string;

  @ApiProperty({ description: '프로젝트 제목' })
  title!: string;

  @ApiProperty({ description: '프로젝트 설명' })
  description!: string;

  @ApiProperty({ description: '프로젝트 링크' })
  link!: string;

  @ApiProperty({ description: '기획자 ID' })
  planId!: string;

  @ApiProperty({ description: '파트별 모집 인원', type: [ProjectToDto] })
  partTo!: ProjectToDto[];

  @ApiProperty({
    description: '프로젝트에 속한 폼 목록',
    isArray: true,
    type: () => FormResponseDto,
  })
  projectForms!: FormResponseDto[];

  @ApiProperty({
    description: '프로젝트에 속한 멤버 목록',
    type: [ProjectMemberInProjectResponseDto],
  })
  projectMember!: ProjectMemberInProjectResponseDto[];

  @ApiProperty({ description: '생성일' })
  createdAt!: Date;

  @ApiProperty({ description: '수정일' })
  updatedAt!: Date;
}
