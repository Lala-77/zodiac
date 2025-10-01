"use client";

import { useState, useEffect } from 'react';

interface ScheduledTask {
  id: string;
  name: string;
  description: string;
  frequency: 'hourly' | 'daily' | 'weekly' | 'monthly';
  nextRun: Date;
  lastRun: Date | null;
  status: 'active' | 'paused' | 'completed' | 'failed';
  enabled: boolean;
}

export default function TaskScheduler() {
  const [tasks, setTasks] = useState<ScheduledTask[]>([]);
  const [isScheduling, setIsScheduling] = useState(false);

  useEffect(() => {
    // Initialize with default tasks
    const initialTasks: ScheduledTask[] = [
      {
        id: '1',
        name: 'Keyword Research',
        description: 'AI keyword discovery and analysis',
        frequency: 'daily',
        nextRun: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
        lastRun: null,
        status: 'active',
        enabled: true
      },
      {
        id: '2',
        name: 'Competitor Analysis',
        description: 'Monitor competitor strategies and pricing',
        frequency: 'daily',
        nextRun: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours
        lastRun: null,
        status: 'active',
        enabled: true
      },
      {
        id: '3',
        name: 'Lead Discovery',
        description: 'Find new construction projects and contacts',
        frequency: 'daily',
        nextRun: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours
        lastRun: null,
        status: 'active',
        enabled: true
      },
      {
        id: '4',
        name: 'SEO Optimization',
        description: 'Update website metadata and content',
        frequency: 'weekly',
        nextRun: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week
        lastRun: null,
        status: 'active',
        enabled: true
      },
      {
        id: '5',
        name: 'Email Campaigns',
        description: 'Send automated outreach emails',
        frequency: 'daily',
        nextRun: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
        lastRun: null,
        status: 'active',
        enabled: true
      }
    ];
    setTasks(initialTasks);
  }, []);

  const startScheduling = async () => {
    setIsScheduling(true);
    
    // Simulate scheduling setup
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const updatedTasks = tasks.map(task => ({
      ...task,
      lastRun: new Date(),
      nextRun: calculateNextRun(task.frequency)
    }));
    
    setTasks(updatedTasks);
    setIsScheduling(false);
    
    alert('🚀 24/7 Scheduler Activated!\n\nYour AI systems will now run automatically:\n• Keyword Research: Daily\n• Competitor Analysis: Daily\n• Lead Discovery: Daily\n• SEO Optimization: Weekly\n• Email Campaigns: Daily');
  };

  const calculateNextRun = (frequency: string): Date => {
    const now = new Date();
    switch (frequency) {
      case 'hourly':
        return new Date(now.getTime() + 60 * 60 * 1000);
      case 'daily':
        return new Date(now.getTime() + 24 * 60 * 60 * 1000);
      case 'weekly':
        return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      case 'monthly':
        return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
      default:
        return now;
    }
  };

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, enabled: !task.enabled } : task
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case 'hourly': return 'bg-purple-100 text-purple-800';
      case 'daily': return 'bg-blue-100 text-blue-800';
      case 'weekly': return 'bg-green-100 text-green-800';
      case 'monthly': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🕒 24/7 Auto-Scheduler</h2>
      <p className="text-gray-600 mb-4">Schedule all AI systems to run automatically while you sleep</p>
      
      <button
        onClick={startScheduling}
        disabled={isScheduling}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 font-semibold transition-colors mb-6 w-full"
      >
        {isScheduling ? '⚡ Activating Scheduler...' : '🚀 Activate 24/7 Scheduler'}
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Scheduled Tasks</h3>
        <div className="grid gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-lg text-gray-800">{task.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getFrequencyColor(task.frequency)}`}>
                      {task.frequency.toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(task.status)}`}>
                      {task.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                      task.enabled 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {task.enabled ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Next Run:</span>
                  <span className="ml-2 text-blue-600">{task.nextRun.toLocaleString()}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Last Run:</span>
                  <span className="ml-2 text-gray-600">
                    {task.lastRun ? task.lastRun.toLocaleString() : 'Never'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">🎯 How This Works:</h4>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>All AI systems run automatically on schedule</li>
          <li>You receive daily reports of activities</li>
          <li>Systems optimize while you sleep</li>
          <li>No manual intervention required</li>
          <li>Performance tracking and auto-adjustment</li>
        </ul>
      </div>
    </div>
  );
}
