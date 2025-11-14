'use client';

import { useState } from 'react';

interface ArrayVisualizationProps {
  items: (string | number)[];
  title?: string;
}

export default function ArrayVisualization({ items, title = "Array" }: ArrayVisualizationProps) {
  return (
    <div className="space-y-4">
      {title && <h4 className="font-bold text-gray-900 text-center">{title}</h4>}
      
      {/* Baskom Container */}
      <div className="relative">
        {/* Baskom */}
        <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-b-3xl border-4 border-yellow-400 p-4 min-h-[200px] relative overflow-hidden shadow-lg">
          {/* Jeruk/Items */}
          <div className="flex flex-wrap gap-3 justify-center items-end min-h-[160px]">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative animate-bounce"
                style={{ animationDelay: `${index * 0.1}s`, animationDuration: '0.5s' }}
              >
                {/* Jeruk */}
                <div className="relative group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-xl flex items-center justify-center transform transition-transform hover:scale-110 cursor-pointer">
                    <span className="text-white font-bold text-lg">{item}</span>
                  </div>
                  {/* Index label */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    [{index}]
                  </div>
                  {/* Shine effect */}
                  <div className="absolute top-2 left-2 w-6 h-6 bg-white rounded-full opacity-40"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Baskom rim effect */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-600 opacity-50"></div>
        </div>
        
        {/* Array bracket visualization */}
        <div className="mt-4 text-center font-mono text-sm text-gray-900">
          [ {items.join(', ')} ]
        </div>
      </div>
    </div>
  );
}
