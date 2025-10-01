"use client";

import { useState } from 'react';

interface CompetitorData {
  name: string;
  website: string;
  seoScore: number;
  topKeywords: string[];
  pricing: { product: string; price: string }[];
  lastUpdated: Date;
  changes: string[];
}

export default function CompetitorIntelligence() {
  const [competitors, setCompetitors] = useState<CompetitorData[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    
    // Simulate competitor analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockCompetitors: CompetitorData[] = [
      {
        name: "Gulf Construction Co",
        website: "https://gulfconstruction.com",
        seoScore: 72,
        topKeywords: ["construction materials dubai", "building supplies uae", "cement suppliers"],
        pricing: [
          { product: "Wall Putty", price: "45 BHD" },
          { product: "Drywall Panels", price: "12 BHD/sqm" }
        ],
        lastUpdated: new Date(),
        changes: ["Increased pricing on drywall", "Added new solar product line"]
      },
      {
        name: "Bahrain Builders",
        website: "https://bahrainbuilders.com", 
        seoScore: 58,
        topKeywords: ["bahrain construction", "building materials manama", "precast concrete"],
        pricing: [
          { product: "Wall Putty", price: "42 BHD" },
          { product: "Solar Blocks", price: "28 BHD/unit" }
        ],
        lastUpdated: new Date(),
        changes: ["Launched new website", "Reduced solar block prices"]
      }
    ];

    setCompetitors(mockCompetitors);
    setIsAnalyzing(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🤖 Competitor Intelligence Engine</h2>
      <p className="text-gray-600 mb-4">Discover competitor strategies automatically</p>
      
      <button
        onClick={startAnalysis}
        disabled={isAnalyzing}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 font-semibold transition-colors mb-6"
      >
        {isAnalyzing ? '🕵️ Analyzing Competitors...' : '🎯 Analyze Competitors'}
      </button>

      {competitors.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Competitor Insights</h3>
          <div className="grid gap-4">
            {competitors.map((comp, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-lg text-purple-700">{comp.name}</h4>
                    <a href={comp.website} className="text-sm text-blue-600 hover:underline">{comp.website}</a>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">SEO Score</div>
                    <div className={`text-lg font-bold ${
                      comp.seoScore >= 70 ? 'text-green-600' : 
                      comp.seoScore >= 50 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {comp.seoScore}/100
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">🏆 Top Keywords</h5>
                    <div className="flex flex-wrap gap-1">
                      {comp.topKeywords.map((kw, i) => (
                        <span key={i} className="bg-white px-2 py-1 rounded text-xs border">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">💰 Pricing</h5>
                    {comp.pricing.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span>{item.product}:</span>
                        <span className="font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {comp.changes.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">🔄 Recent Changes</h5>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {comp.changes.map((change, i) => (
                        <li key={i}>{change}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="text-xs text-gray-500 mt-2">
                  🕒 Updated: {comp.lastUpdated.toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
