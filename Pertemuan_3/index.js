// IIFE & Callback Function

// Deklarasi variabel global
let BMI;

// Fungsi untuk menghitung BMI dan mengklasifikasikannya
BMI = function (berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    let classification;
    if (bmi < 18.5) {
        classification = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = 'Normal Range';
    } else if (bmi >= 25 && bmi <= 29.9) {
        classification = 'Overweight';
    } else {
        classification = 'Obese';
    }
    return classification;
};

// Memanggil fungsi BMI dan mencetak hasilnya
let output = BMI(90, 1.7);
console.log('Clasifikasi BMI anda adalah ' + output);

// IIFE (Immediately Invoked Function Expression)

// Tanpa parameter dan argumen
(function() {
    console.log("Hello IIFE");
})();

// Dengan parameter dan argumen
(function(name) {
    console.log("Hello " + name);
})('John');

// Callback function

// Tanpa parameter dan argumen
function sayHello(callback) {
    callback();
}

sayHello(function() {
    console.log('Hello');
});

// Dengan parameter dan argumen dan nilai kembali
function sayHello2(callback) {
    let output = callback('John');
    console.log(output);
}

sayHello2(function(name) {
    return 'Hello ' + name;
});
