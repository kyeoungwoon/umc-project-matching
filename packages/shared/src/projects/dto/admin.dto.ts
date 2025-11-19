import { ApiProperty } from '@nestjs/swagger';

import { APPLICATION_STATUS, ApplicationStatusEnum } from '@projects/enum';
import { Transform } from 'class-transformer';
import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { USER_PART, UserPartEnum } from '@/common';

export class ApplicationStatusByProjectRequestQuery {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '특정 프로젝트에 대해서만 조회합니다.',
  })
  projectId!: string;

  @IsOptional()
  @ApiProperty({
    description: '특정 매칭 라운드에서만 조회합니다.',
  })
  matchingRoundId?: string;

  @IsOptional()
  @IsEnum(USER_PART, { each: true })
  @Transform(({ value }) => {
    // 값이 undefined, null이면 그대로 반환 (@IsOptional이 처리)
    if (!value) {
      return value;
    }
    // 이미 배열이면 그대로 반환
    if (Array.isArray(value)) {
      return value;
    }
    // 배열이 아닌 값(문자열 등)이면 배열로 감싸서 반환
    return [value];
  })
  @IsArray()
  @ApiProperty({
    enum: USER_PART,
    description: '특정 파트의 사용자만 조회합니다. 여러 파트를 선택할 수 있습니다.',
    isArray: true,
  })
  part?: UserPartEnum[];
}

export class ApplicationStatsByChallengerRequestQuery {
  @IsOptional()
  @IsEnum(USER_PART)
  @ApiProperty({
    enum: USER_PART,
    description: '특정 파트의 사용자만 조회합니다.',
  })
  part?: UserPartEnum;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: '특정 학교의 사용자만 조회합니다.',
  })
  school?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: '특정 사용자만 조회합니다.',
  })
  challengerId?: string;
}

export class ApplicationStatsByChallengerResponseDto {
  applicationResults!: ChallengerApplicationInfo[];
}

export class ChallengerApplicationInfo {
  challengerId!: string;
  umsbChallengerId!: string;
  name!: string;
  nickname!: string;
  part!: UserPartEnum;
  school!: string;
  projectMember!: {
    projectId: string;
    title: string;
  };
  matchingResults!: {
    matchingRoundName: string;
    projectTitle: string;
    applicationStatus: ApplicationStatusEnum | 'NOT_APPLIED';
  }[];
}

export class ChangeApplicationStatusRequestDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '변경하고자 하는 지원서 ID',
  })
  applicationId!: string;

  @IsNotEmpty()
  @IsEnum(APPLICATION_STATUS)
  @ApiProperty({
    enum: APPLICATION_STATUS,
    description: '변경할 지원서 상태',
  })
  newStatus!: ApplicationStatusEnum;
}

export class ForceMatchChallengerToProjectRequestDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '강제 매칭할 챌린저 ID',
  })
  challengerId!: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '강제 매칭할 프로젝트 ID',
  })
  projectId!: string;
}
