import { Transform, Type, plainToInstance } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { transformBigintToString, transformDate } from '@common/utils/transform.util';

import { GenderEnum, USER_PART, UserPartEnum } from '@/common';
import { ApplicationStatusEnum, QuestionTypeEnum } from '@/projects';

export class BaseTimestampResponseDto {
  @Transform(transformDate)
  createdAt!: Date;

  @Transform(transformDate)
  updatedAt!: Date;

  /**
   * DB Entity 또는 Plain Object를 해당 DTO 클래스 인스턴스로 변환합니다.
   * @param data DB Entity 또는 Plain Object
   * @returns 해당 DTO 인스턴스
   */
  static fromEntity<T extends BaseTimestampResponseDto>(this: new () => T, data: unknown): T {
    // 1. DTO 클래스 자체를 타겟으로 지정합니다 (this).
    // 2. excludeExtraneousValues: true 옵션으로 DTO에 정의되지 않은 필드를 제거합니다.
    return plainToInstance(this, data, {
      excludeExtraneousValues: true,
      enableImplicitConversion: true, // @Type 등이 잘 동작하도록 보장
    });
  }
}

export class ChallengerEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  @Transform(transformBigintToString)
  umsbId!: string;

  name!: string;
  nickname!: string;
  gender!: GenderEnum;
  schoolId!: string;
  studentId!: string;
  profileImageUrl?: string;
}

export class ChallengerGisuEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  @Transform(transformBigintToString)
  challengerId!: string;

  @Transform(transformBigintToString)
  chapterSchoolId!: string;

  isTerminated!: boolean;

  part!: UserPartEnum;

  isCentralAdmin!: boolean;
  isChapterAdmin!: boolean;
  isSchoolAdmin!: boolean;
}

export class GisuEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  name!: string;
  description?: string;

  isCurrent!: boolean;
}

export class GisuChapterEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  name!: string;
  description?: string;
  @Transform(transformBigintToString)
  gisuId!: string;
}

export class ChapterSchoolEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  @Transform(transformBigintToString)
  chapterId!: string;
  @Transform(transformBigintToString)
  schoolId!: string;

  @Transform(transformBigintToString)
  leaderId!: string;
  @Transform(transformBigintToString)
  viceLeaderId!: string;
}

export class SchoolEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  name!: string;
  logoImageUrl?: string;
}

export class ProjectEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  name!: string;
  description?: string;

  @Transform(transformBigintToString)
  chapterId!: string;

  logoImageUrl?: string;
  bannerImageUrl?: string;
}

export class ProjectToEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  @Transform(transformBigintToString)
  projectId!: string;

  part!: UserPartEnum;
  to!: number;
}

export class ProjectMemberEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  @Transform(transformBigintToString)
  projectId!: string;

  @Transform(transformBigintToString)
  challengerId!: string;

  isActive!: boolean;
}

export class ApplicationFormEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  @Transform(transformBigintToString)
  projectId!: string;

  title!: string;
  description?: string;
}

export class FormQuestionEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  @Transform(transformBigintToString)
  formId!: string;

  questionNo!: number;
  title!: string;
  description?: string;

  type!: QuestionTypeEnum;
  options!: string[];

  isRequired!: boolean;
  isDeleted!: boolean;
}

export class ApplicationEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  @Transform(transformBigintToString)
  formId!: string;

  @Transform(transformBigintToString)
  applicantId!: string;

  @Transform(transformBigintToString)
  matchingRoundId!: string;

  status!: ApplicationStatusEnum;
}

export class ApplicationResponseEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  @Transform(transformBigintToString)
  applicationId!: string;

  @Transform(transformBigintToString)
  questionId!: string;

  value!: string[];
}

export class MatchingRoundEntityResponseDto extends BaseTimestampResponseDto {
  @Transform(transformBigintToString)
  id!: string;

  name!: string;
  description?: string;

  @Transform(transformBigintToString)
  chapterId!: string;

  @Transform(transformDate)
  startAt!: Date;

  @Transform(transformDate)
  endAt!: Date;
}
