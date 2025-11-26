export function objectstoSingleObject(arr : "object"){
    let newObj = {};
    for(let i=0;i<arr.length;i++){
        let keys = Object.values(arr[i]);
        // console.log(keys);
        newObj[keys[0]] = keys[1];
    }
    return newObj;
}
console.log(objectstoSingleObject([{key: 0, value: "hello"}, {key: 2, value: "hai"}]));