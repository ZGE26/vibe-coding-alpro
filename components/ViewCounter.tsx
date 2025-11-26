"use client";

import { usePageViews } from "@/hooks";

interface ViewCounterProps {
  pageName: string;
  className?: string;
}

export default function ViewCounter({ pageName, className = "" }: ViewCounterProps) {
  const { views, loading } = usePageViews(pageName);

  return (
    <div className={`inline-flex items-center gap-1.5 text-xs sm:text-sm ${className}`}>
      <span className="text-gray-600">Viewers</span>
      {loading ? (
        <span className="text-gray-500">...</span>
      ) : (
        <span className="font-semibold text-gray-700">
          {views.toLocaleString()}
        </span>
      )}
    </div>
  );
}
