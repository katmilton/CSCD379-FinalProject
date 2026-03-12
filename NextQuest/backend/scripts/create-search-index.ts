import {
  AzureKeyCredential,
  SearchIndexClient
} from '@azure/search-documents'
import 'dotenv/config'

async function main() {
  const endpoint = process.env.AZURE_SEARCH_ENDPOINT
  const apiKey = process.env.AZURE_SEARCH_API_KEY
  const indexName = process.env.AZURE_SEARCH_INDEX_NAME || 'games-index'
  const dimensions = Number(process.env.AZURE_SEARCH_VECTOR_DIMENSIONS || '1536')

  if (!endpoint || !apiKey) {
    throw new Error('Missing Azure Search environment variables')
  }

  const indexClient = new SearchIndexClient(
    endpoint,
    new AzureKeyCredential(apiKey)
  )

  const index = {
    name: indexName,
    fields: [
      { name: 'id', type: 'Edm.String', key: true, filterable: true },
      { name: 'title', type: 'Edm.String', searchable: true },
      { name: 'description', type: 'Edm.String', searchable: true },
      { name: 'genres', type: 'Collection(Edm.String)', searchable: true, filterable: true, facetable: true },
      { name: 'tags', type: 'Collection(Edm.String)', searchable: true, filterable: true, facetable: true },
      { name: 'platforms', type: 'Collection(Edm.String)', searchable: true, filterable: true, facetable: true },
      { name: 'estimatedHours', type: 'Edm.Int32', filterable: true, sortable: true, facetable: true },
      { name: 'releaseYear', type: 'Edm.Int32', filterable: true, sortable: true, facetable: true },
      { name: 'imageUrl', type: 'Edm.String' },
      {
        name: 'contentVector',
        type: 'Collection(Edm.Single)',
        searchable: true,
        vectorSearchDimensions: dimensions,
        vectorSearchProfileName: 'games-vector-profile'
        }
    ],
    vectorSearch: {
      algorithms: [
        {
          name: 'games-hnsw',
          kind: 'hnsw'
        }
      ],
      profiles: [
        {
          name: 'games-vector-profile',
          algorithmConfigurationName: 'games-hnsw'
        }
      ]
    }
  }

  await indexClient.createOrUpdateIndex(index as any)
  console.log(`Index '${indexName}' created or updated successfully.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})