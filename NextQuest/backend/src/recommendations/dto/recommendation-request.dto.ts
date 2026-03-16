import { IsString } from 'class-validator'

export class RecommendationRequestDto {
  @IsString()
  profileId: string

  @IsString()
  prompt: string
}