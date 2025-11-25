export function ifSorted(arr: number[]){
    const asce = [...arr].sort((a,b) => a-b);
    const desc = [...arr].sort((a,b) => b-a);
    if(JSON.stringify(arr) === JSON.stringify(asce)){
        return "Ascending";
    }
    else if(JSON.stringify(arr) === JSON.stringify(desc)){
        return "Descending";
    }
    else{
        return "Not Sorted";
    }
}
console.log(ifSorted([24,12,12,12,12]));