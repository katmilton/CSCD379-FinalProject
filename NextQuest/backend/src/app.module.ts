import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { ProfilesModule } from './profiles/profiles.module'
import { SavedGamesModule } from './saved-games/saved-games.module'
import { RecommendationsModule } from './recommendations/recommendations.module'
import { AzureSearchModule } from './azure-search/azure-search.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ProfilesModule,
    SavedGamesModule,
    RecommendationsModule,
    AzureSearchModule
  ]
})
export class AppModule {}