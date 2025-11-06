function twoDArray(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            let arir = arr.indexOf(arr[i])
            console.log(arir);
        }
        console.log(arr[i]);
    }
}
twoDArray([[1,1,1],[1,0,1],[1,1,1]]);