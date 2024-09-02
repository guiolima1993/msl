'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './Midia.scss';

interface MidiaProps {
  leftImageSrc: string;
  leftTitle: string;
  rightText: string;
  bottomLeftImageSrc: string;
  bottomRightImageSrc: string;
  buttonLink: string; // Novo atributo para o link do botão
}

const Midia: React.FC<MidiaProps> = ({
  leftImageSrc,
  leftTitle,
  rightText,
  bottomLeftImageSrc,
  bottomRightImageSrc,
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

    const midiaSection = document.querySelector('.midia-container');
    if (midiaSection) {
      observer.observe(midiaSection);
    }

    return () => {
      if (midiaSection) {
        observer.unobserve(midiaSection);
      }
    };
  }, []);

  return (
    <div className={`midia-container ${show ? 'show' : ''}`}>
      <div className="midia-content">
        <div className="midia-left">
          <Image src={leftImageSrc} alt="Left Image" width={200} height={100} layout="responsive" />
          <h2>{leftTitle}</h2>
        </div>
        <div className="midia-right">
          <p className='midia-right-text'
            dangerouslySetInnerHTML={{
              __html: `
                Por mais de 8 anos, atuei neste mercado sozinho… <span>revelando esta grande oportunidade</span> apenas para pessoas próximas a mim…<br><br>
                Minha família achou que eu estava louco em abandonar uma carreira de 7 anos como apresentador de TV para lavar sofás...<br><br>
                meus amigos achavam que eu não iria conseguir, hoje os mesmos que criticavam, me admiram pelas minhas conquistas.<br><br>
                Sem investir um real, usando apenas o que eu tinha em casa pra começar, esse foi o resultado que eu construí:
              `
            }}
          />
        </div>
      </div>
      <div className="midia-bottom">
        <div className="bottom-left">
          <Image src={bottomLeftImageSrc} alt="Bottom Left Image" width={150} height={150} layout="responsive" />
        </div>
        <div className="bottom-right">
          <Image src={bottomRightImageSrc} alt="Bottom Right Image" width={150} height={150} layout="responsive" />
        </div>
      </div>
      <h3 className='guru-title'>Não sou um guru, mas posso te ensinar a ganhar dinheiro</h3>
      <span className='guru-text'>Já transformei a vida de diversos brasileiros em dezenas de países. Assim como a vida desse ex-lavador de carros.</span>
      <div className="midia-video-container">
        <video controls poster="/image/capa-video-alexandre.webp" className="midia-video">
          <source src="/video/depoimento-alexandre.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <div className="midia-button-container">
        <a href={buttonLink} style={{ textDecoration: 'none' }}>
          <button className="midia-button">
            QUERO TER MINHA VIDA TRANSFORMADA
          </button>
        </a>
      </div>
    </div>
  );
};

export default Midia;
