const nama = "Wahyu";
const umur = 19;
const jurusan = "Teknik Informatika";

console.log(nama, umur, jurusan);
console.log('======================');
console.log('Contoh Fungsional');

const nilai = 90;
let grade = "";

if (nilai >= 90) {
  grade = "A";
}else if (nilai >= 80) {
  grade = "B";
}else {
  grade = "C";
}

console.log(`Grade anda : ${grade}`);
console.log(`Nilai anda : ${nilai}`);
console.log(`======================`);
console.log(`Contoh Object`);

const user = {
  name : "Wahyu",
  address : "Depok",
  age : 19,
  isMarried : false,
}
// Didalam onjek ada 2 bagian
// yaitu key dan value
// contoh key => name, address, age
// contoh value => "Wahyu"
console.log(user.name);
const {name, address, age, isMarried} = user;
console.log(name, age, address, isMarried);