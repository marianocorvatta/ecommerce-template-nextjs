import NextAuthProvider from '@/components/Auth/AuthProvider'
import SessionStatus from '@/components/Auth/SessionStatus'

export const metadata = {
  title: 'Admin',
}

export default function AdminLayout({ children }) {
  return (
    <NextAuthProvider>
      <section>{children}</section>
      <SessionStatus />
    </NextAuthProvider>
  )
}
