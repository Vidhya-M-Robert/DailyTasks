function function1(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("returned function 1")
        },1000);
    })
}
function function2(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("returned function 2")
        },1000);
    })
}
function function3(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("returned function 3")
        },1000)
    })
}
Promise.all([function1(),function2(),function3()]).then((values) => {
    console.log(values);
});