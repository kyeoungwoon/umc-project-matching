import { ApiProperty } from '@nestjs/swagger';

export class MatchingRoundResponseDto {
  @ApiProperty({ description: '매칭 회차 ID' })
  id!: string;

  @ApiProperty({ description: '매칭 회차 이름' })
  name!: string;

  @ApiProperty({ description: '시작 시간' })
  startDatetime!: Date;

  @ApiProperty({ description: '종료 시간' })
  endDatetime!: Date;

  @ApiProperty({ description: '생성일' })
  createdAt!: Date;

  @ApiProperty({ description: '수정일' })
  updatedAt!: Date;
}
