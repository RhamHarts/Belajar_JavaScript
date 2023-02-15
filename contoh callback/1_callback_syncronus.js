function tampilkanPesan(callback){
    const nama = prompt ("masukkan nama : ");
    callback(nama)
}

tampilkanPesan(nama => alert (`halo, ${nama}`))