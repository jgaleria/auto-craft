'use client';

import React from 'react';

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

interface BOMTableProps {
  bomData: BOMItem[];
  totalCost: number;
  laborCost: number;
}

export default function BOMTable({ bomData, totalCost, laborCost }: BOMTableProps) {
  const materialCost = totalCost - laborCost;

  const getSupplierUrl = (supplierName: string) => {
    const normalizedName = supplierName.toLowerCase();
    if (normalizedName.includes('digikey')) return 'https://www.digikey.com';
    if (normalizedName.includes('mouser')) return 'https://www.mouser.com';
    if (normalizedName.includes('arrow')) return 'https://www.arrow.com';
    if (normalizedName.includes('farnell')) return 'https://www.farnell.com';
    if (normalizedName.includes('rs components')) return 'https://www.rs-components.com';
    return 'https://www.google.com/search?q=' + encodeURIComponent(supplierName + ' electronics supplier');
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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bomData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-4 text-sm font-mono text-gray-900">{item.partNumber}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{item.description}</td>
                <td className="px-4 py-4 text-sm text-gray-600">{item.material}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{item.quantity} {item.unit}</td>
                <td className="px-4 py-4 text-sm text-gray-900">${item.cost.toFixed(2)}</td>
                <td className="px-4 py-4 text-sm">
                  <a
                    href={getSupplierUrl(item.supplier)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-all font-medium"
                  >
                    {item.supplier}
                  </a>
                </td>
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
    </div>
  );
}