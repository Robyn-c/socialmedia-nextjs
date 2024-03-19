import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css"
import logo from "@/assets/nook-logo.svg"

import React from 'react'
import { Compass, Home, Search, User } from "lucide-react";
import NavLinks from "../NavLinks/NavLinks";
import { SignInButton } from "@/components/AccountButtons/AccountButtons";



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
        <NavLinks />
        <SignInButton/>
      </nav>
  )
}
