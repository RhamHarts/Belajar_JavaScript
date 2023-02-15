const minimal = (a,b) => {
    if (b > a){
        return a
    }
    else if (a > b) {
        return b 
    }
    else if (a = b) {
        return a 
    }
}
console.log (minimal(1, 4))
console.log (minimal(3, 2))
console.log (minimal(3, 3))