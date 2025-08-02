'use client';

import React from 'react';

export default function LoadingState() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-12">
      <div className="flex flex-col items-center justify-center">
        {/* Simple Loading Spinner */}
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        
        {/* Loading Text */}
        <p className="text-gray-600 text-lg">Generating BOM...</p>
      </div>
    </div>
  );
}