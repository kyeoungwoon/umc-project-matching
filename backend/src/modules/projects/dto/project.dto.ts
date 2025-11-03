import {
  ArrayNotEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UserPartEnum } from '@generated/prisma/mongodb';
import { OmitType, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ProjectToDto {
  @IsNotEmpty()
  @IsEnum(UserPartEnum)
  part!: UserPartEnum;

  @IsNotEmpty()
  @IsNumber()
  to!: number;
}

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

  @IsNotEmpty()
  @ArrayNotEmpty() // 배열이 비어있지 않은지!
  @ValidateNested({ each: true }) // 배열의 각 요소에 대해 유효성 검사
  @Type(() => ProjectToDto) // 변환을 위해 필요
  partTo!: ProjectToDto[];
}

export class UpdateProjectRequestDto extends PartialType(
  OmitType(CreateProjectRequestDto, ['planId']),
) {
  @IsNotEmpty()
  @IsString()
  projectId!: string;
}
