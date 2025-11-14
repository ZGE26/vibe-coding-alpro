import BackButton from '@/components/BackButton';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';

export default function VariabelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            📦 Variabel
          </h1>

          <ContentCard title="Apa itu Variabel?" icon="💡">
            <p className="mb-4">
              Variabel adalah wadah atau tempat penyimpanan data dalam program. 
              Bayangkan variabel seperti kotak yang dapat kamu beri label dan isi 
              dengan berbagai jenis barang. Nama label adalah nama variabel, dan 
              barang di dalamnya adalah nilai yang disimpan.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-yellow-800">
                <strong>Analogi:</strong> Variabel seperti loker di sekolah. 
                Setiap loker punya nomor (nama variabel) dan bisa menyimpan barang (nilai).
              </p>
            </div>
          </ContentCard>

          <ContentCard title="Cara Mendeklarasikan Variabel" icon="📝">
            <p className="mb-3">
              Dalam JavaScript modern, ada tiga cara untuk mendeklarasikan variabel:
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. let (Direkomendasikan)</h3>
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">let</code> digunakan 
              untuk variabel yang nilainya dapat berubah.
            </p>
            <CodeExample 
              code={`// Deklarasi variabel dengan let
let nama = "Budi";
let umur = 20;
let aktif = true;

// Nilai dapat diubah
nama = "Andi";
umur = 21;

console.log(nama);  // Output: "Andi"
console.log(umur);  // Output: 21`}
            />

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. const (Konstanta)</h3>
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">const</code> digunakan 
              untuk variabel yang nilainya tetap dan tidak akan berubah.
            </p>
            <CodeExample 
              code={`// Deklarasi konstanta
const PI = 3.14159;
const NAMA_SEKOLAH = "SMA Negeri 1";
const JUMLAH_HARI = 7;

// Tidak bisa diubah
// PI = 3.14;  // Error! Tidak bisa mengubah const

console.log(PI);  // Output: 3.14159`}
            />
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
              <p className="font-semibold text-green-800">✅ Best Practice:</p>
              <p className="text-green-700">
                Gunakan <code className="bg-green-200 px-2 py-1 rounded">const</code> secara 
                default, dan gunakan <code className="bg-green-200 px-2 py-1 rounded">let</code> 
                hanya jika nilai perlu diubah.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. var (Cara Lama)</h3>
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">var</code> adalah cara 
              lama mendeklarasikan variabel. Tidak direkomendasikan lagi.
            </p>
            <CodeExample 
              code={`// Menggunakan var (hindari ini)
var nama = "Siti";
var umur = 19;

// var memiliki scope dan hoisting yang membingungkan
// Lebih baik gunakan let atau const`}
            />
          </ContentCard>

          <ContentCard title="Aturan Penamaan Variabel" icon="📏">
            <p className="mb-4">
              Ada beberapa aturan dan konvensi dalam memberi nama variabel:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-blue-500 p-4">
                <h4 className="font-bold text-blue-800 mb-2">✅ Aturan Wajib:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-900">
                  <li>Harus dimulai dengan huruf, underscore (_), atau dollar sign ($)</li>
                  <li>Tidak boleh dimulai dengan angka</li>
                  <li>Tidak boleh menggunakan spasi</li>
                  <li>Case-sensitive (huruf besar dan kecil berbeda)</li>
                  <li>Tidak boleh menggunakan kata kunci JavaScript (let, const, if, dll)</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-4">
                <h4 className="font-bold text-green-800 mb-2">✅ Nama Variabel yang Baik:</h4>
                <CodeExample 
                  code={`let namaSiswa = "Budi";
let jumlahNilai = 5;
let isAktif = true;
let _private = "data";
let $element = document.getElementById("app");
let totalHarga = 50000;`}
                />
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4">
                <h4 className="font-bold text-red-800 mb-2">❌ Nama Variabel yang Salah:</h4>
                <CodeExample 
                  code={`// SALAH - tidak boleh dimulai dengan angka
let 1nama = "Budi";

// SALAH - tidak boleh ada spasi
let nama siswa = "Andi";

// SALAH - menggunakan kata kunci
let let = "nilai";

// SALAH - menggunakan karakter khusus
let nama-siswa = "Siti";`}
                />
              </div>
            </div>
          </ContentCard>

          <ContentCard title="Konvensi Penamaan" icon="✨">
            <p className="mb-4">
              Gunakan gaya penamaan yang konsisten untuk kode yang mudah dibaca:
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-2">1. camelCase (Paling Umum)</h3>
            <CodeExample 
              code={`let namaLengkap = "Budi Santoso";
let totalBelanja = 150000;
let isUserLogin = true;
let nilaiMatematika = 85;`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. UPPER_CASE (Untuk Konstanta)</h3>
            <CodeExample 
              code={`const MAX_NILAI = 100;
const MIN_UMUR = 17;
const API_KEY = "abc123xyz";
const BASE_URL = "https://api.example.com";`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. PascalCase (Untuk Class)</h3>
            <CodeExample 
              code={`class UserProfile {
  // code
}

class DatabaseConnection {
  // code
}`}
            />
          </ContentCard>

          <ContentCard title="Inisialisasi Variabel" icon="🎯">
            <p className="mb-3">
              Inisialisasi adalah memberikan nilai awal pada variabel saat dideklarasikan.
            </p>
            <CodeExample 
              code={`// Deklarasi dengan inisialisasi
let nama = "Andi";
let umur = 20;

// Deklarasi tanpa inisialisasi (undefined)
let alamat;
console.log(alamat);  // Output: undefined

// Memberikan nilai kemudian
alamat = "Jakarta";
console.log(alamat);  // Output: "Jakarta"

// const HARUS diinisialisasi
const PI = 3.14;  // ✅ Benar
// const E;       // ❌ Error!`}
            />
          </ContentCard>

          <ContentCard title="Scope Variabel" icon="🎪">
            <p className="mb-3">
              Scope adalah ruang lingkup di mana variabel dapat diakses.
            </p>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">Global Scope</h3>
            <CodeExample 
              code={`// Variabel global (di luar fungsi)
let namaGlobal = "Budi";

function tampilkanNama() {
  console.log(namaGlobal);  // Bisa diakses
}

tampilkanNama();  // Output: "Budi"`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Local Scope</h3>
            <CodeExample 
              code={`function hitungLuas() {
  // Variabel local (di dalam fungsi)
  let panjang = 10;
  let lebar = 5;
  let luas = panjang * lebar;
  console.log(luas);  // 50
}

hitungLuas();
// console.log(panjang);  // Error! panjang tidak dapat diakses di luar`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Block Scope</h3>
            <CodeExample 
              code={`if (true) {
  let dalamBlock = "Hanya ada di dalam block";
  console.log(dalamBlock);  // ✅ Bisa diakses
}

// console.log(dalamBlock);  // ❌ Error! Tidak bisa diakses di luar`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan</h3>
            <ul className="space-y-2">
              <li>✅ Gunakan <strong>let</strong> untuk variabel yang nilainya berubah</li>
              <li>✅ Gunakan <strong>const</strong> untuk nilai yang tetap (konstanta)</li>
              <li>✅ Nama variabel harus deskriptif dan mudah dipahami</li>
              <li>✅ Gunakan <strong>camelCase</strong> untuk nama variabel</li>
              <li>✅ Gunakan <strong>UPPER_CASE</strong> untuk konstanta</li>
              <li>✅ Perhatikan scope variabel (global, local, block)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
