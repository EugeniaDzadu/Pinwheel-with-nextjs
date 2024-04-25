"use client"
import Head from 'next/head';
import { useEffect } from 'react';

// Component
export default function Layout({ children }) {
  useEffect(() => {
    const inter = document.createElement('link');
    inter.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
    inter.rel = 'stylesheet';
    document.head.appendChild(inter);
    
    return () => {
      document.head.removeChild(inter);
    };
  }, []);

  return (
    <>
    <html lang='en'>
      <Head>
        {/* Meta tags */}
        <meta name="theme-name" content="Pinwheel" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <meta name="generator" content="gulp" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>Pinwheel-tailwind</title>
        <meta name="robots" content="" />
        <meta name="description" content="meta description" />
        <meta name="author" content="{config.metadata.meta_author}" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/plugins/swiper/swiper-bundle.css" />
        <link rel="stylesheet" href="/plugins/font-awesome/v6/brands.css" />
        <link rel="stylesheet" href="/plugins/font-awesome/v6/solid.css" />
        <link rel="stylesheet" href="/plugins/font-awesome/v6/fontawesome.css" />
        <link href="/styles/main.css" rel="stylesheet" />
      </Head>
      
      <body>{children}</body>
      </html>
    </>
  );
}
