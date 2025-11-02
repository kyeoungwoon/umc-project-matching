import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger';

import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';
import { UserPartEnum } from '@generated/prisma/mongodb';

export class User {
  // User Table에 포함된 정보

  @ApiProperty({
    description: '사용자 ID',
  })
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '이름',
  })
  name!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '닉네임',
  })
  nickname!: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: '사용자 한 줄 소개',
    example: '나는 말하는 감자입니다.',
  })
  introduction?: string; // 한 줄 소개

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '학교명',
  })
  school!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '학번',
  })
  studentId!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '비밀번호',
  })
  password!: string;

  @IsEnum(UserPartEnum)
  @IsNotEmpty()
  @ApiProperty({
    description: '챌린저 파트',
    enum: UserPartEnum,
  })
  part!: UserPartEnum;

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

export class CreateUserRequestDto extends OmitType(User, [
  'id',
  'createdAt',
  'updatedAt',
]) {}
