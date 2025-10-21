let array = [2,43,54,23,5,6,7,45];
function myFilter(arr,callback){
    let res = [];
    for(let i = 0; i < arr.length;i++){
        if(callback(arr[i])){
            res.push(arr[i]);
        }
    }
    return res
}

function numGreaterTen(num){
    return num = num > 10;
}
console.log(myFilter(array,numGreaterTen));