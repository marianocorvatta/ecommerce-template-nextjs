'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function SessionStatus() {
  const { data: session, status } = useSession()

  // Check if user is admin after login with our API
  // if its not admin redirect to home page
  // is user is admin redirect to admin home page

  return (
    <div>
      ClientComponent {status}{' '}
      {status === 'authenticated' && session.user?.name}
      {!session && <Link href="/api/auth/signin">Log in</Link>}
      {session && <Link href="/admin">Admin</Link>}
    </div>
  )
}
