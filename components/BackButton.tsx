import Link from 'next/link';

export default function BackButton() {
  return (
    <Link 
      href="/"
      className="inline-flex items-center px-4 py-2 bg-white text-indigo-600 rounded-lg shadow hover:shadow-lg transition-all duration-300 font-semibold border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white"
    >
      <span className="mr-2">←</span>
      Kembali ke Beranda
    </Link>
  );
}
