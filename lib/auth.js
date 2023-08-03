import { PrismaAdapter } from '@auth/prisma-adapter'
import GithubProvider from 'next-auth/providers/github'
import db from './prisma'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return { role: profile.role ?? 'USER' }
      },
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role
      return session
    },
  },
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
}
