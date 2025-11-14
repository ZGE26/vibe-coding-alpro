import Link from 'next/link';

export default function Home() {
  const topics = [
    {
      id: 1,
      title: 'Tipe Data',
      description: 'Pelajari tipe data Java dengan simulasi interaktif',
      href: '/tipe-data',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Variabel',
      description: 'Memahami variabel Java dengan visualisasi memori',
      href: '/variabel',
      icon: '📦'
    },
    {
      id: 3,
      title: 'Operator',
      description: 'Praktik operator Java dengan kalkulator interaktif',
      href: '/operator',
      icon: '➕'
    },
    {
      id: 4,
      title: 'Control Flow',
      description: 'Visualisasi percabangan dan perulangan Java',
      href: '/control-flow',
      icon: '🔀'
    },
    {
      id: 5,
      title: 'Method',
      description: 'Belajar method Java dengan contoh case nyata',
      href: '/method',
      icon: '⚡'
    },
    {
      id: 6,
      title: 'Array',
      description: 'Simulasi array Java dengan visualisasi data',
      href: '/array',
      icon: '📚'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ☕ Belajar Java Programming
          </h1>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            Pelajari bahasa Java dengan visualisasi interaktif dan contoh case nyata yang mudah dipahami
          </p>
          <div className="mt-4 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
            Interactive Learning with Animations 🎯
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic) => (
            <Link 
              key={topic.id} 
              href={topic.href}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border-2 border-transparent hover:border-indigo-500">
                <div className="text-5xl mb-4">{topic.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {topic.title}
                </h2>
                <p className="text-gray-900">
                  {topic.description}
                </p>
                <div className="mt-4 text-indigo-600 font-semibold flex items-center">
                  Mulai Belajar 
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-900">
            💡 Tip: Klik pada topik yang ingin kamu pelajari untuk memulai
          </p>
        </div>
      </div>
    </div>
  );
}
