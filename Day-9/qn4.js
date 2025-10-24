const createdPromise = Promise.resolve(5);
createdPromise.then((value) => {
    const val = value * 2;
    return val
}).then((val) =>{
   const added = val + 10;
   return added
}).then((added) => {
    console.log(added);
})