import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

//example of a server component using auth
export default async function Home() {
  const  session = await getServerSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <a className='btn btn-primary' href='/api/auth/signout'>Sign out</a>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <a className='btn btn-primary' href='/api/auth/signin'>Sign in</a>
    </>
  )
}
