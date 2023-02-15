// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.

var angka = [1,2,3,4,5,6,7,8]
var angka2 = angka.map(function(e){
    return e * 2
})
console.log(angka2.join())