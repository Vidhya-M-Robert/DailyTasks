const createPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data Loaded!")
    },2000)
}).then(msg => {
    console.log(msg);
}
)