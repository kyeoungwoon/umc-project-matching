import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  Answer,
  ApplicationStatusEnum,
  QuestionTypeEnum,
} from '@generated/prisma/mongodb';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateProjectRequestDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsString()
  link!: string;

  @IsNotEmpty()
  @IsString()
  planId!: string;
}

export class UpdateProjectRequestDto extends PartialType(
  OmitType(CreateProjectRequestDto, ['planId']),
) {
  @IsNotEmpty()
  @IsString()
  projectId!: string;
}

export class FormQuestionDto {
  @IsNotEmpty()
  @IsString()
  formId!: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: '질문 번호', example: 1, required: true })
  questionNo!: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '질문 제목',
    example: '예시 질문입니다.',
    required: true,
  })
  title!: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: '질문에 대한 설명입니다.',
    example: '질문 설명 예시입니다.',
    required: true,
  })
  description?: string;

  @IsEnum(QuestionTypeEnum)
  @IsNotEmpty()
  @ApiProperty({
    description: '질문 유형',
    enum: QuestionTypeEnum,
    example: QuestionTypeEnum.SINGLE_CHOICE,
    required: true,
  })
  type!: QuestionTypeEnum;

  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  options!: string[];

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    description: '질문 필수응답 여부',
    type: 'boolean',
    required: true,
  })
  isRequired!: boolean;
}

export class CreateFormQuestionDto extends OmitType(FormQuestionDto, [
  'formId',
]) {}

export class UpdateFormQuestionDto extends PartialType(
  OmitType(FormQuestionDto, ['type', 'formId']),
) {
  @IsNotEmpty()
  @IsString()
  id!: string;
}

export class CreateFormRequestDto {
  // @IsNotEmpty()
  // @IsString()
  // projectId!: string;

  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateFormRequestDto extends PartialType(
  OmitType(CreateFormRequestDto, []),
) {
  // @IsNotEmpty()
  // @IsString()
  // formId!: string;
}

export class CreateQuestionRequestDto {
  @IsNotEmpty()
  @ArrayNotEmpty() // 배열이 비어있지 않은지!
  @ValidateNested({ each: true }) // 배열의 각 요소에 대해 유효성 검사
  @Type(() => CreateFormQuestionDto) // 변환을 위해 필요
  questions!: CreateFormQuestionDto[];
}

export class UpdateQuestionRequestDto {
  @IsNotEmpty()
  @ArrayNotEmpty() // 배열이 비어있지 않은지!
  @ValidateNested({ each: true }) // 배열의 각 요소에 대해 유효성 검사
  @Type(() => UpdateFormQuestionDto) // 변환을 위해 필요
  questions!: UpdateFormQuestionDto[];
}

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
