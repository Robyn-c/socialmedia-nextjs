import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'
import styles from "./page.module.css"

export default async function AccountPage() {
  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
    // return <p>You must be signed in...</p>
  }

  return (
    <div>Account Page</div>
  )
}
