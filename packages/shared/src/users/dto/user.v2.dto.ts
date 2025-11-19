import {
  ChallengerEntityResponseDto,
  SchoolEntityResponseDto,
} from '@common/dto/entity-response.dto';

export class ChallengerWithSchoolDto extends ChallengerEntityResponseDto {
  school!: SchoolEntityResponseDto;
}
