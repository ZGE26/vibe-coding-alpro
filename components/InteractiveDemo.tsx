'use client';

import { useState } from 'react';

interface InteractiveDemoProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function InteractiveDemo({ title, description, children }: InteractiveDemoProps) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 my-6 border-2 border-purple-300">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">🎮</span>
        <div>
          <h3 className="text-xl font-bold text-purple-800">{title}</h3>
          <p className="text-purple-600 text-sm">{description}</p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-inner">
        {children}
      </div>
    </div>
  );
}
