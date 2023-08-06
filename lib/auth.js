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
    async signIn({ user }) {
      const isAllowedToSignIn = user?.role === 'admin'
      if (isAllowedToSignIn) {
        return true
      } else {
        return '/'
      }
    },
    async session({ session, user }) {
      const token = await db.account.findFirst({
        where: { userId: user.id },
      })

      session.accessToken = token?.access_token
      session.user.id = token?.userId
      session.user.role = user.role
      return session
    },
  },
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
}
