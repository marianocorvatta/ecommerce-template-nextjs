import NextAuthProvider from '@/components/Auth/AuthProvider'
import { LogButton } from '@/components/Auth/LogButton'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Admin',
}

export default function AdminLayout({ children }) {
  return (
    <NextAuthProvider>
      <Nav>
        <h3>Admin</h3>
        <LogButton />
      </Nav>
      <section>{children}</section>
    </NextAuthProvider>
  )
}
