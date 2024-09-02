'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './Hero.scss';

interface HeroProps {
  heroImageSrc: string;
  buttonIconSrc: string;
  videoEmbedCode: string;
  headline: string;
  subheadline: string;
  buttonLink: string; // Novo atributo para o link do botão
}

const Hero: React.FC<HeroProps> = ({
  heroImageSrc,
  buttonIconSrc,
  videoEmbedCode,
  headline,
  subheadline,
  buttonLink
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.1 } // Ajuste o valor conforme necessário
    );

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <section className={`hero-section ${show ? 'show' : ''}`} style={{ textAlign: 'center', padding: '2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <Image src={heroImageSrc} alt="Hero Image" width={200} height={100} className='hero-img' layout="responsive" />
        <h1 dangerouslySetInnerHTML={{ __html: headline }} className='head' />
        <p className='text' style={{ margin: '0.5rem 0' }}>{subheadline}</p>
        <div style={{ margin: '1.5rem 0', position: 'relative' }}>
          <div dangerouslySetInnerHTML={{ __html: videoEmbedCode }} />
        </div>
        <a href={buttonLink} style={{ textDecoration: 'none' }}>
          <button className="hero-button">
            APERTE AQUI PARA FAZER SUA INSCRIÇÃO
          </button>
        </a>
        <Image src={buttonIconSrc} alt="Button Icon" width={200} height={20} className='infos' />
      </div>
    </section>
  );
};

export default Hero;
