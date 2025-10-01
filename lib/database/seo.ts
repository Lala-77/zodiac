// SEO data storage that works on Vercel
export interface SEOData {
  page: string;
  title: string;
  description: string;
  keywords: string[];
  lastUpdated: Date;
}

export const defaultSEOData: Record<string, SEOData> = {
  'Homepage': {
    page: 'Homepage',
    title: 'Zodiac Enterprise - Premium Construction Materials Supplier in GCC',
    description: 'Supplier of premium construction materials including wall putty, drywall panels, cement blocks, precast concrete and glass panels for solar installations across GCC countries.',
    keywords: ['construction materials', 'wall putty', 'drywall panels', 'cement blocks', 'solar panels', 'GCC'],
    lastUpdated: new Date()
  },
  'Products': {
    page: 'Products', 
    title: 'Premium Construction Materials Supplier in Bahrain | Zodiac Enterprise',
    description: 'Zodiac Enterprise Bahrain: Leading supplier of wall putty, drywall panels, cement blocks, precast concrete, and solar glass panels. Quality construction materials for Bahrain & GCC projects.',
    keywords: ['construction materials bahrain', 'building supplies', 'wall putty supplier'],
    lastUpdated: new Date()
  }
};

let currentSEOData = { ...defaultSEOData };

export function getSEOData(page: string): SEOData {
  return currentSEOData[page] || defaultSEOData[page];
}

export function updateSEOData(page: string, title: string, description: string): SEOData {
  const updatedData = {
    ...currentSEOData[page],
    title,
    description,
    lastUpdated: new Date()
  };
  currentSEOData[page] = updatedData;
  return updatedData;
}

export function getAllSEOData() {
  return currentSEOData;
}
