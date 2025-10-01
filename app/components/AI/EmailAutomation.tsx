"use client";

import { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../../lib/constants';

interface EmailDraft {
  id: string;
  to: string;
  toName: string;
  company: string;
  project: string;
  subject: string;
  body: string;
  status: 'draft' | 'pending_approval' | 'approved' | 'sent' | 'rejected';
  created: Date;
  scheduled?: Date;
}

export default function EmailAutomation() {
  const [emailDrafts, setEmailDrafts] = useState<EmailDraft[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<EmailDraft | null>(null);

  useEffect(() => {
    // Load any existing drafts (in real app, this would be from database)
    const existingDrafts: EmailDraft[] = [];
    setEmailDrafts(existingDrafts);
  }, []);

  const generateEmailDrafts = async () => {
    setIsGenerating(true);
    
    // Simulate AI generating email drafts from discovered leads
    const newDrafts = await new Promise<EmailDraft[]>((resolve) => {
      setTimeout(() => {
        const drafts: EmailDraft[] = [
          {
            id: '1',
            to: 'ahmed@almanara-construction.com',
            toName: 'Ahmed Al Khalifa',
            company: 'Al Manara Construction',
            project: 'Manama Downtown Tower',
            subject: 'Premium Construction Materials for Your Manama Downtown Tower Project',
            body: `Dear Ahmed Al Khalifa,

I came across your exciting Manama Downtown Tower project and wanted to introduce Zodiac Enterprise.

As Bahrain's leading construction materials supplier, we provide:

🏗️ Premium Wall Putty & Drywall Systems
🔋 Solar-Ready Cement Blocks & Glass Panels  
🏢 Precast Concrete Solutions
🌍 GCC Climate-Optimized Materials

Our materials are specifically engineered for Bahrain's climate and meet international quality standards.

Key Advantages:
✅ Bahrain Stock - Immediate Availability
✅ Competitive GCC Pricing
✅ Technical Support & Consultation
✅ Fast Delivery Across Bahrain

Would you be available for a quick call next week to discuss your material requirements?

Best regards,
${COMPANY_INFO.name}
${COMPANY_INFO.phone}
${COMPANY_INFO.email}`,
            status: 'pending_approval',
            created: new Date()
          },
          {
            id: '2',
            to: 'sarah@gulfdev.com',
            toName: 'Sarah Mohammed', 
            company: 'Gulf Development Group',
            project: 'Riffa Solar Farm Phase 2',
            subject: 'Solar-Ready Construction Materials for Riffa Solar Farm Project',
            body: `Dear Sarah Mohammed,

I noticed your Riffa Solar Farm Phase 2 project and wanted to share how Zodiac Enterprise can support your solar construction needs.

We specialize in solar-optimized construction materials:

🔋 Solar Panel Mounting Blocks
☀️ High-Efficiency Glass Panels
🏗️ Weather-Resistant Construction Materials
🌡️ Heat-Tolerant Solutions for GCC Climate

Our solar-ready materials are used in major renewable energy projects across the GCC.

Benefits for Your Project:
✅ Specifically designed for solar installations
✅ Withstand extreme GCC weather conditions
✅ Quick installation and long-term durability
✅ Competitive pricing with bulk discounts

I'd love to discuss how we can provide materials for your solar farm project.

Warm regards,
${COMPANY_INFO.name}
${COMPANY_INFO.phone}
${COMPANY_INFO.email}`,
            status: 'pending_approval',
            created: new Date()
          }
        ];
        resolve(drafts);
      }, 3000);
    });

    setEmailDrafts(newDrafts);
    setIsGenerating(false);
  };

  const approveEmail = (emailId: string) => {
    setEmailDrafts(drafts => 
      drafts.map(draft => 
        draft.id === emailId 
          ? { ...draft, status: 'approved' as const }
          : draft
      )
    );
    alert('✅ Email approved! It will be sent according to the schedule.');
  };

  const rejectEmail = (emailId: string) => {
    setEmailDrafts(drafts => 
      drafts.filter(draft => draft.id !== emailId)
    );
    alert('❌ Email rejected and removed from queue.');
  };

  const editEmail = (email: EmailDraft) => {
    setSelectedEmail(email);
    // In real implementation, this would open an editor
    alert('✏️ In real implementation, this would open an email editor for you to make changes before sending.');
  };

  const sendApprovedEmails = () => {
    const approvedEmails = emailDrafts.filter(draft => draft.status === 'approved');
    if (approvedEmails.length === 0) {
      alert('No approved emails to send. Please approve some emails first.');
      return;
    }

    // Simulate sending process
    approvedEmails.forEach(email => {
      setTimeout(() => {
        setEmailDrafts(drafts =>
          drafts.map(draft =>
            draft.id === email.id
              ? { ...draft, status: 'sent' as const }
              : draft
          )
        );
      }, 1000);
    });

    alert(`📧 ${approvedEmails.length} approved emails are being sent!`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'pending_approval': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'sent': return 'bg-blue-100 text-blue-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'draft': return '📝';
      case 'pending_approval': return '⏳';
      case 'approved': return '✅';
      case 'sent': return '📤';
      case 'rejected': return '❌';
      default: return '📝';
    }
  };

  const pendingApprovalCount = emailDrafts.filter(d => d.status === 'pending_approval').length;
  const approvedCount = emailDrafts.filter(d => d.status === 'approved').length;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📧 Email Automation with Approval</h2>
      <p className="text-gray-600 mb-4">AI drafts emails, you approve before sending</p>

      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{emailDrafts.length}</div>
          <div className="text-sm text-gray-600">Total Drafts</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600">{pendingApprovalCount}</div>
          <div className="text-sm text-gray-600">Pending Approval</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{approvedCount}</div>
          <div className="text-sm text-gray-600">Approved</div>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={generateEmailDrafts}
          disabled={isGenerating}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 font-semibold transition-colors flex-1"
        >
          {isGenerating ? '🤖 Generating Drafts...' : '🎯 Generate Email Drafts'}
        </button>

        <button
          onClick={sendApprovedEmails}
          disabled={approvedCount === 0}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 font-semibold transition-colors flex-1"
        >
          📤 Send Approved ({approvedCount})
        </button>
      </div>

      {emailDrafts.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Email Drafts Awaiting Approval</h3>
          <div className="grid gap-4">
            {emailDrafts.map((email) => (
              <div key={email.id} className="p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{email.subject}</h4>
                    <p className="text-sm text-gray-600">To: {email.toName} • {email.company}</p>
                    <p className="text-sm text-gray-500">Project: {email.project}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(email.status)}`}>
                    {getStatusIcon(email.status)} {email.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>

                <div className="mb-4 p-3 bg-gray-50 rounded border max-h-40 overflow-y-auto">
                  <p className="text-sm text-gray-700 whitespace-pre-line">{email.body}</p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    Created: {email.created.toLocaleString()}
                  </div>
                  
                  <div className="flex gap-2">
                    {email.status === 'pending_approval' && (
                      <>
                        <button
                          onClick={() => editEmail(email)}
                          className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-semibold hover:bg-gray-700 transition-colors"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => rejectEmail(email.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold hover:bg-red-700 transition-colors"
                        >
                          ❌ Reject
                        </button>
                        <button
                          onClick={() => approveEmail(email.id)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
                        >
                          ✅ Approve
                        </button>
                      </>
                    )}
                    {email.status === 'approved' && (
                      <span className="text-green-600 text-sm font-semibold">Ready to send</span>
                    )}
                    {email.status === 'sent' && (
                      <span className="text-blue-600 text-sm font-semibold">Sent ✓</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">🔒 Approval Workflow:</h4>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>AI generates personalized email drafts</li>
          <li>You review and approve each email</li>
          <li>Edit any email before approval</li>
          <li>Reject emails that don't meet standards</li>
          <li>Send all approved emails with one click</li>
          <li>Full control over all communications</li>
        </ul>
      </div>
    </div>
  );
}
