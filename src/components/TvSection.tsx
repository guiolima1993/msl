'use client';
import React, { useState } from 'react';
import styles from './TvSection.module.scss';

const TvSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordions = [
    {
      question: 'Por quanto tempo terei acesso ao Método Sofá Lucrativo?',
      answer: 'Você terá acesso durante 1 ano completo a partir do dia da inscrição no curso. No entanto, todos os materiais extras que você baixar serão seus para sempre.',
    },
    {
      question: 'Tenho garantia?',
      answer: 'Sim, você tem uma garantia de 30 dias. Ou seja, você pode participar das aulas, acessar todo o material extra e ainda assim, não faturar o mínimo pelo menos para pagar o treinamento, basta enviar um e-mail para contato@fritzpaixao.com que você irá receber cada centavo do seu investimento.',
    },
    {
      question: 'Já tentei empreender no mercado de higienização de estofados antes, por que vai dar certo agora?',
      answer: 'Porque você pode até saber higienizar um sofá, utilizar os melhores produtos, mas ainda não sabe vender. Se você comprar o pack de vendas, vai aprender a utilizar as redes sociais, potencializar o alcance com tráfego e conhecer algumas estratégias que me fizerem ser a maior referência desse mercado!',
    },
    {
      question: 'Tem suporte?',
      answer: 'Sim, eu (Fritz Paixão) junto com a minha equipe vamos te dar todo o suporte necessário dentro da área de membros. Portanto, qualquer dúvida relacionada ao curso você terá total suporte.',
    },
    {
      question: 'Quanto tempo preciso para ter resultado?',
      answer: 'Se você aplicar exatamente o que eu passo nas aulas, ainda essa semana você pode fechar os seus primeiros ou próximos clientes com muito mais facilidade.',
    },
    {
      question: 'Como acessar o Método?',
      answer: 'Assim que finalizar a sua inscrição, você receberá um e-mail da plataforma Hotmart, nesse e-mail você vai receber todos os seus dados para acessar o Método Sofá Lucrativo. Depois de acessar você pode assistir quando e onde quiser.',
    },
  ];

  return (
    <section className={styles.tvSection}>
      <div className="container">
        <div className={styles.headlineSmall}>Da TV para Lavador de Sofá</div>
        <h2 className={styles.headlineLarge}>Os segredos jamais relevados que me transformaram em um milionário</h2>
        <div className={styles.flexContainer}>
          <div className={styles.imageContainer}>
            <img src="https://cdn.shopify.com/s/files/1/0709/7086/7961/files/image-tv.webp?v=1723986043" alt="Fritz Paixao segurando premio ABF" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.texts}>
              <h6 className={styles.textsInfo}>A mente por trás de tudo</h6>
              <h3 className={styles.textsName}>
                Fritz Paixão <img className={styles.check} src="/image/check-name.png" alt="Check Name Fritz Paixao" />
              </h3>
              <p className={styles.text}>
                Prazer, meu nome é Fritz Paixão e depois que descobri como atuar neste mercado, eu larguei a <span>carreira de apresentador</span> de TV do Multishow, apenas para lavar estofados.
              </p>
              <p className={styles.text}> Pode até parecer estranho, mas hoje eu...</p>
              <ul className={styles.list}>
                <li>
                  <div className={styles.bgIcon}><img src="/image/list-1.png" alt="Icone Realidade" /></div>
                  <p>Mudei por completo minha realidade</p>
                </li>
                <li>
                  <div className={styles.bgIcon}><img src="/image/list-2.png" alt="Icone Realidade" /></div>
                  <p>Transformei meu negócio em uma franquia presente em 4 continentes e 12 países</p>
                </li>
                <li>
                  <div className={styles.bgIcon}><img src="/image/list-3.png" alt="Icone Realidade" /></div>
                  <p>Me tornei o empreendedor mais reconhecido e premiado do segmento</p>
                </li>
                <li>
                  <div className={styles.bgIcon}><img src="/image/list-4.png" alt="Icone Realidade" /></div>
                  <p>Tenho apoiado centenas de outros lavadores de sofá</p>
                </li>
                <li className={styles.last}>
                  <div className={styles.bgIcon}><img src="./image/list-5.png" alt="Icone Realidade" /></div>
                  <p>Descobri uma mina de ouro inexplorada nesse segmento.</p>
                </li>
              </ul>
            </div>
            <p className={styles.colorYellow}>"Mas se é tão bom, porque tem pouca gente atuando?"</p>
              <p className={styles.colorWhite}>Porque pouca gente sabe que esse mercado dá dinheiro!</p>
              <p className={styles.colorWhite}>Foi este mercado que permitiu eu conhecer o mundo, morar em Miami com minha família, realizar o sonho da casa própria e comprar o carro que sempre sonhei.</p>
              <p className={styles.colorYellow}>Agora chegou a hora de mostrar como VOCÊ TAMBÉM pode mudar a sua vida usando meu conhecimento, um detergente, uma escova e o seu celular.</p>
          </div>
        </div>
        <h3 className={styles.subheadline}>Ainda em dúvida? Então veja algumas das dúvidas mais frequentes:</h3>
        <div className={styles.accordionContainer}>
          {accordions.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <div className={styles.accordionHeader} onClick={() => toggleAccordion(index)}>
                <span>{item.question}</span>
                <div className={styles.icon}>
                  {activeIndex === index ? '-' : '+'}
                </div>
              </div>
              {activeIndex === index && <div className={styles.accordionContent}>{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TvSection;
