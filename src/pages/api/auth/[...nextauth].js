import NextAuth from "next-auth"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add providers here
  ],
}
export default NextAuth(authOptions)