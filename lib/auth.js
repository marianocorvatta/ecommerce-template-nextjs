import { PrismaAdapter } from '@auth/prisma-adapter'
import GithubProvider from 'next-auth/providers/github'
import db from './prisma'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      session.accessToken = token.accessToken
      session.user.role = user.role
      session.user.id = token.id
      return session
    },
  },
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
}
