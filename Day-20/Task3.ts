// Not Complete

function SortMixedNested(arr: number[][]):number[][]{
    let result: number[][] = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...SortMixedNested(item));
        }
        else{
            result.push(item);
        }
    }
    result.sort((a: number[],b: number[]) => a-b);
    return result;
}
console.log(SortMixedNested([3, [2, [5, 1]], 4]));