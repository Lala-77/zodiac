"use client";

import { useState, useEffect } from 'react';

interface AIPerformance {
  system: string;
  tasksCompleted: number;
  successRate: number;
  timeSaved: number; // hours
  revenueImpact: number; // estimated revenue
  roi: number; // return on investment %
  lastActivity: Date;
  status: 'active' | 'idle' | 'optimizing';
}

interface BusinessImpact {
  leadsGenerated: number;
  emailsSent: number;
  keywordsDiscovered: number;
  seoImprovements: number;
  competitorInsights: number;
  totalTimeSaved: number;
}

export default function AnalyticsDashboard() {
  const [performance, setPerformance] = useState<AIPerformance[]>([]);
  const [impact, setImpact] = useState<BusinessImpact | null>(null);
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d'>('7d');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAnalyticsData();
  }, [timeframe]);

  const loadAnalyticsData = async () => {
    setIsLoading(true);
    
    // Simulate loading analytics data
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const performanceData: AIPerformance[] = [
      {
        system: 'Keyword Research',
        tasksCompleted: 24,
        successRate: 92,
        timeSaved: 48,
        revenueImpact: 12500,
        roi: 415,
        lastActivity: new Date(),
        status: 'active'
      },
      {
        system: 'Competitor Intelligence',
        tasksCompleted: 18,
        successRate: 88,
        timeSaved: 36,
        revenueImpact: 8200,
        roi: 365,
        lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000),
        status: 'active'
      },
      {
        system: 'Lead Discovery',
        tasksCompleted: 15,
        successRate: 78,
        timeSaved: 60,
        revenueImpact: 18500,
        roi: 520,
        lastActivity: new Date(),
        status: 'optimizing'
      },
      {
        system: 'SEO Optimization',
        tasksCompleted: 8,
        successRate: 85,
        timeSaved: 32,
        revenueImpact: 9500,
        roi: 380,
        lastActivity: new Date(Date.now() - 24 * 60 * 60 * 1000),
        status: 'active'
      },
      {
        system: 'Email Automation',
        tasksCompleted: 12,
        successRate: 75,
        timeSaved: 28,
        revenueImpact: 7200,
        roi: 320,
        lastActivity: new Date(),
        status: 'active'
      }
    ];

    const impactData: BusinessImpact = {
      leadsGenerated: 47,
      emailsSent: 156,
      keywordsDiscovered: 128,
      seoImprovements: 18,
      competitorInsights: 34,
      totalTimeSaved: 204
    };

    setPerformance(performanceData);
    setImpact(impactData);
    setIsLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'optimizing': return 'bg-blue-100 text-blue-800';
      case 'idle': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getROIColor = (roi: number) => {
    if (roi >= 500) return 'text-green-600';
    if (roi >= 300) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-BH', {
      style: 'currency',
      currency: 'BHD'
    }).format(amount);
  };

  const totalRevenue = performance.reduce((sum, sys) => sum + sys.revenueImpact, 0);
  const totalROI = performance.reduce((sum, sys) => sum + sys.roi, 0) / performance.length;

  if (isLoading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg border">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📊 AI Analytics Dashboard</h2>
        <select 
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value as any)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>

      {/* Summary Stats */}
      {impact && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <div className="text-2xl font-bold text-blue-600">{impact.leadsGenerated}</div>
            <div className="text-sm text-gray-600">Leads Generated</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">{impact.emailsSent}</div>
            <div className="text-sm text-gray-600">Emails Sent</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
            <div className="text-2xl font-bold text-purple-600">{impact.totalTimeSaved}h</div>
            <div className="text-sm text-gray-600">Time Saved</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600">{formatCurrency(totalRevenue)}</div>
            <div className="text-sm text-gray-600">Revenue Impact</div>
          </div>
        </div>
      )}

      {/* ROI Banner */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-green-800">AI System ROI</h3>
            <p className="text-sm text-green-600">Total return on investment across all AI systems</p>
          </div>
          <div className="text-right">
            <div className={`text-3xl font-bold ${getROIColor(totalROI)}`}>
              {Math.round(totalROI)}%
            </div>
            <div className="text-sm text-green-600">Return on Investment</div>
          </div>
        </div>
      </div>

      {/* Performance Table */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">System Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 font-semibold text-gray-700">AI System</th>
                <th className="text-left py-3 font-semibold text-gray-700">Tasks</th>
                <th className="text-left py-3 font-semibold text-gray-700">Success Rate</th>
                <th className="text-left py-3 font-semibold text-gray-700">Time Saved</th>
                <th className="text-left py-3 font-semibold text-gray-700">Revenue</th>
                <th className="text-left py-3 font-semibold text-gray-700">ROI</th>
                <th className="text-left py-3 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {performance.map((system, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 font-medium text-gray-800">{system.system}</td>
                  <td className="py-3 text-gray-600">{system.tasksCompleted}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${system.successRate}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{system.successRate}%</span>
                    </div>
                  </td>
                  <td className="py-3 text-gray-600">{system.timeSaved}h</td>
                  <td className="py-3 font-semibold text-green-600">{formatCurrency(system.revenueImpact)}</td>
                  <td className={`py-3 font-bold ${getROIColor(system.roi)}`}>
                    {system.roi}%
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(system.status)}`}>
                      {system.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">💡 AI Performance Insights</h4>
        <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
          <li>Lead Discovery has the highest ROI at 520% - consider increasing its usage</li>
          <li>All systems are maintaining success rates above 75%</li>
          <li>Total time saved: {impact?.totalTimeSaved} hours (equivalent to {Math.round(impact ? impact.totalTimeSaved / 8 : 0)} work days)</li>
          <li>Email automation has the lowest success rate - may need optimization</li>
        </ul>
      </div>
    </div>
  );
}
