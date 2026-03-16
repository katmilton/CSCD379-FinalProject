import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common'
import { SavedGamesService } from './saved-games.service'
import { CreateSavedGameDto } from './dto/create-saved-game.dto'
import { UpdateSavedGameDto } from './dto/update-saved-game.dto'

@Controller('saved-games')
export class SavedGamesController {
  constructor(private readonly savedGamesService: SavedGamesService) {}

  @Get()
  getAll(@Query('profileId') profileId: string) {
    return this.savedGamesService.getAll(profileId)
  }

  @Post()
  create(@Body() dto: CreateSavedGameDto) {
    return this.savedGamesService.create(dto)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSavedGameDto) {
    return this.savedGamesService.update(id, dto)
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.savedGamesService.delete(id)
  }
}