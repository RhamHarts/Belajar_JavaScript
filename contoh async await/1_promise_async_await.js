function cobaPromise(){
    return new Promise (resolve => {
        setTimeout(() => {
            resolve("selesai")
        },5000 )
    })
}

async function cobaAsync() {
    const coba = await cobaPromise ()
    console.log(coba)
}

cobaAsync();