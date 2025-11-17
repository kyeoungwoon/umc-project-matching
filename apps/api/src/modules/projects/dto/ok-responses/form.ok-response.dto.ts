import { ProjectResponseDto } from '@modules/projects/dto/ok-responses/project.ok-response.dto';
import { ApiProperty } from '@nestjs/swagger';
import { FormQuestionDto } from '@modules/projects/dto/form-question.dto';
import { ApplicationResponseDto } from '@modules/projects/dto/ok-responses/apply.ok-response.dto';

export class FormResponseDto {
  @ApiProperty({ description: '폼 ID' })
  id!: string;

  @ApiProperty({ description: '프로젝트 ID' })
  projectId!: string;

  @ApiProperty({ description: '폼 제목' })
  title!: string;

  @ApiProperty({ description: '폼 설명', required: false, nullable: true })
  description?: string | null;

  @ApiProperty({ description: '생성일' })
  createdAt!: Date;

  @ApiProperty({ description: '수정일' })
  updatedAt!: Date;
}

export class FormWithDetailsResponseDto extends FormResponseDto {
  @ApiProperty({
    description: '연관 프로젝트 정보',
    type: () => ProjectResponseDto,
  })
  project!: ProjectResponseDto;

  @ApiProperty({ description: '폼 질문 목록', type: [FormQuestionDto] })
  questions!: FormQuestionDto[];

  @ApiProperty({
    description: '지원서 목록',
    type: () => [ApplicationResponseDto],
    required: false,
  })
  applications?: ApplicationResponseDto[];
}

export class FormQuestionListResponseDto {
  @ApiProperty({ description: '폼 질문 목록', type: [FormQuestionDto] })
  questions!: FormQuestionDto[];
}
