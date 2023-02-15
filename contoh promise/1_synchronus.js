let ditepati = true;
const janji1 = new Promise ((resolve, reject) => {
    if (ditepati) {
        resolve ("janji telah ditepati")
    }else {
        reject("ingkar janji")
    }
})

janji1
    .then (response => console.log ("ok! : " + response))
    .catch (response => console.log ("not ok! :"+response));