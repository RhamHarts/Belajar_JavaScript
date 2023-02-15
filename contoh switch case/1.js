var menu = prompt(`masukkan makanan/minuman : \n(menu : nasi, sate, bubur, coca-cola, kopi, susu)`)

switch(menu){
    case 'nasi':
    case 'sate':
    case 'bubur':
    alert(" anda pesan makanan ")
    break;

    case 'coca-cola':
    case 'kopi':
    case'susu':
    alert("anda pesan minuman")
    break;

    default :
    alert ("anda memesan menu yang tidak ada")
    break;
}