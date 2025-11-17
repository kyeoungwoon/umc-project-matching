export interface CreateMatchingRoundRequestDto {
  name: string;
  startDatetime: string; // ISO 8601 format
  endDatetime: string; // ISO 8601 format
}

export interface MatchingRoundResponseDto {
  id: string;
  name: string;
  startDatetime: string;
  endDatetime: string;
  createdAt: string;
  updatedAt: string;
}

export interface TestCreateMatchingRoundResponseDto extends MatchingRoundResponseDto {}
