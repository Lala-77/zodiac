"use client";

import { useState, useEffect } from 'react';
import SmartResearchEngine from '../components/AI/SmartResearchEngine';
import CompetitorIntelligence from '../components/AI/CompetitorIntelligence';
import LeadDiscovery from '../components/AI/LeadDiscovery';
import SEOAutoOptimizer from '../components/AI/SEOAutoOptimizer';
import TaskScheduler from '../components/AI/TaskScheduler';
import EmailAutomation from '../components/AI/EmailAutomation';
import AnalyticsDashboard from '../components/AI/AnalyticsDashboard';

export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authStatus = localStorage.getItem('zodiac_admin_auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'ZodiacAI2024!') {
      setIsAuthenticated(true);
      localStorage.setItem('zodiac_admin_auth', 'authenticated');
    } else {
      alert('❌ Invalid password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('zodiac_admin_auth');
    setPassword('');
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">🔒 AI Command Center</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold">
              Access AI Systems
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🤖 Zodiac AI Command Center</h1>
          <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </div>
      
      <div className="max-w-8xl mx-auto px-6 py-8 space-y-8">
        <AnalyticsDashboard />
        <div className="grid lg:grid-cols-2 gap-8">
          <SmartResearchEngine />
          <CompetitorIntelligence />
        </div>
        <LeadDiscovery />
        <SEOAutoOptimizer />
        <div className="grid lg:grid-cols-2 gap-8">
          <TaskScheduler />
          <EmailAutomation />
        </div>
      </div>
    </div>
  );
}