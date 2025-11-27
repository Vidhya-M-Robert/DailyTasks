export function selectionSort(arr: number[]){
  if(arr.length === 0){
    return "Invalid"
  }
  let newArr = [...arr];
  let res = [];
  for(let i=0;i<arr.length;i++){
    let min = Math.min(...newArr);
    res.push(min)
    let index = newArr.indexOf(min);
    newArr.splice(index,1);
  }
  return res
}
console.log(selectionSort([ 7, 12, 9, 11, 3]));
