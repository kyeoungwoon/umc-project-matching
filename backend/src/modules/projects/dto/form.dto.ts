import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

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

export class CreateFormRequestV2Dto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  availableMatchingRounds!: string[];
}
