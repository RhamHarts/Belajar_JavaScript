const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

//gunakan ejs
app.set("view engine", "ejs")
app.use(expressLayouts)

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
    res.render("contact", { 
      layout : "layouts/main-layout",
      title : "Halaman Contact",
    })
  })

app.get ('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> category : ${req.query.category}`)
})  

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404 not found</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})