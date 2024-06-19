//  Modul (Export):
// Dalam JavaScript, modul memungkinkan kita memisahkan kode ke dalam file yang terpisah untuk membuat struktur proyek yang lebih teratur. 
// Saat mengekspor dari modul, kita memiliki dua opsi:
// 1. `export default`: 
// Digunakan untuk mengekspor satu nilai atau fungsi utama dari modul tersebut.
// Contoh: javascript
export default function myFunction() {}

// 2. `export`: 
// Digunakan untuk mengeksport lebih dari satu nilai dari modul tersebut.
// Contoh: javascript
export function func1() {}
export function func2() {}
 
// Synchronous vs Asynchronous:
// 1.Synchronous single Thread/Blocking : 
// Dalam model ini, setiap operasi dieksekusi satu per satu secara berurutan. Eksekusi kode akan menunggu operasi saat 
// ini selesai sebelum melanjutkan ke operasi berikutnya. Ini bisa mengakibatkan aplikasi terasa lambat jika ada operasi yang memakan waktu.
// contoh codingan 
console.log("Proses 1");
console.log("Proses 2");
console.log("Proses 3");
console.log("Proses 4");

// 2.Asynchronous multi thread/non blocking : 
// Dalam model ini, beberapa operasi dapat dieksekusi secara bersamaan tanpa harus menunggu operasi sebelumnya selesai. 
// Ini memungkinkan aplikasi untuk tetap responsif. Dalam JavaScript, ini sering ditemukan dalam bentuk callback, promise, dan async/await.

// contoh codingan :
// Ada 2 jenis asyncchronous:
// 1. Parallel
// pararelitas mengacu pada pelaksanaan beberapa tugas atau instruksi secara bersamaan, 
// TUJUAN :  untuk meningkatkan efisiensi atau kinerja sistem.
// contoh codingan pararel :
setTimeout(() => {
  console.log("Proses 1");
}, 1000);
setTimeout(() => {
  console.log("Proses 2");
}, 5000);
setTimeout(() => {
  console.log("Proses 3");
}, 5000);
setTimeout(() => {
  console.log("Proses 4");
}, 3000);

//2. Concurent
// Concurrent adalah saat melakukan beberapa tugas pada waktu yang sama, tanpa harus menunggu satu tugas selesai untuk memulai tugas lainnya.
// TUJUANNYA : Tujuan dari penggunaan concurrent adalah untuk meningkatkan efisiensi dan kinerja sistem dengan memungkinkan beberapa tugas untuk berjalan secara bersamaan, 
// sehingga mempercepat waktu pemrosesan dan mengoptimalkan penggunaan sumber daya.
// 1. Callback
setTimeout(() => {
    console.log("Proses 1");
    setTimeout(() => {
      console.log("Proses 2");
      setTimeout(() => {
        console.log("Proses 3");
        setTimeout(() => {
          console.log("Proses 4");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);

// Dalam pengembangan front-end, kita cenderung melakukan langkah demi langkah untuk memastikan setiap tugas selesai 
// sebelum melanjutkan ke tugas berikutnya. Namun, terkadang, seperti saat mengunduh data atau berkomunikasi dengan server, 
// pendekatan konkuren dengan callback bisa lebih baik. Callback adalah janji yang dipenuhi setelah tugas selesai.

// kelemahannya :
//kadang-kadang kita bisa terjebak dalam kode yang rumit dan sulit dipahami, terutama jika banyak tugas konkuren terjadi, 
// yang bisa membuat kode terlihat seperti "neraka callback".


// Promise:
// Promise adalah cara untuk menangani operasi asynchronous di JavaScript. Ini mewakili nilai yang mungkin belum tersedia saat operasi asynchronous selesai. 
// Promise memiliki dua metode utama:
// - `then()`: Digunakan untuk menetapkan tindakan yang akan dilakukan setelah promise berhasil.
// - `catch()`: Digunakan untuk menangkap kesalahan yang terjadi selama eksekusi promise.


// Contoh: javascript
// Promise
const myPromise = new Promise((resolve, reject) => {
    // Misalnya, melakukan sesuatu secara  asynchronous
    setTimeout(() => {
        const success = true; // Atau false, tergantung pada keberhasilan operasi asinkron
        if (success) {
            resolve("Berhasil!"); // Jika berhasil
        } else {
            reject("Gagal!"); // Jika gagal
        }
    }, 1000); // Contoh delay 1 detik untuk simulasi operasi asinkron
});


// contoh Promise dengan : .then() dan .catch() 
function getData() {
    return new Promise((resolve, reject) => {
        // Misalkan ini adalah kode untuk mengambil data dari server
        // Contoh sederhana, kita akan langsung menyelesaikan Promise dengan data tertentu
        let data = {
            name: "John",
            age: 30
        };
        
        // Kondisi jika data berhasil diambil
        if (data) {
            resolve(data); // Mengembalikan data
        } else {
            reject("Data tidak dapat diambil"); // Mengembalikan error jika data tidak dapat diambil
        }
    });
}
// Memanggil fungsi getData dan menangani hasilnya menggunakan then dan catch
getData()
    .then((result) => {
        console.log("Data berhasil diambil:", result);
    })
    .catch((error) => {
        console.error("Terjadi kesalahan:", error);
    });


// Async/Await (ES7):
// `async` dan `await` adalah fitur baru dalam ES7 yang memungkinkan penulisan kode asynchronous menjadi lebih mudah dibaca dan dipahami.  
// `async` digunakan untuk menentukan bahwa sebuah fungsi akan mengembalikan sebuah promise. 
// `await` digunakan di dalam fungsi async untuk menunggu hasil dari sebuah promise tanpa menghalangi eksekusi kode.
// 
// Contoh: javascript
// Fungsi async dengan await
 // cat: wajib membuat fungsi
const getData = async () => {
  try {
    let result = await newPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getData();

// Fetch (then - catch)
// fetch() adalah API baru dalam JavaScript yang digunakan untuk melakukan permintaan HTTP ke server. 
// Ini digunakan untuk mengambil (GET), mengirim (POST), dan memanipulasi data dari berbagai sumber, 
// seperti file JSON atau XML, dan digunakan secara luas dalam pengembangan web modern.

// contoh codingan Fetch (then - catch)
//fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//Fetch (async - await)
// const getJSONPlaceholder = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getJSONPlaceholder();

// AXIOS
// Axios adalah sebuah library HTTP client untuk JavaScript 
// yang memungkinkan kita melakukan permintaan HTTP dari browser atau Node.js. 
// Ia menyediakan fitur-fitur yang kuat dan mudah digunakan untuk berinteraksi dengan API.

//Axios (then - catch)
const axios = require("axios");

// Axios (then - catch)
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

// Axios (async - await)
const getJSONPlaceholderAxios = async () => {
  try {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

getJSONPlaceholderAxios();

