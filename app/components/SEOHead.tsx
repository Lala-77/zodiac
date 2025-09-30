import React from 'react';
import Head from 'next/head';
import { COMPANY_INFO, GCC_COUNTRIES } from '../lib/constants';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zodiac Enterprise - Premium Construction Materials Supplier in GCC | Bahrain",
  description = "New Zealand's Zodiac Enterprise in Bahrain supplies premium wall putty, drywall panels, cement blocks, precast concrete, and specialized glass panels for solar installations across the GCC.",
  canonical = "https://www.zodiacgcc.com",
  ogImage = "/og-image.webp"
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      <meta name="geo.region" content="BH" />
      <meta name="geo.placename" content="Manama" />
      <meta name="geo.position" content="26.2235;50.5876" />
      <meta name="ICBM" content="26.2235, 50.5876" />
      
      {GCC_COUNTRIES.map(country => (
        <link key={country.code} rel="alternate" href={canonical} hrefLang={`en-${country.code}`} />
      ))}
      <link rel="alternate" href={canonical} hrefLang="x-default" />

      <meta name="keywords" content={`
        construction materials Bahrain, wall putty GCC, drywall panels Saudi Arabia, 
        cement blocks UAE, solar glass panels Qatar, precast concrete panels Oman, 
        building supplies Kuwait, zodiac enterprise Bahrain, solar panel installation materials,
        ${GCC_COUNTRIES.map(country => 
          `construction materials ${country.name}, building supplies ${country.name}`
        ).join(', ')}
      `} />

      <meta name="author" content={COMPANY_INFO.name} />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="distribution" content="global" />
    </Head>
  );
};

export default SEOHead;