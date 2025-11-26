"use client";

import Sidebar from "./Sidebar";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-64 transition-all duration-300 pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
