export function removeFalsy(arr:number[]): [] | string{
    let removeFalsyArray: number | string [] = []
    if(!Array.isArray(arr)){
        return "Invalid";
    }
    if(arr.length === 0 || arr === ""){
        return "Invalid";
    }
    for(let i=0;i<arr.length;i++){
        let bool = Boolean(arr[i])
       if(bool === true){
            // console.log(arr[i])
            removeFalsyArray.push(arr[i]);
       }
    }
    return removeFalsyArray
}
console.log(removeFalsy([false,null,NaN]));