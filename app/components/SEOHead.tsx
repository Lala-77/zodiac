"use client";

import { useEffect, useState } from 'react';
import { getSEOData } from '../../lib/database/seo';

interface SEOHeadProps {
  page?: string;
  customTitle?: string;
  customDescription?: string;
}

export default function SEOHead({ 
  page = 'Homepage', 
  customTitle, 
  customDescription 
}: SEOHeadProps) {
  const [seoData, setSeoData] = useState<any>(null);

  useEffect(() => {
    const data = getSEOData(page);
    setSeoData(data);
  }, [page]);

  if (!seoData) {
    return (
      <>
        <title>Zodiac Enterprise - Premium Construction Materials Supplier</title>
        <meta name="description" content="Premium construction materials supplier in GCC countries including wall putty, drywall panels, cement blocks, and solar glass panels." />
        <meta name="keywords" content="construction materials, wall putty, drywall panels, cement blocks, solar panels, GCC" />
      </>
    );
  }

  const title = customTitle || seoData.title;
  const description = customDescription || seoData.description;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seoData.keywords?.join(', ')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </>
  );
}
