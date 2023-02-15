const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const newAngka = angka.reduce((accumulator, currentvalue)=>
    accumulator + currentvalue, 5);
    console.log(newAngka);