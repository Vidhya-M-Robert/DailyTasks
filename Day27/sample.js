// function findDuplicate(arr){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//             if(arr[i] !== arr[i+1]){
//                 newArr.push(arr[i]);
//         }
//     }
//     return newArr
// }
// console.log(findDuplicate([1,2,2,3,3,3,4]));
// function mostFrequent(arr){
//     let frequency= {};
//     for(let array of arr){
//         frequency[array] = (frequency[array] || 0) + 1;
//     }
//     let values = Object.values(frequency);
//     const max = Math.max(...values);
//     let res = [];
//     for(let num in frequency){
//         if(frequency[num] === max){
//             res.push(Number(num));
//         }
//     }
//     return Number(res);

// }
// console.log(mostFrequent([1,2,2,3,3,3,4]))

// function ifArmstrong(num){
//      if(!Number.isInteger(num) || num < 0)
//     {
//         return "Invalid Entry"
//     }
//     let count = 0;
//     let newArr = [];
//     let original = num;
//     const stringg = num.toString();
//     for(let i =0; i<stringg.length; i++){
//         count++;
//     }
//     for(let j = 0; j<stringg.length; j++){
//         const cubes = stringg[j]**count;
//         newArr.push(cubes);
//     }
//     let sum = newArr.reduce((acc,cur)=> acc+ cur,0);
//     return sum === original ;
// }
// console.log(ifArmstrong(153))

// function removeFalsy(arr){
//     let removeFalsyArray = []
//     if(!Array.isArray(arr)){
//         return "Invalid";
//     }
//     if(arr.length === 0 || arr === ""){
//         return "Invalid";
//     }
//     for(let i=0;i<arr.length;i++){
//         let bool = Boolean(arr[i])
//        if(bool === true){
//             // console.log(arr[i])
//             removeFalsyArray.push(arr[i]);
//        }
//     }
//     return removeFalsyArray
// }

// function ifSorted(arr){
//     const asce = [...arr].sort((a,b) => a-b);
//     const desc = [...arr].sort((a,b) => b-a);
//     if(JSON.stringify(arr) === JSON.stringify(asce)){
//         console.log("ascending");
//     }
//     else if(JSON.stringify(arr) === JSON.stringify(desc)){
//         console.log("descending");
//     }
//     else{
//         console.log("Not Sorted");
//     }
// }
// ifSorted([11,2,14,5,6]);

// function reverseVowels(str){
//    let vowels = [];
//    for(let i=0;i<str.length;i++){
//     if(str[i].includes("A") || str[i].includes("E") || str[i].includes("I") || str[i].includes("O") || str[i].includes("U")|| str[i].includes("a")|| str[i].includes("e")|| str[i].includes("i")|| str[i].includes("o")|| str[i].includes("u")){
//         vowels.push(str[i]);
//     }
//    }
// //    console.log(vowels);
//    const count = vowels.length;
//    return count;
// }
// console.log(reverseVowels("IceCreAm"));

// function intersectionofTwo(arr1,arr2){
//    let first = new Set([...arr1]);
//    let sec = new Set([...arr2]);
//    let inter =  first.intersection(sec);
//    return [...inter];
   
// }
// console.log(intersectionofTwo([1,2,3], [2,3,4]));


// export function ObjtoQuery(obj){
//    let keys = Object.keys(obj);
//    let values = Object.values(obj);
//    let result = "";
//    for(let i=0;i<keys.length;i++){
//       result += `${keys[i]} = ${values[i]}&`
//    }
//    const sliced = result.slice(0,-1);
//    return sliced
// }
// console.log(ObjtoQuery({name:"John", age:30}));


// function snakeTocamel(str){
//    let newArr = [];
//    for(let i=0;i<str.length;i++){
//       if(str[i] === "_"){
//          str[i+1] = str[i+1].toUpperCase();
//       }
//       newArr.push(str[i]);
//    }
//    return newArr
// }
// console.log(snakeTocamel("hello_world_from_js"));