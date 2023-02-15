//DOM SELECTION
//queryselector digunakan jika kita tidak boleh merubah struktur html
// get elementbyId dan get elementsByTagName paling cepat diantara yang lain
/*
// document.getElementById() -> element
const judul = document.getElementById ("judul")
judul.style.color = "white"
judul.style.backgroundColor = "black"
judul.innerHTML = "Jikri Hasemberg"

const p = document.getElementsByTagName("p")

for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = "lightblue";
}
//document.getElementsByTagName()
// -> HTMLCollection
const h1 = document.getElementsByTagName("h1")[0]
h1.style.fontSize = "50px"

//document.getElementsByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName("p1")[0]
p1.innerHTML = "say my dick";
//document.querySelector() 
// -> element
const p4 = document.querySelector ("#b p");
p4.style.color = "green"
p4.style.fontSize = "30px"

const li2 = document.querySelector("section#b ul li:nth-child(2");
li2.style.backgroundColor = "orange"

// document.querySelectorAll()
// -> element
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightblue"
}
// contoh lain
const p4 = document.getElementsByTagName("p");
p4[3].style.backgroundColor = "lightblue";

// atau

const p4 = document.querySelectorAll("p");
p4[3].style.backgroundColor = "lightblue";

const sectionB = document.querySelector("section#b")
const p4 = document.getElementsByTagName("p")[0];
p4.style.backgroundColor = "lightblue";
*/

//inner HTML
//element.innerHTML
/*
const judul = document.getElementById("judul");
judul.innerHTML = "Muhammad Irham"
*/
//style properti css
//element.style.<propertiCSS>
/*
const judul = document.querySelector("#judul");
judul.style.color = "red"
judul.style.backgroundColor = "blue"
*/

//setAttribute
//element.getAttribute() 
//element.removeAttribute()
//element.setAttribute() 
/*
const judul = document.getElementsByTagName("h1")[0]
judul.setAttribute("name","irham")
judul.getAttribute ("id")
a.removeAttribute("href")
*/

//classlist
//element.classlist.add()
// element.classlist.remove()
// element.classlist.toggle()
// element.classlist.item()
// element.classlist.contains()
// element.classlist.replace()
/*
const p2 = document.querySelector(".p2")

p2.classList.add("label")
//add berguna untuk menambahkan

p2.classList.remove("label")
//remove berguna untuk menghapus

p2.classList.toggle("label")
document.body.classlist.toggle("biru-muda")
//toggle berguna untuk apakah element sudah ada nilai jika belum akan mengisi jika belum akan menghapus

p2.classList.item()
//item berguna untuk mencari tahu urutan kelas yang berada di dalem nilai

p2.classList.contains("dua")
//contains berguna untuk menanyakan apakah ada kelas bernama dua jika ada akan bernilai true jika salah akan bernilai false

p2.classList.replace("dua","empat")
//replace untuk mengganti kelas yang ada sebelumnya jika sebelumnya ada dua maka akan digantikan menjadi empat
*/

//manipulasi node
// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

//method baru
// parentNode.append()
// parentNode.prepent()
// childNode.before()
// childNode.after()
// childNode.remove()
// childNode.replaceWith()

/*
//Buat elemen baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("paragraf Baru")

//simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru)

//simpan pBaru di akhir Section A
const sectionA = document.getElementById("a")
sectionA.appendChild(pBaru)


const liBaru = document.createElement("li")
const teksLiBaru = document.createTextNode("item baru")
liBaru.appendChild (teksLiBaru)

const ul = document.querySelector("section#b ul")
const li2 = ul.querySelector("li:nth-child(2)")

//insert before = simpan sebelum elemen yang ada di dalam node
ul.insertBefore(liBaru,li2)

//removechild untuk menghilangkan 
const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

const sectionB = document.getElementById("b")
const p4 = sectionB.querySelector("p")

const h2Baru = document.createElement("h2")
const teksh2Baru = document.createTextNode("Judul baru")

h2Baru.appendChild(teksh2Baru)

sectionB.replaceChild(h2Baru, p4)

pBaru.style.backgroundColor = "red";
liBaru.style.backgroundColor = "red";
h2Baru.style.backgroundColor = "red";
*/

/*
//DOM Events
// cara menggunakan event ada dua
// 1.)Event Handler :
//-inline HTML attribute
//-element method
//2.)addEventListener()
//event handler akan menimpa event yang sebelumnya ada di bawahnya jika ditambahkan event baru
//sedangkan addEvenetListener tidak akan menimpa


//contoh inline HTML attribute di file htmlnya ditambahkan beberapa nilai tersebut
const p3 = document.querySelector(".p3")

function ubahWarna() {
    p3.style.backgroundColor = "lightblue";
}

// contoh penggunaaan event handler dengan element method
function ubahWarnaP2() {
    p2.style.backgroundColor = "lightblue"
}

const p2 = document.querySelector (".p2")
p2.onclick = ubahWarnaP2

//contoh penggunaan dengan addEventListener
const p4 = document.querySelector("section#b p")
p4.addEventListener("click", function () {
    const ul = document.querySelector("section#b ul")
    const liBaru = document.createElement ("li")
    const teksLiBaru = document.createTextNode ("item baru")
    liBaru.appendChild(teksLiBaru)
    ul.appendChild(liBaru)
})
*/

