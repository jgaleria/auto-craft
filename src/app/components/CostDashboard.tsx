'use client';

import React from 'react';

interface CostDashboardProps {
  totalCost: number;
  laborCost: number;
  componentCount: number;
  avgLeadTime: string;
}

export default function CostDashboard({ 
  totalCost, 
  laborCost, 
  componentCount 
}: CostDashboardProps) {
  const materialCost = totalCost - laborCost;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Summary</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-5 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-blue-900">${totalCost.toFixed(2)}</div>
          <div className="text-sm text-blue-700 font-medium">Total Cost</div>
        </div>
        
        <div className="text-center p-5 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-green-900">${materialCost.toFixed(2)}</div>
          <div className="text-sm text-green-700 font-medium">Material Cost</div>
        </div>
        
        <div className="text-center p-5 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-purple-900">{componentCount}</div>
          <div className="text-sm text-purple-700 font-medium">Components</div>
        </div>
      </div>
    </div>
  );
}