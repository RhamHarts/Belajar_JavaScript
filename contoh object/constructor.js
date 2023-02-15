//3.constructor
//1.contoh
/*
function mahasiswa(nama, umur, kemampuan, jurusan){
    this.nama = nama
    this.umur = umur
    this.kemampuan = kemampuan
    this.jurusan = jurusan
}
var mhs = new mahasiswa ("fajar", "15","nangis","sastra cinta")
*/
//2.contoh
 /*
function Halo(){
    console.log(this)
    console.log("halo")
}
var obj1 = new Halo();
var obj2 = new Halo();
*/

//3.contoh
/*
function mahasiswa (nama,energi){
    this.nama = nama
    this.energi = energi

    this.makan = function (porsi){
        this.energi += porsi
        console.log(`halo ${this.nama},selamat makan!`)
    }
}
let irham = new mahasiswa ('irham',10)
let coki =  new mahasiswa ('coki',30)
*/
 //4.contoh
 //constructor versi class
 /*
 class mahasiswa {
    constructor (nama,energi){
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi){
        this.energi += porsi
        return `Halo ${this.nama},selamat makan!`
    }
    main(jam){
        this.energi -= jam
        return `Halo ${this.nama},selamat bermain!`
        if(mahasiswa.energi < jam){
            console.log(`${this.name} terlalu lelah untuk bermain`)
        }else{
            return jam;
        }
    }
    tidur(jam){
        this.energi += jam * 2
        return `Halo ${this.nama},selamat tidur!`
    }
}
let irham = new mahasiswa ('irham',10)
let coki = new mahasiswa ('coki',30)
*/