"use client"

import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import styles from "./NavItem.module.css"

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const NavItem = ({
  icon: Icon,
  label,
  href,
} : NavItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = 
  (pathname === "/" && href === "/") ||
  pathname === href ||
  pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  }

  return (   
    <li onClick={onClick} className={`${styles.list_item} ${isActive ? styles.list_link_active : ""}`}>
      <Icon size={22}/>
      {label}
    </li>
  )
}

export default NavItem