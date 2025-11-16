'use client';

import { useState } from 'react';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';
import InteractiveDemo from '@/components/InteractiveDemo';

export default function Array2D() {
  const [matrix, setMatrix] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

  return (
    <div className="space-y-6">
      <ContentCard title="Apa itu Array Multi Dimensi?" icon="🎭">
        <p className="mb-4">
          Array multi dimensi adalah array yang berisi array lain. Yang paling umum adalah 
          <strong> Array 2 Dimensi (2D)</strong> yang mirip dengan tabel atau matriks. 
          Bayangkan seperti <strong>rak bertingkat</strong> - ada baris dan kolom!
        </p>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4">
          <p className="text-purple-800">
            <strong>Kegunaan:</strong> Cocok untuk data tabel, matriks matematika, 
            game board (catur, tic-tac-toe), peta/grid, jadwal, dll.
          </p>
        </div>
      </ContentCard>

      <InteractiveDemo
        title="🎯 Visualisasi Array 2D: Matriks 3x3"
        description="Lihat bagaimana array 2D menyimpan data dalam baris dan kolom"
      >
        <div className="space-y-4">
          {/* Matrix Display */}
          <div className="bg-white p-6 rounded-xl border-2 border-purple-300">
            <div className="grid grid-cols-3 gap-3">
              {matrix.map((row, i) => (
                row.map((val, j) => (
                  <div key={`${i}-${j}`} className="relative group">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-lg font-bold text-2xl text-center shadow-lg">
                      {val}
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      [{i}][{j}]
                    </div>
                  </div>
                ))
              ))}
            </div>
          </div>

          {/* Code representation */}
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
            <div className="text-green-400">// Array 2D - Matriks 3x3:</div>
            <div className="mt-2">int[][] matrix = {'{'}</div>
            {matrix.map((row, i) => (
              <div key={i} className="ml-4">
                {'{'}{row.join(', ')}{'}'}
{i < matrix.length - 1 ? ',' : ''}
              </div>
            ))}
            <div>{'};'}</div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
            <p className="text-sm text-purple-800">
              <strong>💡 Cara baca:</strong> matrix[baris][kolom] → matrix[0][0] = 1, matrix[1][2] = 6
            </p>
          </div>
        </div>
      </InteractiveDemo>

      <ContentCard title="1. Membuat Array 2D" icon="🎯">
        <p className="mb-3">
          Array 2D di Java bisa dibuat dengan beberapa cara.
        </p>
        
        <CodeExample 
          language="java"
          code={`// Cara 1: Deklarasi dengan ukuran
int[][] matriks = new int[3][4];  // 3 baris, 4 kolom

// Cara 2: Langsung dengan nilai
int[][] angka = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// String 2D
String[][] nama = {
    {"Budi", "Ani", "Citra"},
    {"Deni", "Eka", "Fani"}
};

// Akses ukuran
System.out.println("Jumlah baris: " + angka.length);        // 3
System.out.println("Jumlah kolom: " + angka[0].length);     // 3

// Jagged Array (baris dengan panjang berbeda)
int[][] jagged = {
    {1, 2},
    {3, 4, 5},
    {6, 7, 8, 9}
};`}
        />
      </ContentCard>

      <ContentCard title="2. Mengakses Elemen Array 2D" icon="🔍">
        <p className="mb-3">
          Gunakan dua index: <code className="bg-gray-200 px-2 py-1 rounded">[baris][kolom]</code>
        </p>
        
        <CodeExample 
          language="java"
          code={`int[][] matriks = {
    {10, 20, 30},
    {40, 50, 60},
    {70, 80, 90}
};

// Mengakses elemen
System.out.println(matriks[0][0]);  // 10 (baris 0, kolom 0)
System.out.println(matriks[0][2]);  // 30 (baris 0, kolom 2)
System.out.println(matriks[1][1]);  // 50 (baris 1, kolom 1)
System.out.println(matriks[2][2]);  // 90 (baris 2, kolom 2)

// Mengubah nilai
matriks[1][1] = 999;
System.out.println(matriks[1][1]);  // 999

// Mengakses satu baris penuh
int[] baris1 = matriks[1];
System.out.println(Arrays.toString(baris1));  // [40, 999, 60]`}
        />
      </ContentCard>

      <ContentCard title="3. Loop Array 2D" icon="🔄">
        <p className="mb-3">
          Gunakan nested loop (loop dalam loop) untuk iterasi array 2D.
        </p>
        
        <CodeExample 
          language="java"
          code={`int[][] matriks = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Nested for loop
System.out.println("=== Nested For Loop ===");
for (int i = 0; i < matriks.length; i++) {
    for (int j = 0; j < matriks[i].length; j++) {
        System.out.print(matriks[i][j] + " ");
    }
    System.out.println();  // Baris baru
}
// Output:
// 1 2 3
// 4 5 6
// 7 8 9

// Enhanced for loop (for-each)
System.out.println("\\n=== For-Each Loop ===");
for (int[] baris : matriks) {
    for (int nilai : baris) {
        System.out.print(nilai + " ");
    }
    System.out.println();
}

// Cetak dengan format rapi
System.out.println("\\n=== Format Rapi ===");
for (int i = 0; i < matriks.length; i++) {
    System.out.println(Arrays.toString(matriks[i]));
}
// Output:
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]`}
        />
      </ContentCard>

      <ContentCard title="4. Operasi Matriks" icon="➕">
        <p className="mb-3">
          Contoh operasi matematika dengan array 2D.
        </p>
        
        <CodeExample 
          language="java"
          code={`// Penjumlahan 2 matriks
public static int[][] tambahMatriks(int[][] a, int[][] b) {
    int baris = a.length;
    int kolom = a[0].length;
    int[][] hasil = new int[baris][kolom];
    
    for (int i = 0; i < baris; i++) {
        for (int j = 0; j < kolom; j++) {
            hasil[i][j] = a[i][j] + b[i][j];
        }
    }
    return hasil;
}

// Transpose matriks (tukar baris-kolom)
public static int[][] transpose(int[][] matriks) {
    int baris = matriks.length;
    int kolom = matriks[0].length;
    int[][] hasil = new int[kolom][baris];
    
    for (int i = 0; i < baris; i++) {
        for (int j = 0; j < kolom; j++) {
            hasil[j][i] = matriks[i][j];
        }
    }
    return hasil;
}

// Jumlah semua elemen
public static int jumlahTotal(int[][] matriks) {
    int total = 0;
    for (int[] baris : matriks) {
        for (int nilai : baris) {
            total += nilai;
        }
    }
    return total;
}

// Contoh penggunaan
int[][] m1 = {{1, 2}, {3, 4}};
int[][] m2 = {{5, 6}, {7, 8}};
int[][] hasil = tambahMatriks(m1, m2);
// hasil: {{6, 8}, {10, 12}}`}
        />
      </ContentCard>

      <ContentCard title="5. Array 3D & Dimensi Lebih Tinggi" icon="🎲">
        <p className="mb-3">
          Java juga mendukung array 3 dimensi atau lebih, meski jarang digunakan.
        </p>
        
        <CodeExample 
          language="java"
          code={`// Array 3 Dimensi
// Bayangkan: gedung -> lantai -> kamar
int[][][] gedung = new int[3][4][5];  // 3 lantai, 4 kamar, 5 item

// Atau langsung dengan nilai
int[][][] kubus = {
    {  // Lapisan 1
        {1, 2},
        {3, 4}
    },
    {  // Lapisan 2
        {5, 6},
        {7, 8}
    }
};

// Mengakses elemen
System.out.println(kubus[0][0][0]);  // 1
System.out.println(kubus[1][1][1]);  // 8

// Loop 3D
for (int i = 0; i < kubus.length; i++) {           // Lapisan
    for (int j = 0; j < kubus[i].length; j++) {    // Baris
        for (int k = 0; k < kubus[i][j].length; k++) {  // Kolom
            System.out.print(kubus[i][j][k] + " ");
        }
        System.out.println();
    }
    System.out.println("---");
}

// Array 4D (sangat jarang!)
int[][][][] data4D = new int[2][3][4][5];`}
        />
      </ContentCard>

      <ContentCard title="6. Contoh Real-World: Tabel Nilai Siswa" icon="🎓">
        <p className="mb-3">
          Aplikasi nyata: menyimpan nilai ujian beberapa siswa untuk beberapa mata pelajaran.
        </p>
        
        <CodeExample 
          language="java"
          code={`public class TabelNilai {
    public static void main(String[] args) {
        // Baris = siswa, Kolom = mata pelajaran
        // {Matematika, Fisika, Kimia, Biologi}
        int[][] nilai = {
            {85, 90, 88, 92},  // Budi
            {90, 85, 95, 88},  // Siti
            {78, 82, 80, 85},  // Andi
            {95, 92, 90, 94}   // Deni
        };
        
        String[] nama = {"Budi", "Siti", "Andi", "Deni"};
        String[] mapel = {"Mat", "Fis", "Kim", "Bio"};
        
        // Header tabel
        System.out.print("Nama\\t");
        for (String m : mapel) {
            System.out.print(m + "\\t");
        }
        System.out.println("Rata");
        System.out.println("==========================================");
        
        // Data siswa
        for (int i = 0; i < nilai.length; i++) {
            System.out.print(nama[i] + "\\t");
            
            int total = 0;
            for (int j = 0; j < nilai[i].length; j++) {
                System.out.print(nilai[i][j] + "\\t");
                total += nilai[i][j];
            }
            
            double rata = (double) total / nilai[i].length;
            System.out.printf("%.1f\\n", rata);
        }
        
        // Nilai rata-rata per mata pelajaran
        System.out.println("\\n=== Rata-rata per Mapel ===");
        for (int j = 0; j < mapel.length; j++) {
            int total = 0;
            for (int i = 0; i < nilai.length; i++) {
                total += nilai[i][j];
            }
            double rata = (double) total / nilai.length;
            System.out.printf("%s: %.1f\\n", mapel[j], rata);
        }
    }
}

/* Output:
Nama    Mat Fis Kim Bio Rata
==========================================
Budi    85  90  88  92  88.8
Siti    90  85  95  88  89.5
Andi    78  82  80  85  81.2
Deni    95  92  90  94  92.8

=== Rata-rata per Mapel ===
Mat: 87.0
Fis: 87.2
Kim: 88.2
Bio: 89.8
*/`}
        />
      </ContentCard>

      <ContentCard title="7. Game Board: Tic-Tac-Toe" icon="🎮">
        <p className="mb-3">
          Contoh penggunaan array 2D untuk membuat papan permainan.
        </p>
        
        <CodeExample 
          language="java"
          code={`public class TicTacToe {
    private char[][] board;
    
    public TicTacToe() {
        board = new char[3][3];
        // Inisialisasi board kosong
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                board[i][j] = '-';
            }
        }
    }
    
    // Tampilkan board
    public void printBoard() {
        System.out.println("  0 1 2");
        for (int i = 0; i < 3; i++) {
            System.out.print(i + " ");
            for (int j = 0; j < 3; j++) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
    }
    
    // Tempatkan mark (X atau O)
    public boolean placeMark(int row, int col, char mark) {
        if (row >= 0 && row < 3 && col >= 0 && col < 3) {
            if (board[row][col] == '-') {
                board[row][col] = mark;
                return true;
            }
        }
        return false;
    }
    
    // Cek pemenang
    public boolean checkWinner(char mark) {
        // Cek baris
        for (int i = 0; i < 3; i++) {
            if (board[i][0] == mark && 
                board[i][1] == mark && 
                board[i][2] == mark) {
                return true;
            }
        }
        
        // Cek kolom
        for (int j = 0; j < 3; j++) {
            if (board[0][j] == mark && 
                board[1][j] == mark && 
                board[2][j] == mark) {
                return true;
            }
        }
        
        // Cek diagonal
        if (board[0][0] == mark && board[1][1] == mark && board[2][2] == mark) {
            return true;
        }
        if (board[0][2] == mark && board[1][1] == mark && board[2][0] == mark) {
            return true;
        }
        
        return false;
    }
    
    public static void main(String[] args) {
        TicTacToe game = new TicTacToe();
        
        // Simulasi game
        game.placeMark(0, 0, 'X');
        game.placeMark(1, 1, 'O');
        game.placeMark(0, 1, 'X');
        game.placeMark(1, 2, 'O');
        game.placeMark(0, 2, 'X');
        
        game.printBoard();
        
        if (game.checkWinner('X')) {
            System.out.println("X MENANG!");
        }
    }
}`}
        />
      </ContentCard>

      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-3">📝 Ringkasan Array Multi Dimensi</h3>
        <ul className="space-y-2">
          <li>✅ Array 2D = tabel/matriks dengan baris & kolom</li>
          <li>✅ Akses: <code className="bg-white/20 px-2 py-1 rounded">array[baris][kolom]</code></li>
          <li>✅ Nested loop untuk iterasi</li>
          <li>✅ Ukuran: <code className="bg-white/20 px-2 py-1 rounded">array.length</code> untuk baris, <code className="bg-white/20 px-2 py-1 rounded">array[0].length</code> untuk kolom</li>
          <li>✅ Cocok untuk game board, tabel data, matriks</li>
          <li>✅ Bisa Array 3D, 4D, dst (tapi jarang dipakai)</li>
          <li>✅ Jagged Array = baris dengan panjang berbeda</li>
        </ul>
      </div>
    </div>
  );
}
