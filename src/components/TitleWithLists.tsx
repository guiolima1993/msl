'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './TitleWithLists.scss';

interface ListItem {
  text: string;
}

interface Card {
  title: string;
  description: string;
  image: string;
}

interface TitleWithListsProps {
  buttonText: string;
  buttonLink: string;
}

const TitleWithLists: React.FC<TitleWithListsProps> = ({ buttonText, buttonLink }) => {
  const [fadeInTitle, setFadeInTitle] = useState(false);
  const [fadeInLists, setFadeInLists] = useState(false);
  const [fadeInImage, setFadeInImage] = useState(false);
  const [fadeInCards, setFadeInCards] = useState(false);
  const [fadeInFinalSection, setFadeInFinalSection] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftListRef = useRef<HTMLUListElement>(null);
  const rightListRef = useRef<HTMLUListElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const finalSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeInTitle(true);
          setFadeInLists(true);
          setFadeInImage(true);
          setFadeInCards(true);
          setFadeInFinalSection(true);
        }
      },
      observerOptions
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (leftListRef.current) observer.observe(leftListRef.current);
    if (rightListRef.current) observer.observe(rightListRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);
    if (finalSectionRef.current) observer.observe(finalSectionRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (leftListRef.current) observer.unobserve(leftListRef.current);
      if (rightListRef.current) observer.unobserve(rightListRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
      if (finalSectionRef.current) observer.unobserve(finalSectionRef.current);
    };
  }, []);

  const leftListItems: ListItem[] = [
    { text: 'Procura uma nova fonte de renda, sem precisar investir muito dinheiro' },
    { text: 'Quer construir um negócio lucrativo com baixo investimento' },
    { text: 'Deseja ter mais dinheiro para curtir com a família, viajar e ser independente' },
  ];

  const rightListItems: ListItem[] = [
    { text: 'Quer dinheiro rápido para quitar dívidas' },
    { text: 'Quer ter dinheiro para comprar uma casa, carro ou simplesmente ser dono do seu próprio negócio' },
    { text: 'Não quer depender de um emprego fixo e quer ter mais tempo para família' },
  ];

  const cards: Card[] = [
    {
      title: 'Treinamento de limpeza e higienização de bancos automotivos',
      description: 'Um serviço extra que você pode vender para seus clientes e lucrar ainda mais (sem gastar um real!) e pode até montar uma nova empresa só de higienização automotiva.',
      image: '/image/metodo-1.png',
    },
    {
      title: 'O meu Livro Digital para você profissionalizar seu negócio de higienização',
      description: 'o passo a passo de como você vai sair do amadorismo e se transformar em profissional para aumentar sua lucratividade nesse mercado que é um oceano azul de oportunidades!',
      image: '/image/metodo-2.png',
    },
    {
      title: 'Fórmula do Perfil Magnético',
      description: 'O método que vai fazer você atrair novos clientes todos os dias para o seu perfil do instagram, sem precisar gastar 1 único centavo!',
      image: '/image/magnetico.png',
    },
  ];

  return (
    <div className="title-with-lists">
      <div className='title-container'>
        <h1
          className={`title ${fadeInTitle ? 'fade-in' : ''}`}
          ref={titleRef}
        >
          O Método Sofá Lucrativo é para você que…
        </h1>
        <div className="lists-container">
          <ul
            className={`list left-list ${fadeInLists ? 'fade-in' : ''}`}
            ref={leftListRef}
          >
            {leftListItems.map((item, index) => (
              <li key={index}>
                <img src="/image/check.png" alt="Icone check de lista" />
                <span className="list-text">{item.text}</span>
              </li>
            ))}
          </ul>
          <ul
            className={`list right-list ${fadeInLists ? 'fade-in' : ''}`}
            ref={rightListRef}
          >
            {rightListItems.map((item, index) => (
              <li key={index}>
                <img src="/image/check.png" alt="Icone check de lista" />
                <span className="list-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`sofa-image-container ${fadeInImage ? 'fade-in' : ''}`}
          ref={imageRef}
        >
          <Image src="/image/sofa.webp" alt="Sofá" layout="fill" />
        </div>
        <div
          className={`cards-container ${fadeInCards ? 'fade-in' : ''}`}
          ref={cardsRef}
        >
          <h2 className="cards-title">E para que você ganhe dinheiro mais rápido, eu preparei alguns presentes:</h2>
          {cards.map((card, index) => (
            <div key={index} className={`card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
              <div className="card-image">
                <Image src={card.image} alt={card.title} layout="fill" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
          <h3 className='last-title'>Bônus Especial - Apenas para os 100 primeiros</h3>
        </div>
        <div
          className={`final-section ${fadeInFinalSection ? 'fade-in' : ''}`}
          ref={finalSectionRef}
        >
          <div className="final-text">
            <h3>Meu livro físico:<br></br> "Nunca mais seja pobre"</h3>
            <p>Que ainda não foi lançado… e você poderá ser uma das primeiras pessoas a receber em sua casa autografado e totalmente gratuito.</p>
            <p>Lá, vou revelar alguns segredos da minha história… e os atalhos que segui para ter minha independência financeira.</p>
          </div>
          <div className="final-image">
            <Image src="/image/last-book.webp" alt="Transformação" layout="fill" />
          </div>
        </div>
        <a href={buttonLink} className="final-button" target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </div>
      <div className='border-bottom'>
        <img className='img-left' src="/image/img-left.svg" alt="Icone de borda" />
        <img className='img-right' src="/image/img-right.svg" alt="Icone de borda" />
      </div>
    </div>
  );
};

export default TitleWithLists;
