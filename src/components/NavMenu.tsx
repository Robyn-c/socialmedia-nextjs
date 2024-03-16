import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css"
import logo from "@/assets/logo.png"

import React from 'react'



export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
          src={logo}
          width={200}
          alt="Nook logo"
          />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/search'}>Search</Link>
        </li>
        <li>
          <Link href={'/explore'}>Explore</Link>
        </li>
        <li>
          <Link href={'/account'}>Account</Link>
        </li>
      </ul>
    </nav>
  )
}
