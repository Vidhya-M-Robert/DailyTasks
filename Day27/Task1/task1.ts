export function findDuplicate(arr: number[]): number[] | string{
    let newArr: number[] = [];
    if(!Array.isArray(arr)){
        return "Invalid"
    }
    if(arr.length === 0){
        return "Invalid"
    }
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]!== "number"){
            return "Invalid"
        }
    }
    for(let i=0;i<arr.length;i++){
            if(arr[i] !== arr[i+1]){
                newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(findDuplicate([1,2,2,3,3,3,4]));