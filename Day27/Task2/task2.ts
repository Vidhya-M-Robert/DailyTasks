export function mostFrequent(arr: number[]): string | number{
    if(arr.length === 0 || !Array.isArray(arr)){
        return "Invalid"
    }
    let frequency= {};
    for(let array of arr){
        frequency[array] = (frequency[array] || 0) + 1;
    }
    console.log(frequency);
    let res = [];
    let values = Object.values(frequency);
    const max = Math.max(...values);
    let keys = Object.keys(frequency);
    for(let key of keys){
        if(frequency[key] === max){
            res.push(key)
        }
    }
    return Number(res);
}
console.log(mostFrequent([1,1,1,1,2,2,3,3,3,4,4]));