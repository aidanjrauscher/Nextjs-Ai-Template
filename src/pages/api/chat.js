import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return new Response("Request must be POST.", { status: 405 })
  }

  const { messages } = await req.json();

  if (!messages) {
    return new Response("No messages provided for chat.", { status: 400 })
  }

  const parameters = {
    temperature: 0.5
  }

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages,
    ...parameters
  })
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
