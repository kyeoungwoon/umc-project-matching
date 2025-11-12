import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserPartEnum } from '@generated/prisma/mongodb';
import { ApiProperty } from '@nestjs/swagger';

export class AdminGetApplicationQueryDto {
  @IsNotEmpty()
  @IsString()
  projectId!: string;

  @IsOptional()
  matchingRoundId?: string;

  @IsOptional()
  @IsEnum(UserPartEnum)
  @ApiProperty({
    enum: UserPartEnum,
    description: '파트별로 지원 현황을 필터링합니다.',
  })
  part?: UserPartEnum;
}
