"use client";

import { useState, useEffect } from "react";
import ContentCard from "@/components/ContentCard";
import CodeExample from "@/components/CodeExample";
import InteractiveDemo from "@/components/InteractiveDemo";

export default function ForLoop() {
  const [forStart, setForStart] = useState(1);
  const [forEnd, setForEnd] = useState(5);
  const [forStep, setForStep] = useState(1);
  const [forOutput, setForOutput] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  // Countdown demo
  const [countdown, setCountdown] = useState(10);
  const [countdownRunning, setCountdownRunning] = useState(false);

  // Pattern demo
  const [patternSize, setPatternSize] = useState(5);

  const runForLoop = () => {
    setIsRunning(true);
    setCurrentIndex(-1);
    const output: number[] = [];
    
    let index = 0;
    const interval = setInterval(() => {
      const value = forStart + (index * forStep);
      
      if ((forStep > 0 && value <= forEnd) || (forStep < 0 && value >= forEnd)) {
        output.push(value);
        setForOutput([...output]);
        setCurrentIndex(index);
        index++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setCurrentIndex(-1);
      }
    }, 600);
  };

  const runCountdown = () => {
    setCountdownRunning(true);
    let count = 10;
    setCountdown(count);
    
    const interval = setInterval(() => {
      count--;
      setCountdown(count);
      
      if (count === 0) {
        clearInterval(interval);
        setTimeout(() => setCountdownRunning(false), 1000);
      }
    }, 800);
  };

  const generatePattern = (size: number) => {
    const pattern: string[] = [];
    for (let i = 1; i <= size; i++) {
      pattern.push("⭐".repeat(i));
    }
    return pattern;
  };

  return (
    <div className="space-y-6">
      <ContentCard title="Apa itu For Loop?" icon="🔁">
        <p className="mb-4">
          <strong>For Loop</strong> adalah perulangan yang digunakan ketika kita tahu 
          <strong> berapa kali</strong> perulangan akan dijalankan. For loop sangat cocok 
          untuk iterasi dengan jumlah yang pasti, seperti mengakses elemen array atau 
          menghitung dari 1 sampai 10.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-800">
            <strong>Kapan Pakai For Loop?</strong> Ketika kita tahu jumlah iterasi, 
            seperti: menampilkan angka 1-100, mengakses semua elemen array, atau 
            membuat pola bintang.
          </p>
        </div>
      </ContentCard>

      <ContentCard title="Struktur For Loop" icon="📐">
        <p className="mb-3">
          Format for loop di Java:
        </p>
        <CodeExample 
          language="java"
          code={`for (inisialisasi; kondisi; increment/decrement) {
    // kode yang akan diulang
}`}
        />
        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Penjelasan:</h4>
          <ul className="space-y-2 text-gray-900">
            <li>• <strong>Inisialisasi:</strong> Menentukan nilai awal (contoh: <code className="bg-gray-200 px-1 rounded">int i = 0</code>)</li>
            <li>• <strong>Kondisi:</strong> Perulangan berjalan selama kondisi true (contoh: <code className="bg-gray-200 px-1 rounded">i &lt; 10</code>)</li>
            <li>• <strong>Increment/Decrement:</strong> Mengubah nilai variabel setiap iterasi (contoh: <code className="bg-gray-200 px-1 rounded">i++</code>)</li>
          </ul>
        </div>
      </ContentCard>

      <ContentCard title="Contoh Dasar For Loop" icon="📝">
        <h3 className="text-lg font-bold text-gray-900 mb-2">1. Menghitung 1 sampai 5</h3>
        <CodeExample 
          language="java"
          code={`// Menampilkan angka 1 sampai 5
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}

/* Output:
1
2
3
4
5
*/`}
        />

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Menghitung Mundur</h3>
        <CodeExample 
          language="java"
          code={`// Countdown dari 10 ke 1
for (int i = 10; i >= 1; i--) {
    System.out.println(i);
}
System.out.println("Selesai!");

/* Output:
10
9
8
...
1
Selesai!
*/`}
        />

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Increment dengan Step</h3>
        <CodeExample 
          language="java"
          code={`// Angka genap dari 0 sampai 10
for (int i = 0; i <= 10; i += 2) {
    System.out.println(i);
}

/* Output:
0
2
4
6
8
10
*/`}
        />
      </ContentCard>

      <ContentCard title="🎮 Demo Interaktif: For Loop" icon="⚡">
        <InteractiveDemo 
          title="Simulator For Loop"
          description="Atur nilai start, end, dan step untuk melihat hasil perulangan"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Start:
                </label>
                <input
                  type="number"
                  value={forStart}
                  onChange={(e) => setForStart(Number(e.target.value))}
                  className="w-full p-3 border-2 border-gray-900 rounded-lg text-gray-900"
                  disabled={isRunning}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  End:
                </label>
                <input
                  type="number"
                  value={forEnd}
                  onChange={(e) => setForEnd(Number(e.target.value))}
                  className="w-full p-3 border-2 border-gray-900 rounded-lg text-gray-900"
                  disabled={isRunning}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Step:
                </label>
                <input
                  type="number"
                  value={forStep}
                  onChange={(e) => setForStep(Number(e.target.value))}
                  className="w-full p-3 border-2 border-gray-900 rounded-lg text-gray-900"
                  disabled={isRunning}
                />
              </div>
            </div>

            <button
              onClick={runForLoop}
              disabled={isRunning}
              className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all ${
                isRunning
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              }`}
            >
              {isRunning ? "⏳ Berjalan..." : "▶️ Jalankan For Loop"}
            </button>

            <div className="bg-gray-900 text-white p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Kode Java:</p>
              <pre className="text-green-400 font-mono text-sm">
{`for (int i = ${forStart}; i ${forStep > 0 ? '<=' : '>='} ${forEnd}; i ${forStep > 0 ? '+' : '-'}= ${Math.abs(forStep)}) {
    System.out.println(i);
}`}
              </pre>
            </div>

            {forOutput.length > 0 && (
              <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
                <p className="font-bold text-blue-900 mb-3">📤 Output:</p>
                <div className="flex flex-wrap gap-2">
                  {forOutput.map((value, index) => (
                    <div
                      key={index}
                      className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-yellow-400 text-gray-900 scale-110 animate-pulse"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </InteractiveDemo>
      </ContentCard>

      <ContentCard title="For Loop dengan Array" icon="📦">
        <p className="mb-3">
          For loop sangat berguna untuk mengakses semua elemen array.
        </p>
        <CodeExample 
          language="java"
          code={`// Array buah-buahan
String[] buah = {"Apel", "Jeruk", "Mangga", "Pisang", "Anggur"};

// Akses semua elemen dengan for loop
for (int i = 0; i < buah.length; i++) {
    System.out.println("Buah ke-" + (i+1) + ": " + buah[i]);
}

/* Output:
Buah ke-1: Apel
Buah ke-2: Jeruk
Buah ke-3: Mangga
Buah ke-4: Pisang
Buah ke-5: Anggur
*/`}
        />

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Enhanced For Loop (For-Each)</h3>
        <p className="mb-3">
          Java memiliki for loop khusus untuk array yang lebih sederhana.
        </p>
        <CodeExample 
          language="java"
          code={`String[] buah = {"Apel", "Jeruk", "Mangga", "Pisang"};

// For-each loop (lebih simple)
for (String namaBuah : buah) {
    System.out.println(namaBuah);
}

// Contoh dengan angka
int[] nilai = {85, 90, 78, 92, 88};
int total = 0;

for (int n : nilai) {
    total += n;
}

double rataRata = (double) total / nilai.length;
System.out.println("Rata-rata: " + rataRata);  // 86.6`}
        />
      </ContentCard>

      <ContentCard title="🎮 Demo: Countdown Timer" icon="⏱️">
        <InteractiveDemo 
          title="Countdown dari 10"
          description="Simulasi countdown menggunakan for loop"
        >
          <div className="text-center space-y-4">
            <div className={`text-8xl font-bold transition-all duration-300 ${
              countdown === 0 ? "text-green-500 animate-bounce" : "text-blue-600"
            }`}>
              {countdown === 0 ? "🎉" : countdown}
            </div>
            {countdown === 0 && (
              <p className="text-2xl font-bold text-green-600 animate-pulse">
                Selesai!
              </p>
            )}
            <button
              onClick={runCountdown}
              disabled={countdownRunning}
              className={`px-8 py-4 rounded-lg font-bold text-white text-lg transition-all ${
                countdownRunning
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              }`}
            >
              {countdownRunning ? "⏳ Berjalan..." : "🚀 Mulai Countdown"}
            </button>
          </div>
        </InteractiveDemo>
      </ContentCard>

      <ContentCard title="Nested For Loop (For Bersarang)" icon="🔄">
        <p className="mb-3">
          For loop di dalam for loop, digunakan untuk pola 2 dimensi atau tabel.
        </p>
        <CodeExample 
          language="java"
          code={`// Membuat pola bintang segitiga
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();  // Pindah baris
}

/* Output:
* 
* * 
* * * 
* * * * 
* * * * * 
*/`}
        />

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Tabel Perkalian</h3>
        <CodeExample 
          language="java"
          code={`// Tabel perkalian 5x5
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.print((i * j) + "\\t");  // \\t = tab
    }
    System.out.println();
}

/* Output:
1    2    3    4    5
2    4    6    8    10
3    6    9    12   15
4    8    12   16   20
5    10   15   20   25
*/`}
        />
      </ContentCard>

      <ContentCard title="🎮 Demo: Pola Bintang" icon="⭐">
        <InteractiveDemo 
          title="Generator Pola Segitiga"
          description="Ubah ukuran untuk melihat pola bintang yang berbeda"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Ukuran Pola: {patternSize}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={patternSize}
                onChange={(e) => setPatternSize(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg text-2xl leading-relaxed">
              {generatePattern(patternSize).map((line, index) => (
                <div key={index} className="hover:bg-gray-800 transition-colors">
                  {line}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-blue-800 text-sm">
                <strong>Kode Java:</strong>
              </p>
              <pre className="text-blue-900 text-xs mt-2 font-mono">
{`for (int i = 1; i <= ${patternSize}; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("⭐");
    }
    System.out.println();
}`}
              </pre>
            </div>
          </div>
        </InteractiveDemo>
      </ContentCard>

      <ContentCard title="Break dan Continue" icon="🚦">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Break (Berhenti Total)</h3>
        <p className="mb-3">
          <code className="bg-gray-200 px-2 py-1 rounded">break</code> menghentikan 
          perulangan sepenuhnya.
        </p>
        <CodeExample 
          language="java"
          code={`// Cari angka 7, jika ketemu berhenti
for (int i = 1; i <= 10; i++) {
    System.out.println(i);
    
    if (i == 7) {
        System.out.println("Ketemu angka 7!");
        break;  // Berhenti di sini
    }
}

/* Output:
1
2
3
4
5
6
7
Ketemu angka 7!
*/`}
        />

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Continue (Skip Iterasi)</h3>
        <p className="mb-3">
          <code className="bg-gray-200 px-2 py-1 rounded">continue</code> melewati 
          iterasi saat ini dan lanjut ke iterasi berikutnya.
        </p>
        <CodeExample 
          language="java"
          code={`// Tampilkan angka ganjil saja (lewati yang genap)
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;  // Lewati angka genap
    }
    System.out.println(i);
}

/* Output:
1
3
5
7
9
*/`}
        />
      </ContentCard>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-3">📝 Ringkasan For Loop</h3>
        <ul className="space-y-2">
          <li>✅ Digunakan ketika tahu jumlah iterasi yang pasti</li>
          <li>✅ Format: <code className="bg-white/20 px-2 py-1 rounded">for (init; kondisi; update) {"{ }"}</code></li>
          <li>✅ Sangat cocok untuk array dan pola berulang</li>
          <li>✅ Ada enhanced for loop untuk array: <code className="bg-white/20 px-2 py-1 rounded">for (Type item : array)</code></li>
          <li>✅ Gunakan <strong>break</strong> untuk berhenti, <strong>continue</strong> untuk skip</li>
          <li>✅ Nested for loop untuk pola 2D atau tabel</li>
        </ul>
      </div>
    </div>
  );
}
