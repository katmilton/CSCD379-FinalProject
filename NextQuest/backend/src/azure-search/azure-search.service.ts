import { Injectable } from '@nestjs/common'
import {
  AzureKeyCredential,
  SearchClient,
  SearchIndexClient
} from '@azure/search-documents'

@Injectable()
export class AzureSearchService {
  private readonly endpoint = process.env.AZURE_SEARCH_ENDPOINT!
  private readonly apiKey = process.env.AZURE_SEARCH_API_KEY!
  private readonly indexName = process.env.AZURE_SEARCH_INDEX_NAME || 'games-index'

  getIndexClient() {
    return new SearchIndexClient(
      this.endpoint,
      new AzureKeyCredential(this.apiKey)
    )
  }

  getSearchClient<T extends object>() {
    return new SearchClient<T>(
      this.endpoint,
      this.indexName,
      new AzureKeyCredential(this.apiKey)
    )
  }

  async searchByVector(vector: number[], k = 5) {
    const client = this.getSearchClient<any>()

    const results = await client.search('*', {
      vectorSearchOptions: {
        queries: [
          {
            kind: 'vector',
            vector,
            fields: ['contentVector'],
            kNearestNeighborsCount: k
          }
        ]
      },
      select: [
        'id',
        'title',
        'description',
        'genres',
        'tags',
        'platforms',
        'estimatedHours',
        'releaseYear',
        'imageUrl'
      ]
    })

    const docs: any[] = []

    for await (const result of results.results) {
      docs.push(result.document)
    }

    return docs
  }

  async uploadDocuments(documents: any[]) {
    const client = this.getSearchClient<any>()
    return client.uploadDocuments(documents)
  }
}