function Resolve(){
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Login successfull");
        },3000);
    })
}
async function asyncc(){
    const result = await Resolve();
    console.log(result);
}
asyncc();