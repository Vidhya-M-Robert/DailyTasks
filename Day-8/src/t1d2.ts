function prime(num : number){
    if(num <= 1){
        return false;
    }
    else{
        for(let i=2; i <=num-1; i++){
            if(num % i === 0){
                return false;
            }
            else{
                return true;
            }
        }
    }
}
console.log(prime(7));
console.log(prime(10));
console.log(prime(29));