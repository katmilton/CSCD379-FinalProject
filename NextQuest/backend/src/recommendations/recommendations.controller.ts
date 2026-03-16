import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { RecommendationsService } from './recommendations.service'
import { RecommendationRequestDto } from './dto/recommendation-request.dto'

@Controller('recommendations')
export class RecommendationsController {
  constructor(private readonly recommendationsService: RecommendationsService) {}

  @Post()
  create(@Body() dto: RecommendationRequestDto) {
    return this.recommendationsService.getRecommendations(dto.profileId, dto.prompt)
  }

  @Get('history')
  getHistory(@Query('profileId') profileId: string) {
    return this.recommendationsService.getHistory(profileId)
  }
}