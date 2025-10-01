export const aiConfig = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-4",
  },
  markets: ["Bahrain", "Saudi Arabia", "UAE", "Qatar", "Oman", "Kuwait"],
  industries: ["construction", "solar energy", "building materials"],
  competitors: [
    "https://example-competitor1.com",
    "https://example-competitor2.com"
  ],
  researchIntervals: {
    keywordResearch: "24h",      // Every 24 hours
    competitorAnalysis: "7d",     // Every 7 days  
    leadGeneration: "12h",        // Every 12 hours
    seoOptimization: "6h"         // Every 6 hours
  }
} as const;

export type Market = typeof aiConfig.markets[number];
export type Industry = typeof aiConfig.industries[number];
