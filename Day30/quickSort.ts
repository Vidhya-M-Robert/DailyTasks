function quickSort(arr : number[]){
    let newArr = [...arr];
    for(let i=0;i<newArr.length;i++){
    let pivot = newArr[newArr.length-1];
    if(newArr[i] > pivot){
    let temp = pivot;
    pivot = newArr[i];
    newArr[i] = temp;
  }
  }
  return newArr;
}
console.log(quickSort([ 7, 12, 9, 11, 3]));
