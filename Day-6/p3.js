function missingNumber(arr){
    for(let i=0; i < arr.length-1;i++){
        if(arr[i]+1 !== arr[i+1]){
            console.log(arr[i]+1);
        }
    }
}
missingNumber([1, 2, 3, 5, 6]);