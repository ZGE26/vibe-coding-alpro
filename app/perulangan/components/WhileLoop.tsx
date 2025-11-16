"use client";

import { useState } from "react";
import ContentCard from "@/components/ContentCard";
import CodeExample from "@/components/CodeExample";
import InteractiveDemo from "@/components/InteractiveDemo";

export default function WhileLoop() {
  const [whileCondition, setWhileCondition] = useState(5);
  const [whileOutput, setWhileOutput] = useState<number[]>([]);
  const [isWhileRunning, setIsWhileRunning] = useState(false);
  const [currentValue, setCurrentValue] = useState(-1);

  // Guess number game
  const [targetNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guessInput, setGuessInput] = useState("");
  const [guessHistory, setGuessHistory] = useState<{guess: number, message: string}[]>([]);
  const [gameWon, setGameWon] = useState(false);

  // Password validator
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts] = useState(3);
  const [isLocked, setIsLocked] = useState(false);
  const correctPassword = "java123";

  const runWhileLoop = () => {
    setIsWhileRunning(true);
    const output: number[] = [];
    let counter = 0;
    setCurrentValue(counter);

    const interval = setInterval(() => {
      if (counter < whileCondition) {
        output.push(counter);
        setWhileOutput([...output]);
        setCurrentValue(counter);
        counter++;
      } else {
        clearInterval(interval);
        setIsWhileRunning(false);
        setCurrentValue(-1);
      }
    }, 600);
  };

  const makeGuess = () => {
    if (gameWon) return;
    
    const guess = parseInt(guessInput);
    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert("Masukkan angka antara 1-10!");
      return;
    }

    let message = "";
    if (guess === targetNumber) {
      message = "🎉 Benar! Anda menang!";
      setGameWon(true);
    } else if (guess < targetNumber) {
      message = "📈 Terlalu kecil, coba lagi!";
    } else {
      message = "📉 Terlalu besar, coba lagi!";
    }

    setGuessHistory([...guessHistory, { guess, message }]);
    setGuessInput("");
  };

  const resetGame = () => {
    setGuessHistory([]);
    setGameWon(false);
    setGuessInput("");
  };

  const checkPassword = () => {
    if (isLocked) return;

    if (password === correctPassword) {
      alert("✅ Password benar! Akses diberikan.");
      setPassword("");
      setAttempts(0);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      if (newAttempts >= maxAttempts) {
        setIsLocked(true);
        alert("🔒 Akun terkunci! Terlalu banyak percobaan salah.");
      } else {
        alert(`❌ Password salah! Sisa percobaan: ${maxAttempts - newAttempts}`);
      }
      setPassword("");
    }
  };

  const resetPassword = () => {
    setPassword("");
    setAttempts(0);
    setIsLocked(false);
  };

  return (
    <div className="space-y-6">
      <ContentCard title="Apa itu While Loop?" icon="♾️">
        <p className="mb-4">
          <strong>While Loop</strong> adalah perulangan yang berjalan selama kondisi bernilai 
          <strong> true</strong>. Berbeda dengan for loop, while loop digunakan ketika kita 
          <strong> tidak tahu pasti</strong> berapa kali perulangan akan berjalan. Perulangan 
          akan terus berjalan sampai kondisinya menjadi false.
        </p>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4">
          <p className="text-purple-800">
            <strong>Kapan Pakai While Loop?</strong> Ketika jumlah iterasi tidak pasti, 
            seperti: membaca input sampai benar, menunggu kondisi tertentu, atau game loop 
            yang berjalan sampai player kalah.
          </p>
        </div>
      </ContentCard>

      <ContentCard title="Struktur While Loop" icon="📐">
        <p className="mb-3">
          Format while loop di Java:
        </p>
        <CodeExample 
          language="java"
          code={`while (kondisi) {
    // kode yang akan diulang
    // pastikan kondisi berubah agar tidak infinite loop!
}`}
        />
        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Penjelasan:</h4>
          <ul className="space-y-2 text-gray-900">
            <li>• <strong>Kondisi:</strong> Diperiksa sebelum setiap iterasi</li>
            <li>• Jika kondisi <strong>true</strong>, kode di dalam blok dijalankan</li>
            <li>• Jika kondisi <strong>false</strong>, perulangan berhenti</li>
            <li>• ⚠️ <strong>PENTING:</strong> Pastikan kondisi bisa menjadi false, atau loop tidak akan berhenti!</li>
          </ul>
        </div>
      </ContentCard>

      <ContentCard title="Contoh Dasar While Loop" icon="📝">
        <h3 className="text-lg font-bold text-gray-900 mb-2">1. Menghitung 1 sampai 5</h3>
        <CodeExample 
          language="java"
          code={`int i = 1;

while (i <= 5) {
    System.out.println(i);
    i++;  // PENTING: increment agar tidak infinite loop!
}

/* Output:
1
2
3
4
5
*/`}
        />

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Countdown</h3>
        <CodeExample 
          language="java"
          code={`int countdown = 5;

while (countdown > 0) {
    System.out.println(countdown);
    countdown--;
}
System.out.println("Selesai!");

/* Output:
5
4
3
2
1
Selesai!
*/`}
        />

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Menjumlahkan Angka</h3>
        <CodeExample 
          language="java"
          code={`int total = 0;
int angka = 1;

while (angka <= 10) {
    total += angka;
    angka++;
}

System.out.println("Total 1+2+...+10 = " + total);
// Output: Total 1+2+...+10 = 55`}
        />
      </ContentCard>

      <ContentCard title="🎮 Demo Interaktif: While Loop" icon="⚡">
        <InteractiveDemo 
          title="Simulator While Loop"
          description="Tentukan berapa kali while loop akan berjalan"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Loop akan berjalan sampai counter mencapai:
              </label>
              <input
                type="number"
                value={whileCondition}
                onChange={(e) => setWhileCondition(Number(e.target.value))}
                min="1"
                max="20"
                className="w-full p-3 border-2 border-gray-900 rounded-lg text-gray-900"
                disabled={isWhileRunning}
              />
            </div>

            <button
              onClick={runWhileLoop}
              disabled={isWhileRunning}
              className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all ${
                isWhileRunning
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
              }`}
            >
              {isWhileRunning ? "⏳ Berjalan..." : "▶️ Jalankan While Loop"}
            </button>

            <div className="bg-gray-900 text-white p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Kode Java:</p>
              <pre className="text-green-400 font-mono text-sm">
{`int counter = 0;

while (counter < ${whileCondition}) {
    System.out.println(counter);
    counter++;
}`}
              </pre>
            </div>

            {whileOutput.length > 0 && (
              <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-4">
                <p className="font-bold text-purple-900 mb-3">📤 Output:</p>
                <div className="flex flex-wrap gap-2">
                  {whileOutput.map((value, index) => (
                    <div
                      key={index}
                      className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl transition-all duration-300 ${
                        value === currentValue
                          ? "bg-yellow-400 text-gray-900 scale-110 animate-pulse"
                          : "bg-purple-500 text-white"
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

      <ContentCard title="Do-While Loop" icon="🔄">
        <p className="mb-3">
          <strong>Do-While Loop</strong> mirip dengan while, tapi kode dijalankan 
          <strong> minimal 1 kali</strong> sebelum kondisi dicek.
        </p>
        <CodeExample 
          language="java"
          code={`// While loop biasa (bisa tidak dijalankan sama sekali)
int i = 10;
while (i < 5) {
    System.out.println(i);  // Tidak akan dijalankan
}

// Do-While loop (minimal 1 kali dijalankan)
int j = 10;
do {
    System.out.println(j);  // Dijalankan 1 kali meskipun kondisi false
} while (j < 5);

/* Output:
10
*/`}
        />

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Contoh Menu Program</h3>
        <CodeExample 
          language="java"
          code={`import java.util.Scanner;

Scanner input = new Scanner(System.in);
int pilihan;

do {
    System.out.println("=== MENU ===");
    System.out.println("1. Tambah Data");
    System.out.println("2. Lihat Data");
    System.out.println("3. Hapus Data");
    System.out.println("0. Keluar");
    System.out.print("Pilih: ");
    
    pilihan = input.nextInt();
    
    if (pilihan != 0) {
        System.out.println("Anda memilih menu " + pilihan);
    }
    
} while (pilihan != 0);

System.out.println("Program selesai!");`}
        />
      </ContentCard>

      <ContentCard title="🎮 Demo: Tebak Angka" icon="🎲">
        <InteractiveDemo 
          title="Game Tebak Angka (1-10)"
          description="Tebak angka yang benar menggunakan konsep while loop"
        >
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg text-center">
              <p className="text-xl font-bold mb-2">🎯 Tebak angka antara 1-10!</p>
              <p className="text-sm">Target: <span className="text-2xl">???</span></p>
              {gameWon && (
                <p className="text-3xl mt-4 animate-bounce">Target: {targetNumber}</p>
              )}
            </div>

            {!gameWon && (
              <div className="flex gap-2">
                <input
                  type="number"
                  value={guessInput}
                  onChange={(e) => setGuessInput(e.target.value)}
                  placeholder="Masukkan tebakan"
                  min="1"
                  max="10"
                  className="flex-1 p-3 border-2 border-gray-900 rounded-lg text-gray-900"
                  onKeyPress={(e) => e.key === 'Enter' && makeGuess()}
                />
                <button
                  onClick={makeGuess}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-green-700"
                >
                  Tebak!
                </button>
              </div>
            )}

            {guessHistory.length > 0 && (
              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 max-h-64 overflow-y-auto">
                <p className="font-bold text-gray-900 mb-2">📜 Riwayat Tebakan:</p>
                {guessHistory.map((item, index) => (
                  <div key={index} className="mb-2 p-2 bg-white rounded border-l-4 border-purple-500">
                    <span className="font-bold">#{index + 1}:</span> {item.guess} → {item.message}
                  </div>
                ))}
              </div>
            )}

            {gameWon && (
              <button
                onClick={resetGame}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold hover:from-blue-600 hover:to-blue-700"
              >
                🔄 Main Lagi
              </button>
            )}

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-blue-800 text-sm">
                <strong>Konsep While Loop:</strong>
              </p>
              <pre className="text-blue-900 text-xs mt-2 font-mono">
{`while (belumBenar) {
    int tebakan = input.nextInt();
    if (tebakan == target) {
        System.out.println("Benar!");
        belumBenar = false;
    } else {
        System.out.println("Salah, coba lagi!");
    }
}`}
              </pre>
            </div>
          </div>
        </InteractiveDemo>
      </ContentCard>

      <ContentCard title="🎮 Demo: Password Validator" icon="🔐">
        <InteractiveDemo 
          title="Validasi Password (Max 3x Percobaan)"
          description="Simulasi validasi password dengan batas percobaan"
        >
          <div className="space-y-4">
            <div className={`p-6 rounded-lg text-center text-white ${
              isLocked ? "bg-red-500" : "bg-gradient-to-r from-indigo-500 to-purple-600"
            }`}>
              <p className="text-xl font-bold mb-2">
                {isLocked ? "🔒 Akun Terkunci!" : "🔐 Masukkan Password"}
              </p>
              <p className="text-sm">
                {isLocked 
                  ? "Terlalu banyak percobaan gagal" 
                  : `Sisa percobaan: ${maxAttempts - attempts}`
                }
              </p>
              <p className="text-xs mt-2 opacity-75">Hint: java123</p>
            </div>

            {!isLocked && (
              <div className="flex gap-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="flex-1 p-3 border-2 border-gray-900 rounded-lg text-gray-900"
                  onKeyPress={(e) => e.key === 'Enter' && checkPassword()}
                />
                <button
                  onClick={checkPassword}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-bold hover:from-purple-600 hover:to-purple-700"
                >
                  Login
                </button>
              </div>
            )}

            {attempts > 0 && (
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-yellow-800">
                  ⚠️ <strong>Percobaan gagal:</strong> {attempts}/{maxAttempts}
                </p>
              </div>
            )}

            {isLocked && (
              <button
                onClick={resetPassword}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-green-700"
              >
                🔄 Reset
              </button>
            )}

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <p className="text-purple-800 text-sm">
                <strong>Konsep While Loop:</strong>
              </p>
              <pre className="text-purple-900 text-xs mt-2 font-mono">
{`int attempts = 0;
boolean isLocked = false;

while (!isLocked && attempts < 3) {
    String input = scanner.nextLine();
    if (input.equals("java123")) {
        System.out.println("Login sukses!");
        break;
    } else {
        attempts++;
        if (attempts >= 3) {
            isLocked = true;
        }
    }
}`}
              </pre>
            </div>
          </div>
        </InteractiveDemo>
      </ContentCard>

      <ContentCard title="Perbedaan For vs While" icon="⚖️">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">🔁 For Loop</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>✅ Jumlah iterasi sudah diketahui</li>
              <li>✅ Inisialisasi, kondisi, update dalam 1 baris</li>
              <li>✅ Cocok untuk array dan range angka</li>
              <li>✅ Contoh: loop 1-100, akses array</li>
            </ul>
          </div>
          <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-4">
            <h4 className="font-bold text-purple-900 mb-2">♾️ While Loop</h4>
            <ul className="text-purple-800 text-sm space-y-1">
              <li>✅ Jumlah iterasi tidak pasti</li>
              <li>✅ Hanya cek kondisi saja</li>
              <li>✅ Cocok untuk validasi input, game loop</li>
              <li>✅ Contoh: input sampai benar, tebak angka</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-yellow-800">
            <strong>💡 Tips:</strong> Jika tahu pasti berapa kali loop, pakai <strong>for</strong>. 
            Jika loop sampai kondisi tertentu terpenuhi, pakai <strong>while</strong>.
          </p>
        </div>
      </ContentCard>

      <ContentCard title="Infinite Loop (Loop Tak Terbatas)" icon="⚠️">
        <p className="mb-3">
          Hati-hati dengan infinite loop - perulangan yang tidak pernah berhenti!
        </p>
        <CodeExample 
          language="java"
          code={`// ❌ BAHAYA! Infinite loop (jangan jalankan!)
while (true) {
    System.out.println("Loop ini tidak akan berhenti!");
}

// ❌ Lupa increment
int i = 0;
while (i < 10) {
    System.out.println(i);
    // Lupa i++; → infinite loop!
}

// ✅ Benar - ada kondisi untuk berhenti
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;  // Pastikan variabel berubah!
}`}
        />
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
          <p className="text-red-800">
            <strong>⚠️ Warning:</strong> Pastikan kondisi while bisa menjadi false, 
            atau program akan hang! Selalu update variabel di dalam loop.
          </p>
        </div>
      </ContentCard>

      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-3">📝 Ringkasan While Loop</h3>
        <ul className="space-y-2">
          <li>✅ Digunakan ketika jumlah iterasi tidak pasti</li>
          <li>✅ Format: <code className="bg-white/20 px-2 py-1 rounded">while (kondisi) {"{ }"}</code></li>
          <li>✅ Cocok untuk validasi input, game loop, waiting condition</li>
          <li>✅ Do-While: minimal dijalankan 1 kali sebelum cek kondisi</li>
          <li>✅ <strong>WAJIB</strong> pastikan kondisi bisa false untuk menghindari infinite loop</li>
          <li>✅ Update variabel yang digunakan dalam kondisi</li>
        </ul>
      </div>
    </div>
  );
}
