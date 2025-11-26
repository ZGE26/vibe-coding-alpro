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
      {/* Sticky Header for Mobile - Shows when sidebar is closed */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg z-40 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-white/10 rounded-lg transition-all"
        >
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>
        <h1 className="text-base font-bold flex-1 text-center truncate px-2">
          {currentPage.title}
        </h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </header>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 mt-16"
          onClick={() => setIsOpen(false)}
          style={{ touchAction: 'none' }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 lg:top-0 left-0 h-[calc(100vh-4rem)] lg:h-screen bg-gradient-to-b from-indigo-900 to-indigo-800 text-white shadow-2xl z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 overflow-y-auto`}
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
                      onClick={() => setIsOpen(false)}
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
