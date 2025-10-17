function NumberofArguments(...restPara){
    let sum = 0;
    for(let i=0; i<restPara.length;i++){
        sum = sum + restPara[i];
    }
    return sum
}
console.log(NumberofArguments(1, 2, 3, 4));
console.log(NumberofArguments(1, 2));