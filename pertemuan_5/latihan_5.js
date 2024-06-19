// Deklarasi array `students` yang terdiri dari objek-objek dengan properti `id`, `name`, `isActive`, dan `grade`.
const students = [
  {
    id: 1,
    name: "John",
    isActive: true,
    grade: 80,
  },
  {
    id: 2,
    name: "Jack",
    isActive: true,
    grade: 90,
  },
  {
    id: 3,
    name: "Bob",
    isActive: false,
    grade: 95,
  },
];

// Menampilkan semua elemen array `students` sekaligus.
console.log(students);

// Menampilkan elemen array `students` satu per satu menggunakan loop `for`.
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// Menggunakan metode `forEach` untuk mengeksekusi sebuah fungsi untuk setiap elemen dalam array `students`.
students.forEach(function (item) {
  console.log(item);
});

// Menggunakan metode `map` untuk membuat array baru `output` yang merupakan hasil memanggil fungsi pada setiap elemen dalam array `students`.
let output = students.map(function (item) {
  return item;
});
console.log(students); // Menampilkan array asli `students`.
console.log(output); // Menampilkan array baru `output` yang memiliki elemen yang sama dengan `students`.

// Contoh lain penggunaan `map` dengan array `array1`.
const array1 = [1, 4, 9, 16];
// Menggunakan `map` untuk mengalikan setiap elemen `array1` dengan 2 dan mengembalikan array baru `map1`.
const map1 = array1.map(function (item) {
  return item * 2;
});
console.log(array1); // Menampilkan array asli `array1`.
console.log(map1); // Menampilkan array baru `map1` dengan elemen yang dikalikan 2.

// Menggunakan metode `filter` untuk membuat array baru `filteredStudent` dengan elemen yang memenuhi kondisi `isActive === true`.
let filteredStudent = students.filter(function (item) {
  return item.isActive === true;
});
console.log(filteredStudent); // Menampilkan array baru `filteredStudent` dengan siswa yang `isActive` bernilai `true`.

// Menggunakan metode `find` untuk mengembalikan elemen pertama dalam array `students` yang memenuhi kondisi `isActive === true`.
let findStudent = students.find(function (item) {
  return item.isActive === true;
});
console.log(findStudent); // Menampilkan elemen pertama yang `isActive` bernilai `true`.
