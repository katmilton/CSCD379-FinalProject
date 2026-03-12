import { Body, Controller, Post } from '@nestjs/common'
import { ProfilesService } from './profiles.service'
import { InitProfileDto } from './dto/init-profile.dto'

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post('init')
  init(@Body() dto: InitProfileDto) {
    return this.profilesService.initProfile(dto.profileId)
  }
}