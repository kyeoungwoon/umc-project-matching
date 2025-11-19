import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

import { transformStringToBigint } from '@common/utils/transform.util';

export class LoginRequestDto {
  @IsNotEmpty()
  @IsString()
  @Transform(transformStringToBigint)
  schoolId!: bigint;

  @IsNotEmpty()
  @IsString()
  studentId!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}

export class ChangePasswordRequestDto {
  @IsNotEmpty()
  @IsString()
  currentPassword!: string;

  @IsNotEmpty()
  @IsString()
  newPassword!: string;
}

export class CreateSchoolRequestDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  handle!: string;
}
