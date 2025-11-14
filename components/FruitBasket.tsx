'use client';

import { useState } from 'react';

interface FruitBasketProps {
  onAddFruit?: () => void;
  onRemoveFruit?: () => void;
}

export default function FruitBasket({ onAddFruit, onRemoveFruit }: FruitBasketProps) {
  const [fruits, setFruits] = useState<string[]>(['🍊', '🍊', '🍊']);
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const addFruit = () => {
    setIsAdding(true);
    setTimeout(() => {
      setFruits([...fruits, '🍊']);
      setIsAdding(false);
      onAddFruit?.();
    }, 300);
  };

  const removeFruit = () => {
    if (fruits.length > 0) {
      setIsRemoving(true);
      setTimeout(() => {
        setFruits(fruits.slice(0, -1));
        setIsRemoving(false);
        onRemoveFruit?.();
      }, 300);
    }
  };

  const removeFirst = () => {
    if (fruits.length > 0) {
      setFruits(fruits.slice(1));
    }
  };

  const reset = () => {
    setFruits(['🍊', '🍊', '🍊']);
  };

  return (
    <div className="space-y-4">
      {/* Info */}
      <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Array Length:</strong> {fruits.length} | 
          <strong className="ml-2">Indexes:</strong> 0 sampai {fruits.length - 1}
        </p>
      </div>

      {/* Falling fruit animation */}
      {isAdding && (
        <div className="text-6xl animate-bounce text-center">
          🍊
        </div>
      )}

      {/* Baskom dengan Jeruk */}
      <div className="relative">
        {/* Baskom Container */}
        <div className="bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 rounded-b-[3rem] border-4 border-amber-500 p-6 min-h-[250px] relative overflow-hidden shadow-2xl">
          {/* Jeruk di dalam baskom */}
          <div className="flex flex-wrap gap-3 justify-center items-end min-h-[180px] content-end">
            {fruits.map((fruit, index) => (
              <div
                key={index}
                className={`relative transform transition-all duration-300 ${
                  isRemoving && index === fruits.length - 1 ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative group">
                  {/* Jeruk */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full shadow-xl flex items-center justify-center transform transition-all hover:scale-110 cursor-pointer relative">
                    <span className="text-4xl">{fruit}</span>
                    {/* Shine effect */}
                    <div className="absolute top-1 left-2 w-4 h-4 bg-white rounded-full opacity-60"></div>
                    <div className="absolute top-3 left-4 w-2 h-2 bg-white rounded-full opacity-40"></div>
                  </div>
                  
                  {/* Index tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                    Index: [{index}]
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {fruits.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400 text-lg font-semibold">Baskom kosong!</p>
            </div>
          )}
          
          {/* Baskom shadow/depth effect */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-amber-700 opacity-30 rounded-b-[3rem]"></div>
        </div>

        {/* Array visualization */}
        <div className="mt-4 bg-white p-4 rounded-lg border-2 border-gray-300">
          <p className="text-xs text-gray-500 mb-1">Representasi Array:</p>
          <div className="font-mono text-sm sm:text-base break-all">
            <span className="text-blue-600">String[]</span> jeruk = 
            <span className="text-green-600"> {`{${fruits.map((_, i) => `"🍊"`).join(', ')}}`}</span>;
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Length: <span className="font-bold text-blue-600">{fruits.length}</span>
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={addFruit}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2"
        >
          <span className="text-2xl">+</span> Tambah Jeruk
        </button>
        <button
          onClick={removeFruit}
          disabled={fruits.length === 0}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <span className="text-2xl">-</span> Ambil Jeruk
        </button>
        <button
          onClick={removeFirst}
          disabled={fruits.length === 0}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Ambil Pertama
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-lg"
        >
          Reset
        </button>
      </div>

      {/* Explanation */}
      <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
        <p className="text-sm text-purple-800">
          <strong>💡 Konsep:</strong> Seperti baskom jeruk, array menyimpan banyak item. 
          Setiap jeruk punya posisi (index) dimulai dari 0!
        </p>
      </div>
    </div>
  );
}
