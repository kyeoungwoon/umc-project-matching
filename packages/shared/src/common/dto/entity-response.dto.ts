import { ApiProperty } from '@nestjs/swagger';

import { Transform, Type, plainToInstance } from 'class-transformer';

import { transformBigintToString, transformDate } from '@common/utils/transform.util';

import { GENDER, GenderEnum, USER_PART, UserPartEnum } from '@/common';
import { ApplicationStatusEnum, QUESTION_TYPE, QuestionTypeEnum } from '@/projects';

export class BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '생성일' })
  @Transform(transformDate)
  createdAt!: string;

  @ApiProperty({ type: String, description: '수정일' })
  @Transform(transformDate)
  updatedAt!: string;

  /**
   * DB Entity 또는 Plain Object를 해당 DTO 클래스 인스턴스로 변환합니다.
   * @param data DB Entity 또는 Plain Object
   * @returns 해당 DTO 인스턴스
   */
  static fromEntity<T extends BaseTimestampResponseDto>(this: new () => T, data: unknown): T {
    // 1. DTO 클래스 자체를 타겟으로 지정합니다 (this).
    // 2. excludeExtraneousValues: true 옵션으로 DTO에 정의되지 않은 필드를 제거합니다.
    return plainToInstance(this, data, {
      // TODO: expose 된거만 내보내는 옵션인데, 지금은 내보낼 수 있는 내용만 있기 때문에 의미가 없긴 함
      excludeExtraneousValues: false,
      enableImplicitConversion: true, // @Type 등이 잘 동작하도록 보장
      exposeUnsetFields: true, // undefined 필드 제외, default값도 true 입니다. 명시적으로 표시함.
    });
  }
}

export class ChallengerEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '챌린저 ID' })
  id!: string;

  @ApiProperty({ type: String, description: 'UMC 스태프/챌린저 ID' })
  umsbId!: string;

  @ApiProperty({ type: String, description: '이름' })
  name!: string;

  @ApiProperty({ type: String, description: '닉네임' })
  nickname!: string;

  @ApiProperty({ enum: GENDER, description: '성별' })
  gender!: GenderEnum;

  @ApiProperty({ type: String, description: '학교 ID' })
  schoolId!: string;

  @ApiProperty({ type: String, description: '학번' })
  studentId!: string;

  @ApiProperty({ type: String, description: '프로필 이미지 URL', required: false })
  profileImageUrl?: string;
}

export class ChallengerGisuEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '챌린저 기수 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '챌린저 ID' })
  challengerId!: string;

  @ApiProperty({ type: String, description: '기수별 학교 ID' })
  chapterSchoolId!: string;

  @ApiProperty({ type: Boolean, description: '수료 여부' })
  isTerminated!: boolean;

  @ApiProperty({ enum: USER_PART, description: '파트' })
  part!: UserPartEnum;

  @ApiProperty({ type: Boolean, description: '중앙 관리자 여부' })
  isCentralAdmin!: boolean;

  @ApiProperty({ type: Boolean, description: '챕터 관리자 여부' })
  isChapterAdmin!: boolean;

  @ApiProperty({ type: Boolean, description: '학교 관리자 여부' })
  isSchoolAdmin!: boolean;
}

export class GisuEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '기수 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '기수 이름' })
  name!: string;

  @ApiProperty({ type: String, description: '기수 설명', required: false })
  description?: string;

  @ApiProperty({ type: Boolean, description: '현재 기수 여부' })
  isCurrent!: boolean;
}

export class GisuChapterEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '챕터 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '챕터 이름' })
  name!: string;

  @ApiProperty({ type: String, description: '챕터 설명', required: false })
  description?: string;

  @ApiProperty({ type: String, description: '기수 ID' })
  gisuId!: string;
}

export class GisuWithChaptersResponseDto extends GisuEntityResponseDto {
  @ApiProperty({ type: [GisuChapterEntityResponseDto], description: '기수의 챕터 목록' })
  @Type(() => GisuChapterEntityResponseDto)
  chapters!: GisuChapterEntityResponseDto[];
}

export class ChapterSchoolEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '기수별 학교 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '챕터 ID' })
  chapterId!: string;

  @ApiProperty({ type: String, description: '학교 ID' })
  schoolId!: string;

  @ApiProperty({ type: String, description: '리더 ID' })
  leaderId!: string;

  @ApiProperty({ type: String, description: '부리더 ID' })
  viceLeaderId!: string;
}

export class SchoolEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '학교 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '학교 이름' })
  name!: string;

  @ApiProperty({ type: String, description: '로고 이미지 URL', required: false })
  logoImageUrl?: string;
}

export class ProjectEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '프로젝트 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '프로젝트 이름' })
  name!: string;

  @ApiProperty({ type: String, description: '프로젝트 설명', required: false })
  description?: string;

  @ApiProperty({ type: String, description: '챕터 ID' })
  chapterId!: string;

  @ApiProperty({ type: String, description: '로고 이미지 URL', required: false })
  logoImageUrl?: string;

  @ApiProperty({ type: String, description: '배너 이미지 URL', required: false })
  bannerImageUrl?: string;
}

export class ProjectToEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '프로젝트 모집 인원 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '프로젝트 ID' })
  projectId!: string;

  @ApiProperty({ enum: USER_PART, description: '파트' })
  part!: UserPartEnum;

  @ApiProperty({ type: Number, description: '모집 인원' })
  to!: number;
}

export class ProjectMemberEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '프로젝트 멤버 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '프로젝트 ID' })
  projectId!: string;

  @ApiProperty({ type: String, description: '챌린저 ID' })
  challengerId!: string;

  @ApiProperty({ type: Boolean, description: '활성 여부' })
  isActive!: boolean;
}

export class ProjectWithToResponseDto extends ProjectEntityResponseDto {
  @ApiProperty({ type: [ProjectToEntityResponseDto], description: '파트별 모집 인원' })
  @Type(() => ProjectToEntityResponseDto)
  tos!: ProjectToEntityResponseDto[];
}

export class ProjectWithToAndMemberResponseDto extends ProjectWithToResponseDto {
  @ApiProperty({ type: [ProjectMemberEntityResponseDto], description: '프로젝트 멤버 목록' })
  @Type(() => ProjectMemberEntityResponseDto)
  members!: ProjectMemberEntityResponseDto[];
}

export class ApplicationFormEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '지원서 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '프로젝트 ID' })
  projectId!: string;

  @ApiProperty({ type: String, description: '지원서 제목' })
  title!: string;

  @ApiProperty({ type: String, description: '지원서 설명', required: false })
  description?: string;
}

// 선언 떄문에 아래로 순서 이동
export class ProjectWithToAndMemberAndFormResponseDto extends ProjectWithToAndMemberResponseDto {
  @ApiProperty({ type: [ApplicationFormEntityResponseDto], description: '지원서 목록' })
  @Type(() => ApplicationFormEntityResponseDto)
  applicationForms!: ApplicationFormEntityResponseDto[];
}

export class FormQuestionEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '질문 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '지원서 ID' })
  formId!: string;

  @ApiProperty({ type: Number, description: '질문 번호' })
  questionNo!: number;

  @ApiProperty({ type: String, description: '질문 제목' })
  title!: string;

  @ApiProperty({ type: String, description: '질문 설명', required: false })
  description?: string;

  @ApiProperty({ enum: QUESTION_TYPE, description: '질문 타입' })
  type!: QuestionTypeEnum;

  @ApiProperty({ type: [String], description: '선택지' })
  options!: string[];

  @ApiProperty({ type: Boolean, description: '필수 여부' })
  isRequired!: boolean;

  @ApiProperty({ type: Boolean, description: '삭제 여부' })
  isDeleted!: boolean;
}

export class ApplicationFormWithQuestionsEntityResponseDto extends ApplicationFormEntityResponseDto {
  @ApiProperty({ type: [FormQuestionEntityResponseDto], description: '지원서 질문 목록' })
  @Type(() => FormQuestionEntityResponseDto)
  questions!: FormQuestionEntityResponseDto[];
}

export class ApplicationEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '지원 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '지원서 ID' })
  formId!: string;

  @ApiProperty({ type: String, description: '지원자 ID' })
  applicantId!: string;

  @ApiProperty({ type: String, description: '매칭 회차 ID' })
  matchingRoundId!: string;

  @ApiProperty({ type: String, description: '지원 상태' })
  status!: ApplicationStatusEnum;
}

export class ApplicationResponseEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '지원 응답 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '지원 ID' })
  applicationId!: string;

  @ApiProperty({ type: String, description: '질문 ID' })
  questionId!: string;

  @ApiProperty({ type: [String], description: '응답' })
  value!: string[];
}

export class MatchingRoundEntityResponseDto extends BaseTimestampResponseDto {
  @ApiProperty({ type: String, description: '매칭 회차 ID' })
  id!: string;

  @ApiProperty({ type: String, description: '매칭 회차 이름' })
  name!: string;

  @ApiProperty({ type: String, description: '매칭 회차 설명', required: false })
  description?: string;

  @ApiProperty({ type: String, description: '챕터 ID' })
  chapterId!: string;

  @ApiProperty({ type: Date, description: '시작일' })
  @Transform(transformDate)
  startAt!: string;

  @ApiProperty({ type: Date, description: '종료일' })
  @Transform(transformDate)
  endAt!: string;
}

export class GisuChapterWithProjectsResponseDto extends GisuChapterEntityResponseDto {
  @ApiProperty({ type: [ProjectEntityResponseDto], description: '챕터의 프로젝트 목록' })
  @Type(() => ProjectEntityResponseDto)
  projects!: ProjectEntityResponseDto[];
}

export class ApplicationWithApplicantAndMatchingRoundAndResponsesDto extends ApplicationEntityResponseDto {
  @ApiProperty({ type: ChallengerEntityResponseDto, description: '지원자 정보' })
  @Type(() => ChallengerEntityResponseDto)
  applicant!: ChallengerEntityResponseDto;

  @ApiProperty({ type: MatchingRoundEntityResponseDto, description: '매칭 회차 정보' })
  @Type(() => MatchingRoundEntityResponseDto)
  matchingRound!: MatchingRoundEntityResponseDto;

  @ApiProperty({ type: [ApplicationResponseEntityResponseDto], description: '지원 응답 목록' })
  @Type(() => ApplicationResponseEntityResponseDto)
  responses!: ApplicationResponseEntityResponseDto[];
}
