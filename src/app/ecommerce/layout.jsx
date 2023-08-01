import Nav from '@/components/nav'
import Footer from '@/components/footer'

export default function EcommerceLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
