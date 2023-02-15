//arrow function
//implisit return
//NOTE : - CONSTRUCTOR FUNCTION TIDAK BISA DIRUBAH MENJADI ARROW FUNCTION
//       - TIDAK SEMUA FUNCTION BISA DIRUBAH DENGAN ARROW FUNCTION
//       - ARROW FUNCTION TIDAK MEMILIKI KONSEP THIS

//1.contoh
/*
let mahasiswa = ["irham kristen","coki narkoba","tretan buddha"]

let jumlahhuruf = mahasiswa.map(nama => 
    ({ nama: nama, jmlhuruf: nama.length}));
console.log(jumlahhuruf);
console.table(jumlahhuruf);
*/
//2.contoh penggunaan pada html



/*
const box = document.querySelector(".box");
box.addEventListener("click",function() {
    this.classlist.toggle("size");
    setTimeout(() => {
        this.classlist.toggle ("caption");
    }, 600);
})
*/

/*
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const newAngka = [];
for (let i = 0; i < angka.length;i++ ){
    if (angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}
console.log(newAngka)
*/