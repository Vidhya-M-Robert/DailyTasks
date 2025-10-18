function FlattenAnArray(arr){
    let flatted = arr.flat(Infinity);
    return flatted;
}
console.log(FlattenAnArray([1, [2, [3, [4]], 5]]))


// function FlattenAnArray(arr){
//     let flatted = arr.toString().split(",").map(Number);
//     return flatted;
// }
// console.log(FlattenAnArray([1, [2, [3, [4]], 5]]));