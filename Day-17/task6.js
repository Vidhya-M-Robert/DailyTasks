// function largestPrimeFactor(num){
//     let arr = [];
//     let primeFact = [];
//     for(let i=0;i<num;i++){
//         if(num%i === 0){
//             arr.push(i);
//         }
//     }
//     for(let i=0; i < arr.length; i++){
//     let prime = true;
//         for(let j = 2; j <= Math.sqrt(arr[i]); j++){
//             if(arr[i] % j === 0){
//                 prime = false
//                 break;
//         }    
//     }
//      if(prime){
//         primeFact.push(arr[i])
//     }
//     }
//      console.log(primeFact)
//      let maxPrimeFactor = Math.max(...primeFact);
//      return maxPrimeFactor;
// }
// console.log(largestPrimeFactor(13195));
// console.log(largestPrimeFactor(600851475143));


function largestPrimeFactor(num){
    let arr = [];
    let primeFact = [];
    for(let i=1;i<Math.sqrt(num);i++){           //i=0 => num%0 = NaN
        if(num%i === 0){
            arr.push(i);
        if (i !== num / i) {
                arr.push(num / i);
            }
         }
    }
    for(let i=0; i < arr.length; i++){
    let prime = true;
    if (arr[i] <= 1) continue;
        for(let j = 2; j <= Math.sqrt(arr[i]); j++){
            if(arr[i] % j === 0){
                prime = false
                break;
        }    
    }
     if(prime){
        primeFact.push(arr[i])
    }
    }
     console.log(primeFact)
     let maxPrimeFactor = Math.max(...primeFact);
     return maxPrimeFactor;
}
console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));