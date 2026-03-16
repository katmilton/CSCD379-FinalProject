import { IsOptional, IsString } from 'class-validator'

export class InitProfileDto {
  @IsOptional()
  @IsString()
  profileId?: string
}