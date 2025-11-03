import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { ApplicationStatusEnum } from '@generated/prisma/mongodb';

export class AnswerDto {
  @IsNotEmpty()
  @IsString()
  questionId!: string;

  @IsNotEmpty()
  @IsArray() // 배열임을 명시
  @ArrayNotEmpty() // 빈 배열은 안 됨
  @IsString({ each: true }) // 배열 각 요소가 문자열인지 검사
  value!: string[];
}

export class ApplyToProjectRequestDto {
  // @IsNotEmpty()
  // @IsString()
  // formId!: string;

  @IsNotEmpty()
  @ArrayNotEmpty() // 배열이 비어있지 않은지!
  @ValidateNested({ each: true }) // 배열의 각 요소에 대해 유효성 검사
  @Type(() => AnswerDto) // 변환을 위해 필요
  answers!: AnswerDto[];
}

export class MatchingRoundDto {
  @IsNotEmpty()
  @IsString()
  id!: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '매칭 라운드 이름',
    example: '1차 매칭',
    required: true,
  })
  name!: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({
    description: '매칭 시작 일시, UTC 시간으로 제공하세요.',
    example: '2024-07-01T10:00:00Z',
    type: Date,
    required: true,
  })
  startDatetime!: Date;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({
    description: '매칭 종료 일시, UTC 시간으로 제공하세요.',
    example: '2024-07-01T10:00:00Z',
    type: Date,
    required: true,
  })
  endDatetime!: Date;
}

export class ApplyToQuestionRequestDto extends OmitType(MatchingRoundDto, [
  'id',
]) {}

export class ChangeApplicationStatus {
  @IsNotEmpty()
  @IsEnum(ApplicationStatusEnum)
  @ApiProperty({
    description: '변경할 지원 상태',
    enum: ApplicationStatusEnum,
    example: ApplicationStatusEnum.CONFIRMED,
    required: true,
  })
  status!: ApplicationStatusEnum;
}