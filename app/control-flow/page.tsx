import BackButton from '@/components/BackButton';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';

export default function ControlFlowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            🔀 Control Flow (Alur Kontrol)
          </h1>

          <ContentCard title="Apa itu Control Flow?" icon="💡">
            <p className="mb-4">
              Control Flow adalah cara mengatur alur eksekusi program. Dengan control flow, 
              kita dapat membuat keputusan (percabangan) dan mengulang kode (perulangan) 
              berdasarkan kondisi tertentu. Ini membuat program menjadi dinamis dan dapat 
              merespons situasi yang berbeda.
            </p>
          </ContentCard>

          <ContentCard title="1. Percabangan dengan if" icon="🌿">
            <p className="mb-3">
              Statement <code className="bg-gray-200 px-2 py-1 rounded">if</code> digunakan 
              untuk menjalankan kode jika kondisi bernilai true.
            </p>
            
            <CodeExample 
              code={`// If sederhana
let umur = 18;

if (umur >= 17) {
  console.log("Anda sudah dewasa");
}

// Contoh lain
let nilai = 85;

if (nilai >= 70) {
  console.log("Selamat, Anda lulus!");
}

// Dengan kondisi kompleks
let suhu = 35;

if (suhu > 30) {
  console.log("Cuaca sangat panas");
}`}
            />
          </ContentCard>

          <ContentCard title="2. if-else" icon="↔️">
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">if-else</code> memberikan 
              pilihan alternatif jika kondisi if tidak terpenuhi.
            </p>
            
            <CodeExample 
              code={`let nilai = 65;

if (nilai >= 70) {
  console.log("Lulus");
} else {
  console.log("Tidak lulus");
}

// Contoh lain
let umur = 16;

if (umur >= 17) {
  console.log("Boleh membuat KTP");
} else {
  console.log("Belum boleh membuat KTP");
}

// Cek ganjil/genap
let angka = 7;

if (angka % 2 === 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
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

          <ContentCard title="4. Switch Statement" icon="🎚️">
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">switch</code> adalah 
              alternatif untuk if-else if-else yang lebih rapi ketika membandingkan 
              satu variabel dengan banyak nilai.
            </p>
            
            <CodeExample 
              code={`let hari = 3;
let namaHari;

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

console.log(namaHari);  // "Rabu"

// Contoh lain: grade nilai
let grade = "B";

switch (grade) {
  case "A":
    console.log("Sempurna!");
    break;
  case "B":
    console.log("Bagus!");
    break;
  case "C":
    console.log("Cukup");
    break;
  case "D":
    console.log("Kurang");
    break;
  default:
    console.log("Tidak lulus");
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

          <ContentCard title="5. Perulangan dengan for" icon="🔁">
            <p className="mb-3">
              Loop <code className="bg-gray-200 px-2 py-1 rounded">for</code> digunakan 
              ketika kita tahu berapa kali perulangan akan dilakukan.
            </p>
            
            <CodeExample 
              code={`// Struktur for loop
// for (inisialisasi; kondisi; increment) { kode }

// Menampilkan angka 1 sampai 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5

// Menghitung mundur
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// Loop dengan step 2
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10

// Loop untuk menghitung jumlah
let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log(total);  // 5050 (jumlah 1-100)`}
            />
          </ContentCard>

          <ContentCard title="6. Perulangan dengan while" icon="🔄">
            <p className="mb-3">
              Loop <code className="bg-gray-200 px-2 py-1 rounded">while</code> digunakan 
              ketika kita tidak tahu pasti berapa kali perulangan akan dilakukan, 
              tetapi kita tahu kondisinya.
            </p>
            
            <CodeExample 
              code={`// While loop
let angka = 1;

while (angka <= 5) {
  console.log(angka);
  angka++;
}
// Output: 1, 2, 3, 4, 5

// Contoh: menunggu input yang benar
let password = "";

while (password !== "rahasia") {
  // Dalam praktik, akan meminta input dari user
  // password = prompt("Masukkan password:");
  console.log("Password salah, coba lagi");
  break;  // untuk contoh ini
}

// Contoh: membagi hingga tidak bisa lagi
let nilai = 100;

while (nilai > 1) {
  nilai = nilai / 2;
  console.log(nilai);
}
// Output: 50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78125`}
            />

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
              <p className="font-semibold text-red-800">⚠️ Hati-hati:</p>
              <p className="text-red-700">
                Pastikan kondisi while akan menjadi false pada suatu saat, 
                jika tidak program akan terjebak dalam infinite loop (loop tak terbatas).
              </p>
            </div>
          </ContentCard>

          <ContentCard title="7. do-while Loop" icon="♻️">
            <p className="mb-3">
              Loop <code className="bg-gray-200 px-2 py-1 rounded">do-while</code> mirip 
              dengan while, tetapi kode akan dijalankan minimal satu kali sebelum 
              kondisi dicek.
            </p>
            
            <CodeExample 
              code={`// do-while loop
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
// Output: 1, 2, 3, 4, 5

// Perbedaan dengan while
let x = 10;

// Dengan while (tidak akan dijalankan)
while (x < 5) {
  console.log("Ini tidak akan tampil");
}

// Dengan do-while (dijalankan sekali)
do {
  console.log("Ini akan tampil sekali");
} while (x < 5);

// Contoh praktis: validasi input
let angka;
do {
  // angka = prompt("Masukkan angka 1-10:");
  angka = 5;  // untuk contoh
} while (angka < 1 || angka > 10);`}
            />
          </ContentCard>

          <ContentCard title="8. break dan continue" icon="⏯️">
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">break</code> dan 
              <code className="bg-gray-200 px-2 py-1 rounded ml-2">continue</code> 
              digunakan untuk mengontrol jalannya loop.
            </p>
            
            <CodeExample 
              code={`// break: menghentikan loop sepenuhnya
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;  // berhenti ketika i = 5
  }
  console.log(i);
}
// Output: 1, 2, 3, 4

// continue: skip iterasi saat ini, lanjut ke berikutnya
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;  // lewati angka 3
  }
  console.log(i);
}
// Output: 1, 2, 4, 5

// Contoh: mencari angka tertentu
let numbers = [1, 5, 8, 12, 15, 20];
let cari = 12;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === cari) {
    console.log(\`Angka \${cari} ditemukan di index \${i}\`);
    break;  // berhenti setelah ketemu
  }
}

// Contoh: skip angka genap
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // skip angka genap
  }
  console.log(i);  // hanya tampilkan angka ganjil
}
// Output: 1, 3, 5, 7, 9`}
            />
          </ContentCard>

          <ContentCard title="9. Loop untuk Array" icon="📚">
            <p className="mb-3">
              Cara umum untuk melakukan perulangan pada array.
            </p>
            
            <CodeExample 
              code={`let buah = ["Apel", "Jeruk", "Mangga", "Pisang"];

// 1. For loop biasa
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}

// 2. For...of (cara modern)
for (let item of buah) {
  console.log(item);
}

// 3. forEach (method array)
buah.forEach(function(item, index) {
  console.log(\`\${index + 1}. \${item}\`);
});
// Output: 
// 1. Apel
// 2. Jeruk
// 3. Mangga
// 4. Pisang

// Contoh: menghitung total
let nilai = [85, 90, 78, 92, 88];
let total = 0;

for (let n of nilai) {
  total += n;
}

let rataRata = total / nilai.length;
console.log(\`Rata-rata: \${rataRata}\`);  // 86.6`}
            />
          </ContentCard>

          <ContentCard title="10. Nested Loop (Loop Bersarang)" icon="🎭">
            <p className="mb-3">
              Loop di dalam loop, berguna untuk bekerja dengan data 2 dimensi atau 
              kombinasi data.
            </p>
            
            <CodeExample 
              code={`// Nested loop sederhana
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(\`i=\${i}, j=\${j}\`);
  }
}

// Membuat pola bintang
for (let i = 1; i <= 5; i++) {
  let bintang = "";
  for (let j = 1; j <= i; j++) {
    bintang += "*";
  }
  console.log(bintang);
}
// Output:
// *
// **
// ***
// ****
// *****

// Tabel perkalian
for (let i = 1; i <= 5; i++) {
  let baris = "";
  for (let j = 1; j <= 5; j++) {
    baris += (i * j) + "\t";
  }
  console.log(baris);
}

// Array 2 dimensi
let matriks = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriks.length; i++) {
  for (let j = 0; j < matriks[i].length; j++) {
    console.log(matriks[i][j]);
  }
}`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan</h3>
            <ul className="space-y-2">
              <li>✅ <strong>if/else:</strong> Untuk membuat keputusan</li>
              <li>✅ <strong>switch:</strong> Alternatif if-else untuk banyak pilihan</li>
              <li>✅ <strong>for:</strong> Loop dengan jumlah iterasi yang pasti</li>
              <li>✅ <strong>while:</strong> Loop berdasarkan kondisi</li>
              <li>✅ <strong>do-while:</strong> Loop yang pasti jalan minimal sekali</li>
              <li>✅ <strong>break:</strong> Keluar dari loop</li>
              <li>✅ <strong>continue:</strong> Skip ke iterasi berikutnya</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
