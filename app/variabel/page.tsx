"use client";

import { useState } from "react";
import PageLayout from '@/components/PageLayout';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';
import InteractiveDemo from "@/components/InteractiveDemo";

export default function VariabelPage() {
  const [varName, setVarName] = useState("");
  const [varValue, setVarValue] = useState("");
  const [varType, setVarType] = useState("int");
  const [isFinal, setIsFinal] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  
  // Validasi nama variabel
  const validateVariableName = (name: string) => {
    if (!name) return { valid: false, message: "Nama tidak boleh kosong" };
    if (/^\d/.test(name)) return { valid: false, message: "Tidak boleh dimulai dengan angka" };
    if (/\s/.test(name)) return { valid: false, message: "Tidak boleh mengandung spasi" };
    if (/[^a-zA-Z0-9_$]/.test(name)) return { valid: false, message: "Hanya huruf, angka, _ dan $" };
    if (/^(int|double|boolean|String|class|public|private|void|if|else|for|while)$/.test(name)) {
      return { valid: false, message: "Tidak boleh menggunakan kata kunci Java" };
    }
    if (name[0] === name[0].toUpperCase() && !isFinal) {
      return { valid: true, message: "⚠️ Sebaiknya gunakan huruf kecil di awal (camelCase)" };
    }
    return { valid: true, message: "✅ Nama variabel valid!" };
  };

  const validation = validateVariableName(varName);

  // Generate kode Java
  const generateJavaCode = () => {
    if (!varName || !varValue) return "// Isi nama dan nilai variabel";
    
    const finalKeyword = isFinal ? "final " : "";
    const conventionName = isFinal ? varName.toUpperCase() : varName;
    
    return `${finalKeyword}${varType} ${conventionName} = ${
      varType === "String" ? `"${varValue}"` : 
      varType === "char" ? `'${varValue}'` : 
      varValue
    };
System.out.println(${conventionName});`;
  };

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            📦 Variabel di Java
          </h1>

          <ContentCard title="Apa itu Variabel?" icon="💡">
            <p className="mb-4">
              Variabel adalah wadah atau tempat penyimpanan data dalam program. 
              Di Java, setiap variabel harus memiliki <strong>tipe data yang jelas</strong> dan 
              tidak bisa diubah tipenya. Bayangkan variabel seperti kotak berlabel yang 
              hanya bisa menampung jenis barang tertentu.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-yellow-800">
                <strong>Perbedaan dengan JavaScript:</strong> Java adalah bahasa 
                <strong> strongly typed</strong> - tipe data harus dideklarasikan dan tidak bisa berubah.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="Cara Mendeklarasikan Variabel" icon="📝">
            <p className="mb-3">
              Di Java, variabel harus dideklarasikan dengan format: <code className="bg-gray-200 px-2 py-1 rounded">TipeData namaVariabel = nilai;</code>
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Deklarasi dengan Inisialisasi</h3>
            <p className="mb-3">
              Mendeklarasikan variabel sekaligus memberi nilai awal.
            </p>
            <CodeExample 
              language="java"
              code={`// Deklarasi variabel dengan tipe data
int umur = 20;
double tinggi = 170.5;
String nama = "Budi";
boolean aktif = true;
char grade = 'A';

// Cetak nilai variabel
System.out.println(nama);   // Output: Budi
System.out.println(umur);   // Output: 20
System.out.println(tinggi); // Output: 170.5`}
            />

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Deklarasi Tanpa Inisialisasi</h3>
            <p className="mb-3">
              Mendeklarasikan variabel terlebih dahulu, beri nilai kemudian.
            </p>
            <CodeExample 
              language="java"
              code={`// Deklarasi tanpa nilai
int jumlahSiswa;
double nilaiRataRata;
String namaSekolah;

// Beri nilai kemudian
jumlahSiswa = 30;
nilaiRataRata = 85.5;
namaSekolah = "SMA Negeri 1";

System.out.println(jumlahSiswa);    // Output: 30
System.out.println(namaSekolah);    // Output: SMA Negeri 1`}
            />

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Konstanta dengan final</h3>
            <p className="mb-3">
              Gunakan keyword <code className="bg-gray-200 px-2 py-1 rounded">final</code> untuk 
              variabel yang nilainya tetap (tidak bisa diubah).
            </p>
            <CodeExample 
              language="java"
              code={`// Konstanta (nilai tetap)
final double PI = 3.14159;
final int MAX_NILAI = 100;
final String NAMA_APLIKASI = "Vibe Coding";

// Tidak bisa diubah
// PI = 3.14;  // Error! Tidak bisa mengubah final variable

System.out.println("Nilai PI: " + PI);
System.out.println("Nilai maksimal: " + MAX_NILAI);`}
            />
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
              <p className="font-semibold text-green-800">✅ Best Practice:</p>
              <p className="text-green-700">
                Gunakan <code className="bg-green-200 px-2 py-1 rounded">final</code> untuk 
                konstanta dan tuliskan dengan <strong>UPPER_CASE</strong>.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="Aturan Penamaan Variabel" icon="📏">
            <p className="mb-4">
              Aturan penamaan variabel di Java:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-blue-500 p-4">
                <h4 className="font-bold text-blue-800 mb-2">✅ Aturan Wajib:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-900">
                  <li>Harus dimulai dengan huruf, underscore (_), atau dollar sign ($)</li>
                  <li>Tidak boleh dimulai dengan angka</li>
                  <li>Tidak boleh menggunakan spasi</li>
                  <li>Case-sensitive (huruf besar dan kecil berbeda)</li>
                  <li>Tidak boleh menggunakan kata kunci Java (int, class, public, dll)</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-4">
                <h4 className="font-bold text-green-800 mb-2">✅ Nama Variabel yang Baik:</h4>
                <CodeExample 
                  language="java"
                  code={`String namaSiswa = "Budi";
int jumlahNilai = 5;
boolean isAktif = true;
double _privateValue = 10.5;
int totalHarga = 50000;
char gradeNilai = 'A';`}
                />
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4">
                <h4 className="font-bold text-red-800 mb-2">❌ Nama Variabel yang Salah:</h4>
                <CodeExample 
                  language="java"
                  code={`// SALAH - tidak boleh dimulai dengan angka
int 1nama = 10;

// SALAH - tidak boleh ada spasi
String nama siswa = "Andi";

// SALAH - menggunakan kata kunci Java
int class = 5;

// SALAH - menggunakan karakter khusus (-)
int nilai-siswa = 85;`}
                />
              </div>
            </div>
          </ContentCard>

          <ContentCard title="Konvensi Penamaan di Java" icon="✨">
            <p className="mb-4">
              Java memiliki konvensi penamaan yang sudah standar:
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-2">1. camelCase (untuk Variabel dan Method)</h3>
            <CodeExample 
              language="java"
              code={`String namaLengkap = "Budi Santoso";
int totalBelanja = 150000;
boolean isUserLogin = true;
double nilaiMatematika = 85.5;
char hurufPertama = 'B';`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. UPPER_CASE (untuk Konstanta)</h3>
            <CodeExample 
              language="java"
              code={`final int MAX_NILAI = 100;
final int MIN_UMUR = 17;
final double PI = 3.14159;
final String BASE_URL = "https://api.example.com";
final int JUMLAH_HARI_MINGGU = 7;`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. PascalCase (untuk Class)</h3>
            <CodeExample 
              language="java"
              code={`public class UserProfile {
    // code
}

public class DatabaseConnection {
    // code
}

public class StudentManager {
    // code
}`}
            />
          </ContentCard>

          <ContentCard title="Deklarasi Multiple Variabel" icon="🎯">
            <p className="mb-3">
              Java memungkinkan mendeklarasikan beberapa variabel sekaligus.
            </p>
            <CodeExample 
              language="java"
              code={`// Deklarasi beberapa variabel sekaligus (tipe sama)
int a, b, c;
a = 10;
b = 20;
c = 30;

// Deklarasi dan inisialisasi sekaligus
int x = 5, y = 10, z = 15;
System.out.println(x + ", " + y + ", " + z);  // 5, 10, 15

// String multiple
String nama1 = "Budi", nama2 = "Ani", nama3 = "Citra";

// Hati-hati dengan tipe data berbeda!
// int a = 5, double b = 10.5;  // Error! Tipe harus sama`}
            />
          </ContentCard>

          <ContentCard title="Mengubah Nilai Variabel" icon="🔄">
            <p className="mb-3">
              Nilai variabel (bukan final) bisa diubah, tapi tipe data tetap sama.
            </p>
            <CodeExample 
              language="java"
              code={`// Deklarasi variabel
int nilai = 80;
System.out.println("Nilai awal: " + nilai);  // 80

// Ubah nilai (tipe tetap int)
nilai = 90;
System.out.println("Nilai baru: " + nilai);   // 90

// Operasi matematika
nilai = nilai + 5;
System.out.println("Setelah +5: " + nilai);   // 95

// Shorthand
nilai += 10;  // sama dengan: nilai = nilai + 10
System.out.println("Setelah +=10: " + nilai); // 105

// TIDAK BISA mengubah tipe data!
// nilai = "sembilan puluh";  // Error! Tidak bisa String ke int

// final tidak bisa diubah
final int MAX = 100;
// MAX = 200;  // Error!`}
            />
          </ContentCard>

          <ContentCard title="Scope Variabel" icon="🎪">
            <p className="mb-3">
              Scope menentukan di mana variabel dapat diakses dalam kode.
            </p>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Instance Variable (Class Level)</h3>
            <CodeExample 
              language="java"
              code={`public class Siswa {
    // Instance variable (bisa diakses di semua method)
    String nama;
    int umur;
    
    public void tampilkanData() {
        System.out.println("Nama: " + nama);
        System.out.println("Umur: " + umur);
    }
    
    public void ubahNama(String namaBaru) {
        nama = namaBaru;  // Bisa akses instance variable
    }
}`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Local Variable (Method Level)</h3>
            <CodeExample 
              language="java"
              code={`public void hitungLuas() {
    // Local variable (hanya ada di method ini)
    int panjang = 10;
    int lebar = 5;
    int luas = panjang * lebar;
    
    System.out.println("Luas: " + luas);
}

public void methodLain() {
    // System.out.println(panjang);  // Error! panjang tidak dikenal
}`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Block Scope</h3>
            <CodeExample 
              language="java"
              code={`public void contohScope() {
    int x = 10;  // Method scope
    
    if (x > 5) {
        int y = 20;  // Block scope (hanya di dalam if)
        System.out.println(x);  // ✅ Bisa akses x
        System.out.println(y);  // ✅ Bisa akses y
    }
    
    System.out.println(x);  // ✅ Bisa akses x
    // System.out.println(y);  // ❌ Error! y tidak bisa diakses
}`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Static Variable (Class Variable)</h3>
            <CodeExample 
              language="java"
              code={`public class Counter {
    // Static variable (milik class, bukan object)
    static int jumlah = 0;
    
    public Counter() {
        jumlah++;  // Setiap object baru, jumlah bertambah
    }
    
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();
        
        System.out.println("Jumlah object: " + Counter.jumlah);  // 3
    }
}`}
            />
          </ContentCard>

          <ContentCard title="Contoh Program Lengkap" icon="🎓">
            <p className="mb-3">
              Contoh penggunaan variabel dalam program Java.
            </p>
            <CodeExample 
              language="java"
              code={`public class ContohVariabel {
    // Instance variables
    String namaSiswa;
    int umurSiswa;
    
    // Static variable
    static String namaSekolah = "SMA Negeri 1";
    
    // Konstanta
    static final int NILAI_LULUS = 75;
    
    public static void main(String[] args) {
        // Local variables
        String nama = "Budi Santoso";
        int umur = 17;
        double nilaiMatematika = 85.5;
        double nilaiFisika = 78.0;
        boolean lulus = false;
        
        // Hitung rata-rata
        double rataRata = (nilaiMatematika + nilaiFisika) / 2;
        
        // Cek kelulusan
        if (rataRata >= NILAI_LULUS) {
            lulus = true;
        }
        
        // Tampilkan hasil
        System.out.println("=== DATA SISWA ===");
        System.out.println("Sekolah: " + namaSekolah);
        System.out.println("Nama: " + nama);
        System.out.println("Umur: " + umur + " tahun");
        System.out.println("Nilai Matematika: " + nilaiMatematika);
        System.out.println("Nilai Fisika: " + nilaiFisika);
        System.out.println("Rata-rata: " + rataRata);
        System.out.println("Status: " + (lulus ? "LULUS" : "TIDAK LULUS"));
    }
}

/* Output:
=== DATA SISWA ===
Sekolah: SMA Negeri 1
Nama: Budi Santoso
Umur: 17 tahun
Nilai Matematika: 85.5
Nilai Fisika: 78.0
Rata-rata: 81.75
Status: LULUS
*/`}
            />
          </ContentCard>

          <ContentCard title="🎮 Demo Interaktif: Buat Variabel Java" icon="⚡">
            <InteractiveDemo 
              title="Generator Deklarasi Variabel"
              description="Coba buat deklarasi variabel Java dengan tipe data dan nama yang berbeda"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Tipe Data:
                  </label>
                  <select
                    value={varType}
                    onChange={(e) => setVarType(e.target.value)}
                    className="w-full p-3 border-2 border-gray-900 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="int">int (bilangan bulat)</option>
                    <option value="double">double (desimal)</option>
                    <option value="String">String (teks)</option>
                    <option value="boolean">boolean (true/false)</option>
                    <option value="char">char (karakter)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Nama Variabel:
                  </label>
                  <input
                    type="text"
                    value={varName}
                    onChange={(e) => {
                      setVarName(e.target.value);
                      setShowValidation(true);
                    }}
                    placeholder={isFinal ? "MAX_VALUE" : "namaVariabel"}
                    className="w-full p-3 border-2 border-gray-900 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {showValidation && varName && (
                    <p className={`mt-2 text-sm ${validation.valid ? 'text-green-600' : 'text-red-600'}`}>
                      {validation.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Nilai:
                  </label>
                  <input
                    type="text"
                    value={varValue}
                    onChange={(e) => setVarValue(e.target.value)}
                    placeholder={
                      varType === "String" ? "Masukkan teks" :
                      varType === "char" ? "A" :
                      varType === "boolean" ? "true atau false" :
                      varType === "double" ? "10.5" :
                      "42"
                    }
                    className="w-full p-3 border-2 border-gray-900 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="finalCheck"
                    checked={isFinal}
                    onChange={(e) => setIsFinal(e.target.checked)}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <label htmlFor="finalCheck" className="text-gray-900 font-semibold cursor-pointer">
                    Jadikan konstanta (final)
                  </label>
                </div>

                <div className="bg-gray-900 text-white p-4 rounded-lg mt-4">
                  <p className="text-sm text-gray-400 mb-2">Kode Java yang dihasilkan:</p>
                  <pre className="text-green-400 font-mono">
                    {generateJavaCode()}
                  </pre>
                </div>

                {varName && varValue && validation.valid && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                    <p className="text-blue-800 font-semibold">💡 Penjelasan:</p>
                    <ul className="mt-2 text-blue-700 text-sm space-y-1">
                      {isFinal && (
                        <li>• <code className="bg-blue-200 px-1 rounded">final</code> membuat variabel tidak bisa diubah (konstanta)</li>
                      )}
                      <li>• <code className="bg-blue-200 px-1 rounded">{varType}</code> adalah tipe data variabel</li>
                      <li>• <code className="bg-blue-200 px-1 rounded">{isFinal ? varName.toUpperCase() : varName}</code> adalah nama variabel</li>
                      <li>• Nilai disimpan: {varType === "String" ? `"${varValue}"` : varValue}</li>
                    </ul>
                  </div>
                )}
              </div>
            </InteractiveDemo>
          </ContentCard>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan Variabel di Java</h3>
            <ul className="space-y-2">
              <li>✅ Setiap variabel harus punya <strong>tipe data</strong> yang jelas</li>
              <li>✅ Format: <code className="bg-white/20 px-2 py-1 rounded">TipeData namaVariabel = nilai;</code></li>
              <li>✅ Gunakan <strong>final</strong> untuk konstanta (nilai tetap)</li>
              <li>✅ Gunakan <strong>camelCase</strong> untuk nama variabel</li>
              <li>✅ Gunakan <strong>UPPER_CASE</strong> untuk konstanta</li>
              <li>✅ Perhatikan scope: instance, local, block, dan static</li>
              <li>✅ Tipe data tidak bisa berubah setelah dideklarasi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
}
