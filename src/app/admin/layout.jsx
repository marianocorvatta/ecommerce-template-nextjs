import { AdminNav } from '@/components/Admin/AdminNav'
import NextAuthProvider from '@/components/Auth/AuthProvider'

export const metadata = {
  title: 'Admin',
}

export default function AdminLayout({ children }) {
  return (
    <NextAuthProvider>
      <AdminNav />
      <section>{children}</section>
    </NextAuthProvider>
  )
}
