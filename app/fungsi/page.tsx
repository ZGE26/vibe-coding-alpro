import BackButton from '@/components/BackButton';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';

export default function FungsiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            ⚡ Fungsi (Function)
          </h1>

          <ContentCard title="Apa itu Fungsi?" icon="💡">
            <p className="mb-4">
              Fungsi adalah blok kode yang dapat digunakan kembali (reusable) untuk 
              melakukan tugas tertentu. Bayangkan fungsi seperti resep masakan: 
              sekali ditulis, bisa digunakan berkali-kali kapan saja kita butuhkan.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-yellow-800">
                <strong>Keuntungan fungsi:</strong> Kode lebih terorganisir, mudah dibaca, 
                mudah di-debug, dan menghindari pengulangan kode (DRY: Don't Repeat Yourself).
              </p>
            </div>
          </ContentCard>

          <ContentCard title="1. Membuat Fungsi Sederhana" icon="🎯">
            <p className="mb-3">
              Fungsi dideklarasikan dengan keyword <code className="bg-gray-200 px-2 py-1 rounded">function</code>, 
              diikuti nama fungsi, kurung (), dan blok kode dalam kurung kurawal {}.
            </p>
            
            <CodeExample 
              code={`// Deklarasi fungsi
function sapa() {
  console.log("Halo, selamat datang!");
}

// Memanggil fungsi
sapa();  // Output: "Halo, selamat datang!"
sapa();  // Bisa dipanggil berkali-kali
sapa();

// Fungsi lain
function perkenalan() {
  console.log("Nama saya Budi");
  console.log("Umur saya 20 tahun");
  console.log("Saya suka coding");
}

perkenalan();
// Output:
// Nama saya Budi
// Umur saya 20 tahun
// Saya suka coding`}
            />
          </ContentCard>

          <ContentCard title="2. Fungsi dengan Parameter" icon="📥">
            <p className="mb-3">
              Parameter adalah variabel yang diterima oleh fungsi untuk diproses. 
              Parameter memungkinkan fungsi bekerja dengan data yang berbeda-beda.
            </p>
            
            <CodeExample 
              code={`// Fungsi dengan 1 parameter
function sapaNama(nama) {
  console.log(\`Halo, \${nama}!\`);
}

sapaNama("Budi");   // Output: "Halo, Budi!"
sapaNama("Siti");   // Output: "Halo, Siti!"
sapaNama("Andi");   // Output: "Halo, Andi!"

// Fungsi dengan 2 parameter
function tambah(a, b) {
  let hasil = a + b;
  console.log(\`\${a} + \${b} = \${hasil}\`);
}

tambah(5, 3);   // Output: "5 + 3 = 8"
tambah(10, 7);  // Output: "10 + 7 = 17"

// Fungsi dengan banyak parameter
function biodata(nama, umur, kota) {
  console.log(\`Nama: \${nama}\`);
  console.log(\`Umur: \${umur} tahun\`);
  console.log(\`Kota: \${kota}\`);
}

biodata("Budi", 20, "Jakarta");
// Output:
// Nama: Budi
// Umur: 20 tahun
// Kota: Jakarta`}
            />
          </ContentCard>

          <ContentCard title="3. Fungsi dengan Return Value" icon="📤">
            <p className="mb-3">
              Fungsi dapat mengembalikan nilai menggunakan keyword 
              <code className="bg-gray-200 px-2 py-1 rounded ml-1">return</code>. 
              Nilai yang dikembalikan dapat disimpan dalam variabel atau digunakan langsung.
            </p>
            
            <CodeExample 
              code={`// Fungsi dengan return
function kali(a, b) {
  return a * b;
}

let hasil = kali(5, 3);
console.log(hasil);  // Output: 15

// Menggunakan return langsung
console.log(kali(10, 2));  // Output: 20

// Fungsi untuk menghitung luas persegi panjang
function hitungLuas(panjang, lebar) {
  let luas = panjang * lebar;
  return luas;
}

let luasKamar = hitungLuas(5, 4);
console.log(\`Luas kamar: \${luasKamar} m²\`);  // 20 m²

// Fungsi untuk cek lulus/tidak
function cekKelulusan(nilai) {
  if (nilai >= 70) {
    return "Lulus";
  } else {
    return "Tidak Lulus";
  }
}

console.log(cekKelulusan(85));  // "Lulus"
console.log(cekKelulusan(65));  // "Tidak Lulus"

// Return menghentikan eksekusi fungsi
function contoh(x) {
  if (x < 0) {
    return "Negatif";
    // Kode di bawah ini tidak akan dijalankan
  }
  return "Positif";
}

console.log(contoh(-5));  // "Negatif"
console.log(contoh(10));  // "Positif"`}
            />
          </ContentCard>

          <ContentCard title="4. Parameter Default" icon="🎁">
            <p className="mb-3">
              Kita dapat memberikan nilai default pada parameter jika tidak ada 
              nilai yang diberikan saat fungsi dipanggil.
            </p>
            
            <CodeExample 
              code={`// Fungsi dengan parameter default
function sapa(nama = "Teman") {
  console.log(\`Halo, \${nama}!\`);
}

sapa("Budi");  // Output: "Halo, Budi!"
sapa();        // Output: "Halo, Teman!" (menggunakan default)

// Contoh lain
function hitungDiskon(harga, diskon = 10) {
  let potongan = (harga * diskon) / 100;
  let hargaAkhir = harga - potongan;
  return hargaAkhir;
}

console.log(hitungDiskon(100000));       // 90000 (diskon 10%)
console.log(hitungDiskon(100000, 20));   // 80000 (diskon 20%)

// Multiple parameter dengan default
function buatProfil(nama, umur = 18, kota = "Jakarta") {
  return {
    nama: nama,
    umur: umur,
    kota: kota
  };
}

console.log(buatProfil("Andi"));
// { nama: "Andi", umur: 18, kota: "Jakarta" }

console.log(buatProfil("Siti", 20, "Bandung"));
// { nama: "Siti", umur: 20, kota: "Bandung" }`}
            />
          </ContentCard>

          <ContentCard title="5. Arrow Function (Fungsi Panah)" icon="➡️">
            <p className="mb-3">
              Arrow function adalah cara modern dan ringkas untuk menulis fungsi 
              dalam JavaScript.
            </p>
            
            <CodeExample 
              code={`// Fungsi biasa
function tambah(a, b) {
  return a + b;
}

// Arrow function
const tambahArrow = (a, b) => {
  return a + b;
};

// Arrow function yang lebih singkat (implicit return)
const kali = (a, b) => a * b;

console.log(kali(5, 3));  // 15

// Arrow function dengan 1 parameter (tanpa kurung)
const kuadrat = x => x * x;

console.log(kuadrat(5));  // 25

// Arrow function tanpa parameter
const sapa = () => console.log("Halo!");

sapa();  // "Halo!"

// Contoh praktis
const hitungUmur = (tahunLahir) => {
  let tahunSekarang = 2024;
  return tahunSekarang - tahunLahir;
};

console.log(hitungUmur(2000));  // 24

// Arrow function untuk array
const angka = [1, 2, 3, 4, 5];
const duaKali = angka.map(n => n * 2);
console.log(duaKali);  // [2, 4, 6, 8, 10]`}
            />
          </ContentCard>

          <ContentCard title="6. Function Expression" icon="📝">
            <p className="mb-3">
              Fungsi juga dapat disimpan dalam variabel. Ini disebut function expression.
            </p>
            
            <CodeExample 
              code={`// Function expression
const sapa = function(nama) {
  return \`Halo, \${nama}!\`;
};

console.log(sapa("Budi"));  // "Halo, Budi!"

// Perbedaan dengan function declaration
// Function declaration (hoisted - bisa dipanggil sebelum dideklarasi)
console.log(fungsi1());  // ✅ Bisa

function fungsi1() {
  return "Ini fungsi declaration";
}

// Function expression (tidak hoisted)
// console.log(fungsi2());  // ❌ Error!

const fungsi2 = function() {
  return "Ini fungsi expression";
};

console.log(fungsi2());  // ✅ Bisa

// Anonymous function (fungsi tanpa nama)
setTimeout(function() {
  console.log("Ini fungsi anonim");
}, 1000);`}
            />
          </ContentCard>

          <ContentCard title="7. Scope dalam Fungsi" icon="🎪">
            <p className="mb-3">
              Variabel yang dideklarasikan di dalam fungsi hanya dapat diakses 
              di dalam fungsi tersebut (local scope).
            </p>
            
            <CodeExample 
              code={`// Global scope
let namaGlobal = "Budi";

function fungsiA() {
  // Local scope
  let namaLokal = "Andi";
  console.log(namaGlobal);  // ✅ Bisa akses global
  console.log(namaLokal);   // ✅ Bisa akses local
}

fungsiA();
console.log(namaGlobal);  // ✅ Bisa akses
// console.log(namaLokal);   // ❌ Error! Tidak bisa akses

// Contoh lain
let saldo = 100000;

function tambahSaldo(jumlah) {
  saldo = saldo + jumlah;  // Mengubah variabel global
  let pesan = "Saldo ditambah";  // Variabel local
  return saldo;
}

console.log(tambahSaldo(50000));  // 150000
console.log(saldo);  // 150000 (global berubah)
// console.log(pesan);  // Error! (local tidak bisa diakses)

// Best practice: hindari mengubah variabel global
function hitungTotal(harga, jumlah) {
  let total = harga * jumlah;
  return total;  // Return nilai, jangan ubah global
}`}
            />
          </ContentCard>

          <ContentCard title="8. Callback Function" icon="🔄">
            <p className="mb-3">
              Callback adalah fungsi yang dikirim sebagai parameter ke fungsi lain.
            </p>
            
            <CodeExample 
              code={`// Fungsi yang menerima callback
function proses(angka, callback) {
  let hasil = callback(angka);
  return hasil;
}

// Callback function
function duaKali(x) {
  return x * 2;
}

function tigaKali(x) {
  return x * 3;
}

console.log(proses(5, duaKali));   // 10
console.log(proses(5, tigaKali));  // 15

// Dengan arrow function
console.log(proses(5, x => x + 10));  // 15

// Contoh praktis: filter array
function filterAngka(arr, callback) {
  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      hasil.push(arr[i]);
    }
  }
  return hasil;
}

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter angka genap
let genap = filterAngka(angka, x => x % 2 === 0);
console.log(genap);  // [2, 4, 6, 8, 10]

// Filter angka > 5
let besar = filterAngka(angka, x => x > 5);
console.log(besar);  // [6, 7, 8, 9, 10]`}
            />
          </ContentCard>

          <ContentCard title="9. Higher-Order Function" icon="⬆️">
            <p className="mb-3">
              Higher-order function adalah fungsi yang mengembalikan fungsi lain 
              atau menerima fungsi sebagai parameter.
            </p>
            
            <CodeExample 
              code={`// Fungsi yang mengembalikan fungsi
function buatPengali(faktor) {
  return function(angka) {
    return angka * faktor;
  };
}

const kaliBelakan = buatPengali(2);
const kaliEmpat = buatPengali(4);

console.log(kaliBelasan(5));  // 10
console.log(kaliEmpat(5));    // 20

// Contoh lain
function buatSapa(salam) {
  return function(nama) {
    return \`\${salam}, \${nama}!\`;
  };
}

const sapaPagi = buatSapa("Selamat pagi");
const sapaMalam = buatSapa("Selamat malam");

console.log(sapaPagi("Budi"));   // "Selamat pagi, Budi!"
console.log(sapaMalam("Siti"));  // "Selamat malam, Siti!"

// Built-in higher-order functions
const angka = [1, 2, 3, 4, 5];

// map: transformasi setiap elemen
const duaKali = angka.map(x => x * 2);
console.log(duaKali);  // [2, 4, 6, 8, 10]

// filter: saring elemen
const genap = angka.filter(x => x % 2 === 0);
console.log(genap);  // [2, 4]

// reduce: gabungkan jadi satu nilai
const total = angka.reduce((sum, x) => sum + x, 0);
console.log(total);  // 15`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan</h3>
            <ul className="space-y-2">
              <li>✅ Fungsi membuat kode reusable dan terorganisir</li>
              <li>✅ Gunakan <strong>parameter</strong> untuk input, <strong>return</strong> untuk output</li>
              <li>✅ <strong>Arrow function</strong> untuk syntax yang lebih singkat</li>
              <li>✅ <strong>Default parameter</strong> untuk nilai backup</li>
              <li>✅ Perhatikan <strong>scope</strong> variabel (global vs local)</li>
              <li>✅ <strong>Callback</strong> untuk fungsi yang fleksibel</li>
              <li>✅ <strong>Higher-order function</strong> untuk abstraksi yang lebih tinggi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
