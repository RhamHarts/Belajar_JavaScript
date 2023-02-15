//2.function declaration
//simpel membuat objek
//1.contoh
/*
function buatobjekmhs(nama, umur, kemampuan, jurusan){
    var mhs = {}
    mhs.nama = nama
    mhs.umur = umur
    mhs.kemampuan = kemampuan
    mhs.jurusan = jurusan
    return mhs;
}

var mhs1 = buatobjekmhs("irham","31","minum api","aku cinta kamu");
var mhs2 = buatobjekmhs("peler","21","mugen tsukoyomi","teknik pengencrotan")
*/
//2.contoh 
/*
var obj = {}
obj.halo = function(){
    console.log(this)
    console.log("halo")
}
obj.halo();
*/
//3.contoh
/*
const methodmahasiswa = {
    makan : function (porsi){
        this.energi += porsi
        console.log(`halo ${this.nama},selamat makan!`)
    },
    main : function (jam){
        this.energi -= jam
        console.log(`halo ${this.nama},selamat bermain!`)
        if(mahasiswa.energi < 0 ){
        console.log (`halo ${this.nama},terlalu lelah untuk bermain`)
        }
    },
    tidur : function(jam){
        this.energi += jam * 2
        console.log(`halo ${this.nama},selamat tidur!`) 
    }
}
function mahasiswa (nama,energi){
    let mahasiswa = Object.create(methodmahasiswa)
    mahasiswa.nama = nama
    mahasiswa.energi = energi
    return mahasiswa
}
let irham = mahasiswa ('irham',10)
let coki = mahasiswa ('coki',30)
*/