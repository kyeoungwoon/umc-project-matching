import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

import { QUESTION_TYPE, QuestionTypeEnum } from '@projects/enum';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

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

  @IsEnum(QUESTION_TYPE)
  @IsNotEmpty()
  @ApiProperty({
    description: '질문 유형',
    enum: QUESTION_TYPE,
    example: QUESTION_TYPE.SINGLE_CHOICE,
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

export class CreateFormQuestionDto extends OmitType(FormQuestionDto, ['formId']) {}

export class UpdateFormQuestionDto extends PartialType(
  OmitType(FormQuestionDto, ['type', 'formId']),
) {
  @IsNotEmpty()
  @IsString()
  id!: string;
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
