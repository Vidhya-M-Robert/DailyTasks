function transposeOfMatrix([arr1,arr2]){
    let newArr = [];
    for(let i=0; i<arr1.length;i++){
        // console.log(arr1[i]);
        newArr.push(arr1[i]);
         for(let j=i;j<arr2.length;j++){
            if(j<=i)
            // console.log(arr2[j]);
            newArr.push(arr2[i]);
        }
    }
    console.log(newArr);
}
transposeOfMatrix([[2, 9, 0], 
                    [7, 1, 5]]);