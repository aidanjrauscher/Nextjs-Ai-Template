import Head from 'next/head'
import { Inter } from 'next/font/google'


export const runtime = 'experimental-edge';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Next.js AI App</title>
        <meta name="description" content="A Next.js app powered by AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      </main>
    </>
  )
}
