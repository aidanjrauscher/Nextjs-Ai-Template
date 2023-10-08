import './globals.css'
import { getServerSession } from "next-auth/next"
import ClientProvider from "../components/ClientProvider"

export default async function RootLayout({ children}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <ClientProvider session={session}>
        <body className="h-screen w-screen flex flex-col bg-white">{children}</body>
      </ClientProvider>
    </html>
  )
}
