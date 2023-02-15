var penumpang = []
var tambahpenumpang = function (namapenumpang, penumpang){
    if ( penumpang.length == 0) {
        penumpang.push(namapenumpang)
      return penumpang;
    }
    else {
    for( var i = 0; i < penumpang.length; i++){
        if(penumpang[i] == undefined){
            penumpang[i] = namapenumpang
            return penumpang;
        }
         else if(penumpang[i] == namapenumpang){
              console.log(namapenumpang + "sudah naik angkot")
              return penumpang;
         }
         else if( i == penumpang.length - 1 ){
         penumpang.push(namapenumpang)
         return penumpang;
         }
     }
     }
 }
 var hapuspenumpang = function (namapenumpang, penumpang){
    if(penumpang.length == 0){
        console.log("angkot kosong")
        return penumpang;
    }
    else {
        for( var i = 0; i < penumpang.length; i++){
            if(penumpang [i] == namapenumpang) {
                penumpang[i] = undefined;
                return penumpang
            }else if (i == penumpang.length - 1) {
                console.log(namapenumpang + " tidak ada di dalam angkot ")
                return penumpang;
            }
    }
}
}