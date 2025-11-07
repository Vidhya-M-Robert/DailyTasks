function combinations(n,k){
     let result = [];
    for(let i=1;i<n+1;i++){
        for(let j= i+1; j<n+1; j++){
            let value = [i,j];
            if(value.length === k){
                result.push(value);
            }
        }
    }
    return result;
}
console.log(combinations(4,2));
console.log(combinations(4,3));