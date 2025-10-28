function EvenOnly(list){
    let output = [];
    for(let i=0; i < list.length; i++){
        if(list[i] % 2 === 0){
            output.push(list[i]); 
        }
    }
    return output
}
console.log(EvenOnly([1, 2, 3, 4, 5, 6]));
console.log(EvenOnly([7, 8, 9, 10, 11, 12]));
console.log(EvenOnly([2,4,6,8,10]));