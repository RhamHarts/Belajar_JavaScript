var tanya = true
while(tanya === true){
    //menangkap pilihan player
    var p = prompt("silahkan masukkan pilihan anda : gunting, batu, kertas")

    //menangkap pilihan computer
    //nembangkitkan bilangan random
    var comp = Math.random()

    if (comp < 0.34){
    comp = 'gunting';
    }else if (comp >= 0.34 && comp < 0.64){
        comp = 'kertas';
    }else{
        comp = 'batu';
    }

    var hasil = '';
    //menentukan rules
    if (p == comp){
    hasil = 'SERI'
    }else if (p == 'gunting'){
//        if(comp == kertas){ 
//            hasil = 'MENANG'
//        }else if (comp == batu){
//            hasil = 'KALAH'
        hasil = (comp == 'kertas') ? 'MENANG' : 'KALAH'
    }else if (p == 'kertas'){
        hasil = (comp == 'gunting') ? 'KALAH' : 'MENANG'
    }else if (p == 'batu'){
        hasil = (comp == 'kertas') ? 'KALAH' : 'MENANG'
    }else {
        hasil = 'Kamu memasukkan pilihan yang tidak ada'
    }
    //tampilkan hasilnya
    alert (" kamu memilih : " + p + " dan komputer memilih : " + comp + '\n maka hasilnya : kamu ' + hasil)
    tanya = confirm ("lagi ???")
}
 alert ("terima kasih sudah bermain")
