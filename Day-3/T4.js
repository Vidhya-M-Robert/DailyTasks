function IncludeArray(array1,array2,pos){
    let newArr = [];
    for(let i = 0; i<array1.length;i++){
        if(i === pos){
            let pushValue = array1[pos]
            array1[i] = array2;
            let flatten = array1.flat();
            flatten.push(pushValue);
            return flatten;
        }
    }
}
console.log(IncludeArray([1, 2, 3], [4, 5, 6], 2));
