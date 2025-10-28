function sumOfDivisiblebyThree(list){
    let output = [];
    for(let i=0; i < list.length; i++){
        if(list[i] % 3 === 0){
            output.push(list[i]);   
        }
    }
    let sum = output.reduce((curr,acc) => curr+acc,0)
    return sum
}
console.log(sumOfDivisiblebyThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumOfDivisiblebyThree([10,20,30,40,50]));
console.log(sumOfDivisiblebyThree([15, 25, 35, 45, 55]));
