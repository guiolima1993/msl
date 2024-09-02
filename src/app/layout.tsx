import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Método Sofá Lucrativo - Fritz Paixão",
  description: "Descubra como ganhar 2 a 4 mil nos próximos dias usando apenas uma escova de roupas, um detergente de prato e o seu celular",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        {/* Preload resources */}
        <link rel="preload" href="https://scripts.converteai.net/73877598-724a-4c8a-b6e9-e85c5bc73e91/players/66c264d48bec3f000afb5600/embed.html" as="document" />
        <link rel="preload" href="https://scripts.converteai.net/73877598-724a-4c8a-b6e9-e85c5bc73e91/players/66c264d48bec3f000afb5600/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/73877598-724a-4c8a-b6e9-e85c5bc73e91/players/66c264d48bec3f000afb5600/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/73877598-724a-4c8a-b6e9-e85c5bc73e91/66c26169b241fe000bf6acd4/main.m3u8" as="fetch" />
        
        {/* Prefetch DNS */}
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KZ6MVRHH');`,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZ6MVRHH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}
