'use client';
import React, { useEffect, useState } from 'react';
import "../src/app/globals.css";

const Upsell = () => {
  const vturbVideoHtml = `
 <script src="https://cdn.converteai.net/lib/js/smartplayer/v1/sdk.min.js" data-id="66d32b94d2b3ac000cb5bdcb"></script> <div id="ifr_66d32b94d2b3ac000cb5bdcb_wrapper" style="margin: 0 auto; width: 100%"> <div style="padding:56.25% 0 0 0;position:relative;" id="ifr_66d32b94d2b3ac000cb5bdcb_aspect"> <iframe frameborder="0" allowfullscreen src="https://scripts.converteai.net/73877598-724a-4c8a-b6e9-e85c5bc73e91/players/66d32b94d2b3ac000cb5bdcb/embed.html" id="ifr_66d32b94d2b3ac000cb5bdcb" style="position:absolute;top:0;left:0;width:100%;height:100%;" referrerpolicy="origin"></iframe> </div> </div> <style> .elementor-element:has(#ifr_66d32b94d2b3ac000cb5bdcb_wrapper) { width: 100%; } </style>
  `;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 90 ) {
          clearInterval(interval);
          return oldProgress;
        }
        return oldProgress + 1;
      });
    }, 10);
  }, []);

  const handleAccept = () => {
    window.location.href = 'https://pay.hotmart.com/J94413812X?off=6axjure1';
  };

  const handleDecline = () => {
    window.location.href = '/d3';
  };

  return (
    <section className="upsell-section">
      <div className="content-container">
        <div className="progress-bar-background">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>

        <h1 className="upsell-headline">Última Oportunidade: agora é com você</h1>

        <p className='upsell-subheadline'>Descubra como eu vendo pelo WhatsApp sem dar desconto</p>

        <div className="upsell-video" dangerouslySetInnerHTML={{ __html: vturbVideoHtml }} />

        <div className="upsell-buttons">
        <button
            className="upsell-accept-button"
            onClick={handleAccept}
          >
            ADICIONAR AO PACOTE
          </button>
          {/* <button
            className="upsell-decline-button"
            onClick={handleDecline}
          >
            NÃO DESEJO ESSA OFERTA
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Upsell;
