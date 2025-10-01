"use client";

import { useState } from 'react';

interface LeadData {
  id: string;
  company: string;
  project: string;
  contact: string;
  email: string;
  phone: string;
  location: string;
  projectValue: string;
  discoveredAt: Date;
  status: 'new' | 'contacted' | 'qualified' | 'converted';
}

export default function LeadDiscovery() {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [stats, setStats] = useState({
    totalLeads: 0,
    newToday: 0,
    estimatedValue: 0
  });

  const startDiscovery = async () => {
    setIsDiscovering(true);
    
    // Simulate lead discovery from multiple sources
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    const mockLeads: LeadData[] = [
      {
        id: '1',
        company: 'Al Manara Construction',
        project: 'Manama Downtown Tower',
        contact: 'Ahmed Al Khalifa',
        email: 'ahmed@almanara-construction.com',
        phone: '+973 1234 5678',
        location: 'Manama, Bahrain',
        projectValue: '2.5M BHD',
        discoveredAt: new Date(),
        status: 'new'
      },
      {
        id: '2', 
        company: 'Gulf Development Group',
        project: 'Riffa Solar Farm Phase 2',
        contact: 'Sarah Mohammed',
        email: 'sarah@gulfdev.com',
        phone: '+973 9876 5432',
        location: 'Riffa, Bahrain',
        projectValue: '1.8M BHD',
        discoveredAt: new Date(),
        status: 'new'
      },
      {
        id: '3',
        company: 'Bahrain Infrastructure Authority',
        project: 'New Airport Terminal Construction',
        contact: 'Khalid Al Jaber',
        email: 'k.aljaber@bia.gov.bh',
        phone: '+973 5566 7788',
        location: 'Muharraq, Bahrain',
        projectValue: '15M BHD',
        discoveredAt: new Date(),
        status: 'new'
      },
      {
        id: '4',
        company: 'Pearl Real Estate Developers',
        project: 'Luxury Villa Complex - Phase 3',
        contact: 'Fatima Al Arrayed',
        email: 'fatima@pearldev.bh',
        phone: '+973 3344 5566',
        location: 'Juffair, Bahrain',
        projectValue: '3.2M BHD',
        discoveredAt: new Date(),
        status: 'new'
      }
    ];

    setLeads(mockLeads);
    setStats({
      totalLeads: mockLeads.length,
      newToday: mockLeads.length,
      estimatedValue: 22.5 // million BHD
    });
    setIsDiscovering(false);
  };

  const sendEmail = (lead: LeadData) => {
    alert(`📧 Email would be sent to: ${lead.email}\n\nSubject: Construction Materials for ${lead.project}\n\nBody: Dear ${lead.contact}, we have premium materials for your project...`);
    // In real implementation, this would call your email API
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'converted': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📧 Lead Discovery Engine</h2>
      <p className="text-gray-600 mb-4">Find construction projects & auto-contact decision makers</p>
      
      <button
        onClick={startDiscovery}
        disabled={isDiscovering}
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 disabled:opacity-50 font-semibold transition-colors mb-6"
      >
        {isDiscovering ? '🔍 Discovering Leads...' : '🎯 Discover New Leads'}
      </button>

      {stats.totalLeads > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{stats.totalLeads}</div>
            <div className="text-sm text-gray-600">Total Leads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{stats.newToday}</div>
            <div className="text-sm text-gray-600">New Today</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.estimatedValue}M BHD</div>
            <div className="text-sm text-gray-600">Estimated Value</div>
          </div>
        </div>
      )}

      {leads.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Discovered Projects</h3>
          <div className="grid gap-4">
            {leads.map((lead) => (
              <div key={lead.id} className="p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{lead.project}</h4>
                    <p className="text-sm text-gray-600">{lead.company} • {lead.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      {lead.projectValue}
                    </span>
                    <div className={`mt-1 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(lead.status)}`}>
                      {lead.status.toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-sm"><strong>Contact:</strong> {lead.contact}</div>
                    <div className="text-sm"><strong>Email:</strong> {lead.email}</div>
                    <div className="text-sm"><strong>Phone:</strong> {lead.phone}</div>
                  </div>
                  <div className="flex items-end justify-end">
                    <button
                      onClick={() => sendEmail(lead)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-semibold transition-colors"
                    >
                      📧 Send Proposal
                    </button>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  🕒 Discovered: {lead.discoveredAt.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
