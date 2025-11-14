'use client';

import { useState } from 'react';
import BackButton from '@/components/BackButton';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';
import InteractiveDemo from '@/components/InteractiveDemo';
import FruitBasket from '@/components/FruitBasket';
import ArrayVisualization from '@/components/ArrayVisualization';

export default function ArrayPage() {
  const [arrayCode, setArrayCode] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            🍊 Array di Java
          </h1>

          <ContentCard title="Apa itu Array?" icon="💡">
            <p className="mb-4">
              Array adalah struktur data yang dapat menyimpan banyak nilai dengan 
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

          <ContentCard title="1. Membuat Array di Java" icon="🎯">
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
System.out.println("Panjang array nilai: " + nilai.length);  // 5

// Array multi-dimensi (2D)
int[][] matriks = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};`}
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
System.out.println(buah[2]);  // "Mangga"
System.out.println(buah[3]);  // "Pisang" (terakhir)

// Mengakses elemen terakhir
String terakhir = buah[buah.length - 1];
System.out.println(terakhir);  // "Pisang"

// Mengubah nilai elemen
buah[1] = "Anggur";
System.out.println(buah[1]);  // "Anggur"

// Panjang array
System.out.println("Jumlah buah: " + buah.length);  // 4

// ⚠️ HATI-HATI: ArrayIndexOutOfBoundsException
// System.out.println(buah[10]);  // ERROR!`}
            />
          </ContentCard>

          <InteractiveDemo
            title="📊 Visualisasi Index Array"
            description="Lihat bagaimana array menyimpan data dengan index!"
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
                  <li>• Hover jeruk untuk lihat index-nya!</li>
                </ul>
              </div>
            </div>
          </InteractiveDemo>

          <ContentCard title="3. Loop Array di Java" icon="🔄">
            <p className="mb-3">
              Ada beberapa cara untuk iterasi (loop) array di Java.
            </p>
            
            <CodeExample 
              language="java"
              code={`int[] nilai = {85, 90, 78, 92, 88};

// 1. For loop klasik (dengan index)
System.out.println("=== For Loop Klasik ===");
for (int i = 0; i < nilai.length; i++) {
    System.out.println("Nilai[" + i + "] = " + nilai[i]);
}

// 2. Enhanced for loop / for-each (tanpa index)
System.out.println("\\n=== For-Each Loop ===");
for (int n : nilai) {
    System.out.println("Nilai: " + n);
}

// 3. While loop
System.out.println("\\n=== While Loop ===");
int index = 0;
while (index < nilai.length) {
    System.out.println("Nilai: " + nilai[index]);
    index++;
}

// Contoh: Hitung total dan rata-rata
int total = 0;
for (int n : nilai) {
    total += n;
}
double rataRata = (double) total / nilai.length;

System.out.println("Total: " + total);           // 433
System.out.println("Rata-rata: " + rataRata);    // 86.6`}
            />
          </ContentCard>

          <InteractiveDemo
            title="🧮 Kalkulator Array"
            description="Masukkan angka dan lihat perhitungan otomatis!"
          >
            <ArrayCalculator />
          </InteractiveDemo>

          <ContentCard title="4. Mencari Elemen dalam Array" icon="🔎">
            <p className="mb-3">
              Cara mencari nilai tertentu dalam array Java.
            </p>
            
            <CodeExample 
              language="java"
              code={`// Linear Search (pencarian berurutan)
public static int cariNilai(int[] array, int cari) {
    for (int i = 0; i < array.length; i++) {
        if (array[i] == cari) {
            return i;  // Return index kalau ketemu
        }
    }
    return -1;  // Return -1 kalau tidak ketemu
}

// Contoh penggunaan
int[] angka = {10, 25, 30, 45, 50};

int index = cariNilai(angka, 30);
if (index != -1) {
    System.out.println("Ketemu di index: " + index);  // 2
} else {
    System.out.println("Tidak ketemu!");
}

// Cek apakah elemen ada
public static boolean adaDiArray(String[] array, String cari) {
    for (String item : array) {
        if (item.equals(cari)) {
            return true;
        }
    }
    return false;
}

String[] buah = {"Apel", "Jeruk", "Mangga"};
System.out.println(adaDiArray(buah, "Jeruk"));   // true
System.out.println(adaDiArray(buah, "Pisang"));  // false

// Mencari nilai maksimal
public static int cariMax(int[] array) {
    int max = array[0];
    for (int i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

int[] nilai = {85, 92, 78, 95, 88};
System.out.println("Nilai tertinggi: " + cariMax(nilai));  // 95`}
            />
          </ContentCard>

          <ContentCard title="5. Sorting Array" icon="↕️">
            <p className="mb-3">
              Mengurutkan elemen array dari kecil ke besar atau sebaliknya.
            </p>
            
            <CodeExample 
              language="java"
              code={`import java.util.Arrays;

public class SortingArray {
    public static void main(String[] args) {
        // Array angka
        int[] angka = {45, 12, 85, 32, 67, 23};
        
        // Sort ascending (kecil ke besar)
        Arrays.sort(angka);
        System.out.println("Ascending: " + Arrays.toString(angka));
        // Output: [12, 23, 32, 45, 67, 85]
        
        // Array String
        String[] nama = {"Deni", "Andi", "Charlie", "Budi"};
        Arrays.sort(nama);
        System.out.println("Alfabetis: " + Arrays.toString(nama));
        // Output: [Andi, Budi, Charlie, Deni]
        
        // Sort descending (besar ke kecil) - manual
        Integer[] angka2 = {45, 12, 85, 32, 67};
        Arrays.sort(angka2, (a, b) -> b - a);
        System.out.println("Descending: " + Arrays.toString(angka2));
        // Output: [85, 67, 45, 32, 12]
    }
}

// Bubble Sort Manual (untuk belajar algoritma)
public static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int[] data = {64, 34, 25, 12, 22, 11, 90};
bubbleSort(data);
System.out.println("Sorted: " + Arrays.toString(data));`}
            />
          </ContentCard>

          <ContentCard title="6. Copy & Manipulasi Array" icon="✂️">
            <p className="mb-3">
              Cara menyalin dan memanipulasi array di Java.
            </p>
            
            <CodeExample 
              language="java"
              code={`import java.util.Arrays;

public class ManipulasiArray {
    public static void main(String[] args) {
        int[] asli = {1, 2, 3, 4, 5};
        
        // 1. Copy array dengan Arrays.copyOf()
        int[] salinan1 = Arrays.copyOf(asli, asli.length);
        salinan1[0] = 999;
        System.out.println("Asli: " + Arrays.toString(asli));       // [1,2,3,4,5]
        System.out.println("Salinan: " + Arrays.toString(salinan1)); // [999,2,3,4,5]
        
        // 2. Copy sebagian dengan Arrays.copyOfRange()
        int[] sebagian = Arrays.copyOfRange(asli, 1, 4);  // index 1-3
        System.out.println("Sebagian: " + Arrays.toString(sebagian)); // [2,3,4]
        
        // 3. Fill array dengan nilai sama
        int[] nol = new int[5];
        Arrays.fill(nol, 10);
        System.out.println("Fill: " + Arrays.toString(nol)); // [10,10,10,10,10]
        
        // 4. Bandingkan array
        int[] arr1 = {1, 2, 3};
        int[] arr2 = {1, 2, 3};
        int[] arr3 = {1, 2, 4};
        
        System.out.println(Arrays.equals(arr1, arr2));  // true
        System.out.println(Arrays.equals(arr1, arr3));  // false
        
        // 5. Convert array ke String
        System.out.println(Arrays.toString(asli));  // [1, 2, 3, 4, 5]
        
        // 6. Binary Search (array harus sorted!)
        int[] sorted = {10, 20, 30, 40, 50};
        int index = Arrays.binarySearch(sorted, 30);
        System.out.println("Index 30: " + index);  // 2
    }
}

// Gabungkan 2 array
public static int[] gabungArray(int[] arr1, int[] arr2) {
    int[] hasil = new int[arr1.length + arr2.length];
    System.arraycopy(arr1, 0, hasil, 0, arr1.length);
    System.arraycopy(arr2, 0, hasil, arr1.length, arr2.length);
    return hasil;
}

int[] a = {1, 2, 3};
int[] b = {4, 5, 6};
int[] gabung = gabungArray(a, b);
System.out.println(Arrays.toString(gabung));  // [1,2,3,4,5,6]`}
            />
          </ContentCard>

          <ContentCard title="7. Array 2 Dimensi (2D Array)" icon="🎭">
            <p className="mb-3">
              Array yang berisi array lain - seperti tabel atau matriks.
            </p>
            
            <CodeExample 
              language="java"
              code={`// Deklarasi array 2D
int[][] matriks = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Mengakses elemen
System.out.println(matriks[0][0]);  // 1
System.out.println(matriks[1][2]);  // 6
System.out.println(matriks[2][1]);  // 8

// Loop array 2D
System.out.println("=== Nested Loop ===");
for (int i = 0; i < matriks.length; i++) {
    for (int j = 0; j < matriks[i].length; j++) {
        System.out.print(matriks[i][j] + " ");
    }
    System.out.println();
}

// Enhanced for loop
System.out.println("\\n=== For-Each ===");
for (int[] baris : matriks) {
    for (int nilai : baris) {
        System.out.print(nilai + " ");
    }
    System.out.println();
}

// Contoh praktis: Tabel nilai siswa
String[][] nilaiSiswa = {
    {"Budi", "85", "90", "88"},
    {"Siti", "90", "95", "92"},
    {"Andi", "75", "80", "78"}
};

System.out.println("\\n=== Daftar Nilai ===");
System.out.println("Nama\\tMat\\tFis\\tKim\\tRata-rata");
for (String[] siswa : nilaiSiswa) {
    String nama = siswa[0];
    int mat = Integer.parseInt(siswa[1]);
    int fis = Integer.parseInt(siswa[2]);
    int kim = Integer.parseInt(siswa[3]);
    double rata = (mat + fis + kim) / 3.0;
    
    System.out.printf("%s\\t%d\\t%d\\t%d\\t%.2f\\n", 
                      nama, mat, fis, kim, rata);
}

// Array 2D dengan ukuran berbeda (Jagged Array)
int[][] jagged = {
    {1, 2},
    {3, 4, 5},
    {6, 7, 8, 9}
};`}
            />
          </ContentCard>

          <ContentCard title="8. ArrayList - Array Dinamis" icon="🌟">
            <p className="mb-3">
              ArrayList adalah versi dinamis dari array yang bisa bertambah/berkurang ukurannya.
            </p>
            
            <CodeExample 
              language="java"
              code={`import java.util.ArrayList;

public class ContohArrayList {
    public static void main(String[] args) {
        // Buat ArrayList
        ArrayList<String> buah = new ArrayList<>();
        
        // Tambah elemen
        buah.add("Apel");
        buah.add("Jeruk");
        buah.add("Mangga");
        System.out.println(buah);  // [Apel, Jeruk, Mangga]
        
        // Tambah di posisi tertentu
        buah.add(1, "Pisang");
        System.out.println(buah);  // [Apel, Pisang, Jeruk, Mangga]
        
        // Akses elemen
        String pertama = buah.get(0);
        System.out.println("Pertama: " + pertama);  // Apel
        
        // Ubah elemen
        buah.set(1, "Anggur");
        System.out.println(buah);  // [Apel, Anggur, Jeruk, Mangga]
        
        // Hapus elemen
        buah.remove(2);  // Hapus index 2
        System.out.println(buah);  // [Apel, Anggur, Mangga]
        
        buah.remove("Anggur");  // Hapus by value
        System.out.println(buah);  // [Apel, Mangga]
        
        // Ukuran ArrayList
        System.out.println("Size: " + buah.size());  // 2
        
        // Cek apakah ada
        System.out.println(buah.contains("Apel"));  // true
        
        // Loop ArrayList
        for (String b : buah) {
            System.out.println(b);
        }
        
        // Clear semua
        buah.clear();
        System.out.println("Kosong? " + buah.isEmpty());  // true
    }
}

// ArrayList dengan Integer
ArrayList<Integer> angka = new ArrayList<>();
angka.add(10);
angka.add(20);
angka.add(30);

// Sort
Collections.sort(angka);

// Reverse
Collections.reverse(angka);`}
            />
          </ContentCard>

          <ContentCard title="9. Contoh Real-World: Sistem Nilai Siswa" icon="🎓">
            <p className="mb-3">
              Aplikasi nyata menggunakan array untuk mengelola data nilai siswa.
            </p>
            
            <CodeExample 
              language="java"
              code={`import java.util.Arrays;
import java.util.Scanner;

public class SistemNilaiSiswa {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // Input jumlah siswa
        System.out.print("Jumlah siswa: ");
        int jmlSiswa = sc.nextInt();
        
        // Buat array untuk nama dan nilai
        String[] namaSiswa = new String[jmlSiswa];
        double[] nilaiSiswa = new double[jmlSiswa];
        
        // Input data siswa
        for (int i = 0; i < jmlSiswa; i++) {
            System.out.print("Nama siswa " + (i+1) + ": ");
            namaSiswa[i] = sc.next();
            
            System.out.print("Nilai siswa " + (i+1) + ": ");
            nilaiSiswa[i] = sc.nextDouble();
        }
        
        // Hitung statistik
        double total = 0;
        double max = nilaiSiswa[0];
        double min = nilaiSiswa[0];
        
        for (double nilai : nilaiSiswa) {
            total += nilai;
            if (nilai > max) max = nilai;
            if (nilai < min) min = nilai;
        }
        
        double rataRata = total / jmlSiswa;
        
        // Tampilkan hasil
        System.out.println("\\n=== HASIL ANALISIS ===");
        System.out.println("Total siswa: " + jmlSiswa);
        System.out.printf("Rata-rata: %.2f\\n", rataRata);
        System.out.printf("Nilai tertinggi: %.2f\\n", max);
        System.out.printf("Nilai terendah: %.2f\\n", min);
        
        // Tampilkan daftar dengan status
        System.out.println("\\n=== DAFTAR NILAI ===");
        for (int i = 0; i < jmlSiswa; i++) {
            String status = nilaiSiswa[i] >= 75 ? "LULUS" : "REMEDIAL";
            System.out.printf("%d. %s: %.2f - %s\\n", 
                            i+1, namaSiswa[i], nilaiSiswa[i], status);
        }
        
        // Hitung jumlah lulus
        int jumlahLulus = 0;
        for (double nilai : nilaiSiswa) {
            if (nilai >= 75) jumlahLulus++;
        }
        
        double persenLulus = (double) jumlahLulus / jmlSiswa * 100;
        System.out.printf("\\nPersentase kelulusan: %.1f%%\\n", persenLulus);
    }
}`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan Array di Java</h3>
            <ul className="space-y-2">
              <li>✅ Array = baskom berisi item dengan tipe data sama</li>
              <li>✅ Index dimulai dari 0 sampai length - 1</li>
              <li>✅ Ukuran array di Java <strong>TETAP</strong></li>
              <li>✅ <code className="bg-white/20 px-2 py-1 rounded">Arrays.sort()</code> untuk sorting</li>
              <li>✅ <code className="bg-white/20 px-2 py-1 rounded">Arrays.copyOf()</code> untuk copy</li>
              <li>✅ For-each loop: <code className="bg-white/20 px-2 py-1 rounded">for (int n : array)</code></li>
              <li>✅ ArrayList untuk array dinamis yang bisa berubah ukuran</li>
              <li>✅ Array 2D untuk data tabel/matriks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component untuk kalkulator array
function ArrayCalculator() {
  const [numbers, setNumbers] = useState<number[]>([10, 20, 30, 40, 50]);
  const [inputValue, setInputValue] = useState('');

  const total = numbers.reduce((sum, n) => sum + n, 0);
  const average = numbers.length > 0 ? total / numbers.length : 0;
  const max = numbers.length > 0 ? Math.max(...numbers) : 0;
  const min = numbers.length > 0 ? Math.min(...numbers) : 0;

  const addNumber = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      setNumbers([...numbers, num]);
      setInputValue('');
    }
  };

  const removeNumber = (index: number) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  const sortAsc = () => {
    setNumbers([...numbers].sort((a, b) => a - b));
  };

  const sortDesc = () => {
    setNumbers([...numbers].sort((a, b) => b - a));
  };

  const reset = () => {
    setNumbers([10, 20, 30, 40, 50]);
  };

  return (
    <div className="space-y-4">
      {/* Array Display */}
      <div className="bg-white p-4 rounded-lg border-2 border-gray-300">
        <p className="text-sm text-gray-600 mb-2">Array:</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {numbers.map((num, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                {num}
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                [{index}]
              </div>
              <button
                onClick={() => removeNumber(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500">Length: {numbers.length}</p>
      </div>

      {/* Add Number */}
      <div className="flex gap-2">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addNumber()}
          placeholder="Masukkan angka..."
          className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={addNumber}
          className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Tambah
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
          <p className="text-xs text-blue-600 font-semibold">Total</p>
          <p className="text-xl font-bold text-blue-700">{total}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg border-2 border-green-200">
          <p className="text-xs text-green-600 font-semibold">Rata-rata</p>
          <p className="text-xl font-bold text-green-700">{average.toFixed(1)}</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-200">
          <p className="text-xs text-purple-600 font-semibold">Max</p>
          <p className="text-xl font-bold text-purple-700">{max}</p>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg border-2 border-orange-200">
          <p className="text-xs text-orange-600 font-semibold">Min</p>
          <p className="text-xl font-bold text-orange-700">{min}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={sortAsc}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm"
        >
          ↑ Sort Naik
        </button>
        <button
          onClick={sortDesc}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors text-sm"
        >
          ↓ Sort Turun
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors text-sm"
        >
          🔄 Reset
        </button>
      </div>

      {/* Code Preview */}
      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
        <div className="text-green-400">// Java Code:</div>
        <div>int[] numbers = {'{'}{numbers.join(', ')}{'}'};</div>
        <div className="text-yellow-300 mt-2">// Statistik:</div>
        <div>int total = {total};</div>
        <div>double average = {average.toFixed(1)};</div>
        <div>int max = {max};</div>
        <div>int min = {min};</div>
      </div>
    </div>
  );
}
