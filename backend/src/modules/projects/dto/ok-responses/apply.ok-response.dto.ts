import { ApiProperty } from '@nestjs/swagger';
import { ApplicationStatusEnum } from '@generated/prisma/mongodb';
import { AnswerDto } from '@modules/projects/dto/apply.dto';

export class ApplicationResponseDto {
  @ApiProperty({ description: '지원서 ID' })
  id!: string;

  @ApiProperty({ description: '폼 ID' })
  formId!: string;

  @ApiProperty({ description: '지원자 ID' })
  applicantId!: string;

  @ApiProperty({ description: '매칭 회차 ID' })
  matchingRoundId!: string;

  @ApiProperty({ description: '지원 상태', enum: ApplicationStatusEnum })
  status!: ApplicationStatusEnum;

  @ApiProperty({ description: '답변 목록', type: [AnswerDto] })
  answers!: AnswerDto[];

  @ApiProperty({ description: '생성일' })
  createdAt!: Date;

  @ApiProperty({ description: '수정일' })
  updatedAt!: Date;
}
