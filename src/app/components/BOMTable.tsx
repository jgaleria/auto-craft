'use client';

import React, { useState } from 'react';

export interface BOMItem {
  partNumber: string;
  description: string;
  material: string;
  quantity: number;
  unit: string;
  cost: number;
  supplier: string;
  leadTime: string;
}

interface DetailedPricingInfo {
  costRange: string;
  volumePricing: string;
  leadTimeVariations: string;
  moq: string;
  stockStatus: string;
}

interface BOMTableProps {
  bomData: BOMItem[];
  totalCost: number;
  laborCost: number;
}

interface TooltipState {
  visible: boolean;
  rowIndex: number;
  x: number;
  y: number;
}

export default function BOMTable({ bomData, totalCost, laborCost }: BOMTableProps) {
  const materialCost = totalCost - laborCost;
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    rowIndex: -1,
    x: 0,
    y: 0
  });

  const getSupplierUrl = (supplierName: string) => {
    const normalizedName = supplierName.toLowerCase();
    if (normalizedName.includes('digikey')) return 'https://www.digikey.com';
    if (normalizedName.includes('mouser')) return 'https://www.mouser.com';
    if (normalizedName.includes('arrow')) return 'https://www.arrow.com';
    if (normalizedName.includes('farnell')) return 'https://www.farnell.com';
    if (normalizedName.includes('rs components')) return 'https://www.rs-components.com';
    return 'https://www.google.com/search?q=' + encodeURIComponent(supplierName);
  };

  // Generate mock detailed pricing info based on existing cost
  const generateDetailedPricing = (item: BOMItem): DetailedPricingInfo => {
    const baseCost = item.cost;
    const lowPrice = (baseCost * 0.85).toFixed(2);
    const highPrice = (baseCost * 1.25).toFixed(2);
    const qty1K = (baseCost * 0.90).toFixed(2);
    const qty5K = (baseCost * 0.80).toFixed(2);
    const qty10K = (baseCost * 0.75).toFixed(2);
    
    // Extract base lead time for variations
    const leadTimeMatch = item.leadTime.match(/(\d+)(?:-(\d+))?\s*(\w+)/);
    const baseWeeks = leadTimeMatch ? parseInt(leadTimeMatch[1]) : 4;
    const normalStart = Math.max(1, baseWeeks - 2);
    const normalEnd = baseWeeks;
    const rushStart = Math.max(1, Math.floor(baseWeeks / 2));
    const rushEnd = Math.max(2, baseWeeks - 1);

    // Mock MOQ based on cost and component type
    let moq = "1 piece";
    if (baseCost < 1) moq = "100 pieces";
    else if (baseCost < 5) moq = "50 pieces";
    else if (baseCost < 10) moq = "25 pieces";
    else moq = "10 pieces";

    // Mock stock status
    const stockLevels = ["10,000+", "5,000+", "2,500+", "1,000+", "500+"];
    const stockStatus = stockLevels[Math.floor(Math.random() * stockLevels.length)];

    return {
      costRange: `$${lowPrice}-${highPrice}`,
      volumePricing: `1-99: $${baseCost.toFixed(2)} | 1K: $${qty1K} | 5K: $${qty5K} | 10K+: $${qty10K}`,
      leadTimeVariations: `Lead Time: ${item.leadTime} (Normal: ${normalStart}-${normalEnd} weeks, Rush: ${rushStart}-${rushEnd} weeks)`,
      moq: `MOQ: ${moq}`,
      stockStatus: `In Stock: ${stockStatus} units`
    };
  };

  const handleMouseEnter = (event: React.MouseEvent, rowIndex: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      rowIndex,
      x: rect.left + rect.width / 2,
      y: rect.top - 10 // Position above the row
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, rowIndex: -1, x: 0, y: 0 });
  };



  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Bill of Materials</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Part Number</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Material</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Cost</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Supplier</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lead Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bomData.map((item, index) => (
              <tr 
                key={index} 
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors duration-150 cursor-pointer relative group`}
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <td className="px-4 py-4 text-sm font-mono text-gray-900 relative">
                  {item.partNumber}
                  <svg 
                    className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity absolute top-1/2 -translate-y-1/2 right-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{item.description}</td>
                <td className="px-4 py-4 text-sm text-gray-600">{item.material}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{item.quantity} {item.unit}</td>
                <td className="px-4 py-4 text-sm text-gray-900 font-medium">${item.cost.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm">
                  <a
                    href={getSupplierUrl(item.supplier)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-all font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.supplier}
                  </a>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">{item.leadTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Summary */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-gray-900">Total Material Cost:</span>
          <span className="font-bold text-gray-900">${materialCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-sm mt-1">
          <span className="font-medium text-gray-900">Labor Cost:</span>
          <span className="font-bold text-gray-900">${laborCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-lg font-bold text-gray-900 mt-2 pt-2 border-t border-gray-300">
          <span>Total Cost:</span>
          <span>${totalCost.toFixed(2)}</span>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.visible && tooltip.rowIndex >= 0 && (
        <div 
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translateX(-50%) translateY(-100%)'
          }}
        >
          <div className="bg-gray-900 text-white text-xs rounded-lg p-3 shadow-lg border border-gray-700 max-w-sm">
            <div className="space-y-2">
              {(() => {
                const item = bomData[tooltip.rowIndex];
                const detailedInfo = generateDetailedPricing(item);
                return (
                  <>
                    <div className="border-b border-gray-700 pb-2">
                      <div className="font-semibold text-gray-100">{item.partNumber}</div>
                      <div className="text-gray-300 text-xs">{item.description}</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div>
                        <span className="text-gray-300">Unit Cost:</span> <span className="text-white font-medium">${item.cost.toFixed(2)}</span> 
                        <span className="text-gray-400"> (Range: {detailedInfo.costRange})</span>
                      </div>
                      
                      <div>
                        <span className="text-gray-300">Volume Pricing:</span>
                        <div className="text-gray-100 text-xs mt-1 font-mono">
                          {detailedInfo.volumePricing}
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-gray-300">{detailedInfo.leadTimeVariations}</span>
                      </div>
                      
                      <div className="flex justify-between pt-1 border-t border-gray-700">
                        <span className="text-gray-300">{detailedInfo.moq}</span>
                        <span className="text-green-400 font-medium">{detailedInfo.stockStatus}</span>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
            
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}