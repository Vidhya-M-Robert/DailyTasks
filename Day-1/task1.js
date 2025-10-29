// map function syntax => map(callbackfn)  
// callback fn to execute for each element in the array. 

//Map
let array=[2,4,6,8];
function myMap(arr,callback){
    if(typeof(arr) !== "array"){
        return "Invalid"
    }
    else{
    let output = [];
    for(let i = 0; i<arr.length; i++){
    output.push(callback(arr[i]));
    }
    return output
}
}
function addTwo(num) {
    return num ;
}
console.log(myMap(arr, callback)); 

const testCases = [
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
            arr: [2],
            callback : n=>n*2
        },
        output: [4]
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
            arr: [2],
            callback : n=>n*2
        },
        output: [4]
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
            arr: [2],
            callback : n=>n*2
        },
        output: [4]
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
            arr: [2],
            callback : n=>n*2
        },
        output: [4]
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
            arr: [2],
            callback : n=>n*2
        },
        output: [4]
    },
     {
        input: {
            arr: [2],
            callback : n=>n*2
        },
        output: [4]
    },
]


//Filter
let array2=[1,2,3,4,5,6];
function myFilter(arr,callback){
    let output = [];
    for(let i = 0; i<arr.length; i++){
    output.push(callback(arr[i]));
    }
    return output
}

function isEven(num) {
    return num % 2 === 0;
}
console.log(myFilter(array2, isEven)); 

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