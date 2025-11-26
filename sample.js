// function changeNumbers(str){
//     for(let i=0;i<str.length;i++){
//         if(typeof str[i] === "number"){
//             console.log(str[i]);
//         } 
//     }
// }
// console.log(changeNumbers("Room 45 on floor 3"))


// function CalculateSum(arr){
//    let sum =0;
//    for(let i=0;i<arr.length;i++){
//      let count =0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[j] === arr[i]){
//             count++
//         }
//     }
//     if(count === 1){
//         sum = sum+arr[i];
//     }
//    }
//    return sum;
// }
// console.log(CalculateSum([1,2,3,2,1]))

// function celsiustoFahrenheit(celsius){
//     let Fahren = celsius;
//     let output = (9/5) *Fahren + 32;
//     console.log(output);
// }
// celsiustoFahrenheit(40)


// function objectstoSingleObject(arr){
//     let newObj = {};
//     for(let i=0;i<arr.length;i++){
//         // console.log(arr[i]);
//         let keys = Object.values(arr[i]);
//         console.log(keys);
//         newObj[keys[0]] = keys[1];
//     }
//     return newObj;
// }
// console.log(objectstoSingleObject([{key: "a", value: 1}, {key: "b", value: 2}]))


// let value = Object.values(arr[i])
//         Obj[value[0]]= value[1]


// function commonKeys(obj1,obj2){
//     let newArr = [];
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     for(let i=0;i<keys1.length;i++){
//         for(let j=0;j<keys2.length;j++){
//             if(keys1[i] === keys2[j]){
//                 newArr.push(keys1[i]);
//             }
//         }
//     }
//     return newArr;
// }
// console.log(commonKeys({name: "Brad", age: "25"}, {name: "Titan", place: "mars"}));


// function rotatesArray(arr,k){
//    let newArr = [];
//    let string = arr.toString();
//    let slices = string.slice(-k-1);
//    let remaining = string.slice(0,-k-1);
//    let concat = slices +"," +remaining;
//     newArr.push(concat);
//     return concat;
// }
// console.log(rotatesArray([1,2,3,4,5],2));


// function rotatesArray(arr,k){
//    let newArr = [];
//    let string = arr.toString();
//     newArr = string.slice(-k);
//    newArr = string.slice(arr.length,-k);
//    return newArr;
// }
// console.log(rotatesArray([1,2,3,4,5],2));