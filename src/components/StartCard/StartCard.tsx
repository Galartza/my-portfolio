'use client';
import React, { useState } from 'react';
import styles from './StartCard.module.css';
import { useRouter } from 'next/navigation';
import 'animate.css';
import Image from 'next/image';

const StartCard = () => {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const handleExit = () => {
    setIsExiting(true);
    localStorage.setItem('shouldAnimateNav', 'true'); // Indicador para animar la nav
    setTimeout(() => {
      router.push('/about');
    }, 1000); // Duración que coincide con la animación de salida
  };

  return (
    <div className={`${styles.card} animate__animated ${isExiting ? 'animate__zoomOutUp' : 'animate__zoomInDown'}`}>
      <div className={styles.cardBorderTop}></div>
      <span className={styles.titleSpan}>¡Bienvenido a mi Portfolio!</span>
      <Image
        className={styles.img}
        src="/avatar.png"
        width={140}
        height={140}
        alt="Avatar"
      />
      <span className={styles.nameSpan}>Joaquin Galarza</span>
      <p className={styles.job}>Programador Front-End</p>
      <button className={styles.btnComeOn} onClick={handleExit}>
        ¡Vamos!
      </button>
    </div>
  );
};

export default StartCard;