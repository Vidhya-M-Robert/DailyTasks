// let array = [2,43,54,23,5,6,7,45];
import { testFunction } from "../util.js";
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

function numGreaterTen(num){
    return num = num > 10;
}
console.log(myFilter([10,20,30,40,50], n=>n % 10 === 0 ));

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