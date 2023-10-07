import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req, res) {
  const { prompt } = await req.json();

  if (!prompt) {
    return new Response("No prompt provided for generation.", { status: 400 })
  }

  const parameters = {
    temperature: 0.5
  }
  const response = await openai.completions.create({
    model: 'text-davinci-003',
    stream: true,
    prompt: prompt,
    ...parameters
  })
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}