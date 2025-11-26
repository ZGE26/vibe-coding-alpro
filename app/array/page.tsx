'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Array1D from './components/Array1D';
import Array2D from './components/Array2D';

export default function ArrayPage() {
  const [activeTab, setActiveTab] = useState<'1d' | '2d'>('1d');

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            🍊 Array di Java
          </h1>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('1d')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all transform ${
                activeTab === '1d'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">📊</span>
                <span>Array 1 Dimensi</span>
              </div>
              <p className={`text-sm mt-1 ${activeTab === '1d' ? 'text-blue-100' : 'text-gray-500'}`}>
                Dasar array & baskom jeruk
              </p>
            </button>
            <button
              onClick={() => setActiveTab('2d')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all transform ${
                activeTab === '2d'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🎭</span>
                <span>Array Multi Dimensi</span>
              </div>
              <p className={`text-sm mt-1 ${activeTab === '2d' ? 'text-purple-100' : 'text-gray-500'}`}>
                Array 2D, 3D & matriks
              </p>
            </button>
          </div>

          {/* Content */}
          {activeTab === '1d' ? <Array1D /> : <Array2D />}
        </div>
      </div>
    </div>
    </PageLayout>
  );
}
