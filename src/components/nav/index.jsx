'use client'

import Link from 'next/link'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <section>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </nav>
    </section>
  )
}

export default Nav
