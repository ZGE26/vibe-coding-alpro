"use client";

import Link from 'next/link';
import { MENU_ITEMS } from '@/constants/menu-items';
import ViewCounter from '@/components/ViewCounter';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ☕ E-Learning Platform
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Belajar Algoritma & Pemrograman{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Java Interaktif
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Platform pembelajaran algoritma dan pemrograman Java dengan visualisasi interaktif yang mudah dipahami untuk pemula hingga menengah.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
                <div className="flex gap-8">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">9+</div>
                    <div className="text-sm text-gray-600">Materi Lengkap</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                      <ViewCounter pageName="home" className="text-3xl font-bold" />
                    </div>
                    <div className="text-sm text-gray-600">Total Viewers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              <div className="relative">
                {/* Student Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                      9+
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Modul Java</div>
                      <div className="text-xs text-gray-500">Complete Learning Path</div>
                    </div>
                  </div>
                  
                  {/* Learning Chart */}
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-4">
                    <div className="text-sm font-semibold text-gray-700 mb-3">Learning Chart</div>
                    <div className="flex items-end justify-between gap-2 h-32">
                      <div className="bg-gradient-to-t from-pink-400 to-pink-300 rounded-lg w-full h-16"></div>
                      <div className="bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-lg w-full h-24"></div>
                      <div className="bg-gradient-to-t from-orange-400 to-orange-300 rounded-lg w-full h-20"></div>
                      <div className="bg-gradient-to-t from-purple-400 to-purple-300 rounded-lg w-full h-32"></div>
                    </div>
                  </div>
                  
                  {/* Student Image Placeholder */}
                  <div className="mt-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl h-48 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-6xl mb-2">☕</div>
                      <div className="font-bold">Java Learning</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Browse Top Essential Career Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih topik yang ingin kamu pelajari dan mulai perjalanan belajar Java-mu sekarang!
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {MENU_ITEMS.map((topic, index) => {
            const colors = [
              'from-pink-400 to-pink-600',
              'from-purple-400 to-purple-600', 
              'from-cyan-400 to-cyan-600',
              'from-orange-400 to-orange-600',
              'from-blue-400 to-blue-600',
              'from-green-400 to-green-600',
              'from-red-400 to-red-600',
              'from-indigo-400 to-indigo-600',
              'from-yellow-400 to-yellow-600'
            ];
            
            return (
              <Link 
                key={topic.id} 
                href={topic.href}
                className="group"
              >
                <div className={`bg-gradient-to-br ${colors[index % colors.length]} rounded-3xl p-6 h-48 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="text-5xl text-white">{topic.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-white/90 line-clamp-2">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
