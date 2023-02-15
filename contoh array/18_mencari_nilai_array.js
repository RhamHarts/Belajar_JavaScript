// bisa digunakan hanya untuk mencari satu nilai
//tidak bisa menggunakan join karena tidak menghasilkan array melainkan menghasilkan satu nilai
var angka = [1,2,10,20,8,5,4,3]
var angka2 = angka.find(function(x){
    return x > 5 
})
console.log(angka2)