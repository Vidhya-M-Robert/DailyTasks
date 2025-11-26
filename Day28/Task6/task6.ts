export function commonKeys(obj1:{key: string, value:string},obj2:{key: string, value:string}){
    let newArr = [];
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    for(let i=0;i<keys1.length;i++){
        for(let j=0;j<keys2.length;j++){
            if(keys1[i] === keys2[j]){
                newArr.push(keys1[i]);
            }
        }
    }
    return newArr;
}
console.log(commonKeys({name: "Brad", age: "25"}, {name: "Titan", place: "mars"}));
