import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CartIcon } from '@/icons'

export default function EcommerceLayout({ children }) {
  return (
    <>
      <Nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">
          <CartIcon />
        </Link>
      </Nav>
      {children}
      <Footer />
    </>
  )
}
