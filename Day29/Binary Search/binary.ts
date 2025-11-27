export function BinarySearch(arr: number[],target: number){
  let sorted: number[] = [...arr].sort((a,b)=> a-b);
  let first: number = 0
  let last: number = sorted.length-1;
  if(first === last){
    return "Not Found"
  }
  // console.log(length);
  while(first <= last){
     let middle = Math.floor((first+last)/2);
  // console.log(middle);
  for(let i=0;i<sorted.length;i++){
    if(sorted[middle] === target){
    return arr.indexOf(target);
  }
  if(sorted[middle]<target){
    first = middle+1
  }
  else{
    last = middle-1;
  }
  }
  }
  return "Not Found"
}
console.log(BinarySearch([2,34,24,72,46,8],22));

