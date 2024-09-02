import React from 'react';
import Image from 'next/image';
import styles from './GuaranteeSection.module.scss';

interface GuaranteeSectionProps {
  iconSrc: string;
  iconText: string;
  title: string;
  description1: string;
  description2: string;
  svgImageSrc: string;
  buttonLink: string;
  buttonText: string;
  buttonIconSrc: string;
}

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  iconSrc,
  iconText,
  title,
  description1,
  description2,
  svgImageSrc,
  buttonLink,
  buttonText,
  buttonIconSrc
}) => {
  return (
    <section className={styles.guaranteeSection}>
      <div className='container'>
        <div className={styles.container}>
          <div className={styles.leftContent}>
            <div className={styles.iconTextContainer}>
              <img src={iconSrc} alt="Icon" className={styles.icon} />
              <p>{iconText}</p>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description1}</p>
            <p className={styles.description}>{description2}</p>
          </div>
          <div className={styles.rightContent}>
            <img src={svgImageSrc} alt="Guarantee SVG" className={styles.svgImage} />
          </div>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <a href={buttonLink} style={{ textDecoration: 'none' }}>
          <button className={styles.button}>{buttonText}</button>
        </a>
        <Image src={buttonIconSrc} alt="Additional Image" width={560} height={36} className={styles.buttonIconSrc} />
      </div>
    </section>
  );
};

export default GuaranteeSection;
