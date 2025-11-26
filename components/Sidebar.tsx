"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MENU_ITEMS } from "@/constants/menu-items";
import { useBodyScrollLock, useCurrentPage } from "@/hooks";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  // Use custom hooks
  useBodyScrollLock(isOpen);
  const currentPage = useCurrentPage(pathname, MENU_ITEMS);

  return (
    <>
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <aside
        className="hidden lg:block fixed top-0 left-0 h-screen bg-gradient-to-b from-indigo-900 to-indigo-800 text-white shadow-2xl z-40 w-64 overflow-y-auto"
      >
        <div className="p-4">
          {/* Logo/Header */}
          <Link href="/" className="block mb-6">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <span className="text-3xl">☕</span>
              <div>
                <h2 className="text-lg font-bold">Java Learning</h2>
                <p className="text-xs text-indigo-300">Interactive Tutorial</p>
              </div>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav>
            <p className="text-xs font-semibold text-indigo-300 mb-2 uppercase tracking-wide">
              Materi Pembelajaran
            </p>
            <ul className="space-y-0.5">
              {MENU_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-indigo-600 shadow-lg scale-105 font-bold"
                          : "hover:bg-indigo-700/50 hover:translate-x-1"
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer Info */}
          <div className="mt-6 pt-6 border-t border-indigo-700">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-indigo-300 hover:text-white transition-colors"
            >
              <span>🏠</span>
              <span>Kembali ke Home</span>
            </Link>
          </div>
        </div>

        {/* Scrollbar Styling */}
        <style jsx>{`
          aside::-webkit-scrollbar {
            width: 6px;
          }
          aside::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
          }
          aside::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 3px;
          }
          aside::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.5);
          }
        `}</style>
      </aside>
    </>
  );
}
