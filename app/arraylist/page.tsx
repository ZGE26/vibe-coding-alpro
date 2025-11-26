"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ContentCard from "@/components/ContentCard";
import CodeExample from "@/components/CodeExample";
import InteractiveDemo from "@/components/InteractiveDemo";

export default function ArrayListPage() {
  const [items, setItems] = useState<string[]>(["Apel", "Jeruk", "Mangga"]);
  const [newItem, setNewItem] = useState("");
  const [indexToRemove, setIndexToRemove] = useState("");
  const [indexToGet, setIndexToGet] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [replaceIndex, setReplaceIndex] = useState("");
  const [replaceValue, setReplaceValue] = useState("");

  // Numbers demo
  const [numbers, setNumbers] = useState<number[]>([10, 5, 20, 15, 8]);
  const [numberToAdd, setNumberToAdd] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeByIndex = () => {
    const index = parseInt(indexToRemove);
    if (!isNaN(index) && index >= 0 && index < items.length) {
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);
      setIndexToRemove("");
    } else {
      alert("Index tidak valid!");
    }
  };

  const getItemByIndex = () => {
    const index = parseInt(indexToGet);
    if (!isNaN(index) && index >= 0 && index < items.length) {
      alert(`Item di index ${index}: ${items[index]}`);
    } else {
      alert("Index tidak valid!");
    }
  };

  const searchForItem = () => {
    const index = items.indexOf(searchItem);
    if (index !== -1) {
      alert(`"${searchItem}" ditemukan di index ${index}`);
    } else {
      alert(`"${searchItem}" tidak ditemukan`);
    }
  };

  const replaceItem = () => {
    const index = parseInt(replaceIndex);
    if (!isNaN(index) && index >= 0 && index < items.length && replaceValue.trim()) {
      const newItems = [...items];
      newItems[index] = replaceValue;
      setItems(newItems);
      setReplaceIndex("");
      setReplaceValue("");
    } else {
      alert("Index tidak valid atau nilai kosong!");
    }
  };

  const clearAll = () => {
    setItems([]);
  };

  const addNumber = () => {
    const num = parseInt(numberToAdd);
    if (!isNaN(num)) {
      setNumbers([...numbers, num]);
      setNumberToAdd("");
    }
  };

  const sortNumbers = () => {
    setNumbers([...numbers].sort((a, b) => a - b));
  };

  const reverseNumbers = () => {
    setNumbers([...numbers].reverse());
  };

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            📋 ArrayList di Java
          </h1>

          <ContentCard title="Apa itu ArrayList?" icon="💡">
            <p className="mb-4">
              <strong>ArrayList</strong> adalah struktur data dinamis di Java yang dapat 
              <strong> berubah ukuran</strong> secara otomatis. Berbeda dengan array biasa 
              yang ukurannya tetap, ArrayList bisa bertambah atau berkurang sesuai kebutuhan.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
              <p className="text-green-800">
                <strong>Analogi:</strong> ArrayList seperti tas ransel yang bisa mengembang. 
                Jika isinya bertambah, tas akan membesar. Jika isinya berkurang, tas akan mengecil.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="Array vs ArrayList" icon="⚖️">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-2">📦 Array Biasa</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>✅ Ukuran tetap (fixed size)</li>
                  <li>✅ Lebih cepat dalam akses</li>
                  <li>❌ Tidak bisa menambah/kurangi ukuran</li>
                  <li>❌ Harus tahu ukuran dari awal</li>
                  <li>✅ Bisa tipe primitif (int, double)</li>
                </ul>
                <CodeExample 
                  language="java"
                  code={`int[] angka = new int[5];
// Ukuran tetap 5`}
                />
              </div>
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                <h4 className="font-bold text-green-900 mb-2">📋 ArrayList</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>✅ Ukuran dinamis (flexible)</li>
                  <li>✅ Bisa tambah/hapus elemen</li>
                  <li>✅ Banyak method bawaan</li>
                  <li>❌ Sedikit lebih lambat</li>
                  <li>❌ Hanya object (Integer, Double)</li>
                </ul>
                <CodeExample 
                  language="java"
                  code={`ArrayList<Integer> angka = new ArrayList<>();
// Ukuran otomatis menyesuaikan`}
                />
              </div>
            </div>
          </ContentCard>

          <ContentCard title="Import dan Deklarasi" icon="📝">
            <p className="mb-3">
              Untuk menggunakan ArrayList, kita harus import terlebih dahulu.
            </p>
            <CodeExample 
              language="java"
              code={`import java.util.ArrayList;

// Deklarasi ArrayList untuk String
ArrayList<String> buah = new ArrayList<>();

// Deklarasi ArrayList untuk Integer
ArrayList<Integer> angka = new ArrayList<>();

// Deklarasi ArrayList untuk Double
ArrayList<Double> nilai = new ArrayList<>();

// Dengan nilai awal
ArrayList<String> nama = new ArrayList<>();
nama.add("Budi");
nama.add("Ani");
nama.add("Citra");`}
            />
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-yellow-800">
                <strong>Catatan:</strong> ArrayList menggunakan <strong>Generic</strong> 
                (tanda <code className="bg-yellow-200 px-1 rounded">&lt;Type&gt;</code>) 
                untuk menentukan tipe data yang disimpan.
              </p>
            </div>
          </ContentCard>

          <ContentCard title="Method Penting di ArrayList" icon="🛠️">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-gray-900 mb-2">1. add() - Menambah Elemen</h4>
                <CodeExample 
                  language="java"
                  code={`ArrayList<String> buah = new ArrayList<>();

// Tambah di akhir
buah.add("Apel");
buah.add("Jeruk");
buah.add("Mangga");

// Tambah di index tertentu
buah.add(1, "Pisang");  // Insert di index 1

System.out.println(buah);
// Output: [Apel, Pisang, Jeruk, Mangga]`}
                />
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-2">2. get() - Mengambil Elemen</h4>
                <CodeExample 
                  language="java"
                  code={`ArrayList<String> buah = new ArrayList<>();
buah.add("Apel");
buah.add("Jeruk");
buah.add("Mangga");

String pertama = buah.get(0);  // "Apel"
String kedua = buah.get(1);    // "Jeruk"

System.out.println("Buah pertama: " + pertama);`}
                />
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-gray-900 mb-2">3. remove() - Menghapus Elemen</h4>
                <CodeExample 
                  language="java"
                  code={`ArrayList<String> buah = new ArrayList<>();
buah.add("Apel");
buah.add("Jeruk");
buah.add("Mangga");

// Hapus berdasarkan index
buah.remove(1);  // Hapus "Jeruk"

// Hapus berdasarkan nilai
buah.remove("Apel");  // Hapus "Apel"

System.out.println(buah);  // [Mangga]`}
                />
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-2">4. set() - Mengubah Elemen</h4>
                <CodeExample 
                  language="java"
                  code={`ArrayList<String> buah = new ArrayList<>();
buah.add("Apel");
buah.add("Jeruk");

// Ubah elemen di index 1
buah.set(1, "Mangga");

System.out.println(buah);  // [Apel, Mangga]`}
                />
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-bold text-gray-900 mb-2">5. size() - Ukuran ArrayList</h4>
                <CodeExample 
                  language="java"
                  code={`ArrayList<String> buah = new ArrayList<>();
buah.add("Apel");
buah.add("Jeruk");
buah.add("Mangga");

int jumlah = buah.size();  // 3

System.out.println("Jumlah buah: " + jumlah);`}
                />
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
                <h4 className="font-bold text-gray-900 mb-2">6. clear() - Hapus Semua</h4>
                <CodeExample 
                  language="java"
                  code={`ArrayList<String> buah = new ArrayList<>();
buah.add("Apel");
buah.add("Jeruk");

buah.clear();  // Hapus semua elemen

System.out.println(buah.size());  // 0`}
                />
              </div>
            </div>
          </ContentCard>

          <ContentCard title="🎮 Demo Interaktif: ArrayList String" icon="⚡">
            <InteractiveDemo 
              title="Kelola Daftar Buah"
              description="Coba berbagai operasi ArrayList secara interaktif"
            >
              <div className="space-y-4">
                {/* Display ArrayList */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 sm:p-6 rounded-lg">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                    <p className="font-bold text-base sm:text-lg">📋 ArrayList Buah</p>
                    <p className="bg-white/20 px-3 py-1 rounded-full text-sm">Size: {items.length}</p>
                  </div>
                  <div className="space-y-2">
                    {items.length === 0 ? (
                      <p className="text-center py-4 bg-white/10 rounded text-sm sm:text-base">
                        ArrayList kosong
                      </p>
                    ) : (
                      items.map((item, index) => (
                        <div 
                          key={index}
                          className="bg-white/20 p-2 sm:p-3 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:bg-white/30 transition-all"
                        >
                          <span className="font-mono text-sm sm:text-base break-all">
                            Index {index}: <strong>{item}</strong>
                          </span>
                          <button
                            onClick={() => setItems(items.filter((_, i) => i !== index))}
                            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-xs sm:text-sm whitespace-nowrap w-full sm:w-auto"
                          >
                            🗑️ Hapus
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Add */}
                <div className="bg-white p-3 sm:p-4 rounded-lg border-2 border-green-500">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">➕ add() - Tambah Elemen</h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={newItem}
                      onChange={(e) => setNewItem(e.target.value)}
                      placeholder="Nama buah"
                      className="flex-1 p-2 sm:p-3 border-2 border-gray-900 rounded-lg text-gray-900 text-sm sm:text-base"
                      onKeyPress={(e) => e.key === 'Enter' && addItem()}
                    />
                    <button
                      onClick={addItem}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 text-sm sm:text-base w-full sm:w-auto"
                    >
                      Tambah
                    </button>
                  </div>
                </div>

                {/* Get */}
                <div className="bg-white p-3 sm:p-4 rounded-lg border-2 border-blue-500">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">📍 get() - Ambil Elemen</h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="number"
                      value={indexToGet}
                      onChange={(e) => setIndexToGet(e.target.value)}
                      placeholder="Index"
                      className="flex-1 p-2 sm:p-3 border-2 border-gray-900 rounded-lg text-gray-900 text-sm sm:text-base"
                    />
                    <button
                      onClick={getItemByIndex}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 text-sm sm:text-base w-full sm:w-auto"
                    >
                      Ambil
                    </button>
                  </div>
                </div>

                {/* Set/Replace */}
                <div className="bg-white p-3 sm:p-4 rounded-lg border-2 border-purple-500">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">✏️ set() - Ubah Elemen</h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="number"
                      value={replaceIndex}
                      onChange={(e) => setReplaceIndex(e.target.value)}
                      placeholder="Index"
                      className="w-full sm:w-24 p-2 sm:p-3 border-2 border-gray-900 rounded-lg text-gray-900 text-sm sm:text-base"
                    />
                    <input
                      type="text"
                      value={replaceValue}
                      onChange={(e) => setReplaceValue(e.target.value)}
                      placeholder="Nilai baru"
                      className="flex-1 p-2 sm:p-3 border-2 border-gray-900 rounded-lg text-gray-900 text-sm sm:text-base"
                    />
                    <button
                      onClick={replaceItem}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600 text-sm sm:text-base w-full sm:w-auto"
                    >
                      Ubah
                    </button>
                  </div>
                </div>

                {/* Remove by Index */}
                <div className="bg-white p-3 sm:p-4 rounded-lg border-2 border-red-500">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">🗑️ remove() - Hapus by Index</h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="number"
                      value={indexToRemove}
                      onChange={(e) => setIndexToRemove(e.target.value)}
                      placeholder="Index"
                      className="flex-1 p-2 sm:p-3 border-2 border-gray-900 rounded-lg text-gray-900 text-sm sm:text-base"
                    />
                    <button
                      onClick={removeByIndex}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 text-sm sm:text-base w-full sm:w-auto"
                    >
                      Hapus
                    </button>
                  </div>
                </div>

                {/* Search */}
                <div className="bg-white p-3 sm:p-4 rounded-lg border-2 border-yellow-500">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">🔍 indexOf() - Cari Elemen</h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={searchItem}
                      onChange={(e) => setSearchItem(e.target.value)}
                      placeholder="Cari buah"
                      className="flex-1 p-2 sm:p-3 border-2 border-gray-900 rounded-lg text-gray-900 text-sm sm:text-base"
                    />
                    <button
                      onClick={searchForItem}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-white rounded-lg font-bold hover:bg-yellow-600 text-sm sm:text-base w-full sm:w-auto"
                    >
                      Cari
                    </button>
                  </div>
                </div>

                {/* Clear */}
                <button
                  onClick={clearAll}
                  className="w-full py-2 sm:py-3 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-900 text-sm sm:text-base"
                >
                  🧹 clear() - Hapus Semua
                </button>
              </div>
            </InteractiveDemo>
          </ContentCard>

          <ContentCard title="Looping ArrayList" icon="🔄">
            <p className="mb-3">
              Ada beberapa cara untuk melakukan loop pada ArrayList.
            </p>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. For Loop Biasa</h3>
            <CodeExample 
              language="java"
              code={`ArrayList<String> buah = new ArrayList<>();
buah.add("Apel");
buah.add("Jeruk");
buah.add("Mangga");

for (int i = 0; i < buah.size(); i++) {
    System.out.println(i + ": " + buah.get(i));
}

/* Output:
0: Apel
1: Jeruk
2: Mangga
*/`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Enhanced For Loop (For-Each)</h3>
            <CodeExample 
              language="java"
              code={`ArrayList<String> buah = new ArrayList<>();
buah.add("Apel");
buah.add("Jeruk");
buah.add("Mangga");

for (String namaBuah : buah) {
    System.out.println(namaBuah);
}

/* Output:
Apel
Jeruk
Mangga
*/`}
            />

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. forEach dengan Lambda (Java 8+)</h3>
            <CodeExample 
              language="java"
              code={`ArrayList<String> buah = new ArrayList<>();
buah.add("Apel");
buah.add("Jeruk");
buah.add("Mangga");

buah.forEach(namaBuah -> System.out.println(namaBuah));

// Atau dengan method reference
buah.forEach(System.out::println);`}
            />
          </ContentCard>

          <ContentCard title="Method Lainnya" icon="🔧">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">contains() - Cek Keberadaan</h4>
                <CodeExample 
                  language="java"
                  code={`ArrayList<String> buah = new ArrayList<>();
buah.add("Apel");
buah.add("Jeruk");

boolean adaApel = buah.contains("Apel");  // true
boolean adaMangga = buah.contains("Mangga");  // false

if (buah.contains("Apel")) {
    System.out.println("Apel ada di list!");
}`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">isEmpty() - Cek Kosong</h4>
                <CodeExample 
                  language="java"
                  code={`ArrayList<String> buah = new ArrayList<>();

if (buah.isEmpty()) {
    System.out.println("ArrayList kosong");
}

buah.add("Apel");

if (!buah.isEmpty()) {
    System.out.println("ArrayList ada isinya");
}`}
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">indexOf() & lastIndexOf()</h4>
                <CodeExample 
                  language="java"
                  code={`ArrayList<String> buah = new ArrayList<>();
buah.add("Apel");
buah.add("Jeruk");
buah.add("Apel");

int pertama = buah.indexOf("Apel");      // 0
int terakhir = buah.lastIndexOf("Apel"); // 2
int notFound = buah.indexOf("Mangga");   // -1 (tidak ada)`}
                />
              </div>
            </div>
          </ContentCard>

          <ContentCard title="🎮 Demo: ArrayList dengan Angka" icon="🔢">
            <InteractiveDemo 
              title="Operasi ArrayList Integer"
              description="Coba sort, reverse, dan operasi matematika"
            >
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 sm:p-6 rounded-lg">
                  <p className="font-bold mb-3 text-base sm:text-lg">📊 ArrayList Numbers</p>
                  <div className="flex flex-wrap gap-2">
                    {numbers.map((num, index) => (
                      <div 
                        key={index}
                        className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-lg sm:text-xl"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2 text-xs sm:text-sm">
                    <div className="bg-white/10 p-1.5 sm:p-2 rounded text-center">
                      <div className="block sm:inline">Size: </div><strong>{numbers.length}</strong>
                    </div>
                    <div className="bg-white/10 p-1.5 sm:p-2 rounded text-center">
                      <div className="block sm:inline">Sum: </div><strong>{numbers.reduce((a, b) => a + b, 0)}</strong>
                    </div>
                    <div className="bg-white/10 p-1.5 sm:p-2 rounded text-center">
                      <div className="block sm:inline">Avg: </div><strong>{(numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(1)}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="number"
                    value={numberToAdd}
                    onChange={(e) => setNumberToAdd(e.target.value)}
                    placeholder="Masukkan angka"
                    className="flex-1 p-2 sm:p-3 border-2 border-gray-900 rounded-lg text-gray-900 text-sm sm:text-base"
                    onKeyPress={(e) => e.key === 'Enter' && addNumber()}
                  />
                  <button
                    onClick={addNumber}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 text-sm sm:text-base w-full sm:w-auto"
                  >
                    ➕ Tambah
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <button
                    onClick={sortNumbers}
                    className="py-2 sm:py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 text-xs sm:text-base"
                  >
                    ⬆️ Sort
                  </button>
                  <button
                    onClick={reverseNumbers}
                    className="py-2 sm:py-3 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600 text-xs sm:text-base"
                  >
                    🔄 Reverse
                  </button>
                  <button
                    onClick={() => setNumbers([])}
                    className="py-2 sm:py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 text-xs sm:text-base"
                  >
                    🗑️ Clear
                  </button>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Kode Java untuk Sort:</strong>
                  </p>
                  <pre className="text-blue-900 text-xs mt-2 font-mono">
{`Collections.sort(numbers);  // Sort ascending`}
                  </pre>
                </div>
              </div>
            </InteractiveDemo>
          </ContentCard>

          <ContentCard title="Contoh Program Lengkap" icon="🎓">
            <p className="mb-3">
              Program manajemen daftar siswa menggunakan ArrayList.
            </p>
            <CodeExample 
              language="java"
              code={`import java.util.ArrayList;
import java.util.Scanner;

public class ManajemenSiswa {
    public static void main(String[] args) {
        ArrayList<String> siswa = new ArrayList<>();
        Scanner input = new Scanner(System.in);
        int pilihan;
        
        do {
            System.out.println("\\n=== MANAJEMEN SISWA ===");
            System.out.println("1. Tambah Siswa");
            System.out.println("2. Lihat Semua Siswa");
            System.out.println("3. Hapus Siswa");
            System.out.println("4. Cari Siswa");
            System.out.println("0. Keluar");
            System.out.print("Pilih: ");
            
            pilihan = input.nextInt();
            input.nextLine();  // Clear buffer
            
            switch (pilihan) {
                case 1:
                    System.out.print("Nama siswa: ");
                    String nama = input.nextLine();
                    siswa.add(nama);
                    System.out.println("✅ Siswa ditambahkan!");
                    break;
                    
                case 2:
                    System.out.println("\\n📋 Daftar Siswa:");
                    if (siswa.isEmpty()) {
                        System.out.println("Belum ada siswa");
                    } else {
                        for (int i = 0; i < siswa.size(); i++) {
                            System.out.println((i+1) + ". " + siswa.get(i));
                        }
                    }
                    break;
                    
                case 3:
                    System.out.print("Index siswa yang dihapus: ");
                    int index = input.nextInt() - 1;
                    if (index >= 0 && index < siswa.size()) {
                        siswa.remove(index);
                        System.out.println("✅ Siswa dihapus!");
                    } else {
                        System.out.println("❌ Index tidak valid!");
                    }
                    break;
                    
                case 4:
                    System.out.print("Nama yang dicari: ");
                    String cari = input.nextLine();
                    if (siswa.contains(cari)) {
                        int idx = siswa.indexOf(cari);
                        System.out.println("✅ Ditemukan di posisi " + (idx+1));
                    } else {
                        System.out.println("❌ Tidak ditemukan");
                    }
                    break;
            }
            
        } while (pilihan != 0);
        
        System.out.println("Program selesai!");
    }
}`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan ArrayList</h3>
            <ul className="space-y-2">
              <li>✅ ArrayList adalah array dinamis yang ukurannya fleksibel</li>
              <li>✅ Import: <code className="bg-white/20 px-2 py-1 rounded">import java.util.ArrayList;</code></li>
              <li>✅ Deklarasi: <code className="bg-white/20 px-2 py-1 rounded">ArrayList&lt;Type&gt; name = new ArrayList&lt;&gt;();</code></li>
              <li>✅ Method penting: add(), get(), remove(), set(), size(), clear()</li>
              <li>✅ Loop dengan for, for-each, atau forEach()</li>
              <li>✅ Gunakan ArrayList ketika ukuran data tidak pasti</li>
              <li>✅ Lebih fleksibel tapi sedikit lebih lambat dari array biasa</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
