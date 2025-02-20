'use client'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import React, { useEffect, useRef, useState } from 'react'
import styles from './about.module.css'
import 'animate.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
    // Si "contact" es una página separada
    router.push('/contact');

    // Si "contact" es una sección en la misma página
    // document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const contend = [
    {
      title: "Sobre mí",
      description: (
        <>
          Soy programador Front-end. Apasionado por crear soluciones digitales que mejoren la experiencia del usuario.<br />
          También tengo conocimientos en back-end adquiridos en mis estudios y proyectos.<br />
          Mi objetivo es aprender y crecer como desarrollador, enfrentando nuevos desafíos para seguir ampliando mis habilidades en esa área.
        </>
      ),
      image: "/coder.png",
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
              <button className={`${styles.btnContact} animate__animated ${buttonAnimation}`} onClick={handleContactClick}>
                <FaArrowRight /> Contactame <FaArrowLeft />
              </button>
            </div>
          </div>

          <div className={`${styles.containerImage} animate__animated ${isVisible ? 'animate__backInRight' : 'animate__fadeOutRight'}`}>
            <img src={item.image} alt="aboutme" className={styles.imgAbout} />
          </div>
        </div>
      ))}
      <NavigationBar />
    </section>
  )
}

export default AboutPage;
