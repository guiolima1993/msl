import React from 'react';
import Image from 'next/image';
import styles from './RememberSection.module.scss';

interface ListItem {
  text: string;
  imageSrc: string;
}

interface RememberSectionProps {
  buttonLink: string;
  buttonIconSrc: string;
}

const listItems: ListItem[] = [
  { text: 'Método Sofá Lucrativo por 12 meses', imageSrc: '/image/check.png' },
  { text: 'Treinamento de limpeza e higienização de bancos automotivos;', imageSrc: '/image/check.png' },
  { text: 'Livro digital para você profissionalizar seu negócio de higienização;', imageSrc: '/image/check.png' },
  { text: 'Treinamento Fórmula do Perfil Magnético;', imageSrc: '/image/check.png' },
  { text: 'Livro Físico Autografado com os atalhos para o sucesso', imageSrc: '/image/check.png' }
];

const RememberSection: React.FC<RememberSectionProps> = ({ buttonLink, buttonIconSrc }) => {
  return (
    <section className={styles.rememberSection}>
      <h2 className={styles.title}>Vamos relembrar tudo o que você vai receber:</h2>
      <div className="container">
        <div className={styles.content}>
          <img src="/image/metodos.webp" alt="Métodos do sofá lucrativo" />
          <ul className={styles.list}>
            {listItems.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <img src={item.imageSrc} alt={`Item ${index + 1}`} />
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <p className={styles.textPrice}>APENAS HOJE, NESSA PÁGINA:<br /> <span>R$1.000,00 DE DESCONTO!</span></p>
          <p className={styles.priceRisque}>DE <span>R$1.197,00</span></p>
          <div className={styles.priceContent}>
            <p className={styles.priceText}>POR APENAS</p>
            <h3 className={styles.price}>12x de R$19</h3>
            <p className={styles.priceText}>ou R$197,00 à vista</p>
          </div>
          <div>
            <a href={buttonLink} style={{ textDecoration: 'none' }}>
              <button className={styles.rememberButton}>
                SIM, QUERO TER ACESSO AO MÉTODO SOFÁ LUCRATIVO
              </button>
            </a>
            <Image src={buttonIconSrc} alt="Button Icon" width={200} height={20} className={styles.infos} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RememberSection;
