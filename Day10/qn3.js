function customMap(array,callback){
    let result = [];
    for(let i=0;i<array.length;i++){
        result.push(callback(array[i]))
    }
    return result
}
console.log(customMap([1,2,3,4,5,6],n => n*2));

function customFilter(array,callback){
    let result = [];
    for(let i=0; i<array.length;i++){
        if(callback(array[i])){
            result.push(array[i])
        }
    }
    return result
}
console.log(customFilter([1,2,3,4,5,6,7],n=> n%2 !== 0))

let arr = [1,2,3,4,5,6,7,8,9,10]
function customReduce(array,callback,initialValue=array[0]){
    let acc = initialValue;
    for(let i=1;i<array.length;i++){
        acc = callback(acc,array[i]);
    }
    return acc;
}
function findSum(a,b){
    return a+b;
}
console.log(customReduce(arr,findSum));