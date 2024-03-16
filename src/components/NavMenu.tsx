import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css"
import logo from "@/assets/logo.png"

import React from 'react'



export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Image
        src={logo}
        width={150}
        alt="Nook logo"
      />
    </nav>
  )
}
