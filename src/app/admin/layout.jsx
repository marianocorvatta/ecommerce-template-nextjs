import NextAuthProvider from '@/components/Auth/AuthProvider'
import { LogOutButton } from '@/components/Auth/LogOutButton'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Admin',
}

export default function AdminLayout({ children }) {
  return (
    <NextAuthProvider>
      <Nav>
        <h3>Admin</h3>
        <LogOutButton />
      </Nav>
      <section>{children}</section>
    </NextAuthProvider>
  )
}
