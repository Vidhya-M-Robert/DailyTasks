function frequencySort(arr: number[]){
    let count: = {};
    for(let num of arr){
        count[num] = (count[num] || 0)+1
        }
        console.log(count);
    }
console.log(frequencySort([4,5,6,5,4,3]));