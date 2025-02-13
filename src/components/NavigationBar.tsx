import React from 'react'
import styles from './NavigationBar.module.css'
import Link from 'next/link'
import { FaFolderOpen, FaHome, FaPhone, FaUser } from 'react-icons/fa'

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.navItem}>
            <li className={styles.navList}>
                <Link href={'/home'} className={styles.navLink}>
                    <FaHome  />
                </Link>
            </li>
            <li className={styles.navList}>
                <Link href={'/about'} className={styles.navLink}>
                    <FaUser />
                </Link>
            </li>
            <li className={styles.navList}>
                <Link href={'/portfolio'} className={styles.navLink}>
                    <FaFolderOpen />
                </Link>
            </li>
            <li className={styles.navList}>
                <Link href={'/contact'} className={styles.navLink}>
                    <FaPhone  />
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavigationBar;