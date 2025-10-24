const createPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        reject("Network error");
    },1000);
}).catch((err) => {
    console.error(err);
})