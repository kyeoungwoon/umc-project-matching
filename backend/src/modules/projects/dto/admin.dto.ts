import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApplicationStatusEnum, UserPartEnum } from '@generated/prisma/mongodb';
import { ApiProperty } from '@nestjs/swagger';

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
  @IsEnum(UserPartEnum, { each: true })
  @ApiProperty({
    enum: UserPartEnum,
    description:
      '특정 파트의 사용자만 조회합니다. 여러 파트를 선택할 수 있습니다.',
    isArray: true,
  })
  part?: UserPartEnum[];
}

export class ApplicationStatsByChallengerRequestQuery {
  @IsOptional()
  @IsEnum(UserPartEnum)
  @ApiProperty({
    enum: UserPartEnum,
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
  @IsEnum(ApplicationStatusEnum)
  @ApiProperty({
    enum: ApplicationStatusEnum,
    description: '변경할 지원서 상태',
  })
  newStatus!: ApplicationStatusEnum;
}
