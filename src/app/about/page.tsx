'use client';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import React, { useEffect, useRef, useState } from 'react';
import styles from './about.module.css';
import 'animate.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Importar el componente Image de Next.js

const AboutPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [buttonAnimation, setButtonAnimation] = useState('animate__backInUp');
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

  // Animar el botón cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setButtonAnimation('animate__heartBeat');

      setTimeout(() => {
        setButtonAnimation('');
      }, 5000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Función para manejar la redirección al contacto
  const handleContactClick = () => {
    router.push('/contact');
  };

  const contend = [
    {
      title: 'Sobre mí',
      description: (
        <>
          Soy programador Front-end. Apasionado por crear soluciones digitales que mejoren la experiencia del usuario.
          <br />
          También tengo conocimientos en back-end adquiridos en mis estudios y proyectos.
          <br />
          Mi objetivo es aprender y crecer como desarrollador, enfrentando nuevos desafíos para seguir ampliando mis habilidades en esa área.
        </>
      ),
      image: '/coder.png',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionContainer} animate__animated ${isEntering ? 'animate__fadeIn' : ''}`}
    >
      {contend.map((item, index) => (
        <div key={index} className={styles.containerContent}>
          <div className={styles.containerText}>
            <h1 className={`${styles.titleAbout} animate__animated ${isVisible ? 'animate__backInDown' : 'animate__fadeOutUp'}`}>
              {item.title}
            </h1>
            <p className={`${styles.description} animate__animated ${isVisible ? 'animate__backInLeft' : 'animate__fadeOutLeft'}`}>
              {item.description}
            </p>
            <div className={styles.btnContainer}>
              <button
                className={`${styles.btnContact} animate__animated ${buttonAnimation}`}
                onClick={handleContactClick}
              >
                <FaArrowRight /> Contactame <FaArrowLeft />
              </button>
            </div>
          </div>

          <div className={`${styles.containerImage} animate__animated ${isVisible ? 'animate__backInRight' : 'animate__fadeOutRight'}`}>
            {/* Reemplazar <img> con <Image /> de Next.js */}
            <Image
              src={item.image}
              alt="aboutme"
              width={500} // Ajusta el ancho según tus necesidades
              height={500} // Ajusta el alto según tus necesidades
              className={styles.imgAbout}
            />
          </div>
        </div>
      ))}
      <NavigationBar />
    </section>
  );
};

export default AboutPage;