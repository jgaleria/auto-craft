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
        <div className="text-center p-5 bg-gradient-to-br from-blue-50 to-gray-100 border border-gray-200 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">${totalCost.toFixed(2)}</div>
          <div className="text-sm text-gray-600 font-medium">Total Cost</div>
        </div>
        
        <div className="text-center p-5 bg-gradient-to-br from-slate-50 to-blue-100 border border-gray-200 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">${materialCost.toFixed(2)}</div>
          <div className="text-sm text-gray-600 font-medium">Material Cost</div>
        </div>
        
        <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">{componentCount}</div>
          <div className="text-sm text-gray-600 font-medium">Components</div>
        </div>
      </div>
    </div>
  );
}