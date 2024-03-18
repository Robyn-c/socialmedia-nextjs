import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css"
import logo from "@/assets/nook-logo.svg"

import React from 'react'
import { Compass, Home, Search, User } from "lucide-react";
import NavLinks from "../NavLinks/NavLinks";



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
{/*       <ul className={styles.list}>
        <li className={styles.list_item}>
          <Link className={styles.list_link} href={'/'}>
            <Home /> 
            Home
          </Link>
        </li>  
        <li className={styles.list_item}>
          <Link className={styles.list_link} href={'/search'}>
            <Search /> 
            Search
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link className={styles.list_link} href={'/explore'}>
            <Compass /> 
            Explore
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link className={styles.list_link} href={'/account'}>
            <User /> 
            Account
          </Link>
        </li>
      </ul> */}
    </nav>
  )
}
