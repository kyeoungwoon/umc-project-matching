import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';

import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export class User {
  // User Table에 포함된 정보

  @TransformToBigint()
  @IsBigInt()
  @ApiProperty({
    description: '사용자 ID',
    type: 'string',
    format: 'bigint',
    example: '1',
  })
  id!: bigint;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '사용자 이름',
  })
  name!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '사용자 닉네임',
  })
  nickname!: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: '사용자 한 줄 소개',
    example: '나는 말하는 감자입니다.',
  })
  introduction?: string; // 한 줄 소개

  @IsOptional()
  @Type(() => Date)
  @ApiProperty({
    description: '계정 생성 일시',
  })
  createdAt!: Date;

  @IsOptional()
  @Type(() => Date)
  @ApiProperty({
    description: 'User 정보 수정 일자',
  })
  updatedAt!: Date;
}
