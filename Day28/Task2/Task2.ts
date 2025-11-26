export function rotatesArray(arr:number[],k:number){
  let laast = arr.slice(arr.length - k); 
  let first = arr.slice(0, arr.length - k);
  return laast.concat(first);
}
// console.log(rotatesArray([1,2,3,4,5], 3));
// console.log(rotatesArray([1,2,3,4,5], 2));
// console.log(rotatesArray([1,2,3,4,5], 1));
// console.log(rotatesArray([1,2,3,4,5], 5));
console.log(rotatesArray([1,2,3,4,5], 0));

