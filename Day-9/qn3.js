const createPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success")
    },2000)
}).then(msg => {
    console.log(msg);
}).finally(()=>{
    console.log("Promise Completed");
})