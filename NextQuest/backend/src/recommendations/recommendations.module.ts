import { Module } from '@nestjs/common'
import { RecommendationsController } from './recommendations.controller'
import { RecommendationsService } from './recommendations.service'
import { AzureSearchModule } from '../azure-search/azure-search.module'
import { OpenAiModule } from '../openai/openai.module'

@Module({
  imports: [AzureSearchModule, OpenAiModule],
  controllers: [RecommendationsController],
  providers: [RecommendationsService]
})
export class RecommendationsModule {}