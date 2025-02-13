import React from 'react';
import styles from './StartCard.module.css';
import Link from 'next/link';
import 'animate.css';
import Image from 'next/image';

const StartCard = () => {
  return (
    <div className={`${styles.card} animate__animated animate__zoomInDown`}>
      <div className={styles.cardBorderTop}></div>
      <Image
        className={styles.img}
        src="/avatar.png" // Ruta correcta de la imagen
        width={140} // Ajusta el tamaño según sea necesario
        height={140} // Ajusta el tamaño según sea necesario
        alt=""
      />
      <span>Joaquin Galarza</span>
      <p className={styles.job}>Programador Front-End</p>
      <button className={styles.btnComeOn}>
        <Link href="/home">¡Vamos!</Link>
      </button>
    </div>
  );
};

export default StartCard;