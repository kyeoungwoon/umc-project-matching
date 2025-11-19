import { PartialType, PickType } from '@nestjs/swagger';

import { Transform, Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';

import { transformStringToBigint } from '@common/utils/transform.util';

import { GENDER, GenderEnum, USER_PART, UserPartEnum } from '@/common';
import {
  APPLICATION_STATUS,
  ApplicationStatusEnum,
  QUESTION_TYPE,
  QuestionTypeEnum,
} from '@/projects';

export class CreateChallengerDtoV2 {
  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  umsbId!: bigint;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  nickname!: string;

  @IsEnum(GENDER)
  @IsNotEmpty()
  gender!: GenderEnum;

  @IsNumber()
  @IsNotEmpty()
  schoolId!: bigint;

  @IsString()
  @IsNotEmpty()
  studentId!: string;

  @IsOptional()
  @IsUrl()
  profileImageUrl?: string;

  @IsString()
  @IsNotEmpty()
  passwordHash!: string;
}

export class UpdateChallengerDtoV2 extends PickType(CreateChallengerDtoV2, [
  'profileImageUrl',
  'passwordHash',
]) {}

export class CreateChallengerGisuDtoV2 {
  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  challengerId!: bigint;

  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  chapterSchoolId!: bigint;

  @IsBoolean()
  @IsNotEmpty()
  isTerminated!: boolean;

  @IsEnum(USER_PART)
  @IsNotEmpty()
  part!: UserPartEnum;

  @IsNotEmpty()
  @IsBoolean()
  isSchoolAdmin!: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isChapterAdmin!: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isCentralAdmin!: boolean;

  @IsOptional()
  @IsString()
  schoolAdminType?: string;

  @IsOptional()
  @IsString()
  chapterAdminType?: string;

  @IsOptional()
  @IsString()
  centralAdminType?: string;
}

export class UpdateChallengerGisuDtoV2 extends PickType(CreateChallengerGisuDtoV2, [
  'isTerminated',
]) {}

export class CreateGisuDtoV2 {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;
}

export class UpdateGisuDtoV2 extends PartialType(CreateGisuDtoV2) {}

export class CreateGisuChapterDtoV2 {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @Transform(transformStringToBigint)
  @IsString()
  gisuId!: bigint;
}

export class CreateChapterSchoolDtoV2 {
  @Transform(transformStringToBigint)
  @IsString()
  chapterId!: bigint;

  @Transform(transformStringToBigint)
  @IsString()
  schoolId!: bigint;

  @Transform(transformStringToBigint)
  @IsString()
  @IsOptional()
  leaderId?: bigint;

  @Transform(transformStringToBigint)
  @IsOptional()
  @IsString()
  viceLeaderId?: bigint;
}

export class UpdateGisuSchoolDtoV2 extends PartialType(CreateChapterSchoolDtoV2) {}

export class CreateSchoolDtoV2 {
  @IsString()
  name!: string;

  @IsOptional()
  @IsUrl()
  logoImageUrl?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class CreateSchoolBulkDtoV2 {
  @IsArray()
  @Type(() => CreateSchoolDtoV2)
  @ValidateNested({ each: true })
  schools!: CreateSchoolDtoV2[];
}

export class UpdateSchoolDtoV2 extends PartialType(CreateSchoolDtoV2) {}

export class CreateProjectDtoV2 {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  chapterId!: bigint;

  @IsOptional()
  @IsUrl()
  logoImageUrl?: string;

  @IsOptional()
  @IsUrl()
  bannerImageUrl?: string;

  // 프로젝트 생성 시 이거도 같이 생성하게 해야함
  @IsArray()
  @Type(() => CreateProjectToDtoV2)
  @ValidateNested({ each: true })
  partTos!: CreateProjectToDtoV2[];
}

export class CreateProjectToDtoV2 {
  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  projectId!: bigint;

  @IsEnum(USER_PART)
  @IsNotEmpty()
  part!: UserPartEnum;

  @IsNumber()
  @IsNotEmpty()
  to!: number;
}

export class UpdateProjectDtoV2 extends PartialType(CreateProjectDtoV2) {}

export class CreateProjectMemberDtoV2 {
  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  projectId!: bigint;

  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  challengerId!: bigint;

  @IsBoolean()
  @IsOptional()
  isActive: boolean = true;
}

export class UpdateProjectMemberDtoV2 extends PartialType(CreateProjectMemberDtoV2) {}

export class CreateApplicationFormDtoV2 {
  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  projectId!: bigint;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;
}
export class UpdateApplicationFormDtoV2 extends PartialType(CreateApplicationFormDtoV2) {}

export class CreateFormQuestionDtoV2 {
  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  formId!: bigint;

  @IsInt()
  @IsNotEmpty()
  questionNo!: number;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(QUESTION_TYPE)
  @IsNotEmpty()
  type!: QuestionTypeEnum;

  @IsArray()
  @ArrayNotEmpty()
  options!: string[];

  @IsBoolean()
  @IsNotEmpty()
  isRequired!: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isDeleted!: boolean;
}

export class UpdateFormQuestionDtoV2 extends PartialType(CreateFormQuestionDtoV2) {}

export class CreateApplicationDtoV2 {
  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  formId!: bigint;

  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  applicantId!: bigint;

  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  matchingRoundId!: bigint;

  @IsEnum(APPLICATION_STATUS)
  @IsNotEmpty()
  status: ApplicationStatusEnum = APPLICATION_STATUS.SUBMITTED;
}

export class UpdateApplicationDtoV2 extends PickType(CreateApplicationDtoV2, ['status']) {}

export class CreateApplicationResponseDtoV2 {
  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  applicationId!: bigint;

  @Transform(transformStringToBigint)
  @IsString()
  @IsNotEmpty()
  questionId!: bigint;

  @IsArray()
  @ArrayNotEmpty()
  value!: string[];
}

export class CreateMatchingRoundDtoV2 {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  startAt!: Date;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  endAt!: Date;
}

export class UpdateMatchingRoundDtoV2 extends PartialType(CreateMatchingRoundDtoV2) {}
