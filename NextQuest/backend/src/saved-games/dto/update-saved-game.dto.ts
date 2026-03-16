import { IsOptional, IsString } from 'class-validator'

export class UpdateSavedGameDto {
  @IsOptional()
  @IsString()
  status?: string

  @IsOptional()
  @IsString()
  note?: string
}