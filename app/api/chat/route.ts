import { NextApiRequest, NextApiResponse } from 'next'
import logger from '@/lib/logger';

export default async function createMessage(req: NextApiRequest, res: NextApiResponse) {

  const apiKey = process.env.OPENAI_API_KEY
  // const url = 'http://localhost:8080/rag/qa-over-pdf' 
  logger.info(req.query)
  const url = 'https://api.openai.com/v1/responses'
  logger.info('url: ' + url)

  try {
    logger.info('About to call openai')
    logger.info('url: ' + url)

    const postBody = '{    "model": "gpt-4.1",     "input": "Tell me a three sentence bedtime story about a unicorn." }'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X_CONV_ID': 'convo-id-123456',
        Authorization: `Bearer ${apiKey}`
      },
      body: postBody
    })
    const data = await response.json()
    logger.info('BFF response received.')
    logger.info(data)
    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
