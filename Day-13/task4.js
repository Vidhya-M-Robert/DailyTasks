function subArray(arr,size){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
         let sliced = arr.slice(0,size);
         newArr.push(sliced);
        arr = arr.slice(size);
    }
    return newArr;  
 }
console.log(subArray([ 1, 9, 6 ,3, 2 ],3));
console.log(subArray([1,2,3,4,5],1));




