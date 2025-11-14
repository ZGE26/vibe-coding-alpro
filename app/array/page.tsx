import BackButton from '@/components/BackButton';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';

export default function ArrayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            📚 Array
          </h1>

          <ContentCard title="Apa itu Array?" icon="💡">
            <p className="mb-4">
              Array adalah struktur data yang dapat menyimpan banyak nilai dalam 
              satu variabel. Bayangkan array seperti rak buku yang memiliki banyak 
              slot, di mana setiap slot dapat menyimpan satu item dan memiliki 
              nomor urut (indeks) yang dimulai dari 0.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-yellow-800">
                <strong>Kegunaan:</strong> Array sangat berguna untuk menyimpan 
                koleksi data seperti daftar nama siswa, nilai ujian, daftar produk, dll.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="1. Membuat Array" icon="🎯">
            <p className="mb-3">
              Ada beberapa cara untuk membuat array dalam JavaScript.
            </p>
            
            <CodeExample 
              code={`// Cara 1: Array literal (paling umum)
let buah = ["Apel", "Jeruk", "Mangga", "Pisang"];

// Cara 2: Menggunakan constructor Array
let angka = new Array(1, 2, 3, 4, 5);

// Array kosong
let kosong = [];

// Array dengan tipe data berbeda (tidak direkomendasikan)
let campuran = [1, "Dua", true, null, {nama: "Budi"}];

// Array dengan nilai yang sama
let nol = new Array(5).fill(0);
console.log(nol);  // [0, 0, 0, 0, 0]

console.log(buah);  // ["Apel", "Jeruk", "Mangga", "Pisang"]`}
            />
          </ContentCard>

          <ContentCard title="2. Mengakses Elemen Array" icon="🔍">
            <p className="mb-3">
              Setiap elemen dalam array memiliki indeks (nomor urut) yang dimulai dari 0.
            </p>
            
            <CodeExample 
              code={`let buah = ["Apel", "Jeruk", "Mangga", "Pisang"];

// Mengakses dengan indeks
console.log(buah[0]);  // "Apel" (elemen pertama)
console.log(buah[1]);  // "Jeruk"
console.log(buah[2]);  // "Mangga"
console.log(buah[3]);  // "Pisang"

// Mengakses elemen terakhir
let terakhir = buah[buah.length - 1];
console.log(terakhir);  // "Pisang"

// Mengakses indeks yang tidak ada
console.log(buah[10]);  // undefined

// Mengubah nilai elemen
buah[1] = "Anggur";
console.log(buah);  // ["Apel", "Anggur", "Mangga", "Pisang"]

// Panjang array
console.log(buah.length);  // 4`}
            />
          </ContentCard>

          <ContentCard title="3. Menambah dan Menghapus Elemen" icon="➕">
            <p className="mb-3">
              JavaScript menyediakan berbagai method untuk memanipulasi array.
            </p>
            
            <CodeExample 
              code={`let buah = ["Apel", "Jeruk"];

// push(): menambah di akhir
buah.push("Mangga");
console.log(buah);  // ["Apel", "Jeruk", "Mangga"]

buah.push("Pisang", "Anggur");
console.log(buah);  // ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"]

// pop(): menghapus dari akhir
let dihapus = buah.pop();
console.log(dihapus);  // "Anggur"
console.log(buah);     // ["Apel", "Jeruk", "Mangga", "Pisang"]

// unshift(): menambah di awal
buah.unshift("Melon");
console.log(buah);  // ["Melon", "Apel", "Jeruk", "Mangga", "Pisang"]

// shift(): menghapus dari awal
let pertama = buah.shift();
console.log(pertama);  // "Melon"
console.log(buah);     // ["Apel", "Jeruk", "Mangga", "Pisang"]

// splice(): menghapus/menambah di tengah
// splice(index, jumlah_hapus, item_baru...)
buah.splice(2, 1, "Strawberry");
console.log(buah);  // ["Apel", "Jeruk", "Strawberry", "Pisang"]

// Menghapus tanpa menambah
buah.splice(1, 1);
console.log(buah);  // ["Apel", "Strawberry", "Pisang"]`}
            />
          </ContentCard>

          <ContentCard title="4. Mencari Elemen dalam Array" icon="🔎">
            <p className="mb-3">
              Berbagai cara untuk mencari elemen dalam array.
            </p>
            
            <CodeExample 
              code={`let angka = [10, 20, 30, 40, 50];

// indexOf(): mencari indeks elemen
console.log(angka.indexOf(30));   // 2
console.log(angka.indexOf(100));  // -1 (tidak ditemukan)

// includes(): cek apakah elemen ada
console.log(angka.includes(30));   // true
console.log(angka.includes(100));  // false

// find(): mencari elemen yang sesuai kondisi
let nilai = [65, 75, 85, 95];
let lulus = nilai.find(n => n >= 80);
console.log(lulus);  // 85 (elemen pertama yang >= 80)

// findIndex(): mencari indeks elemen yang sesuai kondisi
let indexLulus = nilai.findIndex(n => n >= 80);
console.log(indexLulus);  // 2

// filter(): mencari semua elemen yang sesuai
let semuaLulus = nilai.filter(n => n >= 70);
console.log(semuaLulus);  // [75, 85, 95]

// Contoh dengan array object
let siswa = [
  {nama: "Budi", nilai: 85},
  {nama: "Siti", nilai: 90},
  {nama: "Andi", nilai: 75}
];

let siswaTerbaik = siswa.find(s => s.nilai >= 90);
console.log(siswaTerbaik);  // {nama: "Siti", nilai: 90}`}
            />
          </ContentCard>

          <ContentCard title="5. Iterasi Array (Loop)" icon="🔄">
            <p className="mb-3">
              Berbagai cara untuk melakukan perulangan pada array.
            </p>
            
            <CodeExample 
              code={`let buah = ["Apel", "Jeruk", "Mangga", "Pisang"];

// 1. for loop klasik
for (let i = 0; i < buah.length; i++) {
  console.log(\`\${i + 1}. \${buah[i]}\`);
}

// 2. for...of (modern)
for (let item of buah) {
  console.log(item);
}

// 3. forEach (method array)
buah.forEach((item, index) => {
  console.log(\`\${index}: \${item}\`);
});

// forEach dengan fungsi terpisah
function tampilkan(item, index) {
  console.log(\`Buah ke-\${index + 1}: \${item}\`);
}
buah.forEach(tampilkan);

// Contoh: menghitung total
let nilai = [85, 90, 78, 92, 88];
let total = 0;

nilai.forEach(n => {
  total += n;
});

console.log(\`Total: \${total}\`);       // 433
console.log(\`Rata-rata: \${total / nilai.length}\`);  // 86.6`}
            />
          </ContentCard>

          <ContentCard title="6. Method Array yang Penting" icon="⚡">
            <p className="mb-3">
              JavaScript menyediakan banyak method built-in untuk array.
            </p>
            
            <CodeExample 
              code={`let angka = [1, 2, 3, 4, 5];

// map(): transformasi setiap elemen
let duaKali = angka.map(n => n * 2);
console.log(duaKali);  // [2, 4, 6, 8, 10]

let kuadrat = angka.map(n => n * n);
console.log(kuadrat);  // [1, 4, 9, 16, 25]

// filter(): saring elemen yang sesuai kondisi
let genap = angka.filter(n => n % 2 === 0);
console.log(genap);  // [2, 4]

let besar = angka.filter(n => n > 3);
console.log(besar);  // [4, 5]

// reduce(): gabungkan array jadi satu nilai
let total = angka.reduce((sum, n) => sum + n, 0);
console.log(total);  // 15

let kali = angka.reduce((prod, n) => prod * n, 1);
console.log(kali);  // 120

// some(): cek apakah ada elemen yang sesuai
let adaGenap = angka.some(n => n % 2 === 0);
console.log(adaGenap);  // true

// every(): cek apakah semua elemen sesuai
let semuaPositif = angka.every(n => n > 0);
console.log(semuaPositif);  // true

// sort(): mengurutkan array
let acak = [3, 1, 4, 1, 5, 9, 2, 6];
acak.sort();
console.log(acak);  // [1, 1, 2, 3, 4, 5, 6, 9]

// sort untuk angka (perlu compare function)
acak.sort((a, b) => b - a);  // descending
console.log(acak);  // [9, 6, 5, 4, 3, 2, 1, 1]

// reverse(): balik urutan
let reversed = [1, 2, 3, 4, 5].reverse();
console.log(reversed);  // [5, 4, 3, 2, 1]`}
            />
          </ContentCard>

          <ContentCard title="7. Menggabungkan dan Memotong Array" icon="✂️">
            <p className="mb-3">
              Method untuk menggabungkan atau mengambil bagian dari array.
            </p>
            
            <CodeExample 
              code={`// concat(): menggabungkan array
let buah1 = ["Apel", "Jeruk"];
let buah2 = ["Mangga", "Pisang"];
let semua = buah1.concat(buah2);
console.log(semua);  // ["Apel", "Jeruk", "Mangga", "Pisang"]

// Spread operator (cara modern)
let gabung = [...buah1, ...buah2];
console.log(gabung);  // ["Apel", "Jeruk", "Mangga", "Pisang"]

// slice(): mengambil bagian array (tidak mengubah original)
let angka = [1, 2, 3, 4, 5];
let potongan = angka.slice(1, 4);
console.log(potongan);  // [2, 3, 4]
console.log(angka);     // [1, 2, 3, 4, 5] (tidak berubah)

// join(): gabungkan jadi string
let huruf = ["H", "a", "l", "o"];
let kata = huruf.join("");
console.log(kata);  // "Halo"

let buah = ["Apel", "Jeruk", "Mangga"];
let teks = buah.join(", ");
console.log(teks);  // "Apel, Jeruk, Mangga"

// split(): kebalikan join (string ke array)
let kalimat = "Belajar coding itu menyenangkan";
let kata_array = kalimat.split(" ");
console.log(kata_array);  // ["Belajar", "coding", "itu", "menyenangkan"]`}
            />
          </ContentCard>

          <ContentCard title="8. Array 2 Dimensi (Nested Array)" icon="🎭">
            <p className="mb-3">
              Array yang berisi array lain, berguna untuk data berbentuk tabel atau matriks.
            </p>
            
            <CodeExample 
              code={`// Array 2 dimensi
let matriks = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Mengakses elemen
console.log(matriks[0]);     // [1, 2, 3]
console.log(matriks[0][0]);  // 1
console.log(matriks[1][2]);  // 6
console.log(matriks[2][1]);  // 8

// Loop nested array
for (let i = 0; i < matriks.length; i++) {
  for (let j = 0; j < matriks[i].length; j++) {
    console.log(\`[\${i}][\${j}] = \${matriks[i][j]}\`);
  }
}

// Contoh praktis: tabel nilai siswa
let nilaiSiswa = [
  ["Budi", 85, 90, 88],
  ["Siti", 90, 95, 92],
  ["Andi", 75, 80, 78]
];

// Menampilkan dengan forEach
nilaiSiswa.forEach(siswa => {
  let nama = siswa[0];
  let rata = (siswa[1] + siswa[2] + siswa[3]) / 3;
  console.log(\`\${nama}: \${rata.toFixed(2)}\`);
});

// Array of objects (lebih readable)
let siswa = [
  {nama: "Budi", matematika: 85, fisika: 90, kimia: 88},
  {nama: "Siti", matematika: 90, fisika: 95, kimia: 92},
  {nama: "Andi", matematika: 75, fisika: 80, kimia: 78}
];

siswa.forEach(s => {
  let rata = (s.matematika + s.fisika + s.kimia) / 3;
  console.log(\`\${s.nama}: \${rata.toFixed(2)}\`);
});`}
            />
          </ContentCard>

          <ContentCard title="9. Destructuring Array" icon="📦">
            <p className="mb-3">
              Cara modern untuk mengekstrak nilai dari array ke dalam variabel terpisah.
            </p>
            
            <CodeExample 
              code={`// Destructuring dasar
let warna = ["Merah", "Hijau", "Biru"];

// Cara lama
let warna1 = warna[0];
let warna2 = warna[1];
let warna3 = warna[2];

// Destructuring (cara modern)
let [merah, hijau, biru] = warna;
console.log(merah);  // "Merah"
console.log(hijau);  // "Hijau"
console.log(biru);   // "Biru"

// Skip elemen
let [pertama, , ketiga] = warna;
console.log(pertama);  // "Merah"
console.log(ketiga);   // "Biru"

// Default value
let [a, b, c, d = "Kuning"] = warna;
console.log(d);  // "Kuning"

// Rest operator
let angka = [1, 2, 3, 4, 5];
let [satu, dua, ...sisanya] = angka;
console.log(satu);     // 1
console.log(dua);      // 2
console.log(sisanya);  // [3, 4, 5]

// Swap variabel dengan destructuring
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x);  // 20
console.log(y);  // 10

// Destructuring dari function return
function getKoordinat() {
  return [10, 20];
}

let [px, py] = getKoordinat();
console.log(\`x: \${px}, y: \${py}\`);  // x: 10, y: 20`}
            />
          </ContentCard>

          <ContentCard title="10. Spread dan Rest Operator" icon="🌟">
            <p className="mb-3">
              Operator (...) yang sangat powerful untuk bekerja dengan array.
            </p>
            
            <CodeExample 
              code={`// Spread operator: "membuka" array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Menggabungkan array
let gabung = [...arr1, ...arr2];
console.log(gabung);  // [1, 2, 3, 4, 5, 6]

// Copy array (shallow copy)
let asli = [1, 2, 3];
let salinan = [...asli];
salinan.push(4);
console.log(asli);     // [1, 2, 3] (tidak berubah)
console.log(salinan);  // [1, 2, 3, 4]

// Menambah elemen
let buah = ["Apel", "Jeruk"];
let buahBaru = [...buah, "Mangga", "Pisang"];
console.log(buahBaru);  // ["Apel", "Jeruk", "Mangga", "Pisang"]

// Spread dalam function call
let angka = [5, 3, 8, 1, 9];
console.log(Math.max(...angka));  // 9
console.log(Math.min(...angka));  // 1

// Rest operator: mengumpulkan sisanya
function jumlah(...angka) {
  return angka.reduce((sum, n) => sum + n, 0);
}

console.log(jumlah(1, 2, 3));        // 6
console.log(jumlah(1, 2, 3, 4, 5));  // 15

// Kombinasi parameter biasa dan rest
function perkenalan(nama, umur, ...hobi) {
  console.log(\`Nama: \${nama}\`);
  console.log(\`Umur: \${umur}\`);
  console.log(\`Hobi: \${hobi.join(", ")}\`);
}

perkenalan("Budi", 20, "Coding", "Gaming", "Reading");
// Nama: Budi
// Umur: 20
// Hobi: Coding, Gaming, Reading`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan</h3>
            <ul className="space-y-2">
              <li>✅ Array menyimpan banyak nilai dalam satu variabel</li>
              <li>✅ Indeks dimulai dari 0</li>
              <li>✅ <strong>push/pop:</strong> tambah/hapus di akhir</li>
              <li>✅ <strong>unshift/shift:</strong> tambah/hapus di awal</li>
              <li>✅ <strong>map/filter/reduce:</strong> transformasi data</li>
              <li>✅ <strong>forEach:</strong> iterasi mudah</li>
              <li>✅ <strong>spread (...):</strong> copy dan gabungkan array</li>
              <li>✅ <strong>destructuring:</strong> ekstrak nilai dengan mudah</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
