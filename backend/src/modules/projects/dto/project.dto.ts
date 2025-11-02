import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Answer, QuestionTypeEnum } from '@generated/prisma/mongodb';
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
  @ApiProperty({ description: '질문 번호', example: 1 })
  questionNo!: number;

  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(QuestionTypeEnum)
  @IsNotEmpty()
  type!: QuestionTypeEnum;

  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  options!: string[];

  @IsNotEmpty()
  @IsBoolean()
  isRequired!: boolean;
}

export class UpdateFormQuestionDto extends PartialType(
  OmitType(FormQuestionDto, ['type', 'formId']),
) {
  @IsNotEmpty()
  @IsString()
  id!: string;
}

export class CreateFormRequestDto {
  @IsNotEmpty()
  @IsString()
  projectId!: string;

  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateFormRequestDto extends PartialType(
  OmitType(CreateFormRequestDto, ['projectId']),
) {
  @IsNotEmpty()
  @IsString()
  formId!: string;
}

export class CreateQuestionRequestDto {
  @IsNotEmpty()
  @ArrayNotEmpty() // 배열이 비어있지 않은지!
  @ValidateNested({ each: true }) // 배열의 각 요소에 대해 유효성 검사
  @Type(() => FormQuestionDto) // 변환을 위해 필요
  questions!: FormQuestionDto[];
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
  @IsNotEmpty()
  @ArrayNotEmpty() // 배열이 비어있지 않은지!
  @ValidateNested({ each: true }) // 배열의 각 요소에 대해 유효성 검사
  @Type(() => AnswerDto) // 변환을 위해 필요
  answers!: AnswerDto[];
}
