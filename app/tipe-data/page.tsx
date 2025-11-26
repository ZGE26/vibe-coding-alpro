'use client';

import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import ContentCard from '@/components/ContentCard';
import CodeExample from '@/components/CodeExample';
import InteractiveDemo from '@/components/InteractiveDemo';
import MemoryVisualization from '@/components/MemoryVisualization';

export default function TipeDataPage() {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [stringDemo, setStringDemo] = useState('');
  const [booleanDemo, setBooleanDemo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const memorySlots = [
    { address: '0x001', variable: 'umur', value: 25, type: 'int' },
    { address: '0x002', variable: 'tinggi', value: 170.5, type: 'double' },
    { address: '0x003', variable: 'nama', value: '"Budi"', type: 'String' },
    { address: '0x004', variable: 'aktif', value: 'true', type: 'boolean' },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            📊 Tipe Data di Java
          </h1>

          <ContentCard title="Apa itu Tipe Data?" icon="💡">
            <p className="mb-4">
              Tipe data dalam Java menentukan jenis nilai yang dapat disimpan dalam variabel 
              dan berapa banyak memori yang dialokasikan. Java adalah bahasa <strong>strongly typed</strong>, 
              artinya setiap variabel harus dideklarasikan dengan tipe data yang jelas.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-yellow-800">
                <strong>Perbedaan dengan JavaScript:</strong> Di Java, tipe data harus dideklarasikan 
                secara eksplisit dan tidak bisa diubah (immutable type).
              </p>
            </div>
          </ContentCard>

          <InteractiveDemo 
            title="Simulasi Memori" 
            description="Lihat bagaimana Java menyimpan tipe data di memori"
          >
            <MemoryVisualization slots={memorySlots} />
          </InteractiveDemo>

          <ContentCard title="1. Tipe Data Primitif - Integer" icon="🔢">
            <p className="mb-3">
              Java memiliki beberapa tipe data integer dengan ukuran memori yang berbeda:
            </p>
            
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border border-gray-900">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Tipe</th>
                    <th className="border px-4 py-2">Ukuran</th>
                    <th className="border px-4 py-2">Range</th>
                    <th className="border px-4 py-2">Contoh</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-mono">byte</td>
                    <td className="border px-4 py-2">1 byte (8 bit)</td>
                    <td className="border px-4 py-2">-128 s/d 127</td>
                    <td className="border px-4 py-2 font-mono">byte umur = 25;</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">short</td>
                    <td className="border px-4 py-2">2 bytes (16 bit)</td>
                    <td className="border px-4 py-2">-32,768 s/d 32,767</td>
                    <td className="border px-4 py-2 font-mono">short tahun = 2024;</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">int</td>
                    <td className="border px-4 py-2">4 bytes (32 bit)</td>
                    <td className="border px-4 py-2">-2.1M s/d 2.1M</td>
                    <td className="border px-4 py-2 font-mono">int populasi = 1000000;</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-mono">long</td>
                    <td className="border px-4 py-2">8 bytes (64 bit)</td>
                    <td className="border px-4 py-2">-9.2E18 s/d 9.2E18</td>
                    <td className="border px-4 py-2 font-mono">long jarak = 1000000000L;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CodeExample 
              code={`// Contoh penggunaan integer types
public class IntegerDemo {
    public static void main(String[] args) {
        // byte: untuk nilai kecil
        byte umur = 25;
        byte suhu = -10;
        
        // short: untuk nilai sedang
        short jumlahSiswa = 500;
        short tahun = 2024;
        
        // int: paling umum digunakan
        int populasi = 1000000;
        int saldo = -50000;
        
        // long: untuk nilai sangat besar (tambahkan L di akhir)
        long jarakBumi = 149600000000L;
        long pendudukDunia = 8000000000L;
        
        System.out.println("Umur: " + umur);
        System.out.println("Populasi: " + populasi);
        System.out.println("Jarak Bumi-Matahari: " + jarakBumi + " km");
    }
}`}
            />
          </ContentCard>

          <ContentCard title="2. Tipe Data Floating Point" icon="🎯">
            <p className="mb-3">
              Untuk bilangan desimal, Java menyediakan <code className="bg-gray-200 px-2 py-1 rounded">float</code> dan 
              <code className="bg-gray-200 px-2 py-1 rounded ml-1">double</code>.
            </p>
            
            <CodeExample 
              code={`// Contoh floating point
public class FloatDemo {
    public static void main(String[] args) {
        // float: presisi 6-7 digit (tambahkan f di akhir)
        float tinggi = 170.5f;
        float berat = 65.3f;
        float pi = 3.14159f;
        
        // double: presisi 15-16 digit (default untuk desimal)
        double saldo = 1500000.75;
        double luasLingkaran = 3.14159265359 * 5 * 5;
        double suhuAkurat = 36.567891234;
        
        // Perhitungan BMI
        double bmi = berat / ((tinggi / 100) * (tinggi / 100));
        
        System.out.println("Tinggi: " + tinggi + " cm");
        System.out.println("Berat: " + berat + " kg");
        System.out.println("BMI: " + bmi);
        System.out.println("Luas Lingkaran: " + luasLingkaran);
    }
}`}
            />

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
              <p className="font-semibold text-green-800">💡 Best Practice:</p>
              <p className="text-green-700">
                Gunakan <code className="bg-green-200 px-2 py-1 rounded">double</code> untuk perhitungan 
                yang membutuhkan presisi tinggi. <code className="bg-green-200 px-2 py-1 rounded">float</code> 
                lebih hemat memori tapi kurang akurat.
              </p>
            </div>
          </ContentCard>

          <InteractiveDemo 
            title="Demo Interaktif: Integer Counter" 
            description="Lihat nilai integer yang berubah secara real-time"
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-4 animate-pulse">
                {animatedValue}
              </div>
              <p className="text-gray-900">
                Nilai <code className="bg-gray-200 px-2 py-1 rounded">int counter = {animatedValue}</code>
              </p>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  Tipe data int dapat menyimpan nilai dari -2,147,483,648 hingga 2,147,483,647
                </p>
              </div>
            </div>
          </InteractiveDemo>

          <ContentCard title="3. Tipe Data Character" icon="🔤">
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">char</code> digunakan untuk menyimpan 
              satu karakter Unicode (2 bytes).
            </p>
            
            <CodeExample 
              code={`// Contoh character
public class CharDemo {
    public static void main(String[] args) {
        // char: harus menggunakan tanda kutip tunggal
        char huruf = 'A';
        char simbol = '@';
        char angka = '5';  // Ini char, bukan int!
        
        // Unicode character
        char heart = '\\u2764';  // ❤
        char smiley = '\\u263A'; // ☺
        
        // Operasi dengan char
        char ch = 'A';
        System.out.println("Char: " + ch);
        System.out.println("ASCII value: " + (int)ch);  // 65
        
        // Increment char
        ch++;
        System.out.println("Setelah increment: " + ch);  // B
    }
}`}
            />
          </ContentCard>

          <ContentCard title="4. Tipe Data Boolean" icon="✅">
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">boolean</code> hanya memiliki dua nilai: 
              <code className="bg-gray-200 px-2 py-1 rounded ml-1">true</code> atau 
              <code className="bg-gray-200 px-2 py-1 rounded ml-1">false</code>.
            </p>
            
            <CodeExample 
              code={`// Contoh boolean
public class BooleanDemo {
    public static void main(String[] args) {
        // Deklarasi boolean
        boolean aktif = true;
        boolean lulus = false;
        
        // Boolean dari ekspresi
        int umur = 20;
        boolean dewasa = umur >= 17;  // true
        
        int nilai = 85;
        boolean lulusUjian = nilai >= 70;  // true
        
        // Operasi logika
        boolean punyaSIM = true;
        boolean bisaMenyetir = dewasa && punyaSIM;  // true
        
        System.out.println("Dewasa: " + dewasa);
        System.out.println("Lulus: " + lulusUjian);
        System.out.println("Bisa Menyetir: " + bisaMenyetir);
    }
}`}
            />

            <InteractiveDemo 
              title="Demo Boolean Toggle" 
              description="Klik tombol untuk mengubah nilai boolean"
            >
              <div className="text-center">
                <div className="mb-4">
                  <div className={`inline-block px-8 py-4 rounded-lg text-2xl font-bold transition-all ${
                    booleanDemo ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {booleanDemo ? 'TRUE' : 'FALSE'}
                  </div>
                </div>
                <button
                  onClick={() => setBooleanDemo(!booleanDemo)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Toggle Boolean
                </button>
                <p className="mt-4 text-gray-900">
                  <code className="bg-gray-200 px-2 py-1 rounded">
                    boolean aktif = {booleanDemo.toString()}
                  </code>
                </p>
              </div>
            </InteractiveDemo>
          </ContentCard>

          <ContentCard title="5. String (Reference Type)" icon="📝">
            <p className="mb-3">
              <code className="bg-gray-200 px-2 py-1 rounded">String</code> bukan tipe primitif, 
              melainkan class. String adalah kumpulan karakter.
            </p>
            
            <CodeExample 
              code={`// Contoh String
public class StringDemo {
    public static void main(String[] args) {
        // Deklarasi String (gunakan kutip ganda)
        String nama = "Budi Santoso";
        String alamat = "Jakarta";
        String email = "budi@example.com";
        
        // String kosong
        String kosong = "";
        
        // Concatenation (penggabungan)
        String sapaan = "Halo, " + nama + "!";
        System.out.println(sapaan);
        
        // Method String
        System.out.println("Panjang: " + nama.length());        // 13
        System.out.println("Uppercase: " + nama.toUpperCase()); // BUDI SANTOSO
        System.out.println("Lowercase: " + nama.toLowerCase()); // budi santoso
        System.out.println("Char at 0: " + nama.charAt(0));     // B
        
        // Substring
        String firstName = nama.substring(0, 4);  // "Budi"
        System.out.println("Nama depan: " + firstName);
        
        // Contains
        boolean adaEmail = email.contains("@");  // true
        System.out.println("Email valid: " + adaEmail);
    }
}`}
            />

            <InteractiveDemo 
              title="Demo String Manipulation" 
              description="Ketik sesuatu dan lihat hasilnya"
            >
              <div className="space-y-4">
                <input
                  type="text"
                  value={stringDemo}
                  onChange={(e) => setStringDemo(e.target.value)}
                  placeholder="Ketik nama Anda..."
                  className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg focus:border-blue-500 outline-none text-gray-900 placeholder:text-gray-700"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-900">Length:</p>
                    <p className="font-bold text-blue-800">{stringDemo.length}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-900">Uppercase:</p>
                    <p className="font-bold text-green-800">{stringDemo.toUpperCase()}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-900">Lowercase:</p>
                    <p className="font-bold text-purple-800">{stringDemo.toLowerCase()}</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-900">Reversed:</p>
                    <p className="font-bold text-orange-800">{stringDemo.split('').reverse().join('')}</p>
                  </div>
                </div>
              </div>
            </InteractiveDemo>
          </ContentCard>

          <ContentCard title="6. Type Casting" icon="🔄">
            <p className="mb-3">
              Type casting adalah konversi dari satu tipe data ke tipe data lainnya.
            </p>
            
            <CodeExample 
              code={`// Type Casting
public class CastingDemo {
    public static void main(String[] args) {
        // Widening Casting (otomatis): kecil -> besar
        int angkaInt = 100;
        long angkaLong = angkaInt;        // int -> long
        double angkaDouble = angkaLong;   // long -> double
        
        System.out.println("Int: " + angkaInt);
        System.out.println("Long: " + angkaLong);
        System.out.println("Double: " + angkaDouble);
        
        // Narrowing Casting (manual): besar -> kecil
        double nilaiDouble = 9.78;
        int nilaiInt = (int) nilaiDouble;  // 9 (desimal hilang)
        
        System.out.println("Double: " + nilaiDouble);
        System.out.println("Int (cast): " + nilaiInt);
        
        // String ke Integer
        String strAngka = "123";
        int converted = Integer.parseInt(strAngka);
        System.out.println("String to int: " + converted);
        
        // Integer ke String
        int angka = 456;
        String strResult = String.valueOf(angka);
        System.out.println("Int to String: " + strResult);
    }
}`}
            />
          </ContentCard>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-2xl font-bold mb-3">📝 Ringkasan Tipe Data Java</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">Tipe Primitif:</h4>
                <ul className="space-y-1 text-sm">
                  <li>✅ <strong>byte, short, int, long</strong> → Integer</li>
                  <li>✅ <strong>float, double</strong> → Floating point</li>
                  <li>✅ <strong>char</strong> → Karakter tunggal</li>
                  <li>✅ <strong>boolean</strong> → true/false</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Reference Type:</h4>
                <ul className="space-y-1 text-sm">
                  <li>✅ <strong>String</strong> → Kumpulan karakter</li>
                  <li>✅ <strong>Array</strong> → Kumpulan data</li>
                  <li>✅ <strong>Class</strong> → Object</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
