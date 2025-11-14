import BackButton from '@/components/BackButton';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';

export default function OperatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            ➕ Operator
          </h1>

          <ContentCard title="Apa itu Operator?" icon="💡">
            <p className="mb-4">
              Operator adalah simbol khusus yang digunakan untuk melakukan operasi pada 
              nilai atau variabel. Operator memungkinkan kita melakukan perhitungan 
              matematika, perbandingan, dan operasi logika dalam program.
            </p>
          </ContentCard>

          <ContentCard title="1. Operator Aritmatika" icon="🔢">
            <p className="mb-3">
              Operator aritmatika digunakan untuk melakukan operasi matematika dasar.
            </p>
            
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Operator</th>
                    <th className="border px-4 py-2">Nama</th>
                    <th className="border px-4 py-2">Contoh</th>
                    <th className="border px-4 py-2">Hasil</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center font-mono">+</td>
                    <td className="border px-4 py-2">Penjumlahan</td>
                    <td className="border px-4 py-2 font-mono">5 + 3</td>
                    <td className="border px-4 py-2 text-center">8</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center font-mono">-</td>
                    <td className="border px-4 py-2">Pengurangan</td>
                    <td className="border px-4 py-2 font-mono">5 - 3</td>
                    <td className="border px-4 py-2 text-center">2</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center font-mono">*</td>
                    <td className="border px-4 py-2">Perkalian</td>
                    <td className="border px-4 py-2 font-mono">5 * 3</td>
                    <td className="border px-4 py-2 text-center">15</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center font-mono">/</td>
                    <td className="border px-4 py-2">Pembagian</td>
                    <td className="border px-4 py-2 font-mono">15 / 3</td>
                    <td className="border px-4 py-2 text-center">5</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center font-mono">%</td>
                    <td className="border px-4 py-2">Modulus (Sisa Bagi)</td>
                    <td className="border px-4 py-2 font-mono">10 % 3</td>
                    <td className="border px-4 py-2 text-center">1</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center font-mono">**</td>
                    <td className="border px-4 py-2">Pangkat</td>
                    <td className="border px-4 py-2 font-mono">2 ** 3</td>
                    <td className="border px-4 py-2 text-center">8</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CodeExample 
              code={`// Contoh penggunaan operator aritmatika
let a = 10;
let b = 3;

console.log(a + b);   // 13 (penjumlahan)
console.log(a - b);   // 7  (pengurangan)
console.log(a * b);   // 30 (perkalian)
console.log(a / b);   // 3.333... (pembagian)
console.log(a % b);   // 1  (sisa bagi)
console.log(a ** b);  // 1000 (10 pangkat 3)

// Contoh praktis
let harga = 50000;
let jumlah = 3;
let total = harga * jumlah;
console.log(total);   // 150000`}
            />
          </ContentCard>

          <ContentCard title="2. Operator Penugasan (Assignment)" icon="📝">
            <p className="mb-3">
              Operator penugasan digunakan untuk memberikan nilai ke variabel.
            </p>
            
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Operator</th>
                    <th className="border px-4 py-2">Contoh</th>
                    <th className="border px-4 py-2">Sama Dengan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-mono">=</td>
                    <td className="border px-4 py-2 font-mono">x = 5</td>
                    <td className="border px-4 py-2 font-mono">x = 5</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">+=</td>
                    <td className="border px-4 py-2 font-mono">x += 3</td>
                    <td className="border px-4 py-2 font-mono">x = x + 3</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">-=</td>
                    <td className="border px-4 py-2 font-mono">x -= 3</td>
                    <td className="border px-4 py-2 font-mono">x = x - 3</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">*=</td>
                    <td className="border px-4 py-2 font-mono">x *= 3</td>
                    <td className="border px-4 py-2 font-mono">x = x * 3</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">/=</td>
                    <td className="border px-4 py-2 font-mono">x /= 3</td>
                    <td className="border px-4 py-2 font-mono">x = x / 3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CodeExample 
              code={`let skor = 100;

// Penugasan biasa
skor = 80;
console.log(skor);  // 80

// Penugasan dengan operasi
skor += 20;  // skor = skor + 20
console.log(skor);  // 100

skor -= 10;  // skor = skor - 10
console.log(skor);  // 90

skor *= 2;   // skor = skor * 2
console.log(skor);  // 180

skor /= 3;   // skor = skor / 3
console.log(skor);  // 60`}
            />
          </ContentCard>

          <ContentCard title="3. Operator Perbandingan" icon="⚖️">
            <p className="mb-3">
              Operator perbandingan digunakan untuk membandingkan dua nilai. 
              Hasilnya selalu berupa boolean (true atau false).
            </p>
            
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Operator</th>
                    <th className="border px-4 py-2">Nama</th>
                    <th className="border px-4 py-2">Contoh</th>
                    <th className="border px-4 py-2">Hasil</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-mono">==</td>
                    <td className="border px-4 py-2">Sama dengan (nilai)</td>
                    <td className="border px-4 py-2 font-mono">5 == "5"</td>
                    <td className="border px-4 py-2 text-center">true</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">===</td>
                    <td className="border px-4 py-2">Sama dengan (nilai & tipe)</td>
                    <td className="border px-4 py-2 font-mono">5 === "5"</td>
                    <td className="border px-4 py-2 text-center">false</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">!=</td>
                    <td className="border px-4 py-2">Tidak sama (nilai)</td>
                    <td className="border px-4 py-2 font-mono">5 != "5"</td>
                    <td className="border px-4 py-2 text-center">false</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">!==</td>
                    <td className="border px-4 py-2">Tidak sama (nilai & tipe)</td>
                    <td className="border px-4 py-2 font-mono">5 !== "5"</td>
                    <td className="border px-4 py-2 text-center">true</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">&gt;</td>
                    <td className="border px-4 py-2">Lebih besar dari</td>
                    <td className="border px-4 py-2 font-mono">7 &gt; 5</td>
                    <td className="border px-4 py-2 text-center">true</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">&lt;</td>
                    <td className="border px-4 py-2">Lebih kecil dari</td>
                    <td className="border px-4 py-2 font-mono">5 &lt; 7</td>
                    <td className="border px-4 py-2 text-center">true</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">&gt;=</td>
                    <td className="border px-4 py-2">Lebih besar atau sama dengan</td>
                    <td className="border px-4 py-2 font-mono">5 &gt;= 5</td>
                    <td className="border px-4 py-2 text-center">true</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">&lt;=</td>
                    <td className="border px-4 py-2">Lebih kecil atau sama dengan</td>
                    <td className="border px-4 py-2 font-mono">3 &lt;= 5</td>
                    <td className="border px-4 py-2 text-center">true</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CodeExample 
              code={`let umur = 18;
let nilai = 85;

// Perbandingan angka
console.log(umur >= 17);     // true (dewasa)
console.log(nilai > 70);     // true (lulus)
console.log(umur < 20);      // true (remaja)

// Perbedaan == dan ===
console.log(5 == "5");       // true (hanya cek nilai)
console.log(5 === "5");      // false (cek nilai DAN tipe data)

console.log(5 != "5");       // false
console.log(5 !== "5");      // true (tipe berbeda)

// Best practice: gunakan === dan !==
let x = 10;
console.log(x === 10);       // true`}
            />
          </ContentCard>

          <ContentCard title="4. Operator Logika" icon="🧠">
            <p className="mb-3">
              Operator logika digunakan untuk menggabungkan beberapa kondisi. 
              Hasilnya berupa boolean (true atau false).
            </p>
            
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Operator</th>
                    <th className="border px-4 py-2">Nama</th>
                    <th className="border px-4 py-2">Deskripsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-mono">&&</td>
                    <td className="border px-4 py-2">AND (Dan)</td>
                    <td className="border px-4 py-2">True jika SEMUA kondisi true</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">||</td>
                    <td className="border px-4 py-2">OR (Atau)</td>
                    <td className="border px-4 py-2">True jika SALAH SATU kondisi true</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">!</td>
                    <td className="border px-4 py-2">NOT (Tidak)</td>
                    <td className="border px-4 py-2">Membalik nilai boolean</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CodeExample 
              code={`let umur = 20;
let punyaSIM = true;
let nilai = 85;

// Operator AND (&&)
// True jika SEMUA kondisi true
let bisaMenyetir = umur >= 17 && punyaSIM;
console.log(bisaMenyetir);  // true

let lulusIstimewa = nilai >= 90 && nilai <= 100;
console.log(lulusIstimewa);  // false (nilai 85)

// Operator OR (||)
// True jika SALAH SATU kondisi true
let lulus = nilai >= 70 || nilai === 100;
console.log(lulus);  // true

let libur = hari === "Sabtu" || hari === "Minggu";

// Operator NOT (!)
// Membalik nilai boolean
let belumDewasa = !(umur >= 18);
console.log(belumDewasa);  // false

let tidakAktif = !punyaSIM;
console.log(tidakAktif);  // false`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="font-semibold text-blue-800">💡 Tabel Kebenaran:</p>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>AND (&&):</strong> true && true = true, sisanya false</p>
                <p><strong>OR (||):</strong> false || false = false, sisanya true</p>
                <p><strong>NOT (!):</strong> !true = false, !false = true</p>
              </div>
            </div>
          </ContentCard>

          <ContentCard title="5. Operator Increment & Decrement" icon="📈">
            <p className="mb-3">
              Operator untuk menambah atau mengurangi nilai variabel sebesar 1.
            </p>
            
            <CodeExample 
              code={`let angka = 10;

// Increment (menambah 1)
angka++;
console.log(angka);  // 11

angka++;
console.log(angka);  // 12

// Decrement (mengurangi 1)
angka--;
console.log(angka);  // 11

// Pre-increment vs Post-increment
let x = 5;
let y = x++;  // y = 5, lalu x menjadi 6
console.log(x, y);  // 6, 5

let a = 5;
let b = ++a;  // a menjadi 6 dulu, lalu b = 6
console.log(a, b);  // 6, 6

// Contoh praktis
let counter = 0;
counter++;  // tambah 1
counter++;  // tambah 1
counter++;  // tambah 1
console.log(counter);  // 3`}
            />
          </ContentCard>

          <ContentCard title="6. Operator String" icon="📝">
            <p className="mb-3">
              Operator khusus untuk bekerja dengan string (teks).
            </p>
            
            <CodeExample 
              code={`// Operator + untuk menggabungkan string
let namaDepan = "Budi";
let namaBelakang = "Santoso";
let namaLengkap = namaDepan + " " + namaBelakang;
console.log(namaLengkap);  // "Budi Santoso"

// Menggabungkan string dan angka
let umur = 20;
let kalimat = "Saya berumur " + umur + " tahun";
console.log(kalimat);  // "Saya berumur 20 tahun"

// Template literal (cara modern)
let nama = "Andi";
let kelas = "10A";
let pesan = \`Halo, nama saya \${nama} dari kelas \${kelas}\`;
console.log(pesan);  // "Halo, nama saya Andi dari kelas 10A"

// Operator += untuk string
let text = "Hello";
text += " ";
text += "World";
console.log(text);  // "Hello World"`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan</h3>
            <ul className="space-y-2">
              <li>✅ <strong>Aritmatika:</strong> +, -, *, /, %, **</li>
              <li>✅ <strong>Penugasan:</strong> =, +=, -=, *=, /=</li>
              <li>✅ <strong>Perbandingan:</strong> ==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=</li>
              <li>✅ <strong>Logika:</strong> && (AND), || (OR), ! (NOT)</li>
              <li>✅ <strong>Increment/Decrement:</strong> ++, --</li>
              <li>✅ Gunakan === dan !== untuk perbandingan yang aman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
