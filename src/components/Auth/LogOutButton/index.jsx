'use client'

import { signOut } from 'next-auth/react'
import styles from './LogOutButton.module.css'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export const LogOutButton = () => {
  const { data: session, status } = useSession()
  console.log('session', session)

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
