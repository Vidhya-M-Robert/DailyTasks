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

//   let lastPart = arr.slice(arr.length - k); 
//   let firstPart = arr.slice(0, arr.length - k);
//   return lastPart.concat(firstPart);
// }
// console.log(rotatesArray([1,2,3,4,5], 3));


// function linearSearch(arr,target){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] === target){
//       return i;
//     }
//   }
//   return "Element Not Found";
// }
// console.log(linearSearch([12,8,16,11,24],6));


// function BinarySearch(arr,target){
//   let sorted = [...arr].sort((a,b)=> a-b);
//   let first = 0
//   let last = sorted.length-1;
//   if(first === last){
//     return "Not Found"
//   }
//   // console.log(length);
//   while(first <= last){
//      let middle = Math.floor((first+last)/2);
//   // console.log(middle);
//   for(let i=0;i<sorted.length;i++){
//     if(sorted[middle] === target){
//     return arr.indexOf(target);
//   }
//   if(sorted[middle]<target){
//     first = middle+1
//   }
//   else{
//     last = middle-1;
//   }
//   }
//   }
//   return "Not Found"
// }
// console.log(BinarySearch([2,34,24,72,46,8],22));

// function BubbleSort(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//       if(arr[j+1]<arr[j]){
//         let temp = arr[j+1];
//         arr[j+1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr

// }
// console.log(BubbleSort([24,3,72,59,34]));


// function InsertionSort(arr){
//   for(let i=0;i<arr[i];i++){
//     let sorted = arr[i];
//     if(arr[i]>arr[i+1]){
//       let temp = arr[i+1];
//         arr[i+1] = arr[i];
//         arr[i] = temp;
//     } 
//   };
// }
// InsertionSort([ 7, 12, 9, 11, 3]);

// function selectionSort(arr){
//   for(let i=0;i<arr.length;i++){
//     let min = i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//           min = j;
//         }
//     }
//     if(arr[min] !== arr[i]){
//       let temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp
//     }
//   }
//   return arr
// }
// console.log(selectionSort([34,23,3,21,43,54,7,19]))


// function selectionSort(arr){
//   let newArr = [...arr];
//   let res = [];
//   for(let i=0;i<arr.length;i++){
//     let min = Math.min(...newArr);
//     res.push(min)
//     let index = newArr.indexOf(min);
//     newArr.splice(index,1);
//   }
//   return res
// }
// console.log(selectionSort([ 7, 12, 9, 11, 3]));
// console.log(selectionSort([ 23,42,1,40,12,17]));
// console.log(selectionSort([ 7, 7, 7, 7]));
// console.log(selectionSort([ 57, 32, 19, 11, 3]));

// function InsertionSort(arr){
//   let initialSorted = [];
//   initialSorted.push(arr[0]);
//   for(let i=1;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//       if(arr[i] < arr[j]){
//         initialSorted.push(arr[i])
//       }
//       else{
//         initialSorted.push(arr[j])
//       }
//     }
//   }
// }
// console.log(InsertionSort([ 7, 12, 9, 11, 3]))

function quickSort(arr){
    let newArr = [...arr];
    for(let i=0;i<newArr.length;i++){
    let pivot = newArr[newArr.length-1];
    if(newArr[i] > pivot){
    let temp = pivot;
    pivot = newArr[i];
    newArr[i] = temp;
  }
  }
  return newArr;
}
console.log(quickSort([ 7, 12, 9, 11, 3]));
// function EuclideanAlgo(a,b){
//   while(b!==0){
//     if(a<b){
//     let temp = a;
//     a=b;
//     b=temp;
//   }
//   let rem = a%b;
//   if(rem === 0){
//     return b
//   }
//   else{
//     a = b;
//     b=rem;
//   }
//   }
// }
// console.log(EuclideanAlgo(33,18))

// function SieveEratosthenes(n){
//   let newArr = [];
//   for(let i=2;i<=n*n;i++){
//     newArr.push(i);
//   }
//   for(let k=2;k<newArr.length;k++){
//   for(let j=k;j<newArr.length;j++){
//     if(newArr[j] % k === 0){
//       newArr.splice(j,1);
//     }
//   }
// }
//  return newArr.slice(0,n);
// }
// console.log(SieveEratosthenes(0));


