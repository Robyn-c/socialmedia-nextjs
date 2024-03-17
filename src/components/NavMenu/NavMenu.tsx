import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css"
import logo from "@/assets/logo.png"

import React from 'react'
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";



export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
          src={logo}
          width={125}
          alt="Nook logo"
          />
      </Link>
      <SidebarRoutes />
    </nav>
  )
}
