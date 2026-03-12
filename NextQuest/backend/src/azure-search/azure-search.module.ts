import { Module } from '@nestjs/common'
import { AzureSearchService } from './azure-search.service'

@Module({
  providers: [AzureSearchService],
  exports: [AzureSearchService]
})
export class AzureSearchModule {}