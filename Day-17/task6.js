function largestPrimeFactor(num){
    let arr = [];
    let primeFact = [];
    for(let i=0;i<num;i++){
        if(num%i === 0){
            arr.push(i);
        }
    }
    for(let i=0; i < arr.length; i++){
    let prime = true;
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