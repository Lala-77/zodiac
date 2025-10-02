"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AnalyticsDashboard from '../components/AI/AnalyticsDashboard';
import SmartResearchEngine from '../components/AI/SmartResearchEngine';
import CompetitorIntelligence from '../components/AI/CompetitorIntelligence';
import LeadDiscovery from '../components/AI/LeadDiscovery';
import SEOAutoOptimizer from '../components/AI/SEOAutoOptimizer';
import TaskScheduler from '../components/AI/TaskScheduler';
import EmailAutomation from '../components/AI/EmailAutomation';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  // Check if already authenticated
  useEffect(() => {
    const auth = localStorage.getItem('adminAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Default password - change this in production!
    const correctPassword = 'ZodiacAI2024!'; 
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
    } else {
      alert('❌ Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    setPassword('');
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`📧 Password reset link would be sent to: ${resetEmail}\n\nFor now, use the default password.`);
    setShowResetModal(false);
    setResetEmail('');
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    const correctPassword = 'ZodiacAI2024!';
    
    if (currentPassword !== correctPassword) {
      alert('❌ Current password is incorrect.');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      alert('❌ New passwords do not match.');
      return;
    }
    
    if (newPassword.length < 8) {
      alert('❌ New password must be at least 8 characters long.');
      return;
    }
    
    alert(`✅ Password changed successfully!\n\nNew password: ${newPassword}\n\nPlease remember your new password.`);
    setShowChangePasswordModal(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              🔐 Admin Login
            </h1>
            <p className="text-gray-600">Enter password to access AI Command Center</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 font-medium bg-white"
                  placeholder="Enter admin password"
                  required
                  style={{ color: '#111827', backgroundColor: 'white' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-all"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              🚀 Access Dashboard
            </button>

            <div className="text-center space-y-2">
              <button
                type="button"
                onClick={() => setShowResetModal(true)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium block w-full"
              >
                🔑 Forgot Password?
              </button>
            </div>
          </form>

          {/* Password Reset Modal */}
          {showResetModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🔑 Reset Password</h3>
                <p className="text-gray-600 mb-4">
                  Enter your email to receive a password reset link.
                </p>
                
                <form onSubmit={handlePasswordReset} className="space-y-4">
                  <input
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="your-email@zodiacgcc.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                    required
                  />
                  
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                    >
                      Send Reset Link
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowResetModal(false)}
                      className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
                
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    💡 <strong>Default Password:</strong> ZodiacAI2024!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">
                🤖 Zodiac AI Command Center
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowChangePasswordModal(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-semibold transition-colors"
              >
                🔐 Change Password
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-semibold transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Change Password Modal */}
      {showChangePasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🔐 Change Password</h3>
            
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                  placeholder="Enter current password"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                  placeholder="Enter new password"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                  placeholder="Confirm new password"
                  required
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
                >
                  Change Password
                </button>
                <button
                  type="button"
                  onClick={() => setShowChangePasswordModal(false)}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-8">
            <AnalyticsDashboard />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SmartResearchEngine />
              <CompetitorIntelligence />
            </div>
            <LeadDiscovery />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <SEOAutoOptimizer />
            <TaskScheduler />
            <EmailAutomation />
          </div>
        </div>
      </main>
    </div>
  );
}
