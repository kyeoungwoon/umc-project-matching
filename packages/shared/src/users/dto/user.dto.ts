import { ApiProperty, OmitType } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { GENDER, GenderEnum, USER_PART, UserPartEnum } from '@common/enum/user.enum';

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
    description: 'UMSB ID',
  })
  umsbChallengerId?: string;

  // TODO: required로 바꾸어야 함
  @IsEnum(GENDER)
  @IsOptional()
  gender?: GenderEnum;

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
    description: '학교 handle',
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

  @IsEnum(USER_PART)
  @IsNotEmpty()
  @ApiProperty({
    description: '챌린저 파트',
    enum: USER_PART,
  })
  part!: UserPartEnum;

  @IsEnum(['ADMIN', 'USER'])
  @IsOptional()
  @ApiProperty({
    description: '챌린저 역할입니다. 일반 사용자 또는 관리자',
    enum: ['ADMIN', 'USER'],
  })
  role?: 'ADMIN' | 'USER';

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

export class CreateUserRequestDto extends OmitType(User, ['id', 'createdAt', 'updatedAt']) {}

export class CreateBulkUserRequestDto {
  @IsArray() // 배열임을 명시
  @ArrayNotEmpty() // 빈 배열은 안 됨
  // 각 요소가 dto와 일치하는지 확인
  @Type(() => CreateUserRequestDto) // 변환을 위해 필요
  users!: CreateUserRequestDto[];
}
