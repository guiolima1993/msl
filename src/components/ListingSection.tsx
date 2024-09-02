'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './ListingSection.scss';

interface ListItem {
  imageSrc: string;
  text: string;
}

interface ListingSectionProps {
  title: string;
  description: string;
  items: ListItem[];
  buttonText: string;
  buttonLink: string;
  backgroundImageSrc: string;
}

const ListingSection: React.FC<ListingSectionProps> = ({
  title,
  description,
  items,
  buttonText,
  buttonLink,
  backgroundImageSrc
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
      { threshold: 0.1 }
    );

    const listSection = document.querySelector('.listing-items');
    if (listSection) {
      observer.observe(listSection);
    }

    return () => {
      if (listSection) {
        observer.unobserve(listSection);
      }
    };
  }, []);

  return (
    <section className="listing-section">
      <div
        className="listing-background"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      />
      <div className="listing-content">
        <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text" dangerouslySetInnerHTML={{ __html: description }} />
        <ul className={`listing-items ${show ? 'fade-in' : ''}`}>
          {items.map((item, index) => (
            <li key={index} className="listing-item">
              <Image src={item.imageSrc} alt={`Item ${index + 1}`} width={100} height={100} layout="fixed" />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
        <a href={buttonLink} style={{ textDecoration: 'none' }}>
          <button className='list-button'>
            {buttonText}
          </button>
        </a>
      </div>
    </section>
  );
};

export default ListingSection;
