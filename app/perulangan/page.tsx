"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ForLoop from "./components/ForLoop";
import WhileLoop from "./components/WhileLoop";

export default function PerulanganPage() {
  const [activeTab, setActiveTab] = useState<"for" | "while">("for");

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            🔄 Perulangan (Loop) di Java
          </h1>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("for")}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === "for"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              <span className="text-2xl mr-2">🔁</span>
              For Loop
            </button>
            <button
              onClick={() => setActiveTab("while")}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === "while"
                  ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              <span className="text-2xl mr-2">♾️</span>
              While Loop
            </button>
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-300">
            {activeTab === "for" ? <ForLoop /> : <WhileLoop />}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
