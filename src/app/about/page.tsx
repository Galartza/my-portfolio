'use client';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import React, { useEffect, useRef, useState } from 'react';
import styles from './about.module.css';
import 'animate.css';
import Image from 'next/image'; // Importar el componente Image de Next.js

const AboutPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  // Detectar si debe animarse al entrar
  useEffect(() => {
    const shouldAnimate = localStorage.getItem('shouldAnimateEnter');
    if (shouldAnimate === 'true') {
      setIsEntering(true);
      localStorage.removeItem('shouldAnimateEnter'); // Limpiar después de la animación
    }
  }, []);

  // Observar la visibilidad de la sección
  useEffect(() => {
    const currentSectionRef = sectionRef.current; // Copiar el valor actual de sectionRef

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionContainer} animate__animated ${isEntering ? 'animate__fadeIn' : ''}`}
    >
      <div className={styles.containerContent}>
        <div className={styles.containerText}>
          <h1 className={`${styles.titleAbout} animate__animated ${isVisible ? 'animate__backInDown' : 'animate__fadeOutUp'}`}>
            Sobre mí
          </h1>
          <p className={`${styles.description} animate__animated ${isVisible ? 'animate__backInLeft' : 'animate__fadeOutLeft'}`}>
            Soy programador Front-end. Apasionado por crear soluciones digitales que mejoren la experiencia del usuario.
            <br />
            También tengo conocimientos en back-end adquiridos en mis estudios y proyectos.
            <br />
            Mi objetivo es aprender y crecer como desarrollador, enfrentando nuevos desafíos para seguir ampliando mis habilidades en esa área.
          </p>
        </div>

        <div className={`${styles.containerImage} animate__animated ${isVisible ? 'animate__backInRight' : 'animate__fadeOutRight'}`}>
          {/* Imagen colocada directamente */}
          <Image
            src="/Coder.png" // Ruta de la imagen en la carpeta public
            alt="aboutme"
            width={500} // Ajusta el ancho según tus necesidades
            height={500} // Ajusta el alto según tus necesidades
            className={styles.imgAbout}
          />
        </div>
      </div>
      <NavigationBar />
    </section>
  );
};

export default AboutPage;