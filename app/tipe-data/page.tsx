import BackButton from '@/components/BackButton';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';

export default function TipeDataPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            📊 Tipe Data
          </h1>

          <ContentCard title="Apa itu Tipe Data?" icon="💡">
            <p className="mb-4">
              Tipe data adalah klasifikasi data yang memberitahu komputer bagaimana 
              programmer bermaksud menggunakan data tersebut. Setiap variabel dalam 
              pemrograman memiliki tipe data yang menentukan nilai apa yang dapat 
              disimpan dan operasi apa yang dapat dilakukan.
            </p>
          </ContentCard>

          <ContentCard title="1. Number (Angka)" icon="🔢">
            <p className="mb-3">
              Tipe data number digunakan untuk menyimpan nilai numerik, baik bilangan 
              bulat (integer) maupun bilangan desimal (floating-point).
            </p>
            <CodeExample 
              code={`// Bilangan bulat
let umur = 25;
let jumlahSiswa = 30;

// Bilangan desimal
let tinggi = 170.5;
let suhu = 36.5;

// Bilangan negatif
let saldo = -50000;`}
            />
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="font-semibold text-blue-800">💡 Tips:</p>
              <p className="text-blue-700">
                Gunakan number untuk perhitungan matematika seperti penjumlahan, 
                pengurangan, perkalian, dan pembagian.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="2. String (Teks)" icon="📝">
            <p className="mb-3">
              String adalah tipe data yang digunakan untuk menyimpan teks. String 
              ditulis dalam tanda kutip (tunggal atau ganda).
            </p>
            <CodeExample 
              code={`// Menggunakan tanda kutip ganda
let nama = "Budi Santoso";

// Menggunakan tanda kutip tunggal
let alamat = 'Jakarta';

// String dengan angka
let kodePos = "12345";

// String kosong
let pesan = "";

// Template literal (backtick)
let salam = \`Halo, nama saya \${nama}\`;`}
            />
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
              <p className="font-semibold text-green-800">✅ Contoh Penggunaan:</p>
              <p className="text-green-700">
                String digunakan untuk nama, alamat, pesan, email, dan semua data 
                yang berbentuk teks.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="3. Boolean" icon="✅">
            <p className="mb-3">
              Boolean adalah tipe data yang hanya memiliki dua nilai: true (benar) 
              atau false (salah). Boolean sangat berguna untuk pengambilan keputusan.
            </p>
            <CodeExample 
              code={`// Nilai boolean
let sudahMenikah = false;
let aktif = true;

// Hasil perbandingan
let dewasa = umur >= 18;  // true jika umur 18 atau lebih
let lulus = nilai >= 70;   // true jika nilai 70 atau lebih

// Logika
let bisaMasuk = dewasa && aktif;  // true jika keduanya true`}
            />
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4">
              <p className="font-semibold text-purple-800">🎯 Kegunaan:</p>
              <p className="text-purple-700">
                Boolean digunakan dalam kondisi if-else, perulangan, dan logika program.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="4. Array (Kumpulan Data)" icon="📚">
            <p className="mb-3">
              Array adalah tipe data yang dapat menyimpan banyak nilai dalam satu variabel. 
              Setiap nilai dalam array memiliki indeks yang dimulai dari 0.
            </p>
            <CodeExample 
              code={`// Array angka
let nilai = [85, 90, 78, 92, 88];

// Array string
let buah = ["Apel", "Jeruk", "Mangga", "Pisang"];

// Array campuran
let data = [1, "Dua", true, 3.14];

// Mengakses elemen array
console.log(buah[0]);  // Output: "Apel"
console.log(nilai[2]);  // Output: 78

// Panjang array
console.log(buah.length);  // Output: 4`}
            />
          </ContentCard>

          <ContentCard title="5. Object (Objek)" icon="🎁">
            <p className="mb-3">
              Object adalah tipe data yang dapat menyimpan pasangan key-value (kunci-nilai). 
              Object cocok untuk menyimpan data yang kompleks dan terstruktur.
            </p>
            <CodeExample 
              code={`// Object sederhana
let siswa = {
  nama: "Andi",
  umur: 16,
  kelas: "10A",
  aktif: true
};

// Mengakses properti
console.log(siswa.nama);   // Output: "Andi"
console.log(siswa["umur"]); // Output: 16

// Mengubah nilai
siswa.kelas = "10B";

// Menambah properti baru
siswa.alamat = "Jakarta";`}
            />
          </ContentCard>

          <ContentCard title="6. Null dan Undefined" icon="❓">
            <p className="mb-3">
              <strong>Null</strong> dan <strong>Undefined</strong> adalah tipe data khusus 
              yang mewakili "tidak ada nilai".
            </p>
            <CodeExample 
              code={`// Undefined: variabel dideklarasikan tapi belum diberi nilai
let x;
console.log(x);  // Output: undefined

// Null: variabel sengaja tidak memiliki nilai
let y = null;
console.log(y);  // Output: null

// Perbedaan
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (ini bug JavaScript)`}
            />
          </ContentCard>

          <ContentCard title="Mengecek Tipe Data" icon="🔍">
            <p className="mb-3">
              Gunakan operator <code className="bg-gray-200 px-2 py-1 rounded">typeof</code> 
              untuk mengecek tipe data suatu variabel.
            </p>
            <CodeExample 
              code={`console.log(typeof 42);          // "number"
console.log(typeof "Hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof [1, 2, 3]);   // "object"
console.log(typeof {nama: "A"}); // "object"
console.log(typeof undefined);   // "undefined"`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan</h3>
            <ul className="space-y-2">
              <li>✅ <strong>Number</strong>: untuk angka (25, 3.14, -10)</li>
              <li>✅ <strong>String</strong>: untuk teks ("Hello", 'Dunia')</li>
              <li>✅ <strong>Boolean</strong>: untuk true/false</li>
              <li>✅ <strong>Array</strong>: untuk kumpulan data [1, 2, 3]</li>
              <li>✅ <strong>Object</strong>: untuk data terstruktur {"{nama: 'Andi'}"}</li>
              <li>✅ <strong>Null/Undefined</strong>: untuk nilai kosong</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
