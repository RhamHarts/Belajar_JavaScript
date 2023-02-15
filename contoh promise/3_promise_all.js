const film = new Promise (resolve => {
    setTimeout(() => {
        resolve([{
            judul : "mofos",
            sutradara : "ucok",
            pemeran : "dikri,sured"
        }])
    }, 1000);
});

const cuaca = new Promise (resolve => {
    setTimeout (() => {
        resolve ([ {
            kota : "ciapus",
            temp : 100,
            kondisi : "panas api neraka"
        }])
    }, 500)
});

Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film)
        console.log(cuaca)
    })