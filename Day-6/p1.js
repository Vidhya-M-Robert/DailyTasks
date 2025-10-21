function integerArray(arr){
    let output = [];
   let evenNum = arr.filter(num => num % 2 === 0);
   let oddNum = arr.filter(num => num % 2 !== 0);
   output.push(evenNum,oddNum);
   console.log(output.flat());
}
integerArray([3,2,4,1,5,8]);