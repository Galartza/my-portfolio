'use client';
import React, { useState } from 'react'; // Eliminamos useEffect si no se usa
import styles from './NavigationBar.module.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import 'animate.css';
import { FaFolderOpen, FaHome, FaPhone, FaUser } from 'react-icons/fa';

const NavigationBar: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    if (pathname === path) return; // Evitar la animación si ya estamos en la página

    e.preventDefault();
    setIsExiting(true);
    localStorage.setItem('shouldAnimateEnter', 'true');

    setTimeout(() => {
      router.push(path);
    }, 500);
  };

  return (
    <nav className={`${styles.nav} animate__animated ${isExiting ? 'animate__fadeOutUp' : 'animate__fadeInDown'}`}>
      <ul className={styles.navItem}>
        <li className={styles.navList}>
          <Link
            href="/"
            onClick={(e) => handleNavigation(e, '/')}
            className={`${styles.navLink} ${pathname === '/' ? styles.actives : ''}`}
          >
            <FaHome className={styles.navIcon} />
            <p className={`${styles.textNavLink} ${pathname === '/' ? styles.active : ''}`}>Home</p>
          </Link>
        </li>
        <li className={styles.navList}>
          <Link
            href="/about"
            onClick={(e) => handleNavigation(e, '/about')}
            className={`${styles.navLink} ${pathname === '/about' ? styles.actives : ''}`}
          >
            <FaUser className={styles.navIcon} />
            <p className={`${styles.textNavLink} ${pathname === '/about' ? styles.active : ''}`}>About Me</p>
          </Link>
        </li>
        <li className={styles.navList}>
          <Link
            href="/portfolio"
            onClick={(e) => handleNavigation(e, '/portfolio')}
            className={`${styles.navLink} ${pathname === '/portfolio' ? styles.actives : ''}`}
          >
            <FaFolderOpen className={styles.navIcon} />
            <p className={`${styles.textNavLink} ${pathname === '/portfolio' ? styles.active : ''}`}>Portfolio</p>
          </Link>
        </li>
        <li className={styles.navList}>
          <Link
            href="/contact"
            onClick={(e) => handleNavigation(e, '/contact')}
            className={`${styles.navLink} ${pathname === '/contact' ? styles.actives : ''}`}
          >
            <FaPhone className={styles.navIcon} />
            <p className={`${styles.textNavLink} ${pathname === '/contact' ? styles.active : ''}`}>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;