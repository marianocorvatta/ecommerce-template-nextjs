'use client'

import { signOut } from 'next-auth/react'
import styles from './LogButton.module.css'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export const LogButton = () => {
  const { data: session, status } = useSession()

  // TODO: check if user is admin
  // if user is not admin redirect to ecommerce home

  return (
    <>
      {session ? (
        <button
          className={styles.logButton}
          onClick={() => signOut({ redirect: false })}
        >
          Logout
        </button>
      ) : (
        <Link className={styles.logButton} href="/api/auth/signin">
          Log in
        </Link>
      )}
      {status === 'authenticated' && session.user?.name}
    </>
  )
}
