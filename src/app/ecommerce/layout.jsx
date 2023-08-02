import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function EcommerceLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
