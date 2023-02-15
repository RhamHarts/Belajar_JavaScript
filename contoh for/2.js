var jumlah_angkot = 10
var Angkot_yang_beroperasi = 6
var no_angkot = 1

for (var no_angkot = 1; no_angkot <= jumlah_angkot; no_angkot++){
    if(no_angkot <= Angkot_yang_beroperasi){
        console.log(" angkot no " + no_angkot + " beroperasi dengan baik ")     
    }else if(no_angkot === 8){
       console.log (" angkot no " + no_angkot + " sedang lembur ")
     }else
    console.log(" angkot no " + no_angkot + " sedang rusak ")
}