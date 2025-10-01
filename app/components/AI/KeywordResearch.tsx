"use client";

import { useState, useEffect } from 'react';
import { KeywordData } from '../../../types/ai';

export default function KeywordResearch() {
  const [keywords, setKeywords] = useState<KeywordData[]>([]);
  const [isResearching, setIsResearching] = useState(false);
  const [lastResearch, setLastResearch] = useState<Date | null>(null);

  const startResearch = async () => {
    setIsResearching(true);
    
    try {
      const response = await fetch('/api/ai/keyword-research', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          market: 'Bahrain',
          industry: 'construction materials'
        })
      });
      
      const data = await response.json();
      setKeywords(data.keywords);
      setLastResearch(new Date());
    } catch (error) {
      console.error('Research failed:', error);
    } finally {
      setIsResearching(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🚀 AI Keyword Research Engine</h2>
      
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={startResearch}
          disabled={isResearching}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 font-semibold transition-colors"
        >
          {isResearching ? '🔍 Researching...' : '🎯 Start AI Research'}
        </button>
        
        {lastResearch && (
          <span className="text-sm text-gray-600">
            Last research: {lastResearch.toLocaleTimeString()}
          </span>
        )}
      </div>

      {keywords.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">📊 Discovered Keywords</h3>
          <div className="grid gap-3">
            {keywords.map((kw, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-white transition-colors">
                <div className="font-semibold text-blue-700">{kw.keyword}</div>
                <div className="text-sm text-gray-600 mt-1">
                  📈 Volume: {kw.searchVolume} | 🏆 Competition: 
                  <span className={
                    kw.competition === 'low' ? 'text-green-600' : 
                    kw.competition === 'medium' ? 'text-yellow-600' : 'text-red-600'
                  }> {kw.competition}</span> | 
                  💡 Opportunity: {kw.opportunity}%
                </div>
                <div className="text-xs text-blue-600 mt-2">
                  🔗 Related: {kw.relatedKeywords.slice(0, 3).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
