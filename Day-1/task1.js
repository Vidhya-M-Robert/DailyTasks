// map function syntax => map(callbackfn)  
// callback fn to execute for each element in the array. 
import { testFunction } from "../util.js";
Map
// let array=[2,4,6,8];
function myMap(arr,callback){
    if(!Array.isArray(arr)){
        return "Invalid";
    }
    if(arr.length === 0 || arr === ""){
        return "Invalid";
    }
    if(typeof(callback) !== "function"){
        return "Error in the callback";
    }
    let output = [];
    for(let i = 0; i<arr.length; i++){
    if(typeof(arr[i]) !== "number"){
        return "Invalid";
    }
    output.push(callback(arr[i]));
    }
    return output

}
function addTwo(num) {
    return num ;
}
console.log(myMap([10,20,30,40,50], num=>num % 10 === 0 )); 
const testcases = [
    {
        input: {
            arr: [2,4,6,8],
            callback : n=>n+2
        },
        output: [4,6,8,10]
    },
    {
        input: {
            arr: [],
            callback : n=>n+1
        },
        output: []
    },
    {
        input: {
            arr: [2,4,6,8],
            callback : n
        },
        output: [4,6,8,10]
    },
    {
        input: {
            arr: [2],
            callback : n=>n*2
        },
        output: [4]
    },
     {
        input: {
            arr: {},
            callback : n=>n*2
        },
        output: "Invalid"
    },
     {
        input: {
            arr: ["2","3","6","7"],
            callback : n=>n*2
        },
        output: "Invalid"
    },
     {
        input: {
            arr: [1,3,5,7,9],
            callback : n=>n%2 === 0
        },
        output: []
    },
     {
        input: {
            arr: ["Even"],
            callback : n=>n%2 === 0
        },
        output: "Invalid"
    },
     {
        input: {
            arr: [2,4,6,8,10],
            callback : true
        },
        output: "Error in the callback"
    },
        {
        input: {
            arr: {name: "Harry", age: 20},
            callback : n=>n*2 === 0
        },
        output: "Invalid"
    },
    {
        input: {
            arr: [10,20,30,40,50],
            callback : n=>n % 10 === 0 
        },
        output: [ 1, 2, 3, 4, 5 ]
    },
    {
        input: {
            arr: [5,9,7,2,6],
            callback : '',
        },
        output: "Error in the callback"
    },
    {
        input: {
            arr: ["hello","3","everyone"],
            callback : n=>n*2
        },
        output: "Invalid"
    },
    {
        input: {
            arr: [100,200,300,490,500,780],
            callback : n=>n % 100 === 0
        },
        output: [ 100, 200, 300, 500 ]
    },
    {
        input: {
            arr: null,
            callback : n=>n*2
        },
        output: "Invalid"
    },
]
testcases.forEach((test, index) => {
    const output = myFilter(test.input.arr, test.input.callback);
    const pass = testFunction(output, test.output);
    console.log(`Test ${index + 1}:`, pass ? "Pass" : "Fail");
    console.log("Input:", test.input);
    console.log("Expected:", test.output);
    console.log("Got:", output);
  });

testcases()


//Filter
// let array2=[1,2,3,4,5,6];
function myFilter(arr,callback){
     if(!Array.isArray(arr)){
        return "Invalid";
    }
    if(arr.length === 0 || arr === ""){
        return "Invalid";
    }
    if(typeof(callback) !== "function"){
        return "Error in the callback";
    }
    let res = [];
    for(let i = 0; i < arr.length;i++){
        if(typeof(arr[i]) !== "number"){
            return "Invalid";
        }
        if(callback(arr[i])){
            res.push(arr[i]);
        }
    }
    return res
}

function isEven(num) {
    return num % 2 === 0;
}
// console.log(myFilter(array2, isEven)); 


function testCases(){
const testcases = [
    {
        input: {
            arr: [1,2,3,4,6,8],
            callback : n=>n%2 === 0
        },
        output: [2,4,6,8]
    },
    {
        input: {
            arr: [],
            callback : n=>n%1 === n
        },
        output: "Invalid"
    },
    {
        input: {
            arr: [4,6,8,10],
            callback : n => n
        },
        output: [4,6,8,10]
    },
    {
        input: {
            arr: "",
            callback : n=>n*2
        },
        output: "Invalid"
    },
     {
        input: {
            arr: {},
            callback : n=>n*2
        },
        output: "Invalid"
    },
     {
        input: {
            arr: [2],
            callback : n=>n*2
        },
        output: [2]
    },
     {
        input: {
            arr: [1,3,5,7,9],
            callback : n=>n%2 === 0
        },
        output: []
    },
     {
        input: {
            arr: ["Even"],
            callback : n=>n%2 === 0
        },
        output: "Invalid"
    },
     {
        input: {
            arr: [2,4,6,8,10],
            callback : true
        },
        output: "Error in the callback"
    },
        {
        input: {
            arr: {name: "Harry", age: 20},
            callback : n=>n*2 === 0
        },
        output: "Invalid"
    },
    {
        input: {
            arr: [10,20,30,40,50],
            callback : n=>n % 10 === 0 
        },
        output: [ 10, 20, 30, 40, 50 ]
    },
    {
        input: {
            arr: [5,9,7,2,6],
            callback : '',
        },
        output: "Error in the callback"
    },
    {
        input: {
            arr: ["hello","3","everyone"],
            callback : n=>n*2
        },
        output: "Invalid"
    },
    {
        input: {
            arr: [100,200,300,490,500,780],
            callback : n=>n % 100 === 0
        },
        output: [ 100, 200, 300, 500 ]
    },
    {
        input: {
            arr: null,
            callback : n=>n*2
        },
        output: "Invalid"
    },
]
testcases.forEach((test, index) => {
    const output = myFilter(test.input.arr, test.input.callback);
    const pass = testFunction(output, test.output);
    console.log(`Test ${index + 1}:`, pass ? "Pass" : "Fail");
    console.log("Input:", test.input);
    console.log("Expected:", test.output);
    console.log("Got:", output);
  });
}
testCases();



// Reduce
let arr = [1,2,3,4,5,6,7,8,9,10];
function customReduce(array,callback,initialValue){
    let acc = initialValue;
    for(let i=0;i<array.length;i++){
        acc = callback(acc,array[i]);
    }
    return acc;
}
function findSum(a,b){
    return a+b;
}
console.log(customReduce(arr,findSum,0));