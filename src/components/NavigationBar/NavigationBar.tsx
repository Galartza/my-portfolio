'use client';
import React, { useState, useEffect } from 'react';
import styles from './NavigationBar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importar usePathname
import 'animate.css';
import { FaFolderOpen, FaHome, FaPhone, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const NavigationBar: React.FC = () => {
  const [isEntering, setIsEntering] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname(); // Obtener la ruta actual

  useEffect(() => {
    // Verificamos si hay un indicador en el localStorage
    const shouldAnimate = localStorage.getItem('shouldAnimateNav');
    if (shouldAnimate === 'true') {
      setIsEntering(true); // Activamos la animación de entrada
      localStorage.removeItem('shouldAnimateNav'); // Eliminamos el indicador
    }
  }, []);

  const handleExit = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    if (path === '/') {
      e.preventDefault(); // Evita la navegación inmediata
      setIsExiting(true); // Activa la animación de salida
      setTimeout(() => {
        router.push('/'); // Redirige después de la animación
      }, 1000); // Duración que coincide con la animación de salida
    }
  };

  return (
    <nav className={`${styles.nav} animate__animated ${isEntering ? 'animate__zoomInDown' : ''} ${isExiting ? 'animate__zoomOutUp' : ''}`}>
      <ul className={styles.navItem}>
        <li className={styles.navList}>
          <Link
            href={'/'}
            className={`${styles.navLink} ${pathname === '/' ? styles.actives : ''}`}
            onClick={(e) => handleExit(e, '/')}
            style={{ pointerEvents: isExiting ? 'none' : 'auto' }}
          >
            <FaHome className={`${styles.navIcon} ${pathname === '/' ? styles.actives : ''}`} />
            <p className={`${styles.textNavLink} ${pathname === '/' ? styles.active : ''}`}>home</p>
          </Link>
        </li>
        <li className={styles.navList}>
          <Link
            href={'/about'}
            className={`${styles.navLink} ${pathname === '/about' ? styles.actives : ''}`}
          >
            <FaUser className={`${styles.navIcon} ${pathname === '/about' ? styles.actives : ''}`} />
            <p className={`${styles.textNavLink} ${pathname === '/about' ? styles.active : ''}`}>about me</p>
          </Link>
        </li>
        <li className={styles.navList}>
          <Link
            href={'/portfolio'}
            className={`${styles.navLink} ${pathname === '/portfolio' ? styles.actives : ''}`}
          >
            <FaFolderOpen className={`${styles.navIcon} ${pathname === '/portfolio' ? styles.actives : ''}`} />
            <p className={`${styles.textNavLink} ${pathname === '/portfolio' ? styles.active : ''}`}>portfolio</p>
          </Link>
        </li>
        <li className={styles.navList}>
          <Link
            href={'/contact'}
            className={`${styles.navLink} ${pathname === '/contact' ? styles.actives : ''}`}
          >
            <FaPhone className={`${styles.navIcon} ${pathname === '/contact' ? styles.actives : ''}`} />
            <p className={`${styles.textNavLink} ${pathname === '/contact' ? styles.active : ''}`}>contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;