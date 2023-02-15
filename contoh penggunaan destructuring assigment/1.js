//contoh penggunaan destructuring assigment
//1.destructuring object tanpa deklarasi objek
/*
({nama, umur} = {nama : "irham", umur: 20});
console.log(nama,umur);
*/
//2.destructuring array
/*
const perkenalan = ["halo", "nama", "saya", "irham"];
const salam = perkenalan[0];
const nama = perkenalan [3];
console.log(salam)
*/
//3.rest parameter
/*
const [a, ...values] = [1, 2, 3, 4, 5];
console.log(a)
console.log(values[0]) 
*/
//destructuring function
/*
const mhs1 = {
    nama: "irham",
    umur : "20",
    email : "mhmirham22@gmail.com",
    nilai: {
        tugas : 80,
        uts : 85,
        uas : 70
    }
}
function cetakmhs ({nama, umur, nilai : {tugas, uts, uas}}){
    return `halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}
console.log(cetakmhs(mhs1));
*/