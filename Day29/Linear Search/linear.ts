export function linearSearch(arr: number[],target: number): number | string{
  for(let i=0;i<arr.length;i++){
    if(arr[i] === target){
      return i;
    }
  }
  return "Element Not Found";
}
console.log(linearSearch([12,8,16,11,24],16));