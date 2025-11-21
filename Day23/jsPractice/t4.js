function intersectionofArrays(arr1,arr2){
    let res = [];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                res.push(arr1[i]);
                arr1.splice(i,1);
            }
        }
    }
    return res
}
console.log(intersectionofArrays([1,2,2,4,2,3,4], [2,4,3,5,4,3]));
console.log(intersectionofArrays([1,2,3], [2,3,4]))