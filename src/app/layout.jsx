import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Template',
  description: 'nextjs + prisma + Postgres db',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
