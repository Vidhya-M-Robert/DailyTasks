function TimeoutWrapper(fn,ms){
const createPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("rejected");
    },ms)
})
}
console.log(TimeoutWrapper(fn,2000))