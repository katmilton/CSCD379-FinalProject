import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateSavedGameDto {
  @IsString()
  profileId: string

  @IsInt()
  gameId: number

  @IsString()
  status: string

  @IsOptional()
  @IsString()
  note?: string
}