function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir
    this.trayek = trayek
    this.penumpang = penumpang
    this.kas = kas

    this.penumpangnaik = function(namapenumpang){
        this.penumpang.push(namapenumpang)
        return this.penumpang
    }

    this.penumpangturun = function(namapenumpang, bayar){
        if(this.penumpang.length === 0){
            alert("angkot masih kosong")
            return false;
        }

        for( var i = 0; i < this.penumpang.length; i++){
            if (this.penumpang[i] == namapenumpang){
                this.penumpang[i] = undefined
                this.kas += bayar
                return this.penumpang
            }
        }
    }
}
var angkot1 = new Angkot ("irham", ["ciapus","empang"], [],0)
var angkot2 = new Angkot("baruna",["cibereum","tamansari"],[],0)