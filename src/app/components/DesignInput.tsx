'use client';

import React, { useState, useRef } from 'react';
import { BOMResponse } from '../api/generate-bom/route';

interface DesignInputProps {
  onGenerate: (input: string) => void;
  onBOMGenerated: (data: BOMResponse) => void;
  onError: (error: string) => void;
  isLoading: boolean;
}

type InputMode = 'text' | 'image';

const productExamples = [
  {
    name: 'Smart Home Temperature Sensor',
    category: 'IoT Device',
    icon: '📡',
    description: 'IoT temperature and humidity sensor with WiFi connectivity, mobile app integration, and 2-year battery life. Features wireless data transmission, cloud storage, and real-time alerts.',
  },
  {
    name: 'Wireless Bluetooth Headphones',
    category: 'Audio Device',
    icon: '🎧',
    description: 'Premium wireless Bluetooth 5.0 headphones with active noise canceling, 30-hour battery life, quick charge, and premium leather headband.',
  },
  {
    name: 'Smart Fitness Watch',
    category: 'Wearable',
    icon: '⌚',
    description: 'Fitness tracking smartwatch with heart rate monitor, GPS, sleep tracking, 7-day battery, water resistance, and color touchscreen display.',
  },
  {
    name: 'Portable Espresso Machine',
    category: 'Appliance',
    icon: '☕',
    description: 'Compact manual espresso maker with built-in grinder, pressure gauge, stainless steel construction, and travel case for camping.',
  },
  {
    name: 'Gaming Mechanical Keyboard',
    category: 'Computer Accessory',
    icon: '⌨️',
    description: 'RGB mechanical gaming keyboard with Cherry MX switches, aluminum frame, programmable keys, and USB-C connectivity.',
  }
];

export default function DesignInput({ onGenerate, onBOMGenerated, onError }: DesignInputProps) {
  const [inputMode, setInputMode] = useState<InputMode>('image');
  const [description, setDescription] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const supportedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'application/pdf'];
  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const validateFile = (file: File): string | null => {
    if (!supportedFileTypes.includes(file.type)) {
      return 'Please upload a PNG, JPG, PDF, or SVG file.';
    }
    if (file.size > maxFileSize) {
      return 'File size must be less than 10MB.';
    }
    return null;
  };

  const handleFileSelect = (file: File) => {
    const error = validateFile(file);
    if (error) {
      onError(error);
      return;
    }

    setUploadedFile(file);
    
    // Create preview for images
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputMode === 'text' && !description.trim()) {
      onError('Please enter a product description');
      return;
    }

    if (inputMode === 'image' && !uploadedFile) {
      onError('Please upload an image file');
      return;
    }

    setIsSubmitting(true);
    onGenerate(inputMode === 'text' ? description : uploadedFile?.name || 'Uploaded design');

    try {
      let body: FormData | string;
      const headers: Record<string, string> = {};

      if (inputMode === 'text') {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify({ productDescription: description });
      } else {
        // For image uploads, use FormData
        body = new FormData();
        body.append('file', uploadedFile!);
        body.append('type', 'image');
      }

      const response = await fetch('/api/generate-bom', {
        method: 'POST',
        headers,
        body,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: BOMResponse = await response.json();
      onBOMGenerated(data);
    } catch (error) {
      console.error('Error generating BOM:', error);
      onError(error instanceof Error ? error.message : 'Failed to generate BOM');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickDemo = (exampleDescription: string) => {
    setInputMode('text');
    setDescription(exampleDescription);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Input Mode Toggle */}
      <div className="mb-6">
        <div className="flex items-center justify-center">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              type="button"
              onClick={() => setInputMode('image')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                inputMode === 'image'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Upload Image
            </button>
            <button
              type="button"
              onClick={() => setInputMode('text')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                inputMode === 'text'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Product Description
            </button>
          </div>
        </div>
      </div>

      {/* Main Input Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {inputMode === 'text' ? (
          <div>
            <textarea
              id="productDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your product in detail. Include materials, features, size, functionality, and any specific requirements..."
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-500"
              disabled={isSubmitting}
            />
          </div>
        ) : (
          <div>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`relative border-2 border-dashed rounded-lg p-4 text-center transition-all duration-200 ${
                isDragOver
                  ? 'border-blue-400 bg-blue-50'
                  : uploadedFile
                  ? 'border-green-400 bg-green-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileInputChange}
                accept=".png,.jpg,.jpeg,.svg,.pdf"
                className="hidden"
                disabled={isSubmitting}
              />
              
              {uploadedFile ? (
                <div className="space-y-4">
                  {imagePreview ? (
                    <div className="flex justify-center">
                      <img
                        src={imagePreview}
                        alt="Design preview"
                        className="max-w-xs max-h-48 rounded-lg shadow-md"
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                    <p className="text-xs text-gray-500">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <svg className="w-8 h-8 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div>
                    <p className="text-base font-medium text-gray-900 mb-3">
                      Upload product photos, sketches, or design images
                    </p>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      Browse Files
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Supports PNG, JPG, PDF, SVG up to 10MB
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="text-center">
          <button
            type="submit"
            disabled={
              isSubmitting || 
              (inputMode === 'text' && !description.trim()) ||
              (inputMode === 'image' && !uploadedFile)
            }
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating BOM...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Generate BOM
              </>
            )}
          </button>
          <p className="text-sm text-gray-400 mt-2">
            (BOM = Bill of Materials)
          </p>
        </div>
      </form>

      {/* Quick Demo Examples - Moved below input area */}
      <div className="mt-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Try These Examples:</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {productExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => handleQuickDemo(example.description)}
              disabled={isSubmitting}
              className="text-left p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:from-blue-50 hover:to-blue-100 hover:border-blue-400 hover:shadow-md hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xl">{example.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{example.name}</div>
                  <div className="text-xs text-gray-500">{example.category}</div>
                </div>
              </div>
              <div className="text-xs text-gray-600 line-clamp-2">
                {example.description.substring(0, 75)}...
              </div>
            </button>
          ))}
          
          {/* Quick Demo Button */}
          <button
            onClick={() => handleQuickDemo(productExamples[0].description)}
            disabled={isSubmitting}
            className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-dashed border-blue-300 hover:from-blue-100 hover:to-indigo-100 hover:border-blue-400 hover:shadow-md hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center min-h-[100px]"
          >
            <svg className="w-6 h-6 text-blue-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="font-semibold text-blue-900 text-sm">Quick Demo</div>
            <div className="text-xs text-blue-600 text-center">
              Generate instant BOM
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}