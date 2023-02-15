const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { body, validationResult, check } = require('express-validator')
const { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts} = require('./utils/contacts')
const session = require ('express-session')
const cookieParser = require('cookie-parser')
const flash = require ('connect-flash')

const app = express()
const port = 3000

//gunakan ejs
app.set("view engine", "ejs")

//third party middleware
app.use(expressLayouts)

//Built in middleware
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))


//konfigurasi flash
app.use(cookieParser('secret'))
app.use (
  session({
    cookie: { maxAge : 6000},
    secret : 'secret',
    resave : true,
    saveUninitialized : true,
  })
)
app.use(flash())


app.get ("/", (req, res) => {
const mahasiswa = [
  {
    nama : "irham levin",
    email : "mhmirham22@gmail.com"
  },
  {
    nama : "dikri bensin",
    email : "dikribensin@gmail.com"
  },
  {
    nama : "vargas uduk",
    email : "vargasuduk@gmail.com"
  },
]

res.render ("index", { 
  nama : "irham levin",
  title : " ini halaman home",
  mahasiswa,
  layout : "layouts/main-layout",
})
})

app.get('/about', (req, res) => {
    res.render("about", { 
      layout : "layouts/main-layout",
      title : "Halaman About",
    }) 
  })

app.get('/contact', (req, res) => {
  const contacts = loadContact()
    res.render("contact", { 
      layout : "layouts/main-layout",
      title : "Halaman Contact",
      contacts,
      msg : req.flash('msg'),
    })
  })

//halaman form tambah data contact
app.get('/contact/add', (req, res) => {
  res.render("add-contact", {
    title : "Form Tambah Data Contact",
    layout : "layouts/main-layout"
  })
})

//proses data contact
app.post('/contact', 
[
  body('nama').custom((value) => {
    const duplikat = cekDuplikat(value)
    if(duplikat) {
      throw new Error ("Nama contact sudah digunakan")
    }
    return true
  }),
  check ("email", "Email tidak valid!").isEmail(),
  check ("noHP", "Nomor Handphone tidak valid!").isMobilePhone("id-ID")
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
   res.render ('add-contact', {
    title : 'Form Tambah Data Contact',
    layout : 'layouts/main-layout',
    errors : errors.array(),
   })
  }else {
  addContact(req.body)

  //kirimkan flash message
  req.flash('msg', 'Data contact berhasil ditambahkan!')
  res.redirect('/contact')
  }
});


//proses delete contact
app.get('/contact/delete/:nama', (req, res) => {
  const contact = findContact(req.params.nama)

  //jika contact tidak ada
  if (!contact) {
    res.status(404)
    res.send('<h1> 404 not found </h1>')
  } else {
    deleteContact(req.params.nama)
    req.flash('msg', 'Data contact berhasil dihapus !')
  res.redirect('/contact')
  }
})

//halaman form ubah data contact
app.get('/contact/edit/:nama', (req, res) => {
  const contact = findContact(req.params.nama)
  
  res.render("edit-contact", {
    title : "Form Ubah Data Contact",
    layout : "layouts/main-layout",
    contact,
  })
})


//proses ubah data
app.post(
  '/contact/update', 
[
  body('nama').custom((value, {req}) => {
    const duplikat = cekDuplikat(value)
    if(value !== req.body.oldnama && duplikat) {
      throw new Error ("Nama contact sudah digunakan")
    }
    return true
  }),
  check ("email", "Email tidak valid!").isEmail(),
  check ("noHP", "Nomor Handphone tidak valid!").isMobilePhone("id-ID")
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
   res.render ('edit-contact', {
    title : 'Form Ubah Data Contact',
    layout : 'layouts/main-layout',
    errors : errors.array(),
    contact : req.body,
   })
  }else {
  updateContacts(req.body)
  req.flash('msg', 'Data contact berhasil diubah!')
  res.redirect('/contact')
  }
});




//halaman detail contact
app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama)
    res.render("detail", { 
      title : "Halaman Detail Contact",
      layout : "layouts/main-layout", 
      contact,
    })
   })  

app.use((req, res) => {
    res.status(404)
    res.send('<h1>404 not found</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})