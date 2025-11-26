"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: 1,
      title: "Tipe Data",
      href: "/tipe-data",
      icon: "📊",
    },
    {
      id: 2,
      title: "Variabel",
      href: "/variabel",
      icon: "📦",
    },
    {
      id: 3,
      title: "Operator",
      href: "/operator",
      icon: "➕",
    },
    {
      id: 4,
      title: "Control Flow",
      href: "/control-flow",
      icon: "🔀",
    },
    {
      id: 5,
      title: "Perulangan",
      href: "/perulangan",
      icon: "🔄",
    },
    {
      id: 6,
      title: "Method",
      href: "/method",
      icon: "⚡",
    },
    {
      id: 7,
      title: "Array",
      href: "/array",
      icon: "📚",
    },
    {
      id: 8,
      title: "ArrayList",
      href: "/arraylist",
      icon: "📋",
    },
    {
      id: 9,
      title: "Sorting & Searching",
      href: "/sorting-searching",
      icon: "🔍",
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-indigo-600 text-white p-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-indigo-900 to-indigo-800 text-white shadow-2xl z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-72 overflow-y-auto`}
      >
        <div className="p-6">
          {/* Logo/Header */}
          <Link href="/" className="block mb-8">
            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <span className="text-4xl">☕</span>
              <div>
                <h2 className="text-xl font-bold">Java Learning</h2>
                <p className="text-xs text-indigo-300">Interactive Tutorial</p>
              </div>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav>
            <p className="text-xs font-semibold text-indigo-300 mb-3 uppercase tracking-wide">
              Materi Pembelajaran
            </p>
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-indigo-600 shadow-lg scale-105 font-bold"
                          : "hover:bg-indigo-700/50 hover:translate-x-1"
                      }`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer Info */}
          <div className="mt-8 pt-8 border-t border-indigo-700">
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
