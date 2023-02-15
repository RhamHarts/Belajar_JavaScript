var jumlah_angkot = 10
var Angkot_yang_beroperasi = 8
var no_angkot = 1

while (no_angkot <= Angkot_yang_beroperasi){
    console.log(" Angkot No " + no_angkot + " beroperasi dengan baik ")
    no_angkot++
}

for( var no_angkot = Angkot_yang_beroperasi + 1; no_angkot <= jumlah_angkot; no_angkot++) {
    console.log(" Angkot no " + no_angkot  +" sedang tidak beroperasi ");
}