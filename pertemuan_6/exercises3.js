// ARRAY EXERCISES
let people = ["Greg", "mary", "Devon", "james"];

// 1. for loop untuk semua orang
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. foreach()
people.forEach(function (data) {
  console.log(data);
});

// 3. menghapus Greg dari array
people.shift();
console.log(people);

// 4. menghapus James dari array
people.pop();
console.log(people);

// 5. menambahkan Matt ke awal array
people.unshift("Matt");
console.log(people);

// 6. menambahkan nama sendiri di akhir array
people.push("Ruben");
console.log(people);

// 7. melakukan perulangan for dan berhenti saat bertemu "mary"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "mary") {
    break;
  }
}

// 8. membuat salinan array mulai dari index 2
let salinanOrang = people.slice(2);
console.log(salinanOrang);

// 9. mendefinisikan ulang array orang dengan penambahan "elizabeth" dan "artie"
let orang = ["mat", "greg", "mary", "devon", "ruben"];
orang.splice(2, 1, "elizabeth", "artie");
console.log(orang);

// 10. membuat variabel baru bernama withBob
let withBob = orang.concat("bob");
console.log(withBob);

// OBJECT EXERCISES
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
// 1. menambahkan "Go" ke dalam array languages
programming.languages.push("Go");
console.log(programming.languages);

// 2. mengubah nilai difficulty menjadi 7
programming.difficulty = 7;
console.log(programming.difficulty);

// 3. menghapus properti jokes dari objek
delete programming.jokes;
console.log(programming);

// 4. menambahkan properti baru isFun dengan nilai true
programming.isFun = true;
console.log(programming);

// 5. memperbarui array languages dengan template string
let updatedLanguages = programming.languages.map(
  (language, index) => `${index}: ${language}`
);
console.log(updatedLanguages);