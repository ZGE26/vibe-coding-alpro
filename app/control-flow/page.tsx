"use client";

import { useState } from "react";
import PageLayout from '@/components/PageLayout';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';
import InteractiveDemo from "@/components/InteractiveDemo";

export default function ControlFlowPage() {
  const [nilaiSiswa, setNilaiSiswa] = useState<number>(75);
  const [umurInput, setUmurInput] = useState<number>(20);
  const [hariInput, setHariInput] = useState<number>(1);
  const [suhuInput, setSuhuInput] = useState<number>(25);

  const getGrade = (nilai: number) => {
    if (nilai >= 90) return { grade: "A", color: "bg-green-500", message: "Sempurna! 🌟" };
    if (nilai >= 80) return { grade: "B", color: "bg-blue-500", message: "Bagus! 👍" };
    if (nilai >= 70) return { grade: "C", color: "bg-yellow-500", message: "Cukup 👌" };
    if (nilai >= 60) return { grade: "D", color: "bg-orange-500", message: "Kurang 😐" };
    return { grade: "E", color: "bg-red-500", message: "Tidak Lulus 😢" };
  };

  const getStatusUmur = (umur: number) => {
    if (umur >= 17) {
      return { status: "Dewasa", color: "text-green-600", icon: "✅", message: "Boleh membuat KTP" };
    } else {
      return { status: "Belum Dewasa", color: "text-red-600", icon: "❌", message: "Belum boleh membuat KTP" };
    }
  };

  const getNamaHari = (hari: number) => {
    const hariNames = ["", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    return hariNames[hari] || "Tidak Valid";
  };

  const getSuhuStatus = (suhu: number) => {
    if (suhu >= 35) return { status: "Sangat Panas", color: "bg-red-600", icon: "🔥" };
    if (suhu >= 25) return { status: "Panas", color: "bg-orange-500", icon: "☀️" };
    if (suhu >= 20) return { status: "Hangat", color: "bg-yellow-500", icon: "🌤️" };
    if (suhu >= 15) return { status: "Sejuk", color: "bg-blue-500", icon: "🌥️" };
    return { status: "Dingin", color: "bg-blue-700", icon: "❄️" };
  };

  const gradeResult = getGrade(nilaiSiswa);
  const umurResult = getStatusUmur(umurInput);
  const suhuResult = getSuhuStatus(suhuInput);

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            🔀 Control Flow di Java
          </h1>

          <ContentCard title="Apa itu Control Flow?" icon="💡">
            <p className="mb-4">
              <strong>Control Flow</strong> adalah cara mengatur alur eksekusi program di Java. 
              Dengan control flow, kita dapat membuat <strong>keputusan (percabangan)</strong> 
              menggunakan if-else dan switch, serta mengatur alur program secara dinamis 
              berdasarkan kondisi tertentu.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4">
              <p className="text-purple-800">
                <strong>Penting:</strong> Halaman ini fokus pada <strong>percabangan</strong> (if-else, switch). 
                Untuk <strong>perulangan</strong> (for, while), lihat halaman <strong>Perulangan</strong>.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="1. Percabangan dengan if" icon="🌿">
            <p className="mb-3">
              Statement <code className="bg-gray-200 px-2 py-1 rounded">if</code> digunakan 
              untuk menjalankan kode jika kondisi bernilai <strong>true</strong>.
            </p>
            
            <CodeExample 
              language="java"
              code={`// If sederhana
int umur = 18;

if (umur >= 17) {
    System.out.println("Anda sudah dewasa");
}

// Contoh lain
int nilai = 85;

if (nilai >= 70) {
    System.out.println("Selamat, Anda lulus!");
}

// Dengan kondisi kompleks
int suhu = 35;

if (suhu > 30) {
    System.out.println("Cuaca sangat panas");
}`}
            />
          </ContentCard>

          <ContentCard title="🎮 Demo: if Statement" icon="⚡">
            <InteractiveDemo 
              title="Cek Status Umur"
              description="Masukkan umur untuk melihat status (dewasa >= 17)"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Umur:
                  </label>
                  <input
                    type="number"
                    value={umurInput}
                    onChange={(e) => setUmurInput(Number(e.target.value))}
                    className="w-full p-3 border-2 border-gray-900 rounded-lg text-gray-900 text-xl font-bold text-center"
                    min="0"
                    max="100"
                  />
                </div>

                <div className={`p-6 rounded-lg text-white text-center ${
                  umurResult.status === "Dewasa" ? "bg-green-500" : "bg-red-500"
                }`}>
                  <p className="text-6xl mb-3">{umurResult.icon}</p>
                  <p className="text-2xl font-bold mb-2">{umurResult.status}</p>
                  <p className="text-lg">{umurResult.message}</p>
                </div>

                <div className="bg-gray-900 text-white p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Kode Java:</p>
                  <pre className="text-green-400 font-mono text-sm">
{`int umur = ${umurInput};

if (umur >= 17) {
    System.out.println("${umurResult.status}");
    System.out.println("${umurResult.message}");
}${umurInput < 17 ? ` else {
    System.out.println("${umurResult.status}");
    System.out.println("${umurResult.message}");
}` : ''}`}
                  </pre>
                </div>
              </div>
            </InteractiveDemo>
          </ContentCard>

          <ContentCard title="2. if-else" icon="↔️">
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">if-else</code> memberikan 
              pilihan alternatif jika kondisi if tidak terpenuhi.
            </p>
            
            <CodeExample 
              language="java"
              code={`int nilai = 65;

if (nilai >= 70) {
    System.out.println("Lulus");
} else {
    System.out.println("Tidak lulus");
}

// Contoh lain
int umur = 16;

if (umur >= 17) {
    System.out.println("Boleh membuat KTP");
} else {
    System.out.println("Belum boleh membuat KTP");
}

// Cek ganjil/genap
int angka = 7;

if (angka % 2 == 0) {
    System.out.println("Genap");
} else {
    System.out.println("Ganjil");
}`}
            />
          </ContentCard>

          <ContentCard title="3. if-else if-else" icon="🎯">
            <p className="mb-3">
              Digunakan ketika ada lebih dari dua kemungkinan kondisi.
            </p>
            
            <CodeExample 
              code={`let nilai = 85;

if (nilai >= 90) {
  console.log("Grade: A");
} else if (nilai >= 80) {
  console.log("Grade: B");
} else if (nilai >= 70) {
  console.log("Grade: C");
} else if (nilai >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: E");
}

// Contoh lain: sistem suhu
let suhu = 28;

if (suhu >= 35) {
  console.log("Sangat panas");
} else if (suhu >= 25) {
  console.log("Panas");
} else if (suhu >= 20) {
  console.log("Hangat");
} else if (suhu >= 15) {
  console.log("Sejuk");
} else {
  console.log("Dingin");
}`}
            />

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="font-semibold text-yellow-800">⚠️ Perhatian:</p>
              <p className="text-yellow-700">
                Kondisi akan dievaluasi dari atas ke bawah. Begitu satu kondisi true, 
                kode akan dijalankan dan sisanya diabaikan.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="🎮 Demo: if-else if-else" icon="⚡">
            <InteractiveDemo 
              title="Sistem Penilaian Grade"
              description="Masukkan nilai untuk melihat grade (A, B, C, D, E)"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Nilai Siswa: {nilaiSiswa}
                  </label>
                  <input
                    type="range"
                    value={nilaiSiswa}
                    onChange={(e) => setNilaiSiswa(Number(e.target.value))}
                    className="w-full"
                    min="0"
                    max="100"
                  />
                </div>

                <div className={`p-8 rounded-lg text-white text-center ${gradeResult.color}`}>
                  <p className="text-7xl font-bold mb-3">{gradeResult.grade}</p>
                  <p className="text-2xl font-bold">{gradeResult.message}</p>
                  <p className="text-lg mt-2">Nilai: {nilaiSiswa}</p>
                </div>

                <div className="bg-gray-900 text-white p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Kode Java:</p>
                  <pre className="text-green-400 font-mono text-sm">
{`int nilai = ${nilaiSiswa};

if (nilai >= 90) {
    System.out.println("Grade: A");
} else if (nilai >= 80) {
    System.out.println("Grade: B");
} else if (nilai >= 70) {
    System.out.println("Grade: C");
} else if (nilai >= 60) {
    System.out.println("Grade: D");
} else {
    System.out.println("Grade: E");
}`}
                  </pre>
                </div>
              </div>
            </InteractiveDemo>
          </ContentCard>

          <ContentCard title="🎮 Demo: Sistem Suhu" icon="🌡️">
            <InteractiveDemo 
              title="Klasifikasi Suhu"
              description="Geser slider untuk melihat kategori suhu"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Suhu: {suhuInput}°C
                  </label>
                  <input
                    type="range"
                    value={suhuInput}
                    onChange={(e) => setSuhuInput(Number(e.target.value))}
                    className="w-full"
                    min="0"
                    max="45"
                  />
                </div>

                <div className={`p-8 rounded-lg text-white text-center ${suhuResult.color}`}>
                  <p className="text-7xl mb-3">{suhuResult.icon}</p>
                  <p className="text-3xl font-bold mb-2">{suhuResult.status}</p>
                  <p className="text-2xl">{suhuInput}°C</p>
                </div>

                <div className="grid grid-cols-5 gap-2 text-xs text-center">
                  <div className="bg-blue-700 text-white p-2 rounded">
                    ❄️<br/>&lt;15°C<br/>Dingin
                  </div>
                  <div className="bg-blue-500 text-white p-2 rounded">
                    🌥️<br/>15-19°C<br/>Sejuk
                  </div>
                  <div className="bg-yellow-500 text-white p-2 rounded">
                    🌤️<br/>20-24°C<br/>Hangat
                  </div>
                  <div className="bg-orange-500 text-white p-2 rounded">
                    ☀️<br/>25-34°C<br/>Panas
                  </div>
                  <div className="bg-red-600 text-white p-2 rounded">
                    🔥<br/>≥35°C<br/>Sangat Panas
                  </div>
                </div>
              </div>
            </InteractiveDemo>
          </ContentCard>

          <ContentCard title="4. Switch Statement" icon="🎚️">
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">switch</code> adalah 
              alternatif untuk if-else if-else yang lebih rapi ketika membandingkan 
              satu variabel dengan banyak nilai.
            </p>
            
            <CodeExample 
              language="java"
              code={`int hari = 3;
String namaHari;

switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    case 7:
        namaHari = "Minggu";
        break;
    default:
        namaHari = "Tidak valid";
}

System.out.println(namaHari);  // "Rabu"

// Contoh lain: grade nilai
char grade = 'B';

switch (grade) {
    case 'A':
        System.out.println("Sempurna!");
        break;
    case 'B':
        System.out.println("Bagus!");
        break;
    case 'C':
        System.out.println("Cukup");
        break;
    case 'D':
        System.out.println("Kurang");
        break;
    default:
        System.out.println("Tidak lulus");
}`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="font-semibold text-blue-800">💡 Tips:</p>
              <p className="text-blue-700">
                Jangan lupa <code className="bg-blue-200 px-2 py-1 rounded">break</code> 
                setelah setiap case, jika tidak kode akan "jatuh" ke case berikutnya.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="🎮 Demo: Switch Statement" icon="⚡">
            <InteractiveDemo 
              title="Konversi Angka ke Nama Hari"
              description="Pilih angka 1-7 untuk melihat nama hari"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Pilih Hari (1-7):
                  </label>
                  <div className="grid grid-cols-7 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((h) => (
                      <button
                        key={h}
                        onClick={() => setHariInput(h)}
                        className={`py-3 rounded-lg font-bold transition-all ${
                          hariInput === h
                            ? "bg-indigo-600 text-white scale-110"
                            : "bg-white text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-lg text-center">
                  <p className="text-sm mb-2">Hari ke-{hariInput}</p>
                  <p className="text-5xl font-bold">{getNamaHari(hariInput)}</p>
                </div>

                <div className="bg-gray-900 text-white p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Kode Java:</p>
                  <pre className="text-green-400 font-mono text-sm">
{`int hari = ${hariInput};
String namaHari;

switch (hari) {
    case 1: namaHari = "Senin"; break;
    case 2: namaHari = "Selasa"; break;
    case 3: namaHari = "Rabu"; break;
    case 4: namaHari = "Kamis"; break;
    case 5: namaHari = "Jumat"; break;
    case 6: namaHari = "Sabtu"; break;
    case 7: namaHari = "Minggu"; break;
    default: namaHari = "Tidak valid";
}

System.out.println(namaHari);  // "${getNamaHari(hariInput)}"`}
                  </pre>
                </div>
              </div>
            </InteractiveDemo>
          </ContentCard>

          <ContentCard title="Ternary Operator" icon="❓">
            <p className="mb-3">
              Ternary operator adalah cara singkat menulis if-else sederhana dalam satu baris.
            </p>
            <CodeExample 
              language="java"
              code={`// Format: kondisi ? nilaiJikaTrue : nilaiJikaFalse

int umur = 20;
String status = (umur >= 17) ? "Dewasa" : "Belum Dewasa";
System.out.println(status);  // "Dewasa"

// Contoh lain
int nilai = 85;
String hasil = (nilai >= 70) ? "Lulus" : "Tidak Lulus";
System.out.println(hasil);  // "Lulus"

// Nested ternary (hindari jika terlalu kompleks)
int angka = 5;
String tipe = (angka > 0) ? "Positif" : (angka < 0) ? "Negatif" : "Nol";

// Lebih baik dibanding:
String tipe2;
if (angka > 0) {
    tipe2 = "Positif";
} else if (angka < 0) {
    tipe2 = "Negatif";  
} else {
    tipe2 = "Nol";
}`}
            />
          </ContentCard>

          <ContentCard title="Nested If (If Bersarang)" icon="🎭">
            <p className="mb-3">
              If di dalam if, digunakan untuk kondisi bertingkat.
            </p>
            <CodeExample 
              language="java"
              code={`int umur = 20;
boolean punyaKTP = true;

if (umur >= 17) {
    System.out.println("Umur mencukupi");
    
    if (punyaKTP) {
        System.out.println("Boleh masuk");
    } else {
        System.out.println("Harus bawa KTP");
    }
} else {
    System.out.println("Umur belum cukup");
}

// Contoh lain: validasi login
String username = "admin";
String password = "12345";

if (username.equals("admin")) {
    if (password.equals("12345")) {
        System.out.println("Login berhasil");
    } else {
        System.out.println("Password salah");
    }
} else {
    System.out.println("Username tidak ditemukan");
}`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan Control Flow Java</h3>
            <ul className="space-y-2">
              <li>✅ <strong>if:</strong> Eksekusi kode jika kondisi true</li>
              <li>✅ <strong>if-else:</strong> Pilih salah satu dari dua opsi</li>
              <li>✅ <strong>if-else if-else:</strong> Pilih dari banyak kondisi</li>
              <li>✅ <strong>switch:</strong> Alternatif if-else untuk banyak case</li>
              <li>✅ <strong>Ternary (?:):</strong> If-else singkat dalam satu baris</li>
              <li>✅ <strong>Nested if:</strong> If di dalam if untuk kondisi bertingkat</li>
              <li>✅ Untuk <strong>perulangan</strong>, lihat halaman Perulangan!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
}
