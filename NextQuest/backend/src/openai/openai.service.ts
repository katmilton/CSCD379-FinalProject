import { Injectable } from '@nestjs/common'
import OpenAI from 'openai'

@Injectable()
export class OpenAiService {
  private client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  async createEmbedding(input: string): Promise<number[]> {
    const res = await this.client.embeddings.create({
      model: process.env.OPENAI_EMBED_MODEL!,
      input
    })

    return res.data[0].embedding
  }

  async explainRecommendations(prompt: string, candidates: any[]) {
    const response = await this.client.chat.completions.create({
      model: process.env.OPENAI_CHAT_MODEL!,
      messages: [
        {
          role: 'system',
          content:
            'You are a spoiler-free video game recommendation assistant. Only use the provided games.'
        },
        {
          role: 'user',
          content: `
User prompt:
${prompt}

Games:
${JSON.stringify(candidates, null, 2)}

Return valid JSON in this shape:
{
  "recommendations": [
    {
      "title": "string",
      "whyItMatches": "string"
    }
  ]
}
`
        }
      ],
      response_format: { type: 'json_object' }
    })

    return JSON.parse(response.choices[0].message.content || '{"recommendations":[]}')
  }
}