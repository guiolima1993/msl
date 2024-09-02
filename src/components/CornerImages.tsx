'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './CornerImages.module.scss';

const CornerImages: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.cornerImages}>
      <Image
        src="/image/coin-left.png"
        alt="Coin Left"
        className={styles.topLeft}
        width={200}
        height={200}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }} // Ajuste a multiplicação conforme desejado
      />
      <Image
        src="/image/coin-right.png"
        alt="Coin Right"
        className={styles.topRight}
        width={200}
        height={200}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }} // Ajuste a multiplicação conforme desejado
      />
    </div>
  );
};

export default CornerImages;

