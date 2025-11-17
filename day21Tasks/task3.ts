function TimeoutWrapper(fn: Function,ms: number){
const createPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("rejected");
    },ms)
})
}
console.log(TimeoutWrapper(fn,2000))