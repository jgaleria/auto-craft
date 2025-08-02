'use client';

import { useState } from 'react';
import DesignInput from './DesignInput';
import LoadingState from './LoadingState';
import BOMTable from './BOMTable';
import CostDashboard from './CostDashboard';
import { BOMResponse } from '../api/generate-bom/route';

type ViewState = 'input' | 'loading' | 'results';

export default function BOMGenerator() {
  const [viewState, setViewState] = useState<ViewState>('input');
  const [bomData, setBomData] = useState<BOMResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateCSV = (data: BOMResponse) => {
    const headers = ['Part Number', 'Description', 'Material', 'Quantity', 'Unit', 'Unit Cost', 'Total Cost', 'Supplier', 'Lead Time'];
    const rows = data.bom.map(item => [
      item.partNumber,
      item.description,
      item.material,
      item.quantity.toString(),
      item.unit,
      `$${item.estimatedCost.toFixed(2)}`,
      `$${(item.quantity * item.estimatedCost).toFixed(2)}`,
      item.supplier,
      item.leadTime
    ]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');
    
    return csvContent;
  };

  const downloadCSV = (csvContent: string, filename: string) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleBOMGenerated = (data: BOMResponse) => {
    setBomData(data);
    setViewState('results');
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setViewState('input');
  };

  const handleStartOver = () => {
    setViewState('input');
    setBomData(null);
    setError(null);
  };

  return (
    <div className="space-y-8">
      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.98-.833-2.75 0L3.982 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span className="text-red-800 font-medium">
              Error: {error}
            </span>
          </div>
        </div>
      )}

      {/* Input Section */}
      {viewState === 'input' && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <DesignInput
            onGenerate={() => setViewState('loading')}
            onBOMGenerated={handleBOMGenerated}
            onError={handleError}
            isLoading={false}
          />
        </div>
      )}

      {/* Loading Section */}
      {viewState === 'loading' && <LoadingState />}

      {/* Results Section */}
      {viewState === 'results' && bomData && (
        <div className="space-y-8">
          {/* Action Buttons */}
          <div className="text-center space-x-4">
            <button
              onClick={handleStartOver}
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Generate New BOM
            </button>
            <button
              onClick={() => {
                const csv = generateCSV(bomData);
                downloadCSV(csv, `BOM_${bomData.productName}_${new Date().toISOString().split('T')[0]}.csv`);
              }}
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-green-600 bg-green-50 border-2 border-green-200 rounded-xl hover:bg-green-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download BOM (CSV)
            </button>
          </div>

          {/* Success Message */}
          <div className="text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 inline-flex items-center">
              <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-green-700">BOM Generated</span>
            </div>
          </div>

          {/* Cost Dashboard */}
          <CostDashboard
            totalCost={bomData.totalCost}
            laborCost={bomData.estimatedLaborCost}
            componentCount={bomData.bom.length}
            avgLeadTime={bomData.bom.length > 0 ?
              Math.round(
                bomData.bom.reduce((acc, item) => {
                  const days = parseInt(item.leadTime.match(/\d+/)?.[0] || '7');
                  return acc + days;
                }, 0) / bomData.bom.length
              ) + ' days' : '7 days'
            }
          />

          {/* BOM Table */}
          <BOMTable
            bomData={bomData.bom.map(item => ({
              partNumber: item.partNumber,
              description: item.description,
              material: item.material,
              quantity: item.quantity,
              unit: item.unit,
              cost: item.estimatedCost,
              supplier: item.supplier,
              leadTime: item.leadTime
            }))}
            totalCost={bomData.totalCost}
            laborCost={bomData.estimatedLaborCost}
          />
        </div>
      )}


    </div>
  );
}