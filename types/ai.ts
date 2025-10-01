export interface KeywordData {
  keyword: string;
  searchVolume: number;
  competition: 'low' | 'medium' | 'high';
  opportunity: number;
  relatedKeywords: string[];
  lastUpdated: Date;
}

export interface LeadData {
  company: string;
  project: string;
  contact: string;
  email: string;
  location: string;
  projectValue?: string;
  discoveredAt: Date;
}

export interface SEOData {
  page: string;
  title: string;
  description: string;
  keywords: string[];
  performance: number;
}
