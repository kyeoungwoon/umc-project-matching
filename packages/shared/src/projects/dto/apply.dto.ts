import { ApiProperty, OmitType } from '@nestjs/swagger';

import { APPLICATION_STATUS, ApplicationStatusEnum } from '@projects/enum';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

export class AnswerDto {
  @IsNotEmpty()
  @IsString()
  questionId!: string;

  @IsArray() // 배열임을 명시
  @ArrayNotEmpty() // 빈 배열은 안 됨
  @IsString({ each: true }) // 배열 각 요소가 문자열인지 검사
  value!: string[];
}

export class ApplyToProjectRequestDto {
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
  @Type(() => Date)
  @ApiProperty({
    description: '매칭 시작 일시, UTC 시간으로 제공하세요.',
    example: '2024-07-01T10:00:00Z',
    type: Date,
    required: true,
  })
  startDatetime!: Date;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  @ApiProperty({
    description: '매칭 종료 일시, UTC 시간으로 제공하세요.',
    example: '2024-07-01T10:00:00Z',
    type: Date,
    required: true,
  })
  endDatetime!: Date;
}

export class CreateMatchingRoundDto extends OmitType(MatchingRoundDto, ['id']) {}

export class CreateBulkMatchingRoundsDto {
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateMatchingRoundDto)
  @ApiProperty({
    description: '생성할 매칭 라운드들의 배열',
    type: [CreateMatchingRoundDto],
    required: true,
  })
  matchingRounds!: CreateMatchingRoundDto[];
}

export class ChangeApplicationStatus {
  @IsNotEmpty()
  @IsEnum(APPLICATION_STATUS)
  @ApiProperty({
    description: '변경할 지원 상태',
    enum: APPLICATION_STATUS,
    example: APPLICATION_STATUS.CONFIRMED,
    required: true,
  })
  status!: ApplicationStatusEnum;
}

export class QueryMatchingRoundsDto {
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  start!: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  end!: Date;
}
