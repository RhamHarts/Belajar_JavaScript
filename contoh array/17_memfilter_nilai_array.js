// mencari nilai pada array dan mengembalikan dengan bentuk array
// bisa digunakan untuk mencari banyak nilai
var angka = [1,2,10,20,8,5,4,3]
var angka2 = angka.filter(function(x){
    return x > 5
})
console.log(angka2.join())