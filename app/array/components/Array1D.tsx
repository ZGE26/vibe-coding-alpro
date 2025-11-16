'use client';

import { useState } from 'react';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';
import InteractiveDemo from '@/components/InteractiveDemo';
import FruitBasket from '@/components/FruitBasket';
import ArrayVisualization from '@/components/ArrayVisualization';

export default function Array1D() {
  const [arrayCode, setArrayCode] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <ContentCard title="Apa itu Array 1 Dimensi?" icon="💡">
        <p className="mb-4">
          Array 1 dimensi adalah struktur data yang dapat menyimpan banyak nilai dengan 
          <strong> tipe data yang sama</strong> dalam satu variabel. Bayangkan array 
          seperti <strong>baskom berisi jeruk</strong> 🍊 - setiap jeruk punya posisi 
          (indeks) yang dimulai dari 0!
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
          <p className="text-yellow-800">
            <strong>Kegunaan:</strong> Array sangat berguna untuk menyimpan 
            koleksi data seperti daftar nilai siswa, data penjualan, daftar produk, dll.
          </p>
        </div>
      </ContentCard>

      <InteractiveDemo
        title="🍊 Visualisasi Array: Baskom Jeruk"
        description="Coba tambah dan ambil jeruk dari baskom! Setiap jeruk punya posisi (index) dimulai dari 0."
      >
        <FruitBasket 
          onAddFruit={() => setArrayCode([...arrayCode, 'orange'])}
          onRemoveFruit={() => setArrayCode(arrayCode.slice(0, -1))}
        />
      </InteractiveDemo>

      <ContentCard title="1. Membuat Array 1D di Java" icon="🎯">
        <p className="mb-3">
          Di Java, array harus punya <strong>ukuran tetap</strong> dan <strong>tipe data sama</strong>.
        </p>
        
        <CodeExample 
          language="java"
          code={`// Cara 1: Deklarasi dengan ukuran
int[] angka = new int[5];  // Array 5 integer, semua 0
String[] buah = new String[3];  // Array 3 String, semua null

// Cara 2: Deklarasi dengan nilai langsung
int[] nilai = {85, 90, 78, 92, 88};
String[] warna = {"Merah", "Hijau", "Biru"};

// Tipe array lain
double[] harga = {15000.5, 25000.0, 35000.75};
boolean[] status = {true, false, true, true};
char[] huruf = {'J', 'A', 'V', 'A'};

// Ukuran array tetap!
System.out.println("Panjang array: " + nilai.length);  // 5`}
        />
      </ContentCard>

      <ContentCard title="2. Mengakses Elemen Array" icon="🔍">
        <p className="mb-3">
          Index array di Java dimulai dari <strong>0</strong> sampai <strong>length - 1</strong>.
        </p>
        
        <CodeExample 
          language="java"
          code={`String[] buah = {"Apel", "Jeruk", "Mangga", "Pisang"};

// Mengakses dengan index
System.out.println(buah[0]);  // "Apel" (pertama)
System.out.println(buah[1]);  // "Jeruk"
System.out.println(buah[3]);  // "Pisang" (terakhir)

// Mengakses elemen terakhir
String terakhir = buah[buah.length - 1];
System.out.println(terakhir);  // "Pisang"

// Mengubah nilai elemen
buah[1] = "Anggur";
System.out.println(buah[1]);  // "Anggur"

// Panjang array
System.out.println("Jumlah: " + buah.length);  // 4`}
        />
      </ContentCard>

      <InteractiveDemo
        title="📊 Visualisasi Index Array"
        description="Hover jeruk untuk lihat index-nya!"
      >
        <div className="space-y-6">
          <ArrayVisualization 
            items={['Apel', 'Jeruk', 'Mangga', 'Pisang', 'Anggur']}
            title="String[] buah"
          />
          
          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
            <h4 className="font-bold text-blue-800 mb-2">💡 Penting!</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Index pertama = 0</li>
              <li>• Index terakhir = length - 1</li>
              <li>• Hover jeruk untuk lihat index!</li>
            </ul>
          </div>
        </div>
      </InteractiveDemo>

      <ContentCard title="3. Loop Array" icon="🔄">
        <CodeExample 
          language="java"
          code={`int[] nilai = {85, 90, 78, 92, 88};

// 1. For loop klasik
for (int i = 0; i < nilai.length; i++) {
    System.out.println("Nilai[" + i + "] = " + nilai[i]);
}

// 2. For-each loop
for (int n : nilai) {
    System.out.println("Nilai: " + n);
}

// Hitung total dan rata-rata
int total = 0;
for (int n : nilai) {
    total += n;
}
double rata = (double) total / nilai.length;
System.out.println("Total: " + total);        // 433
System.out.println("Rata-rata: " + rata);     // 86.6`}
        />
      </ContentCard>

      <ContentCard title="4. Sorting & Manipulasi" icon="↕️">
        <CodeExample 
          language="java"
          code={`import java.util.Arrays;

// Sorting
int[] angka = {45, 12, 85, 32, 67};
Arrays.sort(angka);  // Ascending
System.out.println(Arrays.toString(angka));
// Output: [12, 32, 45, 67, 85]

// Copy array
int[] salinan = Arrays.copyOf(angka, angka.length);

// Mencari elemen
int index = Arrays.binarySearch(angka, 45);
System.out.println("Index 45: " + index);  // 2

// Fill array
int[] nol = new int[5];
Arrays.fill(nol, 10);  // [10, 10, 10, 10, 10]`}
        />
      </ContentCard>

      <ContentCard title="5. ArrayList - Array Dinamis" icon="🌟">
        <p className="mb-3">
          Gunakan <strong>ArrayList</strong> jika ukuran array perlu berubah-ubah.
        </p>
        
        <CodeExample 
          language="java"
          code={`import java.util.ArrayList;

ArrayList<String> buah = new ArrayList<>();

// Tambah elemen
buah.add("Apel");
buah.add("Jeruk");
buah.add("Mangga");

// Akses elemen
String pertama = buah.get(0);  // "Apel"

// Ubah elemen
buah.set(1, "Anggur");

// Hapus elemen
buah.remove(2);        // Hapus index 2
buah.remove("Anggur"); // Hapus by value

// Ukuran
int ukuran = buah.size();

// Loop
for (String b : buah) {
    System.out.println(b);
}`}
        />
      </ContentCard>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-3">📝 Ringkasan Array 1D</h3>
        <ul className="space-y-2">
          <li>✅ Array = list dengan tipe data sama</li>
          <li>✅ Index mulai dari 0</li>
          <li>✅ Ukuran tetap di Java</li>
          <li>✅ <code className="bg-white/20 px-2 py-1 rounded">Arrays.sort()</code> untuk sorting</li>
          <li>✅ <code className="bg-white/20 px-2 py-1 rounded">Arrays.copyOf()</code> untuk copy</li>
          <li>✅ ArrayList untuk ukuran dinamis</li>
        </ul>
      </div>
    </div>
  );
}
