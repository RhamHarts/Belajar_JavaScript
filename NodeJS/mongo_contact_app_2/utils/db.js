const mongoose = require ('mongoose')
mongoose.connect ('mongodb://127.0.0.1:27017/irham', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
})

// //Menambah 1 data
// const contact1 = new Contact ({
//     nama : 'Irham Levin',
//     noHP : '08123456789',
//     email : 'mhmirham22@gmail.com',
// })

// //Simpan ke collection
// contact1.save().then((contact) => console.log(contact))