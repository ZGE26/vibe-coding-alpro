'use client';

interface MemorySlot {
  address: string;
  variable: string;
  value: string | number;
  type: string;
}

interface MemoryVisualizationProps {
  slots: MemorySlot[];
}

export default function MemoryVisualization({ slots }: MemoryVisualizationProps) {
  return (
    <div className="space-y-2">
      <h4 className="font-bold text-gray-700 mb-3">📊 Visualisasi Memori:</h4>
      {slots.map((slot, index) => (
        <div 
          key={index}
          className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all"
        >
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-mono text-sm">
            {slot.address}
          </div>
          <div className="flex-1">
            <div className="font-bold text-gray-800">{slot.variable}</div>
            <div className="text-sm text-gray-600">{slot.type}</div>
          </div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-mono font-bold">
            {slot.value}
          </div>
        </div>
      ))}
    </div>
  );
}
