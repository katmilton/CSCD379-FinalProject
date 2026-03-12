import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateSavedGameDto } from './dto/create-saved-game.dto'
import { UpdateSavedGameDto } from './dto/update-saved-game.dto'

@Injectable()
export class SavedGamesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(profileId: string) {
    return this.prisma.savedGame.findMany({
      where: { profileId },
      include: { game: true },
      orderBy: { updatedAt: 'desc' }
    })
  }

  async create(dto: CreateSavedGameDto) {
    return this.prisma.savedGame.upsert({
      where: {
        profileId_gameId: {
          profileId: dto.profileId,
          gameId: dto.gameId
        }
      },
      update: {
        status: dto.status,
        note: dto.note
      },
      create: {
        profileId: dto.profileId,
        gameId: dto.gameId,
        status: dto.status,
        note: dto.note
      },
      include: { game: true }
    })
  }

  async update(id: number, dto: UpdateSavedGameDto) {
    const existing = await this.prisma.savedGame.findUnique({ where: { id } })

    if (!existing) {
      throw new NotFoundException('Saved game not found')
    }

    return this.prisma.savedGame.update({
      where: { id },
      data: {
        status: dto.status,
        note: dto.note
      },
      include: { game: true }
    })
  }

  async delete(id: number) {
    const existing = await this.prisma.savedGame.findUnique({ where: { id } })

    if (!existing) {
      throw new NotFoundException('Saved game not found')
    }

    await this.prisma.savedGame.delete({ where: { id } })
    return { success: true }
  }
}