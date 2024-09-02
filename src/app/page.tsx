import Hero from '../components/Hero';
import Midia from '../components/Midia';
import ListingSection from '../components/ListingSection';
import CornerImages from '../components/CornerImages';
import TitleWithLists from '../components/TitleWithLists';
import RememberSection from '../components/RememberSection';
import GuaranteeSection from '../components/GuaranteeSection'
import TvSection from '../components/TvSection';

export default function Home() {
  const videoEmbedCode = `
    <script src="https://cdn.converteai.net/lib/js/smartplayer/v1/sdk.min.js" data-id="66c89a20b4a9a4000c5db388"></script>
    <div id="ifr_66c89a20b4a9a4000c5db388_wrapper" style="margin: 0 auto; width: 100%">
      <div style="padding:56.25% 0 0 0;position:relative;" id="ifr_66c89a20b4a9a4000c5db388_aspect">
        <iframe frameborder="0" allowfullscreen src="https://scripts.converteai.net/73877598-724a-4c8a-b6e9-e85c5bc73e91/players/66c89a20b4a9a4000c5db388/embed.html" id="ifr_66c89a20b4a9a4000c5db388" style="position:absolute;top:0;left:0;width:100%;height:100%;" referrerpolicy="origin"></iframe>
      </div>
    </div>
    <style>
      .elementor-element:has(#ifr_66c89a20b4a9a4000c5db388_wrapper) { width: 100%; }
    </style>
  `;

  const headlineHTML = `
    Transforme um <span>detergente</span> de prato e uma <span>escova de roupas</span> em uma máquina de imprimir dinheiro.
  `;
  const subheadlineHTML = `
    Descubra como ganhar de 2 a 4 mil reais de uma forma simples e prática com o que tem em casa.
  `;
  const titleHTML = `Tudo isso, para hoje poder te ensinar verdadeiramente como ganhar dinheiro neste mercado que é uma <span>mina de ouro</span>`;

  const textHTML = `Dentro do <span>Método Sofá Lucrativo</span>, você vai entender exatamente como entrar nesta mina de ouro mesmo que não saiba nada sobre higienização de estofados…`;

  const listItems = [
    { imageSrc: '/image/coin-1.png', text: 'Vai aprender a usar os produtos que tem na sua casa para iniciar sua empresa' },
    { imageSrc: '/image/coin-2.png', text: 'Quais são os principais tipos de tecido e quais técnicas você deve aplicar em cada um deles' },
    { imageSrc: '/image/coin-3.png', text: 'Como fazer o processo de escovação, que eu chamo de carinho no tecido, para deixar o sofá como se fosse novo…' },
    { imageSrc: '/image/coin-4.png', text: 'Como tirar manchas dos estofados e dicas pra surpreender seus clientes aumentando a chance de te indicarem para outras pessoas' },
    { imageSrc: '/image/coin-5.png', text: 'Como você vai precificar esse trabalho pra conseguir chegar nos valores de 2000 a 4000 reais extras.' }
  ];

  const guaranteeIconSrc = '/image/security.svg';
  const guaranteeIconText = 'RISCO ZERO | Garantia de 30 dias';
  const guaranteeTitle = 'Se você não ganhar dinheiro com o método eu devolvo cada centavo do seu investimento!';
  const guaranteeDescription1 = 'Você está amparado com a nossa garantia de 30 dias de resultado! Se você assistir todas as aulas do treinamento, colocar em prática o que eu te ensino lá, e não conseguir fazer pelo menos 200 reais…';
  const guaranteeDescription2 = 'Eu devolvo 100% do seu dinheiro… ou você fica 100% satisfeito, fazendo uma renda extra nesse mercado tão lucrativo e fértil… ou fica 100% satisfeito com seu dinheiro de volta!';
  const guaranteeSvgImageSrc = '/image/coin-guarantee.svg';
  const guaranteeButtonLink = 'https://pay.hotmart.com/R94400471W';
  const guaranteeButtonText = 'SIM, QUERO TESTAR O MÉTODO POR 30 DIAS SEM RISCO';
  const guaranteebuttonIconSrc = '/image/infos-msl.png';

  return (
    <>
      <CornerImages />
      <div className='container'>
        <Hero
          heroImageSrc="/image/msl-logo.webp"
          buttonIconSrc="/image/infos-msl.png"
          videoEmbedCode={videoEmbedCode}
          headline={headlineHTML}
          subheadline={subheadlineHTML}
          buttonLink="https://pay.hotmart.com/R94400471W"
        />
        <Midia
          leftImageSrc="/image/cash.png"
          leftTitle="Eu larguei a profissão de Apresentador de TV do Multishow pra entrar nesse mercado inexplorado…"
          rightText="Por mais de 8 anos, atuei neste mercado sozinho… revelando esta grande oportunidade apenas para pessoas próximas a mim… Minha família achou que eu estava louco em abandonar uma carreira de 7 anos como apresentador de TV para lavar sofás... meus amigos achavam que eu não iria conseguir, hoje os mesmos que criticavam, me admiram pelas minhas conquistas. Sem investir um real, usando apenas o que eu tinha em casa pra começar, esse foi o resultado que eu construí:"
          bottomLeftImageSrc="/image/midia-1.webp"
          bottomRightImageSrc="/image/midia-2.png"
          buttonLink="https://pay.hotmart.com/R94400471W"
        />
      </div>
      <ListingSection
        title={titleHTML}
        description={textHTML}
        items={listItems}
        buttonText="SIM, QUERO TER ACESSO AO MÉTODO SOFÁ LUCRATIVO"
        buttonLink="https://pay.hotmart.com/R94400471W"
        backgroundImageSrc="/image/bg-list.jpg"
      />
      <TitleWithLists
        buttonText="QUERO TER ACESSO AO MÉTODO SOFÁ LUCRATIVO"
        buttonLink="https://example.com/acesso"
      />
      <RememberSection
        buttonLink="https://pay.hotmart.com/R94400471W"
        buttonIconSrc="/image/infos-msl.png"
      />
       <GuaranteeSection
        iconSrc={guaranteeIconSrc}
        iconText={guaranteeIconText}
        title={guaranteeTitle}
        description1={guaranteeDescription1}
        description2={guaranteeDescription2}
        svgImageSrc={guaranteeSvgImageSrc}
        buttonLink={guaranteeButtonLink}
        buttonText={guaranteeButtonText}
        buttonIconSrc={guaranteebuttonIconSrc}
      />
      <TvSection />
    </>
  );
}
