"use client"

import { Compass, Home, Search, User } from 'lucide-react'
import React from 'react'
import styles from "./NavLinks.module.css"
import NavItem from '../NavItem/NavItem';
const guestRoutes = [
    {
        icon: Home,
        label: "Home",
        href: "/"
    },
    {
        icon: Search,
        label: "Search",
        href: "/search"
    },
    {
        icon: Compass,
        label: "Explore",
        href: "/explore",
    },
    {
        icon: User,
        label: "Account",
        href: "/account" 
    }
]

function NavLinks() {

    const routes = guestRoutes;

  return (
    <ul className={styles.list}>
        {routes.map((route) => (
          <NavItem 
              key={route.href}
              icon={route.icon}
              label={route.label}
              href={route.href}
            />
        ))}
{/*     <li>
      <Search size={20} color="#ddd4cc" />
      <Link href={'/search'}>Search</Link>
    </li>
    <li>
      <Link href={'/explore'}>Explore</Link>
    </li>
    <li>
      <Link href={'/account'}>Account</Link>
    </li> */}
  </ul>
  )
}

export default NavLinks