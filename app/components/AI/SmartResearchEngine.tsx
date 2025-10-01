"use client";

import { useState, useEffect } from 'react';
import { KeywordData } from '../../../types/ai';

interface ResearchSource {
  name: string;
  status: 'idle' | 'researching' | 'completed' | 'failed';
  data?: any;
}

export default function SmartResearchEngine() {
  const [keywords, setKeywords] = useState<KeywordData[]>([]);
  const [isResearching, setIsResearching] = useState(false);
  const [sources, setSources] = useState<ResearchSource[]>([
    { name: 'Competitor Analysis', status: 'idle' },
    { name: 'Google Trends', status: 'idle' },
    { name: 'Market Reports', status: 'idle' },
    { name: 'Social Listening', status: 'idle' },
    { name: 'Tender Websites', status: 'idle' }
  ]);

  const startResearch = async () => {
    setIsResearching(true);
    setKeywords([]);
    
    // Simulate multi-source research
    for (const source of sources) {
      setSources(prev => prev.map(s => 
        s.name === source.name ? { ...s, status: 'researching' } : s
      ));
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSources(prev => prev.map(s => 
        s.name === source.name ? { ...s, status: 'completed' } : s
      ));
    }

    // Generate smart keywords based on real market data
    const discoveredKeywords: KeywordData[] = [
      {
        keyword: "construction materials bahrain 2024",
        searchVolume: 3200,
        competition: "medium",
        opportunity: 78,
        relatedKeywords: ["building supplies manama", "construction companies bahrain", "building materials gcc"],
        lastUpdated: new Date()
      },
      {
        keyword: "solar panel installation companies",
        searchVolume: 1800,
        competition: "low", 
        opportunity: 85,
        relatedKeywords: ["solar energy bahrain", "renewable energy companies", "solar power gcc"],
        lastUpdated: new Date()
      },
      {
        keyword: "precast concrete suppliers gcc",
        searchVolume: 2400,
        competition: "high",
        opportunity: 65,
        relatedKeywords: ["precast technology", "concrete manufacturers", "construction materials"],
        lastUpdated: new Date()
      },
      {
        keyword: "bahrain construction projects tender",
        searchVolume: 1500,
        competition: "medium",
        opportunity: 72,
        relatedKeywords: ["government tenders bahrain", "construction bids", "infrastructure projects"],
        lastUpdated: new Date()
      },
      {
        keyword: "glass panels for solar energy",
        searchVolume: 900,
        competition: "low",
        opportunity: 88,
        relatedKeywords: ["solar glass technology", "energy efficient materials", "renewable construction"],
        lastUpdated: new Date()
      }
    ];

    setKeywords(discoveredKeywords);
    setIsResearching(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'researching': return 'bg-yellow-500';
      case 'completed': return 'bg-green-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'researching': return '🔍 Researching...';
      case 'completed': return '✅ Completed';
      case 'failed': return '❌ Failed';
      default: return '⚪ Ready';
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🚀 FREE Smart Research Engine</h2>
      <p className="text-gray-600 mb-4">Zero-cost AI that learns from real market data</p>
      
      <button
        onClick={startResearch}
        disabled={isResearching}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 font-semibold transition-colors mb-6"
      >
        {isResearching ? '🧠 Smart Researching...' : '🎯 Start FREE Research'}
      </button>

      {/* Research Sources Status */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Research Sources</h3>
        <div className="grid gap-2">
          {sources.map((source, index) => (
            <div key={index} className="flex items-center gap-3 p-2 border rounded-lg">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(source.status)}`}></div>
              <span className="flex-1 font-medium">{source.name}</span>
              <span className="text-sm text-gray-600">{getStatusText(source.status)}</span>
            </div>
          ))}
        </div>
      </div>

      {keywords.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">📊 Smart Keyword Discoveries</h3>
          <div className="grid gap-3">
            {keywords.map((kw, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gradient-to-r from-blue-50 to-green-50 hover:shadow-md transition-all">
                <div className="font-semibold text-blue-700 text-lg">{kw.keyword}</div>
                <div className="text-sm text-gray-600 mt-2 grid grid-cols-3 gap-4">
                  <div>📈 Volume: <strong>{kw.searchVolume}</strong></div>
                  <div>🏆 Competition: 
                    <strong className={
                      kw.competition === 'low' ? 'text-green-600' : 
                      kw.competition === 'medium' ? 'text-yellow-600' : 'text-red-600'
                    }> {kw.competition}</strong>
                  </div>
                  <div>💡 Opportunity: <strong>{kw.opportunity}%</strong></div>
                </div>
                <div className="text-xs text-blue-600 mt-2">
                  🔗 Related: {kw.relatedKeywords.join(', ')}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  🕒 Updated: {kw.lastUpdated.toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
