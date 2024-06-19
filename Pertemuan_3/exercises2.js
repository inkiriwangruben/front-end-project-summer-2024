//Moditifikasi Exercise 1
// Menggunakan IIFE & CallBack

// IIFE

let output = (function calculateBMI(berat, tinggi) {
  let bmi = berat / (tinggi * tinggi);
  let classification;
  if (bmi < 18.5) {
    classification = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    classification = "Normal Range";
  } else if (bmi >= 25) {
    classification = "Overweight";
  } else if (bmi > 25 && bmi <= 29.9) {
    classification = "Pre obese";
  } else {
    classification = "Obese";
  }
  return classification;
})(90, 1.7);
console.log("Clasifikasi BMI anda adalah " + output);

// CallBack

function menghitungBMI(berat, tinggi, callback) {
  let bmi = berat / (tinggi * tinggi);
  let classification;
  if (bmi < 18.5) {
    classification = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    classification = "Normal Range";
  } else if (bmi >= 25) {
    classification = "Overweight";
  } else if (bmi > 25 && bmi <= 29.9) {
    classification = "Pre obese";
  } else {
    classification = "Obese";
  }
  callback(classification);
}
menghitungBMI(90, 1.7, function (classification) {
  console.log("Clasifikasi BMI anda adalah " + classification);
});
