"use client";

import { useState } from "react";
import PageLayout from '@/components/PageLayout';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';
import InteractiveDemo from '@/components/InteractiveDemo';

export default function OperatorPage() {
  const [calc1, setCalc1] = useState(10);
  const [calc2, setCalc2] = useState(5);
  const [compareA, setCompareA] = useState(15);
  const [compareB, setCompareB] = useState(10);
  const [logicAge, setLogicAge] = useState(20);
  const [logicHasSIM, setLogicHasSIM] = useState(true);

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          ➕ Operator di Java
        </h1>          <ContentCard title="Apa itu Operator?" icon="💡">
            <p className="mb-4">
              Operator adalah simbol khusus yang digunakan untuk melakukan operasi pada 
              variabel dan nilai. Java memiliki berbagai jenis operator untuk aritmatika, 
              perbandingan, logika, dan lainnya.
            </p>
          </ContentCard>

          <InteractiveDemo 
            title="Kalkulator Interaktif" 
            description="Ubah nilai untuk melihat hasil operasi secara real-time"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Angka 1:</label>
                  <input
                    type="number"
                    value={logicAge}
                    onChange={(e) => setLogicAge(Number(e.target.value))}
                    className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:border-blue-500 outline-none text-center text-xl font-bold text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Angka 2:</label>
                  <input
                    type="number"
                    value={calc2}
                    onChange={(e) => setCalc2(Number(e.target.value))}
                    className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:border-blue-500 outline-none text-center text-2xl font-bold text-gray-900"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <p className="text-sm text-gray-900">Penjumlahan (+)</p>
                  <p className="text-2xl font-bold text-green-600">{calc1 + calc2}</p>
                  <p className="text-xs text-gray-700 mt-1">{calc1} + {calc2}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                  <p className="text-sm text-gray-900">Pengurangan (-)</p>
                  <p className="text-2xl font-bold text-red-600">{calc1 - calc2}</p>
                  <p className="text-xs text-gray-700 mt-1">{calc1} - {calc2}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <p className="text-sm text-gray-900">Perkalian (*)</p>
                  <p className="text-2xl font-bold text-blue-600">{calc1 * calc2}</p>
                  <p className="text-xs text-gray-700 mt-1">{calc1} * {calc2}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                  <p className="text-sm text-gray-900">Pembagian (/)</p>
                  <p className="text-2xl font-bold text-purple-600">{calc2 !== 0 ? (calc1 / calc2).toFixed(2) : 'Error'}</p>
                  <p className="text-xs text-gray-700 mt-1">{calc1} / {calc2}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                  <p className="text-sm text-gray-900">Modulus (%)</p>
                  <p className="text-2xl font-bold text-orange-600">{calc2 !== 0 ? calc1 % calc2 : 'Error'}</p>
                  <p className="text-xs text-gray-700 mt-1">{calc1} % {calc2}</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-200">
                  <p className="text-sm text-gray-900">Pangkat (**)</p>
                  <p className="text-2xl font-bold text-pink-600">{Math.pow(calc1, calc2)}</p>
                  <p className="text-xs text-gray-700 mt-1">{calc1}^{calc2}</p>
                </div>
              </div>
            </div>
          </InteractiveDemo>

          <ContentCard title="1. Operator Aritmatika" icon="🔢">
            <p className="mb-3">
              Operator aritmatika digunakan untuk melakukan operasi matematika dasar.
            </p>
            
            <CodeExample 
              code={`// Operator Aritmatika di Java
public class OperatorAritmatika {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        // Operasi dasar
        System.out.println("a + b = " + (a + b));  // 13
        System.out.println("a - b = " + (a - b));  // 7
        System.out.println("a * b = " + (a * b));  // 30
        System.out.println("a / b = " + (a / b));  // 3 (integer division)
        System.out.println("a % b = " + (a % b));  // 1 (sisa bagi)
        
        // Untuk hasil desimal, gunakan double
        double c = 10.0;
        double d = 3.0;
        System.out.println("c / d = " + (c / d));  // 3.3333...
        
        // Case nyata: Hitung total belanja
        int hargaBuku = 25000;
        int jumlahBuku = 3;
        int totalBelanja = hargaBuku * jumlahBuku;
        System.out.println("Total: Rp " + totalBelanja);  // Rp 75000
    }
}`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="font-semibold text-blue-800">💡 Case Nyata: Kasir Supermarket</p>
              <p className="text-blue-700">
                Modulus (%) berguna untuk menghitung kembalian. Misalnya: pembeli bayar Rp 100.000 
                untuk belanja Rp 73.000, kembalian = 100000 - 73000 = 27000
              </p>
            </div>
          </ContentCard>

          <ContentCard title="2. Operator Penugasan" icon="📝">
            <CodeExample 
              code={`// Operator Penugasan
public class OperatorPenugasan {
    public static void main(String[] args) {
        int skor = 100;
        
        // Compound assignment operators
        skor += 20;  // skor = skor + 20; (120)
        System.out.println("Setelah += 20: " + skor);
        
        skor -= 10;  // skor = skor - 10; (110)
        System.out.println("Setelah -= 10: " + skor);
        
        skor *= 2;   // skor = skor * 2; (220)
        System.out.println("Setelah *= 2: " + skor);
        
        skor /= 4;   // skor = skor / 4; (55)
        System.out.println("Setelah /= 4: " + skor);
        
        // Case nyata: Update saldo rekening
        double saldo = 1000000;
        saldo += 500000;   // Deposit
        saldo -= 250000;   // Tarik tunai
        System.out.println("Saldo akhir: Rp " + saldo);
    }
}`}
            />
          </ContentCard>

          <InteractiveDemo 
            title="Demo Operator Perbandingan" 
            description="Ubah nilai untuk melihat hasil perbandingan"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Nilai A:</label>
                  <input
                    type="number"
                    value={compareA}
                    onChange={(e) => setCompareA(Number(e.target.value))}
                    className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:border-blue-500 outline-none text-center text-xl font-bold text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Nilai B:</label>
                  <input
                    type="number"
                    value={compareB}
                    onChange={(e) => setCompareB(Number(e.target.value))}
                    className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:border-blue-500 outline-none text-center text-xl font-bold text-gray-900"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  { op: '==', result: compareA == compareB, label: 'Sama dengan' },
                  { op: '!=', result: compareA != compareB, label: 'Tidak sama' },
                  { op: '>', result: compareA > compareB, label: 'Lebih besar' },
                  { op: '<', result: compareA < compareB, label: 'Lebih kecil' },
                  { op: '>=', result: compareA >= compareB, label: 'Lebih besar/sama' },
                  { op: '<=', result: compareA <= compareB, label: 'Lebih kecil/sama' },
                ].map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border-2 ${item.result ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                    <p className="text-sm text-gray-900">{item.label}</p>
                    <p className="text-xl font-bold text-gray-900">{compareA} {item.op} {compareB}</p>
                    <p className={`text-2xl font-bold ${item.result ? 'text-green-600' : 'text-red-600'}`}>
                      {item.result ? 'TRUE' : 'FALSE'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </InteractiveDemo>

          <ContentCard title="3. Operator Perbandingan" icon="⚖️">
            <CodeExample 
              code={`// Operator Perbandingan
public class OperatorPerbandingan {
    public static void main(String[] args) {
        int nilai = 85;
        int batasLulus = 70;
        
        // Perbandingan
        boolean lulus = nilai >= batasLulus;
        System.out.println("Lulus: " + lulus);  // true
        
        // Case nyata: Cek umur untuk syarat KTP
        int umur = 18;
        boolean bisaBuatKTP = umur >= 17;
        System.out.println("Bisa buat KTP: " + bisaBuatKTP);
        
        // Cek diskon berdasarkan pembelian
        int totalBelanja = 500000;
        boolean dapatDiskon = totalBelanja > 300000;
        System.out.println("Dapat diskon: " + dapatDiskon);
        
        // Validasi password
        String inputPassword = "12345";
        String correctPassword = "secret123";
        boolean passwordBenar = inputPassword.equals(correctPassword);
        System.out.println("Login berhasil: " + passwordBenar);
    }
}`}
            />
          </ContentCard>

          <InteractiveDemo 
            title="Demo Operator Logika: Cek Syarat Menyetir" 
            description="Ubah kondisi untuk melihat hasil operasi logika"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Umur:</label>
                  <input
                    type="number"
                    value={logicAge}
                    onChange={(e) => setLogicAge(Number(e.target.value))}
                    className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:border-blue-500 outline-none text-center text-xl font-bold text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Punya SIM:</label>
                  <button
                    onClick={() => setLogicHasSIM(!logicHasSIM)}
                    className={`w-full px-4 py-2 rounded-lg text-xl font-bold transition-colors ${
                      logicHasSIM ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}
                  >
                    {logicHasSIM ? 'YA' : 'TIDAK'}
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-300">
                <h4 className="font-bold text-gray-900 mb-4">Hasil Pengecekan:</h4>
                
                <div className="space-y-3">
                  <div className={`p-4 rounded-lg ${logicAge >= 17 ? 'bg-green-100 border-2 border-green-400' : 'bg-red-100 border-2 border-red-400'}`}>
                    <p className="font-mono text-sm mb-1">umur &gt;= 17</p>
                    <p className="text-lg font-bold">{logicAge >= 17 ? '✅ Sudah cukup umur' : '❌ Belum cukup umur'}</p>
                  </div>

                  <div className={`p-4 rounded-lg ${logicHasSIM ? 'bg-green-100 border-2 border-green-400' : 'bg-red-100 border-2 border-red-400'}`}>
                    <p className="font-mono text-sm mb-1">punyaSIM == true</p>
                    <p className="text-lg font-bold">{logicHasSIM ? '✅ Memiliki SIM' : '❌ Tidak punya SIM'}</p>
                  </div>

                  <div className={`p-4 rounded-lg ${(logicAge >= 17 && logicHasSIM) ? 'bg-green-200 border-2 border-green-500' : 'bg-red-200 border-2 border-red-500'}`}>
                    <p className="font-mono text-sm mb-1">(umur &gt;= 17) &amp;&amp; punyaSIM</p>
                    <p className="text-xl font-bold">
                      {(logicAge >= 17 && logicHasSIM) ? '🚗 BOLEH MENYETIR!' : '🚫 TIDAK BOLEH MENYETIR'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </InteractiveDemo>

          <ContentCard title="4. Operator Logika" icon="🧠">
            <CodeExample 
              code={`// Operator Logika
public class OperatorLogika {
    public static void main(String[] args) {
        int umur = 20;
        boolean punyaSIM = true;
        int nilai = 85;
        
        // AND (&&): Semua kondisi harus true
        boolean bisaMenyetir = (umur >= 17) && punyaSIM;
        System.out.println("Bisa menyetir: " + bisaMenyetir);  // true
        
        // OR (||): Salah satu kondisi true sudah cukup
        boolean lulus = (nilai >= 70) || (nilai == 100);
        System.out.println("Lulus: " + lulus);  // true
        
        // NOT (!): Membalik boolean
        boolean belumDewasa = !(umur >= 18);
        System.out.println("Belum dewasa: " + belumDewasa);  // false
        
        // Case nyata: Validasi form registrasi
        String username = "budi123";
        String password = "secret123";
        int umurUser = 20;
        
        boolean usernameValid = username.length() >= 6;
        boolean passwordValid = password.length() >= 8;
        boolean umurValid = umurUser >= 13;
        
        boolean registrasiBerhasil = usernameValid && passwordValid && umurValid;
        System.out.println("Registrasi berhasil: " + registrasiBerhasil);
    }
}`}
            />

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="font-semibold text-yellow-800">💡 Case Nyata: Validasi Login</p>
              <p className="text-yellow-700">
                Operator logika AND (&&) sering digunakan untuk validasi. User hanya bisa login jika 
                username BENAR DAN password BENAR DAN akun AKTIF.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="5. Operator Increment & Decrement" icon="📈">
            <CodeExample 
              code={`// Operator Increment & Decrement
public class IncrementDecrement {
    public static void main(String[] args) {
        int counter = 0;
        
        // Post-increment
        System.out.println(counter++);  // Print 0, lalu +1
        System.out.println(counter);    // 1
        
        // Pre-increment
        System.out.println(++counter);  // +1 dulu, lalu print 2
        
        // Decrement
        counter--;
        System.out.println(counter);    // 1
        
        // Case nyata: Counter pengunjung website
        int pengunjung = 0;
        pengunjung++;  // User masuk
        pengunjung++;  // User lain masuk
        pengunjung++;  // User lain masuk lagi
        System.out.println("Total pengunjung: " + pengunjung);  // 3
        
        // Stock produk berkurang
        int stock = 10;
        stock--;  // Terjual 1
        stock--;  // Terjual 1 lagi
        System.out.println("Sisa stock: " + stock);  // 8
    }
}`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan Operator Java</h3>
            <ul className="space-y-2">
              <li>✅ <strong>Aritmatika:</strong> +, -, *, /, % untuk perhitungan</li>
              <li>✅ <strong>Perbandingan:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;= menghasilkan boolean</li>
              <li>✅ <strong>Logika:</strong> && (AND), || (OR), ! (NOT)</li>
              <li>✅ <strong>Penugasan:</strong> =, +=, -=, *=, /= untuk update nilai</li>
              <li>✅ <strong>Increment/Decrement:</strong> ++, -- untuk +1/-1</li>
              <li>✅ Gunakan untuk validasi, perhitungan, dan kontrol logika program</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
