import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger';

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
  ValidateNested,
} from 'class-validator';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { GENDER, GenderEnum, USER_PART, UserPartEnum } from '@common/enum/user.enum';
import { transformStringToBigint } from '@common/utils/transform.util';

import {
  APPLICATION_STATUS,
  ApplicationStatusEnum,
  QUESTION_TYPE,
  QuestionTypeEnum,
} from '@/projects';

export class CreateChallengerDtoV2 {
  @ApiProperty({ type: String, description: 'UMC 스태프/챌린저 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  umsbId!: bigint;

  @ApiProperty({ type: String, description: '이름' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ type: String, description: '닉네임' })
  @IsString()
  @IsNotEmpty()
  nickname!: string;

  @ApiProperty({ enum: GENDER, description: '성별' })
  @IsEnum(GENDER)
  @IsNotEmpty()
  gender!: GenderEnum;

  @ApiProperty({ type: String, description: '학교 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  schoolId!: bigint;

  @ApiProperty({ type: String, description: '학번' })
  @IsString()
  @IsNotEmpty()
  studentId!: string;

  @ApiProperty({ type: String, description: '프로필 이미지 URL', required: false })
  @IsOptional()
  profileImageUrl?: string;

  @ApiProperty({ type: String, description: '비밀번호 해시' })
  @IsString()
  @IsNotEmpty()
  passwordHash!: string;
}

export class UpdateChallengerDtoV2 extends PickType(CreateChallengerDtoV2, [
  'profileImageUrl',
  'passwordHash',
]) {}

export class CreateChallengerGisuDtoV2 {
  @ApiProperty({ type: String, description: '챌린저 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  challengerId!: bigint;

  @ApiProperty({ type: String, description: '기수별 학교 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  chapterSchoolId!: bigint;

  @ApiProperty({ type: Boolean, description: '수료 여부' })
  @IsBoolean()
  @IsNotEmpty()
  isTerminated!: boolean;

  @ApiProperty({ enum: USER_PART, description: '파트' })
  @IsEnum(USER_PART)
  @IsNotEmpty()
  part!: UserPartEnum;

  @ApiProperty({ type: Boolean, description: '학교 관리자 여부' })
  @IsNotEmpty()
  @IsBoolean()
  isSchoolAdmin!: boolean;

  @ApiProperty({ type: Boolean, description: '챕터 관리자 여부' })
  @IsNotEmpty()
  @IsBoolean()
  isChapterAdmin!: boolean;

  @ApiProperty({ type: Boolean, description: '중앙 관리자 여부' })
  @IsBoolean()
  @IsNotEmpty()
  isCentralAdmin!: boolean;

  @ApiProperty({ type: String, description: '학교 관리자 타입', required: false })
  @IsOptional()
  @IsString()
  schoolAdminType?: string;

  @ApiProperty({ type: String, description: '챕터 관리자 타입', required: false })
  @IsOptional()
  @IsString()
  chapterAdminType?: string;

  @ApiProperty({ type: String, description: '중앙 관리자 타입', required: false })
  @IsOptional()
  @IsString()
  centralAdminType?: string;
}

export class UpdateChallengerGisuDtoV2 extends PickType(CreateChallengerGisuDtoV2, [
  'isTerminated',
]) {}

export class CreateGisuDtoV2 {
  @ApiProperty({ type: String, description: '기수 이름' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ type: String, description: '기수 설명', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: Boolean, description: '현재 기수 여부', required: false })
  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;
}

export class UpdateGisuDtoV2 extends PartialType(CreateGisuDtoV2) {}

export class CreateGisuChapterDtoV2 {
  @ApiProperty({ type: String, description: '챕터 이름' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ type: String, description: '챕터 설명', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: String, description: '기수 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  gisuId!: bigint;
}

export class CreateChapterSchoolDtoV2 {
  @ApiProperty({ type: String, description: '챕터 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  chapterId!: bigint;

  @ApiProperty({ type: String, description: '학교 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  schoolId!: bigint;

  @ApiProperty({ type: String, description: '리더 ID', required: false })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsOptional()
  leaderId?: bigint;

  @ApiProperty({ type: String, description: '부리더 ID', required: false })
  @Transform(transformStringToBigint)
  @IsOptional()
  @IsBigInt()
  viceLeaderId?: bigint;
}

export class UpdateGisuSchoolDtoV2 extends PartialType(CreateChapterSchoolDtoV2) {}

export class CreateSchoolDtoV2 {
  @ApiProperty({ type: String, description: '학교 이름' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ type: String, description: '로고 이미지 URL', required: false })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  logoImageUrl?: string;

  @ApiProperty({ type: String, description: '학교 설명', required: false })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description?: string;
}

export class CreateSchoolBulkDtoV2 {
  @ApiProperty({ type: [CreateSchoolDtoV2], description: '학교 목록' })
  @IsArray()
  @Type(() => CreateSchoolDtoV2)
  @ValidateNested({ each: true })
  schools!: CreateSchoolDtoV2[];
}

export class UpdateSchoolDtoV2 extends PartialType(CreateSchoolDtoV2) {}

export class CreateProjectToDtoV2 {
  @ApiProperty({ type: String, description: '프로젝트 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  projectId!: bigint;

  @ApiProperty({ enum: USER_PART, description: '파트' })
  @IsEnum(USER_PART)
  @IsNotEmpty()
  part!: UserPartEnum;

  @ApiProperty({ type: Number, description: '모집 인원' })
  @IsNumber()
  @IsNotEmpty()
  to!: number;
}

export class CreateProjectToWithoutProjectIdDtoV2 extends OmitType(CreateProjectToDtoV2, [
  'projectId',
] as const) {}

export class CreateProjectDtoV2 {
  @ApiProperty({ type: String, description: '프로젝트 이름' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ type: String, description: '프로젝트 설명', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: String, description: '챕터 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  chapterId!: bigint;

  @ApiProperty({ type: String, description: '로고 이미지 URL', required: false })
  @IsOptional()
  @IsString()
  logoImageUrl?: string;

  @ApiProperty({ type: String, description: '배너 이미지 URL', required: false })
  @IsOptional()
  @IsString()
  bannerImageUrl?: string;
}

export class UpdateProjectDtoV2 extends PartialType(CreateProjectDtoV2) {}

export class CreateProjectWithToRequestDtoV2 extends CreateProjectDtoV2 {
  @ApiProperty({ type: [CreateProjectToWithoutProjectIdDtoV2], description: '파트별 모집 인원' })
  @IsArray()
  @Type(() => CreateProjectToWithoutProjectIdDtoV2)
  @ValidateNested({ each: true })
  partTos!: CreateProjectToWithoutProjectIdDtoV2[];
}

export class CreateProjectMemberDtoV2 {
  @ApiProperty({ type: String, description: '프로젝트 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  projectId!: bigint;

  @ApiProperty({ type: String, description: '챌린저 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  challengerId!: bigint;

  @ApiProperty({ type: Boolean, description: '활성 여부', required: false, default: true })
  @IsBoolean()
  @IsOptional()
  isActive: boolean = true;
}

export class UpdateProjectMemberDtoV2 extends PartialType(CreateProjectMemberDtoV2) {}

export class CreateApplicationFormDtoV2 {
  @ApiProperty({ type: String, description: '프로젝트 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  projectId!: bigint;

  @ApiProperty({ type: String, description: '지원서 제목' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ type: String, description: '지원서 설명', required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
export class UpdateApplicationFormDtoV2 extends PartialType(
  OmitType(CreateApplicationFormDtoV2, ['projectId']),
) {}

export class CreateFormQuestionDtoV2 {
  @ApiProperty({ type: String, description: '지원서 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  formId!: bigint;

  @ApiProperty({ type: Number, description: '질문 번호' })
  @IsInt()
  @IsNotEmpty()
  questionNo!: number;

  @ApiProperty({ type: String, description: '질문 제목' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ type: String, description: '질문 설명', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ enum: QUESTION_TYPE, description: '질문 타입' })
  @IsEnum(QUESTION_TYPE)
  @IsNotEmpty()
  type!: QuestionTypeEnum;

  @ApiProperty({ type: [String], description: '선택지' })
  @IsArray()
  @ArrayNotEmpty()
  options!: string[];

  @ApiProperty({ type: Boolean, description: '필수 여부' })
  @IsBoolean()
  @IsNotEmpty()
  isRequired!: boolean;

  @ApiProperty({ type: Boolean, description: '삭제 여부' })
  @IsBoolean()
  @IsNotEmpty()
  isDeleted!: boolean;
}
export class CreateFormQuestionWithoutFormIdDtoV2 extends OmitType(CreateFormQuestionDtoV2, [
  'formId',
] as const) {}

export class CreateApplicationFormWithQuestionsDtoV2 extends CreateApplicationFormDtoV2 {
  @ApiProperty({ type: [CreateFormQuestionWithoutFormIdDtoV2], description: '질문 목록' })
  @IsArray()
  @Type(() => CreateFormQuestionWithoutFormIdDtoV2)
  @ValidateNested({ each: true })
  questions!: CreateFormQuestionWithoutFormIdDtoV2[];
}

export class UpdateFormQuestionDtoV2 extends PartialType(CreateFormQuestionDtoV2) {}

export class CreateApplicationDtoV2 {
  @ApiProperty({ type: String, description: '지원서 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  formId!: bigint;

  @ApiProperty({ type: String, description: '지원자 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  applicantId!: bigint;

  @ApiProperty({ type: String, description: '매칭 회차 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  matchingRoundId!: bigint;

  @ApiProperty({
    enum: APPLICATION_STATUS,
    description: '지원 상태',
    default: APPLICATION_STATUS.PENDING,
  })
  @IsEnum(APPLICATION_STATUS)
  @IsNotEmpty()
  status: ApplicationStatusEnum = APPLICATION_STATUS.PENDING;
}

export class UpdateApplicationDtoV2 extends PickType(CreateApplicationDtoV2, ['status']) {}

export class CreateApplicationResponseDtoV2 {
  @ApiProperty({ type: String, description: '지원서 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  applicationId!: bigint;

  @ApiProperty({ type: String, description: '질문 ID' })
  @Transform(transformStringToBigint)
  @IsBigInt()
  @IsNotEmpty()
  questionId!: bigint;

  @ApiProperty({ type: [String], description: '응답' })
  @IsArray()
  @ArrayNotEmpty()
  value!: string[];
}

export class CreateApplicationWithResponsesDtoV2 extends CreateApplicationDtoV2 {
  @ApiProperty({ type: [CreateApplicationResponseDtoV2], description: '응답 목록' })
  @IsArray()
  @Type(() => CreateApplicationResponseDtoV2)
  @ValidateNested({ each: true })
  responses!: CreateApplicationResponseDtoV2[];
}

export class CreateMatchingRoundDtoV2 {
  @ApiProperty({ type: String, description: '매칭 회차 이름' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ type: String, description: '매칭 회차 설명', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: Date, description: '시작일' })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  startAt!: Date;

  @ApiProperty({ type: Date, description: '종료일' })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  endAt!: Date;
}

export class UpdateMatchingRoundDtoV2 extends PartialType(CreateMatchingRoundDtoV2) {}
