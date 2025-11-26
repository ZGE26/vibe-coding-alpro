"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ContentCard from "@/components/ContentCard";
import CodeExample from "@/components/CodeExample";
import InteractiveDemo from "@/components/InteractiveDemo";

export default function SortingSearchingPage() {
  // Bubble Sort State
  const [bubbleArray, setBubbleArray] = useState<number[]>([64, 34, 25, 12, 22, 11, 90]);
  const [bubbleSorting, setBubbleSorting] = useState(false);
  const [bubbleStep, setBubbleStep] = useState<{i: number, j: number, sorted: number[]}>({i: -1, j: -1, sorted: []});
  const [bubbleInput, setBubbleInput] = useState("");

  // Sequential Search State
  const [seqArray] = useState<number[]>([64, 34, 25, 12, 22, 11, 90, 88, 45, 50]);
  const [seqSearchValue, setSeqSearchValue] = useState<number>(22);
  const [seqSearching, setSeqSearching] = useState(false);
  const [seqCurrentIndex, setSeqCurrentIndex] = useState(-1);
  const [seqFound, setSeqFound] = useState<number>(-1);

  // Binary Search State
  const [binaryArray] = useState<number[]>([5, 12, 17, 23, 38, 45, 67, 89, 99]);
  const [binarySearchValue, setBinarySearchValue] = useState<number>(45);
  const [binarySearching, setBinarySearching] = useState(false);
  const [binaryRange, setBinaryRange] = useState<{low: number, high: number, mid: number}>({low: -1, high: -1, mid: -1});
  const [binaryFound, setBinaryFound] = useState<number>(-1);

  const runBubbleSort = async () => {
    setBubbleSorting(true);
    const arr = [...bubbleArray];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setBubbleStep({i, j, sorted: [...arr]});
        await new Promise(resolve => setTimeout(resolve, 800));

        if (arr[j] > arr[j + 1]) {
          // Swap
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setBubbleStep({i, j, sorted: [...arr]});
          await new Promise(resolve => setTimeout(resolve, 800));
        }
      }
    }

    setBubbleArray(arr);
    setBubbleStep({i: -1, j: -1, sorted: arr});
    setBubbleSorting(false);
  };

  const resetBubbleSort = () => {
    setBubbleArray([64, 34, 25, 12, 22, 11, 90]);
    setBubbleStep({i: -1, j: -1, sorted: []});
  };

  const addToBubbleArray = () => {
    const num = parseInt(bubbleInput);
    if (!isNaN(num)) {
      setBubbleArray([...bubbleArray, num]);
      setBubbleInput("");
    }
  };

  const runSequentialSearch = async () => {
    setSeqSearching(true);
    setSeqFound(-1);

    for (let i = 0; i < seqArray.length; i++) {
      setSeqCurrentIndex(i);
      await new Promise(resolve => setTimeout(resolve, 600));

      if (seqArray[i] === seqSearchValue) {
        setSeqFound(i);
        setSeqCurrentIndex(-1);
        setSeqSearching(false);
        return;
      }
    }

    setSeqCurrentIndex(-1);
    setSeqSearching(false);
  };

  const runBinarySearch = async () => {
    setBinarySearching(true);
    setBinaryFound(-1);

    let low = 0;
    let high = binaryArray.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      setBinaryRange({low, high, mid});
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (binaryArray[mid] === binarySearchValue) {
        setBinaryFound(mid);
        setBinarySearching(false);
        return;
      }

      if (binaryArray[mid] < binarySearchValue) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    setBinaryRange({low: -1, high: -1, mid: -1});
    setBinarySearching(false);
  };

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      <div className="container mx-auto px-4 py-8">
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            🔍 Sorting & Searching di Java
          </h1>

          {/* SORTING SECTION */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              📊 SORTING (Pengurutan)
            </h2>

            <ContentCard title="Apa itu Sorting?" icon="💡">
              <p className="mb-4">
                <strong>Sorting</strong> adalah proses mengurutkan data dari yang terkecil 
                ke terbesar (ascending) atau sebaliknya (descending). Sorting sangat penting 
                dalam pemrograman untuk mempermudah pencarian dan pengolahan data.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-4">
                <p className="text-orange-800">
                  <strong>Kenapa Penting?</strong> Data yang terurut lebih mudah dicari, 
                  dianalisis, dan ditampilkan. Misalnya: daftar nilai siswa, ranking, 
                  harga produk dari termurah ke termahal.
                </p>
              </div>
            </ContentCard>

            <ContentCard title="Bubble Sort" icon="🫧">
              <p className="mb-4">
                <strong>Bubble Sort</strong> adalah algoritma sorting paling sederhana. 
                Cara kerjanya dengan membandingkan dua elemen bersebelahan dan menukarnya 
                jika urutannya salah. Proses ini diulang sampai semua data terurut.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mb-2">Cara Kerja:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-900 mb-4">
                <li>Bandingkan elemen pertama dengan elemen kedua</li>
                <li>Jika elemen pertama lebih besar, tukar posisinya</li>
                <li>Lanjutkan ke pasangan berikutnya sampai akhir array</li>
                <li>Ulangi proses dari awal sampai tidak ada lagi pertukaran</li>
              </ol>

              <CodeExample 
                language="java"
                code={`public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        
        // Loop untuk setiap pass
        for (int i = 0; i < n - 1; i++) {
            // Loop untuk membandingkan elemen bersebelahan
            for (int j = 0; j < n - i - 1; j++) {
                // Jika elemen kiri > elemen kanan, tukar
                if (arr[j] > arr[j + 1]) {
                    // Swap menggunakan variabel temporary
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    
    public static void main(String[] args) {
        int[] data = {64, 34, 25, 12, 22, 11, 90};
        
        System.out.println("Array sebelum sorting:");
        for (int num : data) {
            System.out.print(num + " ");
        }
        
        bubbleSort(data);
        
        System.out.println("\\nArray setelah sorting:");
        for (int num : data) {
            System.out.print(num + " ");
        }
    }
}

/* Output:
Array sebelum sorting:
64 34 25 12 22 11 90 
Array setelah sorting:
11 12 22 25 34 64 90 
*/`}
              />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <p className="font-semibold text-blue-800">📈 Kompleksitas:</p>
                <ul className="text-blue-700 space-y-1 mt-2">
                  <li>• <strong>Time Complexity:</strong> O(n²) - kuadratik</li>
                  <li>• <strong>Space Complexity:</strong> O(1) - konstan</li>
                  <li>• <strong>Best Case:</strong> O(n) jika data sudah terurut</li>
                  <li>• <strong>Worst Case:</strong> O(n²) jika data terbalik</li>
                </ul>
              </div>
            </ContentCard>

            <ContentCard title="🎮 Demo Interaktif: Bubble Sort" icon="⚡">
              <InteractiveDemo 
                title="Visualisasi Bubble Sort"
                description="Lihat proses pengurutan step-by-step dengan animasi"
              >
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg">
                    <p className="font-bold mb-3">🫧 Array Data:</p>
                    <div className="flex flex-wrap gap-2">
                      {bubbleArray.map((num, index) => {
                        const isComparing = (index === bubbleStep.j || index === bubbleStep.j + 1) && bubbleSorting;
                        const isSorted = index >= bubbleArray.length - bubbleStep.i - 1 && bubbleStep.i >= 0;
                        
                        return (
                          <div
                            key={index}
                            className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl transition-all duration-300 ${
                              isComparing
                                ? "bg-yellow-400 text-gray-900 scale-110 animate-pulse"
                                : isSorted
                                ? "bg-green-500 text-white"
                                : "bg-white/20"
                            }`}
                          >
                            {num}
                          </div>
                        );
                      })}
                    </div>
                    {bubbleSorting && (
                      <p className="mt-4 text-sm">
                        🔄 Pass {bubbleStep.i + 1}, Comparing index {bubbleStep.j} and {bubbleStep.j + 1}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={bubbleInput}
                      onChange={(e) => setBubbleInput(e.target.value)}
                      placeholder="Tambah angka"
                      className="flex-1 p-3 border-2 border-gray-900 rounded-lg text-gray-900"
                      disabled={bubbleSorting}
                    />
                    <button
                      onClick={addToBubbleArray}
                      disabled={bubbleSorting}
                      className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 disabled:bg-gray-400"
                    >
                      ➕ Tambah
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={runBubbleSort}
                      disabled={bubbleSorting}
                      className={`py-3 px-6 rounded-lg font-bold text-white transition-all ${
                        bubbleSorting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      }`}
                    >
                      {bubbleSorting ? "⏳ Sorting..." : "▶️ Sort"}
                    </button>
                    <button
                      onClick={resetBubbleSort}
                      disabled={bubbleSorting}
                      className="py-3 px-6 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 disabled:bg-gray-400"
                    >
                      🔄 Reset
                    </button>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="text-green-800 text-sm">
                      <strong>💡 Petunjuk:</strong>
                    </p>
                    <ul className="text-green-700 text-sm space-y-1 mt-2">
                      <li>• <strong>Kuning:</strong> Sedang dibandingkan</li>
                      <li>• <strong>Hijau:</strong> Sudah terurut di posisi akhir</li>
                      <li>• <strong>Putih:</strong> Belum terurut</li>
                    </ul>
                  </div>
                </div>
              </InteractiveDemo>
            </ContentCard>
          </div>

          {/* SEARCHING SECTION */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              🔍 SEARCHING (Pencarian)
            </h2>

            <ContentCard title="Apa itu Searching?" icon="💡">
              <p className="mb-4">
                <strong>Searching</strong> adalah proses mencari data tertentu dalam 
                kumpulan data. Ada berbagai algoritma searching dengan kecepatan berbeda. 
                Pilihan algoritma tergantung apakah data sudah terurut atau belum.
              </p>
            </ContentCard>

            <ContentCard title="1. Sequential Search (Linear Search)" icon="➡️">
              <p className="mb-4">
                <strong>Sequential Search</strong> atau pencarian berurutan adalah algoritma 
                paling sederhana. Mencari data dengan memeriksa satu per satu dari awal 
                sampai akhir atau sampai data ditemukan.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mb-2">Karakteristik:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-900 mb-4">
                <li>✅ Simpel dan mudah dipahami</li>
                <li>✅ Bisa digunakan untuk data tidak terurut</li>
                <li>❌ Lambat untuk data banyak</li>
                <li>❌ Harus cek semua elemen jika data tidak ada</li>
              </ul>

              <CodeExample 
                language="java"
                code={`public class SequentialSearch {
    public static int search(int[] arr, int target) {
        // Loop dari index 0 sampai akhir array
        for (int i = 0; i < arr.length; i++) {
            // Jika ketemu, return indexnya
            if (arr[i] == target) {
                return i;
            }
        }
        // Jika tidak ketemu, return -1
        return -1;
    }
    
    public static void main(String[] args) {
        int[] data = {64, 34, 25, 12, 22, 11, 90, 88};
        int cari = 22;
        
        int hasil = search(data, cari);
        
        if (hasil != -1) {
            System.out.println("Data " + cari + " ditemukan di index " + hasil);
        } else {
            System.out.println("Data " + cari + " tidak ditemukan");
        }
    }
}

/* Output:
Data 22 ditemukan di index 4
*/`}
              />

              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4">
                <p className="font-semibold text-purple-800">📈 Kompleksitas:</p>
                <ul className="text-purple-700 space-y-1 mt-2">
                  <li>• <strong>Time Complexity:</strong> O(n) - linear</li>
                  <li>• <strong>Best Case:</strong> O(1) - data di index pertama</li>
                  <li>• <strong>Worst Case:</strong> O(n) - data di akhir atau tidak ada</li>
                  <li>• <strong>Space Complexity:</strong> O(1)</li>
                </ul>
              </div>
            </ContentCard>

            <ContentCard title="🎮 Demo: Sequential Search" icon="⚡">
              <InteractiveDemo 
                title="Visualisasi Sequential Search"
                description="Lihat proses pencarian linear step-by-step"
              >
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-lg">
                    <p className="font-bold mb-3">📊 Array Data:</p>
                    <div className="flex flex-wrap gap-2">
                      {seqArray.map((num, index) => (
                        <div
                          key={index}
                          className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl transition-all duration-300 ${
                            index === seqFound
                              ? "bg-green-500 text-white scale-110 animate-bounce"
                              : index === seqCurrentIndex
                              ? "bg-yellow-400 text-gray-900 scale-110"
                              : index < seqCurrentIndex && seqFound === -1
                              ? "bg-red-400/50 text-white"
                              : "bg-white/20"
                          }`}
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Cari Angka: {seqSearchValue}
                    </label>
                    <input
                      type="range"
                      value={seqSearchValue}
                      onChange={(e) => {
                        setSeqSearchValue(Number(e.target.value));
                        setSeqFound(-1);
                        setSeqCurrentIndex(-1);
                      }}
                      min="0"
                      max="100"
                      className="w-full"
                      disabled={seqSearching}
                    />
                  </div>

                  <button
                    onClick={runSequentialSearch}
                    disabled={seqSearching}
                    className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all ${
                      seqSearching
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                    }`}
                  >
                    {seqSearching ? "🔍 Mencari..." : "🔍 Cari Sequential"}
                  </button>

                  {seqFound !== -1 && (
                    <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                      <p className="text-green-800 font-bold text-center">
                        ✅ Data {seqSearchValue} ditemukan di index {seqFound}!
                      </p>
                    </div>
                  )}

                  {!seqSearching && seqFound === -1 && seqCurrentIndex === -1 && (
                    <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-4">
                      <p className="text-gray-600 text-center">
                        Tekan tombol untuk memulai pencarian
                      </p>
                    </div>
                  )}
                </div>
              </InteractiveDemo>
            </ContentCard>

            <ContentCard title="2. Binary Search" icon="⚡">
              <p className="mb-4">
                <strong>Binary Search</strong> adalah algoritma pencarian yang jauh lebih 
                cepat, tapi <strong>hanya bisa digunakan untuk data yang sudah terurut</strong>. 
                Cara kerjanya dengan membagi array menjadi dua bagian secara berulang.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mb-2">Cara Kerja:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-900 mb-4">
                <li>Cari elemen tengah array</li>
                <li>Jika elemen tengah = target, data ditemukan!</li>
                <li>Jika target lebih kecil, cari di bagian kiri</li>
                <li>Jika target lebih besar, cari di bagian kanan</li>
                <li>Ulangi sampai ketemu atau tidak ada lagi area pencarian</li>
              </ol>

              <CodeExample 
                language="java"
                code={`public class BinarySearch {
    public static int search(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;
        
        while (low <= high) {
            // Cari index tengah
            int mid = (low + high) / 2;
            
            // Jika ketemu di tengah
            if (arr[mid] == target) {
                return mid;
            }
            
            // Jika target lebih kecil, cari di kiri
            if (arr[mid] > target) {
                high = mid - 1;
            } 
            // Jika target lebih besar, cari di kanan
            else {
                low = mid + 1;
            }
        }
        
        // Tidak ditemukan
        return -1;
    }
    
    public static void main(String[] args) {
        // Array HARUS SUDAH TERURUT!
        int[] data = {5, 12, 17, 23, 38, 45, 67, 89, 99};
        int cari = 45;
        
        int hasil = search(data, cari);
        
        if (hasil != -1) {
            System.out.println("Data " + cari + " ditemukan di index " + hasil);
        } else {
            System.out.println("Data " + cari + " tidak ditemukan");
        }
    }
}

/* Output:
Data 45 ditemukan di index 5
*/`}
              />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <p className="font-semibold text-blue-800">📈 Kompleksitas:</p>
                <ul className="text-blue-700 space-y-1 mt-2">
                  <li>• <strong>Time Complexity:</strong> O(log n) - logaritmik (sangat cepat!)</li>
                  <li>• <strong>Best Case:</strong> O(1) - data di tengah</li>
                  <li>• <strong>Worst Case:</strong> O(log n)</li>
                  <li>• <strong>Space Complexity:</strong> O(1)</li>
                  <li>• ⚠️ <strong>Syarat:</strong> Data HARUS sudah terurut!</li>
                </ul>
              </div>
            </ContentCard>

            <ContentCard title="🎮 Demo: Binary Search" icon="⚡">
              <InteractiveDemo 
                title="Visualisasi Binary Search"
                description="Lihat bagaimana binary search membagi area pencarian"
              >
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-lg">
                    <p className="font-bold mb-3">📊 Sorted Array:</p>
                    <div className="flex flex-wrap gap-2">
                      {binaryArray.map((num, index) => {
                        const isLow = index === binaryRange.low;
                        const isHigh = index === binaryRange.high;
                        const isMid = index === binaryRange.mid;
                        const isInRange = index >= binaryRange.low && index <= binaryRange.high && binaryRange.low !== -1;
                        const isFound = index === binaryFound;

                        return (
                          <div
                            key={index}
                            className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl transition-all duration-500 ${
                              isFound
                                ? "bg-green-500 text-white scale-125 animate-bounce"
                                : isMid
                                ? "bg-yellow-400 text-gray-900 scale-110 animate-pulse"
                                : isLow || isHigh
                                ? "bg-orange-400 text-white"
                                : isInRange
                                ? "bg-white/40"
                                : "bg-white/10 opacity-50"
                            }`}
                          >
                            {num}
                          </div>
                        );
                      })}
                    </div>
                    {binarySearching && binaryRange.low !== -1 && (
                      <div className="mt-4 text-sm space-y-1">
                        <p>🔶 Low: index {binaryRange.low} = {binaryArray[binaryRange.low]}</p>
                        <p>🟡 Mid: index {binaryRange.mid} = {binaryArray[binaryRange.mid]}</p>
                        <p>🔶 High: index {binaryRange.high} = {binaryArray[binaryRange.high]}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Cari Angka: {binarySearchValue}
                    </label>
                    <input
                      type="range"
                      value={binarySearchValue}
                      onChange={(e) => {
                        setBinarySearchValue(Number(e.target.value));
                        setBinaryFound(-1);
                        setBinaryRange({low: -1, high: -1, mid: -1});
                      }}
                      min="0"
                      max="100"
                      className="w-full"
                      disabled={binarySearching}
                    />
                  </div>

                  <button
                    onClick={runBinarySearch}
                    disabled={binarySearching}
                    className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all ${
                      binarySearching
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
                    }`}
                  >
                    {binarySearching ? "🔍 Mencari..." : "⚡ Cari Binary"}
                  </button>

                  {binaryFound !== -1 && (
                    <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                      <p className="text-green-800 font-bold text-center">
                        ✅ Data {binarySearchValue} ditemukan di index {binaryFound}!
                      </p>
                    </div>
                  )}

                  <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4">
                    <p className="text-cyan-800 text-sm">
                      <strong>💡 Petunjuk:</strong>
                    </p>
                    <ul className="text-cyan-700 text-sm space-y-1 mt-2">
                      <li>• <strong>Kuning:</strong> Mid (elemen tengah yang dicek)</li>
                      <li>• <strong>Orange:</strong> Low dan High (batas area pencarian)</li>
                      <li>• <strong>Terang:</strong> Area yang masih dicari</li>
                      <li>• <strong>Redup:</strong> Area yang diabaikan</li>
                    </ul>
                  </div>
                </div>
              </InteractiveDemo>
            </ContentCard>

            <ContentCard title="Perbandingan Sequential vs Binary" icon="⚖️">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-4">
                  <h4 className="font-bold text-purple-900 mb-2">➡️ Sequential Search</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>✅ Bisa untuk data tidak terurut</li>
                    <li>✅ Mudah dipahami dan implement</li>
                    <li>✅ Cocok untuk data sedikit</li>
                    <li>❌ Lambat untuk data banyak (O(n))</li>
                    <li>❌ Harus cek semua jika tidak ada</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
                  <h4 className="font-bold text-blue-900 mb-2">⚡ Binary Search</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>✅ Sangat cepat (O(log n))</li>
                    <li>✅ Efisien untuk data banyak</li>
                    <li>✅ Langsung tahu jika tidak ada</li>
                    <li>❌ Harus sort dulu (O(n log n))</li>
                    <li>❌ Hanya untuk data terurut</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="font-semibold text-yellow-800">💡 Kapan Pakai Apa?</p>
                <ul className="text-yellow-700 space-y-1 mt-2">
                  <li>• <strong>Sequential:</strong> Data tidak terurut, data sedikit, cari sekali</li>
                  <li>• <strong>Binary:</strong> Data terurut, data banyak, cari berkali-kali</li>
                </ul>
              </div>
            </ContentCard>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold mb-2">📊 SORTING:</p>
                <ul className="space-y-1 text-sm">
                  <li>✅ <strong>Bubble Sort:</strong> Tukar elemen bersebelahan</li>
                  <li>✅ Kompleksitas: O(n²)</li>
                  <li>✅ Mudah tapi lambat untuk data banyak</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">🔍 SEARCHING:</p>
                <ul className="space-y-1 text-sm">
                  <li>✅ <strong>Sequential:</strong> Cek satu-satu O(n)</li>
                  <li>✅ <strong>Binary:</strong> Bagi dua O(log n)</li>
                  <li>✅ Binary butuh data terurut!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
}
