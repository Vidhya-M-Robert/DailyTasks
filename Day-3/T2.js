function Armstrong(num){
    let count = 0;
    let newArr = [];
    let Originalnumber = num;
    const Stringed = num.toString();
    for(let i =0; i<Stringed.length; i++){
        count++;
    }
    for(let j = 0; j<Stringed.length; j++){
        const cubes = Stringed[j]**count;
        newArr.push(cubes);
    }
    let sum = newArr.reduce((acc,cur)=> acc+ cur,0);
    return sum === Originalnumber ? "true" : "false"
}
console.log(Armstrong(153));