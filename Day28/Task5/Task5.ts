export function CalculateSum(arr: number[]){
   let sum: number =0;
   for(let i=0;i<arr.length;i++){
     let count: number =0;
    for(let j=0;j<arr.length;j++){
        if(arr[j] === arr[i]){
            count++
        }
    }
    if(count === 1){
        sum = sum+arr[i];
    }
   }
   return sum;
}
console.log(CalculateSum([1,1,1,1,1]));
