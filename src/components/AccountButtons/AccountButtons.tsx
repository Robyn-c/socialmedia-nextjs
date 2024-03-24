'use client';
import styles from './AccountButtons.module.css'
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import userIcon from '@/assets/userplaceholder.svg'
import { CircleUserRound } from 'lucide-react';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return <div className={styles.signIn}>...</div>;
  }

  if (status === 'authenticated') {
    return (
      <div className={styles.link}>
        <Link href={`/dashboard`}>
          <Image className={styles.image}
            src={session.user?.image ?? userIcon}
            width={32}
            height={32}
            alt="Your Name"
          />
        </Link>
        <SignOutButton></SignOutButton>
      </div>
    );
  }

  return (
    <button className={styles.signIn} onClick={() => signIn()}>
      <CircleUserRound size={28} />
      Sign In
    </button>
  )
}

export function SignOutButton() {
  return <button className={styles.signOut} onClick={() => signOut()}>Sign out</button>;
}