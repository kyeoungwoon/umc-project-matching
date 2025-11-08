import {
  ArrayNotEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UserPartEnum } from '@generated/prisma/mongodb';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ProjectToDto {
  @IsNotEmpty()
  @IsEnum(UserPartEnum)
  @ApiProperty({
    enum: UserPartEnum,
  })
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

export class CreateMultipleProjectRequestDto {
  @IsNotEmpty()
  @ArrayNotEmpty() // 배열이 비어있지 않은지!
  @ValidateNested({ each: true }) // 배열의 각 요소에 대해 유효성 검사
  @Type(() => CreateProjectRequestDto) // 변환을 위해 필요
  projects!: CreateProjectRequestDto[];
}

export class UpdateProjectRequestDto extends PartialType(
  OmitType(CreateProjectRequestDto, ['planId']),
) {
  // @IsNotEmpty()
  // @IsString()
  // projectId!: string;
}

export class LinkPreviewResponseDto {
  @ApiProperty({ description: '원본 URL', example: 'https://www.notion.so/' })
  url?: string;

  @ApiProperty({
    description: '페이지 제목',
    example: 'Notion | Your wiki, docs, & projects. Together.',
  })
  title?: string;

  @ApiProperty({
    description: '페이지 설명',
    example:
      'Notion is the connected workspace where better, faster work happens. Now with AI',
  })
  description?: string;

  @ApiProperty({
    description: '미리보기 이미지 URL',
    example: 'https://www.notion.so/images/meta/default.png',
  })
  imageUrl?: string;
}
