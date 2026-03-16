import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async initProfile(profileId?: string) {
    const id = profileId || crypto.randomUUID()

    const profile = await this.prisma.profile.upsert({
      where: { id },
      update: {},
      create: { id }
    })

    return { profileId: profile.id }
  }
}