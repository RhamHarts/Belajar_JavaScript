let mahasiswa1 = {
    nama :'irham',
    energi : 10,
    makan : function(porsi) {
        this.energi = this.energi + porsi;
        console.log (`Halo ${this.nama}, selamat makan`)
    }
}

let mahasiswa2 = {
    nama :'coki',
    energi : 20,
    makan : function(porsi) {
        this.energi = this.energi + porsi;
        console.log (`Halo ${this.nama}, selamat makan`)
    }
}