const yargs = require('yargs')
const contacts  = require('./contacts')

yargs.command({
    command : 'add',
    describe : 'Menambahkan Contact baru',
    builder : {
        nama : {
            describe : 'Nama Lengkap',
            demanOption : true,
            type : 'string', 
        },
        Email : {
            describe : 'Email',
            demanOption : false,
            type : 'string',
        },
        noHP : {
            describe : 'Nomor Handphone',
            demanOption : true,
            type : 'string',
        },
    },
    handler(argv) {
    contacts.simpanContact(argv.nama, argv.email, argv.noHP)
    },
})
 .demandCommand()

 // menampilkan daftar semua nama dan noHP contact
 yargs.command({
    command : 'list',
    describe : 'menampilkan daftar semua nama dan noHP contact',
    handler() {
        contacts.listContact()
    },
 })

//menampilkan detail sebuah contact
yargs.command({
    command : 'detail',
    describe : 'menampilkan detail sebuah contact berdasarkan nama',
    builder : {
        nama : {
            describe: 'Nama lengkap',
            demanOption : true,
            type : "string",
        },
    },
    handler (argv) {
        contacts.detailContact(argv.nama)
    },
 })
//menghapus contact berdasarkan nama
yargs.command({
    command : 'delete',
    describe : 'menghapus sebuah contact berdasarkan nama',
    builder : {
        nama : {
            describe: 'Nama lengkap',
            demanOption : true,
            type : "string",
        },
    },
    handler (argv) {
        contacts.deleteContact(argv.nama)
    },
 })


yargs.parse()