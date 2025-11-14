'use client';

import { useState } from 'react';
import BackButton from '@/components/BackButton';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';
import InteractiveDemo from '@/components/InteractiveDemo';

export default function MethodPage() {
  const [panjang, setPanjang] = useState(5);
  const [lebar, setLebar] = useState(3);
  const [radius, setRadius] = useState(7);
  const [suhu, setSuhu] = useState(25);

  const hitungLuas = (p: number, l: number) => p * l;
  const hitungKeliling = (p: number, l: number) => 2 * (p + l);
  const hitungLuasLingkaran = (r: number) => Math.PI * r * r;
  const celsiusToFahrenheit = (c: number) => (c * 9/5) + 32;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            ⚡ Method di Java
          </h1>

          <ContentCard title="Apa itu Method?" icon="💡">
            <p className="mb-4">
              Method (fungsi) adalah blok kode yang melakukan tugas tertentu dan dapat 
              dipanggil berkali-kali. Method membuat kode lebih terorganisir, mudah 
              dibaca, dan dapat digunakan kembali (reusable).
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-yellow-800">
                <strong>Analogi:</strong> Method seperti resep masakan. Sekali ditulis, 
                bisa digunakan berkali-kali kapan saja kita butuhkan dengan bahan (parameter) 
                yang berbeda.
              </p>
            </div>
          </ContentCard>

          <InteractiveDemo 
            title="Kalkulator Luas & Keliling" 
            description="Lihat bagaimana method bekerja dengan parameter berbeda"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Panjang (cm):</label>
                  <input
                    type="number"
                    value={panjang}
                    onChange={(e) => setPanjang(Number(e.target.value))}
                    className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:border-blue-500 outline-none text-center text-xl font-bold text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Lebar (cm):</label>
                  <input
                    type="number"
                    value={lebar}
                    onChange={(e) => setLebar(Number(e.target.value))}
                    className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:border-blue-500 outline-none text-center text-xl font-bold text-gray-900"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg border-2 border-blue-300">
                <h4 className="font-bold text-gray-900 mb-3">📊 Hasil Perhitungan:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-900 mb-1">Luas Persegi Panjang:</p>
                    <p className="text-3xl font-bold text-blue-600">{hitungLuas(panjang, lebar)} cm²</p>
                    <p className="text-xs text-gray-700 mt-2 font-mono">hitungLuas({panjang}, {lebar})</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-900 mb-1">Keliling Persegi Panjang:</p>
                    <p className="text-3xl font-bold text-green-600">{hitungKeliling(panjang, lebar)} cm</p>
                    <p className="text-xs text-gray-700 mt-2 font-mono">hitungKeliling({panjang}, {lebar})</p>
                  </div>
                </div>
              </div>
            </div>
          </InteractiveDemo>

          <ContentCard title="1. Method Dasar (Tanpa Parameter)" icon="🎯">
            <CodeExample 
              code={`// Method tanpa parameter dan return
public class MethodDasar {
    // Method void (tidak mengembalikan nilai)
    public static void sapa() {
        System.out.println("Halo, selamat datang!");
    }
    
    public static void tampilkanMenu() {
        System.out.println("=== MENU UTAMA ===");
        System.out.println("1. Login");
        System.out.println("2. Register");
        System.out.println("3. Exit");
    }
    
    public static void main(String[] args) {
        // Memanggil method
        sapa();
        sapa();  // Bisa dipanggil berkali-kali
        
        tampilkanMenu();
    }
}

// Output:
// Halo, selamat datang!
// Halo, selamat datang!
// === MENU UTAMA ===
// 1. Login
// 2. Register
// 3. Exit`}
            />
          </ContentCard>

          <ContentCard title="2. Method dengan Parameter" icon="📥">
            <CodeExample 
              code={`// Method dengan parameter
public class MethodParameter {
    // Method dengan 1 parameter
    public static void sapaNama(String nama) {
        System.out.println("Halo, " + nama + "!");
    }
    
    // Method dengan 2 parameter
    public static void tampilkanBiodata(String nama, int umur) {
        System.out.println("Nama: " + nama);
        System.out.println("Umur: " + umur + " tahun");
    }
    
    // Method dengan banyak parameter
    public static void buatAkun(String username, String password, String email, int umur) {
        System.out.println("=== AKUN BARU ===");
        System.out.println("Username: " + username);
        System.out.println("Email: " + email);
        System.out.println("Umur: " + umur);
        System.out.println("Akun berhasil dibuat!");
    }
    
    public static void main(String[] args) {
        sapaNama("Budi");
        sapaNama("Siti");
        
        tampilkanBiodata("Andi", 20);
        
        buatAkun("budi123", "secret", "budi@mail.com", 22);
    }
}`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="font-semibold text-blue-800">💡 Case Nyata: Sistem Pendaftaran</p>
              <p className="text-blue-700">
                Method dengan parameter sangat berguna untuk form pendaftaran, di mana 
                data user (nama, email, password) dikirim sebagai parameter ke method 
                yang memproses pendaftaran.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="3. Method dengan Return Value" icon="📤">
            <CodeExample 
              code={`// Method dengan return
public class MethodReturn {
    // Method yang mengembalikan int
    public static int tambah(int a, int b) {
        return a + b;
    }
    
    // Method yang mengembalikan double
    public static double hitungLuas(double panjang, double lebar) {
        double luas = panjang * lebar;
        return luas;
    }
    
    // Method yang mengembalikan String
    public static String cekKelulusan(int nilai) {
        if (nilai >= 70) {
            return "Lulus";
        } else {
            return "Tidak Lulus";
        }
    }
    
    // Method yang mengembalikan boolean
    public static boolean cekGanjil(int angka) {
        return angka % 2 != 0;
    }
    
    public static void main(String[] args) {
        // Menyimpan hasil return dalam variabel
        int hasil = tambah(5, 3);
        System.out.println("Hasil: " + hasil);  // 8
        
        double luas = hitungLuas(5.0, 3.0);
        System.out.println("Luas: " + luas);  // 15.0
        
        String status = cekKelulusan(85);
        System.out.println("Status: " + status);  // Lulus
        
        boolean ganjil = cekGanjil(7);
        System.out.println("Ganjil? " + ganjil);  // true
        
        // Menggunakan return langsung
        System.out.println("5 + 7 = " + tambah(5, 7));
    }
}`}
            />
          </ContentCard>

          <InteractiveDemo 
            title="Demo: Method Konversi Suhu" 
            description="Lihat method bekerja dengan rumus matematika"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Suhu Celsius:
                </label>
                <input
                  type="number"
                  value={suhu}
                  onChange={(e) => setSuhu(Number(e.target.value))}
                  className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:border-blue-500 outline-none text-center text-2xl font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-lg border-2 border-orange-300">
                  <p className="text-sm text-gray-900 mb-2">🌡️ Fahrenheit:</p>
                  <p className="text-4xl font-bold text-orange-600">
                    {celsiusToFahrenheit(suhu).toFixed(1)}°F
                  </p>
                  <p className="text-xs text-gray-700 mt-3 font-mono">
                    celsiusToFahrenheit({suhu})
                  </p>
                  <p className="text-xs text-gray-900 mt-2">
                    Formula: (C × 9/5) + 32
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg border-2 border-blue-300">
                  <p className="text-sm text-gray-900 mb-2">❄️ Kelvin:</p>
                  <p className="text-4xl font-bold text-blue-600">
                    {(suhu + 273.15).toFixed(2)}K
                  </p>
                  <p className="text-xs text-gray-700 mt-3 font-mono">
                    celsiusToKelvin({suhu})
                  </p>
                  <p className="text-xs text-gray-900 mt-2">
                    Formula: C + 273.15
                  </p>
                </div>
              </div>
            </div>
          </InteractiveDemo>

          <ContentCard title="4. Case Nyata: Sistem Kasir" icon="🛒">
            <CodeExample 
              code={`// Case Nyata: Aplikasi Kasir
public class SistemKasir {
    // Method hitung total
    public static int hitungTotal(int harga, int jumlah) {
        return harga * jumlah;
    }
    
    // Method hitung diskon
    public static double hitungDiskon(int total, int persenDiskon) {
        return total * persenDiskon / 100.0;
    }
    
    // Method hitung harga akhir
    public static double hitungHargaAkhir(int total, double diskon) {
        return total - diskon;
    }
    
    // Method tampilkan struk
    public static void tampilkanStruk(String namaBarang, int harga, 
                                     int jumlah, int persenDiskon) {
        int total = hitungTotal(harga, jumlah);
        double diskon = hitungDiskon(total, persenDiskon);
        double hargaAkhir = hitungHargaAkhir(total, diskon);
        
        System.out.println("=== STRUK BELANJA ===");
        System.out.println("Barang    : " + namaBarang);
        System.out.println("Harga     : Rp " + harga);
        System.out.println("Jumlah    : " + jumlah);
        System.out.println("Subtotal  : Rp " + total);
        System.out.println("Diskon    : Rp " + diskon + " (" + persenDiskon + "%)");
        System.out.println("Total     : Rp " + hargaAkhir);
        System.out.println("===================");
    }
    
    public static void main(String[] args) {
        // Transaksi 1: Beli buku
        tampilkanStruk("Buku Tulis", 5000, 10, 10);
        
        System.out.println();
        
        // Transaksi 2: Beli pulpen
        tampilkanStruk("Pulpen", 3000, 5, 5);
    }
}

// Output:
// === STRUK BELANJA ===
// Barang    : Buku Tulis
// Harga     : Rp 5000
// Jumlah    : 10
// Subtotal  : Rp 50000
// Diskon    : Rp 5000.0 (10%)
// Total     : Rp 45000.0
// ===================`}
            />
          </ContentCard>

          <ContentCard title="5. Method Overloading" icon="🔄">
            <p className="mb-3">
              Method overloading adalah membuat method dengan nama sama tapi parameter berbeda.
            </p>
            <CodeExample 
              code={`// Method Overloading
public class MethodOverloading {
    // Method 1: 2 parameter int
    public static int tambah(int a, int b) {
        return a + b;
    }
    
    // Method 2: 3 parameter int
    public static int tambah(int a, int b, int c) {
        return a + b + c;
    }
    
    // Method 3: 2 parameter double
    public static double tambah(double a, double b) {
        return a + b;
    }
    
    // Method 4: String concatenation
    public static String tambah(String a, String b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        System.out.println(tambah(5, 3));           // 8
        System.out.println(tambah(5, 3, 2));        // 10
        System.out.println(tambah(5.5, 3.2));       // 8.7
        System.out.println(tambah("Hello ", "World")); // Hello World
    }
}`}
            />
          </ContentCard>

          <ContentCard title="6. Scope Variabel dalam Method" icon="🎪">
            <CodeExample 
              code={`// Scope dalam Method
public class MethodScope {
    // Variabel global (class level)
    static int saldoGlobal = 100000;
    
    public static void tambahSaldo(int jumlah) {
        // Variabel local (hanya ada di method ini)
        int bonus = 5000;
        
        // Bisa akses variabel global
        saldoGlobal += jumlah + bonus;
        
        System.out.println("Saldo ditambah: " + (jumlah + bonus));
    }
    
    public static int hitungTotal(int harga, int jumlah) {
        // Variabel local
        int total = harga * jumlah;
        int pajak = total * 10 / 100;
        
        return total + pajak;
    }
    
    public static void main(String[] args) {
        System.out.println("Saldo awal: " + saldoGlobal);
        
        tambahSaldo(50000);
        System.out.println("Saldo akhir: " + saldoGlobal);
        
        int totalBelanja = hitungTotal(10000, 5);
        System.out.println("Total belanja: " + totalBelanja);
        
        // Error: bonus tidak bisa diakses di sini
        // System.out.println(bonus);
    }
}`}
            />
          </ContentCard>

          <InteractiveDemo 
            title="Demo: Kalkulator Lingkaran" 
            description="Gunakan method untuk menghitung luas dan keliling lingkaran"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Radius (cm):
                </label>
                <input
                  type="number"
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:border-blue-500 outline-none text-center text-2xl font-bold text-gray-900"
                />
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-900 mb-1">📐 Luas Lingkaran:</p>
                    <p className="text-3xl font-bold text-purple-600">
                      {hitungLuasLingkaran(radius).toFixed(2)} cm²
                    </p>
                    <p className="text-xs text-gray-700 mt-2">π × r²</p>
                    <p className="text-xs text-gray-700 font-mono mt-1">
                      hitungLuas({radius})
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-900 mb-1">⭕ Keliling Lingkaran:</p>
                    <p className="text-3xl font-bold text-pink-600">
                      {(2 * Math.PI * radius).toFixed(2)} cm
                    </p>
                    <p className="text-xs text-gray-700 mt-2">2 × π × r</p>
                    <p className="text-xs text-gray-700 font-mono mt-1">
                      hitungKeliling({radius})
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </InteractiveDemo>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan Method Java</h3>
            <ul className="space-y-2">
              <li>✅ Method membuat kode lebih terorganisir dan reusable</li>
              <li>✅ <strong>void</strong> → Method tanpa return value</li>
              <li>✅ <strong>return type</strong> → Method mengembalikan nilai (int, double, String, dll)</li>
              <li>✅ <strong>Parameter</strong> → Input untuk method</li>
              <li>✅ <strong>Overloading</strong> → Nama sama, parameter beda</li>
              <li>✅ Gunakan method untuk menghindari code duplication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
