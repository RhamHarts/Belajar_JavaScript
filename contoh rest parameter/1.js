//rest parameter

//1.contoh dasar penggunaan
/*
function myfunc(a, ...myArgs){
    return myArgs;
}

console.log(myfunc(1, 2, 3, 4, 5))
*/

//2.contoh array destructuring rest parameter
/*
const kelompok1 = ["irham", "coki", "sured", "dikri", "ijul"]
const [ketua, wakil, ...anggota] = kelompok1
console.log(anggota)
*/
//3.contoh object destructuring rest parameter
/*
const team = {
    pm : "irham",
    frontEnd1 : "jikri",
    frontEnd2 : "zaki indomie",
    backEnd : "farhan kebab",
    ux : "sigit rendang",
    devOps : "rusdi ngawi"
}
const {pm, ...Myteam} = team;
console.log (Myteam) 
*/