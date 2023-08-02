'use client'

import Link from 'next/link'
import styles from './Nav.module.css'
import { Cart } from '@/icons'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/cart">
        <Cart />
      </Link>
    </nav>
  )
}

export default Nav
