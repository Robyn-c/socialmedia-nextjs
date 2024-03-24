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
  </ul>
  )
}

export default NavLinks