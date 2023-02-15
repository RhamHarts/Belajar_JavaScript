const mhs =[
    {
            nama : "irham",
            umur : "20",
            asal_kota : "bogor",
            email : "mhmirham22@gmail.com",
    },
    {
            nama : "coki",
            umur : "34",
            asal_kota : "depok",
            email : "cokinyabu@gmail.com"
    },
    {
            nama : "dikri",
            umur : "21",
            asal_kota : "ciapus",
            email : "dikrigay666@gmail.com"
    }
    ]
    console.log("mulai");
    mhs.forEach(m => {
        for (let i = 0; i < 10000000; i++) {
            let date = new Date();
        }
        console.log(`nama : ${m.nama},umur : ${m.umur} tahun,asal kota : ${m.asal_kota},email : ${m.email}`)
    })
    console.log("selesai")