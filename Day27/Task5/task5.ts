export function intersectionofTwo(arr1: number[],arr2: number[]){
   let first = new Set([...arr1]);
   let sec = new Set([...arr2]);
   let intersect =  first.intersection(sec);
   console.log(intersect);
   const array =  [...intersect];
   return array;
}
console.log(intersectionofTwo([1,2,3],[2,3,4]));