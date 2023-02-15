const { Result } = require('express-validator/src/validation-result')
const { MongoClient } = require ('mongodb')
const ObjectID = require('mongodb').ObjectID 


const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'irham'

const client = new MongoClient(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})

client.connect((error, client) => {
    if(error) {
        return console.log('koneksi gagal!')
    }

 //pilih database
 const db = client.db(dbName)

 //Menambahkan 1 data ke collection mahasiswa
// db.collection('irham').insertOne(
//     {
//         nama : "farhan kebab",
//         email : "farhankebab@gmail.com"
//     },
//     (error, result) => {
//         if (error) {
//             return console.log('gagal menambahkan data!')
//         }
// console.log(result)       
//     }
// )

//menambahkan lebih dari 1 data

// db.collection('irham').insertMany(
//     [
//     {
//         nama : "abud vape",
//         email : "abudnyabu@gmail.com"
//     },
//     {
//         nama : "biji peler",
//         email : "bijipeler@gmail.com"
//     },
// ],
//     (error, result) => {
//         if (error) {
//             return console.log('gagal menambahkan data!')
//         }
// console.log(result)       
//     }
// )

//menampilkan semua data yang ada di collection
// console.log(
//     db
//     .collection('irham')
//     .find()
//     .toArray((error, result) => {
//         console.log(result)
//     })
// )

//mengubah data berdasarkan id

// const updatePromise = db.collection('irham').updateOne(
// {
//     _id : ObjectID("63d3e64a2a0adb1d04e03114"),
// },
// {
//     $set: {
//         nama : 'jikri bengsin',
//     },
// }
// )

// updatePromise
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

//mengubah data lebih dari 1, berdasarkan kriteria

// db.collection ('irham').updateMany(
//     {
//         nama : "abud vape",
//     },
//     {
//         $set : {
//             nama : "abud dongo",
//         },
//     }
// )

//menghapus 1 data
// db.collection ('irham')
//     .deleteOne({
//         _id:ObjectID("63d3e7699c85290568aa2215"),
//     })
// .then ((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// })

//menghapus lebih dari 1 data
// db.collection ('irham')
//     .deleteMany({
//         nama : "farhan kebab",
//     })
// .then ((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// })

 })
